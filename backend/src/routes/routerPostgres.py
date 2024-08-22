from flask import Blueprint, jsonify

routerPostgres = Blueprint('RouterPostgres',__name__)
##Postgress
@routerPostgres.route('/', methods=['GET']) #metodo para obtener todas las rutas
def get_routers():
    return jsonify({'message':'Uausudnbjsabdj'})