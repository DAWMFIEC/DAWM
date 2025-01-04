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

#### SDK Firebase Admin: Clave privada

1. Acceda a la [consola de Firebase](https://console.firebase.google.com/)
2. Ingrese al proyecto **landing**
    + Acceda a la Configuración de proyecto.
    + Genere y descargue una clave privada JSON.

3. Cree la carpeta keys en el proyecto.
4. Renombre el archivo como `landing-key.json` y guarde el archivo en la carpeta _keys_.

### Actividades en clases


* Edite el archivo main/views.py con el decorador `@login_required`

    ```python
    from django.http import ...
    from django.contrib.auth.decorators import login_required

    @login_required
    def index(request):
        ...
    ```


* Edite el archivo backend/urls.py con

    + Importe las vistas predefinidas para el inicio y cierre de sesión.
    + Agregue las rutas para que procesen el inicio y cierre de sesión.

    ```python
    from django.contrib.auth import views as auth_views

    urlpatterns = [
        ...
        path('login/', auth_views.LoginView.as_view(template_name='authentication/login.html'), name='login'),
        path('logout/', auth_views.LogoutView.as_view(next_page='/login/'), name='logout'),
    ]
    ```

* Descargue y descomprima [login_django.zip](recursos/login_django.zip) en la carpeta `templates/authentication`

* Dentro del formulario, agregue

    ```html
    <form ...>
        {% raw %}{%{% endraw %} csrf_token {% raw %}%}{% endraw %}
        {% raw %}{{{% endraw %} form.as_p {% raw %}}}{% endraw %}
        ....
    </form>
    ```

* Modifique `templates/main/index.html` en el bloque **logout**

    ```html
    <!-- START - Block Logout -->
    <a></a>
    <!-- END - Block Logout -->
    ```

    por

    ```html
    <!-- START - Block Logout -->
    <form method="post" action="{% raw %}{%{% endraw %} url 'logout' {% raw %}%}{% endraw %}" class="w-full">
        {% raw %}{%{% endraw %} csrf_token {% raw %}%}{% endraw %}
        <button
          class="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          href="#"
        >
          <svg
            class="w-4 h-4 mr-3"
            aria-hidden="true"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            ></path>
          </svg>
          <span>Log out</span>
        </button>
    </form>
    <!-- END - Block Logout -->
    ```

* Edite `backend/settings.py` con la ruta a redirigir cuando los usuarios que no están autenticados.

    ```python
    ...
    LOGIN_URL = '/login/'
    LOGIN_REDIRECT_URL = '/'
    ```

* Aplique las migraciones

    ```command
    python manage.py makemigrations
    python manage.py migrate
    ```

* Cree el super usuario

    ```command
    python manage.py createsuperuser
    ```

* Verifique en el navegador

    ```command
    python manage.py runserver
    ```

### Documentación

En [Utilizando el sistema de autenticación de Django](https://docs.djangoproject.com/es/5.1/topics/auth/default/) explica el uso del sistema predeterminado de autenticación y autorización de las aplicaciones

### Fundamental

### Términos

Built-in, csrf

### Referencias

* Using the Django authentication system: Django documentation. (n.d.). Retrieved from https://docs.djangoproject.com/en/5.1/topics/auth/default/#module-django.contrib.auth.views
* Nick. (2024). Do not Reinvent the Wheel: Utilize Django’s Built-in Auth App to Create a Robust Authentication System. Retrieved from https://dev.to/odhiambo/do-not-reinvent-the-wheel-utilize-djangos-built-in-auth-app-to-create-a-robust-authentication-system-4840
* Comment, info, M., prathamsahani0368 Follow Improve, prathamsahani0368 Follow, prathamsahani0368, & Follow. (2024). User Authentication System using Django. Retrieved from https://www.geeksforgeeks.org/user-authentication-system-using-django/
* Tang, A. (2024). How to secure your Django applications ⎜Escape Blog. Retrieved from https://escape.tech/blog/best-django-security-practices/#authentication
* Django-Allauth tutorial 2023: Instalación y configuración (N.d.). Retrieved from https://www.youtube.com/watch?v=fsFhti_e5_Q