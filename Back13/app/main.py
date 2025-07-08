from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware #Permite el acceso desde cualquier origen o solo de cierto origen
from routes import router #Importamos el objeto router que contiene las rutas del arcghivo routes.py

app = FastAPI() #crea una instancia de la aplicación FastAPI

app.add_middleware(
    CORSMiddleware, #Permite el acceso desde cualquier origen o solo de cierto origen
    allow_origins=["*"], #Permite el acceso desde cualquier origen (no recomendado en producción)
    allow_credentials=True, #Permite el acceso con credenciales (cookies, autenticación, etc.)
    allow_methods=["*"], #Permite el acceso a todos los métodos HTTP (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"], #Permite el acceso a todos los encabezados HTTP
)

app.include_router(router) #Incluye el objeto router en la aplicación FastAPI