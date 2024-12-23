---
theme: jekyll-theme-leap-day
---

## Guía 21

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2024/proyecto05)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose"></pre>

### Actividades previas

1. Desde la línea de comandos
	
	+ Cree un ambiente de desarrollo, con:

	```command
	python -m venv environment
	```

	+ Habilite el ambiente de desarrollo, con:

	```command
	environment\Scripts\activate
	```

	+ Instale **django**, con:

	```command
	pip install django 
	```

### Actividades en clases

#### Proyecto: Backend

1. Desde la línea de comandos
	
	+ Cree y acceda a la carpeta del proyecto **backend**, con:

	```command
	django-admin startproject backend
	cd backend
	```

	+ Abra el proyecto con VSCode.

	```command
	code .
	```

	+ Levante el servidor, con:

	```command
	python manage.py runserver
	```

2. (STOP 1) Revise los cambios en el navegador en el URL: [http://127.0.0.1:8000/](http://127.0.0.1:8000/)

    <div align="center">
      <img src="imagenes/django_starter.png">
    </div>

#### Aplicación: main

1. Desde la línea de comandos
	
	+ Cree la aplicación **main**, con:

	```command
	python manage.py startapp main
	```

2. Edite el archivo _backend/settings.py_

	+ Registre la aplicación, con:

	```python
	INSTALLED_APPS = [
	    ...
	    'main',
	]
	```

3. Edite el archivo _backend/urls.py_

	+ Asocie la ruta **raíz** ('') con las rutas de la aplicación main, con:

	```python
	from django.urls import ... , include

	urlpatterns = [
	    ...
	    path('', include('main.urls')),
	]
	```

4. Cree el archivo _main/urls.py_
	
	+ Asocie la ruta **raíz** ('') con el controlador **index**, con:

	```python
	from django.urls import path
	from . import views

	urlpatterns = [
	    path('', views.index, name='main_index'),
	]
	```

5. Edite el archivo _main/views.py_

	+ Agregue el controlador **index**, con:

	```python 
	...

	# Create your views here.
	from django.http import HttpResponse

	def index(request):
	    return HttpResponse("Hello, World!")
    ```

6. Desde la línea de comandos
	
	+ Levante el servidor, con:

	```command
	python manage.py runserver
	```

7. (STOP 2) Revise los cambios en el navegador para las URLs: 

	+ En la ruta raíz [http://127.0.0.1:8000/](http://127.0.0.1:8000/), y 

    <div align="center">
      <img src="imagenes/django_index_hello_world.png">
    </div>

    + En la ruta del admin [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin)

    <div align="center">
      <img src="imagenes/django_admin.png">
    </div>

### Documentación

### Fundamental

### Términos

django, mvc

### Referencias
