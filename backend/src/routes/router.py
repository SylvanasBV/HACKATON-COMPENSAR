from flask import Blueprint

from services.router import create_route_service, get_routers_service, get_route_service, update_route_service, delete_route_service


router = Blueprint('Router', __name__) #metodo para hacer el registro de las rutas

@router.route('/', methods=['GET']) #metodo para obtener todas las rutas
def get_routers():
    return get_routers_service()

@router.route('/<id>', methods=['GET']) #metodo para obtener el to do por ID
def get_router(id):
    return get_route_service(id)

@router.route('/', methods=['POST']) #metodo para crear una ruta
def create_router():
    return create_route_service()

@router.route('/<id>', methods=['PUT']) #metodo para actualizar un ruta
def update_router(id):
    return update_route_service(id)

@router.route('/<id>', methods=['DELETE']) #metodo para eliminar una ruta
def delete_router(id):
    return delete_route_service(id)
