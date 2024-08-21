from flask import request, Response
from config.mongodb import mongo
from bson import json_util,ObjectId

def create_route_service():#crear un objeto
    data = request.get_json()
    title = data.get('title', None)
    description = data.get('description', None)
    if title:
        response = mongo.db.routes.insert_one({ #insertar elemento
            'title': title,
            'description': description,
            'done': False
        })#respuesta me va a dar un id de lo que se creo
        result = {
            'id': str(response.inserted_id),
            'title': title,
            'description': description,
            'done': False
        }
        return result
    else:
        return 'Invalid payload', 400

def get_routers_service(): #obtener todos los objetos
    data = mongo.db.routes.find()#entran como datos VSON 
    result = json_util.dumps(data)
    return Response(result, mimetype='application/json')

def get_route_service(id):#obtener un objeto
    data = mongo.db.routes.find_one({'_id':ObjectId(id)})#toma el id de la ruta
    result = json_util.dumps(data)
    return Response(result, mimetype='application/json')

def update_route_service(id):#obtener un objeto
    data = request.get_json() #toma el id de la ruta
    if len(data) == 0:
        return 'invalid payload', 400
    response = mongo.db.routes.update_one({'_id':ObjectId(id)}, {'$set':data})#toma el id de la ruta
    if response.modified_count >= 1:
        return 'route update succesfull', 200
    else:
        return 'Todo not found', 404

def delete_route_service(id):
    response = mongo.db.routes.delete_one({'_id':ObjectId(id)})#elimina el id de la ruta
    if response.deleted_count >= 1: 
        return 'route delete succesfull', 200
    else:
        return 'route not found', 404