from database.bd import get_connection
from entities.movie import Movie

class Model():
    @classmethod
    def get_model(self):
        try:
            connection=get_connection()
            movies=[]

            with connection.cursor() as cursor:
                cursor.execute("SELECT id,title,duration, released FROM movie ORDER BY title ASC")
                resultset=cursor.fetchall()

                for row in resultset:
                    movie=Movie(row[0],row[1],row[2],row[3])
                    movies.append(movie)
            connection.close()
            return movies
        except Exception as ex: 
            raise Exception(ex)