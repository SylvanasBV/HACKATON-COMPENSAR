from flask import Flask, render_template
from dotenv import load_dotenv
import os
from routes.router import router 
from config.mongodb import mongo
config = load_dotenv()#carga variables de entorno

# me trae todas las rutas que estube creando
app = Flask(__name__) #Constructor: __name__ =punto de inicio para usar este archivo para lanzar mi aplicacion

app.config['MONGO_URI'] = os.getenv('MONGO_URI')
mongo.init_app(app)

@app.route('/') #Ruta
def home():#Definir fubncion para verificar funcionamiento del servidor
    return render_template('index.html') #linquiamos la pagina por donde ingresaremos la informacion

app.register_blueprint(router, url_prefix='/router') #manejo de ruta de los endpoints por medio del prefijo

if __name__ == '__main__':
    app.run(debug=True) #con el comando debug=True reinicia el servidor instantaneamente