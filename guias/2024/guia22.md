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

1. Desde la línea de comandos
	
	+ Clone localmente y acceda al repositorio _backend_.
	+ Instale las librerías de _requirements.txt_, con:

	```command
	pip install -r requirements.txt
	```
	+ Instale **firebase-admin** y **djangorestframework**, con:

	```command
	pip install firebase-admin djangorestframework
	```

#### SDK Firebase Admin: Clave privada

1. Acceda a la [consola de Firebase](https://console.firebase.google.com/)
2. Ingrese al proyecto **landing**
	+ Acceda a la **Configuración de proyecto** > **Cuentas de servicio** > **SDK de Firebase Admin**.
	+ **Genera una clave privada** JSON y descárguela.

3. Guarde la clave privada en el directorio raíz del proyecto.

### Actividades en clases

#### Aplicación: REST


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

#### Versionamiento local y remoto

1. En la línea de comandos

	+ Genere el archivo **requirements.txt** con la lista de paquetes utilizados, con:

	```command
	pip freeze > requirements.txt
	```

	+ Desactive el ambiente de desarrollo, con:

	```command
	deactivate
	```

2. Versione local y remotamente.

### Documentación

* [Django REST framework](https://www.django-rest-framework.org/) es un conjunto de herramientas potente y flexible para crear API web.

### Fundamental

* What is REST API? en [X](https://twitter.com/Terrasoft_ltd/status/1732354546528067738)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/REST?src=hash&amp;ref_src=twsrc%5Etfw">#REST</a> <a href="https://twitter.com/hashtag/API?src=hash&amp;ref_src=twsrc%5Etfw">#API</a> what is it?<br>Representational State Transfer<br>This means that when a <a href="https://twitter.com/hashtag/client?src=hash&amp;ref_src=twsrc%5Etfw">#client</a> requests a resource using a REST API, the <a href="https://twitter.com/hashtag/server?src=hash&amp;ref_src=twsrc%5Etfw">#server</a> transfers back the current state of the resource in a standardized representation <a href="https://t.co/xCFXw9cQFZ">pic.twitter.com/xCFXw9cQFZ</a></p>&mdash; Terrasoft Ltd (@Terrasoft_ltd) <a href="https://twitter.com/Terrasoft_ltd/status/1732354546528067738?ref_src=twsrc%5Etfw">December 6, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

rest, models, views

### Referencias

* Christie, T. (n.d.). Django REST Framework. Retrieved from https://www.django-rest-framework.org/
* Django REST Framework (DRF): Crea una REST API (GET, POST, PUT, DELETE) | Tutorial desde Cero ✅ (2024). Retrieved from https://www.youtube.com/watch?v=Xts8NmyAc8c