---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

Django - Pythonanywhere
===============

<div align="center">
    <img src="https://i.ytimg.com/vi/1oOr7o3Cx1Y/mqdefault.jpg" alt="" width="40%">
</div>

Python Anywhere
==========

* * *

* Obtenga una cuenta **Beginner account** en [Python Anywhere](https://www.pythonanywhere.com/).

<div align="center">
    <img src="imagenes/pa_beginner.png" alt="" width="70%">
    <p>Fuente: <a href="https://www.pythonanywhere.com/pricing/">Python Anywhere</a> </p>
</div>

* Cree una nueva consola desde la opción **Console** > **Bash**.

<div align="center">
    <img src="imagenes/pa_console.png" alt="" width="70%">
</div>

* Clone el repositorio del proyecto, con:

```command
git clone https://github.com/<USUARIO>/backend.git
```

<div align="center">
    <img src="imagenes/pa_pwd.png" alt="" width="70%">
</div>

* En la consola, crea un entorno virtual, nómbralo como **environment** y con la versión de Python 3.10

```command
mkvirtualenv --python=/usr/bin/python3.10 environment
```

<div align="center">
    <img src="imagenes/pa_requirements.png" alt="" width="70%">
</div>

* Acceda a la carpeta del proyecto e instale las dependencias:

```command
cd backend/
pip install -r requirements.txt
```

<div align="center">
    <img src="imagenes/pa_requirements.png" alt="" width="70%">
</div>

Keys
==========

* * *

* Cree la carpeta `keys` y cargue el archivo con las credenciales desde la opción **Files**

<div align="center">
    <img src="imagenes/pa_keys.png" alt="" width="70%">
</div>

Web app
==========

* * *

* Cree una aplicación web desde la opción **Web**, en el botón **Add a new web app**

<div align="center">
    <img src="imagenes/pa_webapp1.png" alt="" width="70%">
</div>


* Seleccione la opción **» Manual configuration (including virtualenvs)**, con la versión de Python 3.10

<div align="center">
    <img src="imagenes/pa_webapp2.png" alt="" width="70%">
</div>

* En el ambiente de configuración de la web app, en la sección **VIRTUALENV** ingrese la ruta al ambiente de Python 

```command
/home/<USUARIO-PYTHONANYWHERE>/.virtualenvs/environment
```

<div align="center">
    <img src="imagenes/pa_webapp3.png" alt="" width="70%">
</div>


* En el ambiente de configuración de la web app, en la sección **CODE** edite el `USUARIO-PYTHONANYWHERE_pythonanywhere_com_wsgi`

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


* En el ambiente de configuración de la web app, en la sección **CODE** modifique el `Working directory` 

```command
/home/<USUARIO-PYTHONANYWHERE>/backend
```

<div align="center">
    <img src="imagenes/pa_webapp4.png" alt="" width="70%">
</div>


* En `backend/backend/settings.py` agregue **ALLOWED_HOSTS** y **STATIC_ROOT**

```python
...
ALLOWED_HOSTS = ['<USUARIO-PYTHONANYWHERE>.pythonanywhere.com']
...

...
STATIC_ROOT = "assets/"
...
```

* En el ambiente de configuración de la web app, relacione la URL `/static/` con el directorio `/home/<USUARIO-PYTHONANYWHERE>/backend/assets` 

<div align="center">
    <img src="imagenes/pa_webapp5.png" alt="" width="70%">
</div>


`https://aavendan86.pythonanywhere.com/`

`https://aavendan86.pythonanywhere.com/restapi/v1/landing/`


Referencias
=======

* PythonAnywere. (2016). Deploying an existing Django project on PythonAnywhere. Retrieved from https://help.pythonanywhere.com/pages/DeployExistingDjangoProject/
