---
theme: jekyll-theme-leap-day
---

## Django Rest Framework (DRF)

[DAWM](/DAWM/)

### Actividades previas

* Complete la guía con el Django Rest Framework (DRF) en el proyecto.

### Actividades en clases

#### URL

1. Mdifique el archivo _api/urls.py_, con:
	
	+ Asocie la ruta **'v1/landing/&lt;str:pk&gt;/'** con la vista LandingAPIDetail

	```python
	from django.urls import path
	from . import views

	urlpatterns = [
	    ...
	    path('v1/landing/<str:pk>/', views.LandingAPIDetail.as_view()),
	]
	```


#### LandingAPIDetail

1. Edite el archivo _api/views.py_, con:
	
	+ Agregue la clase `LandingAPIDetail`, con los métodos **get**, **put**, y **delete**.

	```python 
	...

	class LandingAPI(APIView):
		...

	class LandingAPIDetail(APIView):

		name = 'Landing Detail API'

		collection_name = 'coleccion'

		def get(self, request, pk):
			return Response(None, status=status.HTTP_200_OK)

		def put(self, request, pk):
			return Response(None, status=status.HTTP_200_OK)

		def delete(self, request, pk):
			return Response(None, status=status.HTTP_200_OK)
	```

2. Desde la línea de comandos
	
	+ Levante el servidor, con:

	```command
	python manage.py runserver
	```

3. (STOP 2) Revise los cambios en el navegador para las URLs: 

	+ En la ruta por clave, por ejemplo: [http://127.0.0.1:8000/api/v1/landing/-OFoZDb8C98XMUTSsSEj/](http://127.0.0.1:8000/api/v1/landing/-OFoZDb8C98XMUTSsSEj/)

	<div align="center">
	    <img src="imagenes/drf1.png" alt="" width="75%">
	</div>

#### GET, PUT y DELETE por PK



#### Validación y Verificación



### Entregable

* Responda a la actividad en el aulavirtual con las capturas de pantalla del resultado y del código.

### Referencias

* Khan, A. (2025). DELETE Method of APIView In Django REST Framework. Retrieved from https://medium.com/@altafkhan_24475/delete-method-of-apiview-in-django-rest-framework-c227942776d2