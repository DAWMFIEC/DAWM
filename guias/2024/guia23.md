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
    
    + Clone localmente y acceda al repositorio _backend_.
    + Instale las librerías de _requirements.txt_, con:

    ```command
    pip install -r requirements.txt
    ```
    + Instale **django-allauth**, con:

    ```command
    pip install django-allauth
    ```

#### SDK Firebase Admin: Clave privada

1. Acceda a la [consola de Firebase](https://console.firebase.google.com/)
2. Ingrese al proyecto **landing**
    + Acceda a la Configuración de proyecto.
    + Genera una clave privada JSON y descárguela.

3. Guarde la clave privada la carpeta keys del proyecto.

4. Edite el archivo _backend/settings.py_, con:

    + Actualice el nombre del archivo con las credenciales de firebase

    ```python
    ...
    # Ruta al archivo JSON de credenciales
    FIREBASE_CRED = credentials.Certificate("keys/landing-XXXXX-firebase-adminsdk-YYYYY-ZZZZZZZZZZ.json")
    ```

### Actividades en clases

 python manage.py startapp authentication

 backend/settings.py

 INSTALLED_APPS = [
   ...
	'authentication',
]

INSTALLED_APPS = [
    ...
    
    #all auth configurations
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google'
    
]

AUTHENTICATION_BACKENDS = [
    'django.contrib.auth.backends.ModelBackend',
    'allauth.account.auth_backends.AuthenticationBackend'
]


SOCIALACCOUNT_PROVIDERS = {
    'google': {
        'SCOPE' : [
            'profile',
            'email'
        ],
        'APP': {
            'client_id': os.environ['CLIENT_ID'],
            'secret': os.environ['CLIENT_SECRET'],
        },
        'AUTH_PARAMS': {
            'access_type':'online',
        }
    }
}

SITE_ID = 2

LOGIN_REDIRECT_URL = '/'
LOGOUT_REDIRECT_URL = '/'

### Documentación

### Fundamental

### Términos

### Referencias
