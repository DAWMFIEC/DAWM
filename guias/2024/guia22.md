---
theme: jekyll-theme-leap-day
---

## Guía 22

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2024/proyecto05)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">Desarrollar una aplicación backend robusta y escalable utilizando Django que integre una interfaz de administrador intuitiva para la gestión eficiente de datos y funcionalidades junto con un REST API completo que facilite la comunicación con las aplicaciones cliente de tal forma que garantice la seguridad, el rendimiento y la extensibilidad del sistema.</pre>

### Actividades previas

#### Ambiente de desarrollo

1. Desde la línea de comandos
	
	+ Cree y habilite el ambiente de desarrollo, con:

	```command
	python -m venv environment
	environment\Scripts\activate
	```

#### Instalación de librerías

1. Clone localmente tu repositorio **backend**.

2. Desde la línea de comandos

	+  Acceda a la carpeta del proyecto **backend** e instale las librerías , con:

	```command
	cd backend
	pip install -r requirements.txt
	```

#### SDK Firebase Admin: Clave privada

1. En la [consola de Firebase](https://console.firebase.google.com/)

	+ Acceda a la **Configuración de proyecto** > **Cuentas de servicio** > **SDK de Firebase Admin**.
	+ **Genera una clave privada** JSON y descárguela.

2. Guarde la clave privada en la carpeta del proyecto.

### Actividades en clases

pip install firebase-admin djangorestframework

Cree la aplicación `restapi`

registre la aplicación en _backend/settings.py_

INSTALLED_APPS = [
    ...
    'main',
    'rest_framework',
    'restapi',
]

#### Ruta al archivo JSON de credenciales
FIREBASE_CRED = credentials.Certificate("landing-8e71d-firebase-adminsdk-pehj8-4cdce9020b.json")

#### Inicializa Firebase
firebase_admin.initialize_app(FIREBASE_CRED, {
    'databaseURL': 'https://landing-8e71d-default-rtdb.firebaseio.com/'
})

registre la url de la aplicación 

... 
urlpatterns = [
    ...
    path('restapi/', include('restapi.urls')),
]

cree _restapi/urls.py_

from django.urls import path
from . import views

urlpatterns = [
	path('coleccion/', views.ColeccionAPI.as_view(), name='firebase_resources' ),
]

#### GET

edite _restapi/views.py_

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from firebase_admin import db

class ColeccionAPI(APIView):
    
    collection = 'coleccion'
    
    def get(self, request):
        ref = db.reference(self.collection)
        data = ref.get()
        return Response(data, status=status.HTTP_200_OK)


python manage.py runserver

navegador http://127.0.0.1:8000/restapi/coleccion/ y pruebe
en consola y pruebe

curl -X GET http://127.0.0.1:8000/restapi/coleccion/ 

#### POST

edite _restapi/views.py_

...

class ColeccionAPI(APIView):

	...

	def post(self, request):
        ref = db.reference(self.collection)
        data = request.data
        new_resource = ref.push(data)
        return Response({"id": new_resource.key}, status=status.HTTP_201_CREATED)


navegador http://127.0.0.1:8000/restapi/coleccion/ y pruebe con { "email": "correo@gmail.com" }

en consola y pruebe

curl -X POST -H "Content-Type: application/json" -d "{\"email\":\"correo@gmail.com\"}" http://127.0.0.1:8000/restapi/api/coleccion/

### Documentación

* [Django REST framework](https://www.django-rest-framework.org/) es un conjunto de herramientas potente y flexible para crear API web.

### Fundamental

### Términos

rest, models, views

### Referencias

* Christie, T. (n.d.). Django REST Framework. Retrieved from https://www.django-rest-framework.org/
* Django REST Framework (DRF): Crea una REST API (GET, POST, PUT, DELETE) | Tutorial desde Cero ✅ (2024). Retrieved from https://www.youtube.com/watch?v=Xts8NmyAc8c