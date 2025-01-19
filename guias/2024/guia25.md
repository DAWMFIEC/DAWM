---
theme: jekyll-theme-leap-day
---

## Guía 25

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2024/proyecto05)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">Desarrollar una aplicación backend robusta y escalable utilizando Django que integre una interfaz de administrador intuitiva para la gestión eficiente de datos y funcionalidades junto con un REST API completo que facilite la comunicación con las aplicaciones cliente de tal forma que garantice la seguridad, el rendimiento y la extensibilidad del sistema.</pre>

### Actividades previas

* Obtenga una cuenta **Beginner account** en [PythonAnywhere](https://www.pythonanywhere.com/).

    <div align="center">
        <img src="imagenes/pa_beginner.png" alt="" width="70%">
        <p>Fuente: <a href="https://www.pythonanywhere.com/pricing/">Python Anywhere</a> </p>
    </div>

### Actividades en clases

#### Consola de PythonAnywhere

1. Desde la interfaz de PythonAnywhere, en la opción **Console** > **Bash**, cree una nueva consola.

    <div align="center">
        <img src="imagenes/pa_console.png" alt="" width="70%">
    </div>

#### Ambiente de desarrollo

1. Desde la línea de comandos

    + Crea un entorno virtual, nómbralo como **environment** y con la versión de Python 3.10

    ```command
    mkvirtualenv --python=/usr/bin/python3.10 environment
    ```

#### Repositorio local/remoto + librerías

1. Desde la línea de comandos
    
    + Clone localmente y acceda a la carpeta _backend_.
    + Instale las librerías de _requirements.txt_, con:

    ```command
    pip install -r requirements.txt
    ```

#### SDK Firebase Admin: Clave privada

1. Acceda a la [consola de Firebase](https://console.firebase.google.com/)
2. Ingrese al proyecto **landing**

    + Acceda a la Configuración de proyecto.
    + Genere y descargue una clave privada JSON.

3. Desde la interfaz de PythonAnywhere, en la opción **Files**

    + Acceda a la carpeta **backend**
    + Cree la carpeta **keys** 
    + Cargue el archivo con las credenciales de Firebase utilizados en desarrollo. 

    <div align="center">
        <img src="imagenes/pa_keys.png" alt="" width="70%">
    </div>

#### Migración

1. Aplique las migraciones

    ```command
    python manage.py makemigrations
    python manage.py migrate
    ```

#### WebApp

1. Desde la interfaz de Python Anywhere, en la opción **Web**, cee una aplicación web con el botón **Add a new web app**

    <div align="center">
        <img src="imagenes/pa_webapp1.png" alt="" width="70%">
    </div>


2. Seleccione la opción **» Manual configuration (including virtualenvs)**, con la versión de Python 3.10

    <div align="center">
        <img src="imagenes/pa_webapp2.png" alt="" width="70%">
    </div>

* **AMBIENTE VIRTUAL** Desde la interfaz de Python Anywhere, en la opción **Web**, en la sección **VIRTUALENV** ingrese la ruta al ambiente de Python 

    ```command
    /home/<USUARIO-PYTHONANYWHERE>/.virtualenvs/environment
    ```

    <div align="center">
        <img src="imagenes/pa_webapp3.png" alt="" width="70%">
    </div>


* Desde la interfaz de Python Anywhere, en la opción **Web**, en la sección **CODE** 

    <div align="center">
        <img src="imagenes/pa_webapp4.png" alt="" width="70%">
    </div>

    + **Working directory** Agregue el `Working directory` con la ruta a la carpeta del proyecto

    ```command
    /home/<USUARIO-PYTHONANYWHERE>/backend
    ```

    + **WSGI configuration file** Modifique la configuración del servidor 

    ```python
    # +++++++++++ DJANGO +++++++++++
    import os
    import sys

    path = '/home/<USUARIO-PYTHONANYWHERE>/backend'
    if path not in sys.path:
        sys.path.append(path)

    os.environ['DJANGO_SETTINGS_MODULE'] = 'backend.settings'

    from django.core.wsgi import get_wsgi_application
    application = get_wsgi_application()
    ```


Seguridad
==========

* * *

* Desde la interfaz de Python Anywhere, en la opción **Files**, modifique el archivo `backend/backend/settings.py` con el dominio **ALLOWED_HOSTS**

    ```python
    ...
    ALLOWED_HOSTS = ['<USUARIO-PYTHONANYWHERE>.pythonanywhere.com']
    ...
    ```

Archivos estáticos
==========

* * *

* Desde la interfaz de Python Anywhere, en la opción **Files**, modifique el archivo `backend/backend/settings.py` con la ruta a los archivos estáticos **STATIC_ROOT**

    ```python
    ...

    STATICFILES_DIRS = [ ... ]

    STATIC_ROOT = "assets/"
    ...
    ```

* Desde la interfaz de Python Anywhere, en la opción **Console**, acceda a la ruta del proyecto y genere los archivos estáticos

    ```command
    python manage.py collectstatic
    ```

    <div align="center">
        <img src="imagenes/pa_webapp5.png" alt="" width="70%">
    </div>

* En el ambiente de configuración de la web app, relacione la URL `/static/` con el directorio `/home/<USUARIO-PYTHONANYWHERE>/backend/assets` 

    <div align="center">
        <img src="imagenes/pa_webapp6.png" alt="" width="70%">
    </div>

Verificación
==========

* * *

Acceda al sitio principal [https://&lt;USUARIO-PYTHONANYWHERE&gt;.pythonanywhere.com/](https://&lt;USUARIO-PYTHONANYWHERE&gt;.pythonanywhere.com/)

<div align="center">
    <img src="imagenes/pa_verificacion.png" alt="" width="70%">
</div>



### Documentación

### Fundamental

### Términos

PythonAnywhere

### Referencias

* PythonAnywere. (2016). Deploying an existing Django project on PythonAnywhere. Retrieved from https://help.pythonanywhere.com/pages/DeployExistingDjangoProject/
* PythonAnywere. (2015). How to setup static files in Django. Retrieved from https://help.pythonanywhere.com/pages/DjangoStaticFiles