from flask import Blueprint, jsonify, request
import uuid #ayuda a generar ids codigos unicos basado en las fechas y horas actuales

#Entitis
from services.entities.Movie import Movie

#models
from services.routePostgres import routePostgres


routerPostgres = Blueprint('RouterPostgres',__name__)
##Postgress
@routerPostgres.route('/', methods=['GET']) #metodo para obtener todas las rutas
def get_routers():
    try:
        movies= routePostgres.get_models()
        return jsonify(movies)
    except Exception as ex:
        return jsonify({'message':'Este elemento no es seresializable'})
@routerPostgres.route('/<id>', methods=['GET'])
def get_router(id):
    try:
        movie=routePostgres.get_model(id)
        if movie != None:
            return jsonify(movie)
        else:
            return jsonify({}), 404 #codigo de respuesta HTTP
    except Exception as ex:
        return jsonify({'message':str(ex)}),500

@routerPostgres.route('/add', methods=['POST'])
def add_router():
    try:
        #falta la validacion de los datos
        title=request.json['title']
        duration=int(request.json['duration'])
        released= request.json['released']
        movie=Movie(str(uuid.uuid4()),title,duration,released)
        #Manipular el error
        affected_rows = routePostgres.add_model(movie)
        if affected_rows == 1:
            return jsonify(movie.id)
        else:
            return jsonify({'message':"Error on insert"}), 500 #codigo de respuesta HTTP

    except Exception as ex:
        return jsonify({'message':str(ex)}),500
    
@routerPostgres.route('/update/<id>', methods=['PUT'])
def update_router(id):
    try:
        #falta la validacion de los datos
        title=request.json['title']
        duration=int(request.json['duration'])
        released= request.json['released']
        movie=Movie(id,title,duration,released)
        #Manipular el error
        affected_rows = routePostgres.update_model(movie)
        if affected_rows == 1:
            return jsonify(movie.id)
        else:
            return jsonify({'message':"No update"}), 404 #codigo de respuesta HTTP

    except Exception as ex:
        return jsonify({'message':str(ex)}),500

@routerPostgres.route('/delete/<id>', methods=['DELETE'])
def delete_router(id):
    try:
        movie=Movie(id)

        affected_rows=routePostgres.delete_model(movie)

        if affected_rows == 1:
            return jsonify(movie.id)
        else:
            return jsonify({'message':"No se borro ningun registro"}), 404 #codigo de respuesta HTTP

    except Exception as ex:
        return jsonify({'message':str(ex)}),500