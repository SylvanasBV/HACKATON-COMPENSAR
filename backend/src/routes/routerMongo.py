from flask import Blueprint


from services.routeMongo import create_route_service, get_routers_service, get_route_service, update_route_service, delete_route_service


routerMongo = Blueprint('RouterMongo', __name__) #metodo para hacer el registro de las rutas

##Mongo DB

@routerMongo.route('/', methods=['GET']) #metodo para obtener todas las rutas
def get_routers():
    return get_routers_service()

@routerMongo.route('/<id>', methods=['GET']) #metodo para obtener el to do por ID
def get_router(id):
    return get_route_service(id)

@routerMongo.route('/', methods=['POST']) #metodo para crear una ruta
def create_router():
    return create_route_service()

@routerMongo.route('/<id>', methods=['PUT']) #metodo para actualizar un ruta
def update_router(id):
    return update_route_service(id)

@routerMongo.route('/<id>', methods=['DELETE']) #metodo para eliminar una ruta
def delete_router(id):
    return delete_route_service(id)