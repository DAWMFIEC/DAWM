---
theme: jekyll-theme-leap-day
---

## Guía 21

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2024/proyecto05)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">Desarrollar una aplicación backend robusta y escalable utilizando Django que integre una interfaz de administrador intuitiva para la gestión eficiente de datos y funcionalidades junto con un REST API completo que facilite la comunicación con las aplicaciones cliente de tal forma que garantice la seguridad, el rendimiento y la extensibilidad del sistema.</pre>

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

#### Estructura de archivos del proyecto en Django.

* 
	+ 

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

#### Versionamiento local y remoto

1. Crea un repositorio en GitHub con el nombre **backend**.

2. Desde la línea de comandos:

	+ Inicialice el repositorio local

	```command
	git init .
	```

	+ Agregue la rama **main** y el tag **origin**:

	```command
	git branch -M main
	git remote add origin https://github.com/<SU-USUARIO>/backend.git
	```

	+ Incorpore los cambios del repositorio remoto en el repositorio local:

	```command
	git pull origin main
	```

3. Versiona local y remotamente el repositorio **.**.

  ```command
  git add .
  git commit -m "init"
  git push -f origin main 
  ```

### Documentación

* Documentación de [Django](https://docs.djangoproject.com/en/5.1/)

### Fundamental



### Términos

django, mvc

### Referencias

* Django documentation: Django documentation. (n.d.). Retrieved from https://docs.djangoproject.com/en/5.1/