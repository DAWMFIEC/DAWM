---
theme: jekyll-theme-leap-day
---

## Guía 2X

[DAWM](/DAWM/) / [Proyecto0Y](/DAWM/proyectos/2024/proyecto0Y)

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

3. Cree la carpeta keys en el proyecto.
4. Renombre el archivo como _landing-key.json_ y guarde el archivo en la carpeta _keys_.

#### Usuarios

1. Aplique las migraciones

    ```command
    python manage.py makemigrations
    python manage.py migrate
    ```

2. Cree el SuperUsuario. Recuerde el **usuario** y la **contraseña** para probar el sistema de autenticación.

    ```command
    python manage.py createsuperuser
    ```

3. Levante el servidor, con:

    ```command
    python manage.py runserver
    ```

4. Acceda a sitio de Django Admin en [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin)
    + Utilice las credenciales del SuperUsuario.
    + Agregue un usuario nuevo con el permiso **Main - viewer**.

#### Editor y WSGI

1. Abra el proyecto con VSCode, con:

    ```command
    code .
    ```

2. Levante el servidor, con:

    ```command
    python manage.py runserver
    ```

### Actividades en clases


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

### Fundamental

### Términos

### Referencias
