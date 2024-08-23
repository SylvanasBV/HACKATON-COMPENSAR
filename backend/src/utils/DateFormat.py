import datetime


#Formatear fecha 


class DateFormat():
    @classmethod #poder usar la clase sin necesidad de instanciarlo
    def convert_date(self,date):
        return datetime.datetime.strftime(date,'%d/%m/%Y')