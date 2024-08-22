from flask import Flask, render_template
from dotenv import load_dotenv
import os
from routes.routerMongo import routerMongo 
from routes.routerPostgres import routerPostgres 
from config.mongodb import mongo
from config.postgres import postgres
config = load_dotenv()#carga variables de entorno

# me trae todas las rutas que estube creando
app = Flask(__name__) #Constructor: __name__ =punto de inicio para usar este archivo para lanzar mi aplicacion

app.config['MONGO_URI'] = os.getenv('MONGO_URI')
mongo.init_app(app)

@app.route('/') #Ruta
def home():#Definir fubncion para verificar funcionamiento del servidor
    return render_template('index.html') #linquiamos la pagina por donde ingresaremos la informacion

#Blueprints
app.register_blueprint(routerPostgres, url_prefix='/postgress') #manejo de ruta de los endpoints por medio del prefijo
app.register_blueprint(routerMongo, url_prefix='/mongo') #manejo de ruta de los endpoints por medio del prefijo


def page_not_found(error):
    return'<h1>Not found page</h1>', 404

if __name__ == '__main__':
    app.config.from_object(postgres['development'])

    app.register_error_handler(404,page_not_found)
    app.run(debug=True) #con el comando debug=True reinicia el servidor instantaneamente