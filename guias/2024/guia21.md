---
theme: jekyll-theme-leap-day
---

## Guía 2X

[DAWM](/DAWM/) / [Proyecto0Y](/DAWM/proyectos/2024/proyecto0Y)

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

#### Proyecto Backend

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

### Documentación

### Fundamental

### Términos

django, mvc

### Referencias
