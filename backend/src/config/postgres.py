from decouple import config

class Config:
    SECRET_KEY = config('SECRET_KEY')

class DevelopmentConfig(Config):
    DEBUG = True  # Esta línea corrige la asignación de DEBUG
    # SQLALCHEMY_DATABASE_URI = config('DATABASE_URL')  # Descomenta esta línea si estás usando SQLAlchemy y PostgreSQL
    # SQLALCHEMY_TRACK_MODIFICATIONS = False  # Descomenta esta línea si estás usando SQLAlchemy

postgres = {
    'development': DevelopmentConfig
}