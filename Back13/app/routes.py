from fastapi import APIRouter #Sistemas de rutas de la API
from data import nombres #de data.py importamos la lista de nombres

router = APIRouter() #crea un objeto que permite definir rutas

@router.get("/nombres") #ruta para obtener todos los nombres
def get_nombre():
    return nombres

