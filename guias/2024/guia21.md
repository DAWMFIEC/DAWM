---
theme: jekyll-theme-leap-day
---

## Guía 21

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2024/proyecto04)

<style type="text/css" media="screen">
  details {
    margin: 5% 0%;
    padding: 2%;
    border: dashed 2px black;
    border-radius: 11px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  }

  details div {
    color: lightseagreen;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
  }

  img.description {
    width: 50%;
    text-align: center;
    margin: 0 25%;
  }
</style>

### Actividades previas

#### Variables de entorno

1. Verifique, o cree, el archivo _.env_.
2. En caso de ser necesario, genere y agregue la variable _SALT_ en el archivo _.env_.

### Actividades en clases

#### Github

1. Clone localmente tu repositorio **security**.
2. Desde la línea de comandos, inicie el servidor:

    ```command
    npm run autostart
    ```

#### Cookies

1. Edite el enrutador _'security/routes/index.js'_, con:

    ```typescript
    ...
    router.post('/login', async function (req, res, next) {
      ...
      if (passwordHash === userData.password) {

        /* 1. Configuración de la expiración de la cookie */
        const options = {
          expires: new Date(
            Date.now() + (60 * 1000)
          )
        }

        /* 2. Cree la cookie 'username' con la variable user y la configuración de options  */
        res.cookie("username", username, options)

        ...
        res.redirect('/users');
      }
      ...
    });
    ...
    ````

2. Edite el enrutador _'security/routes/users.js'_, con:

    ```typescript
    ...
    router.get('/', async function (req, res, next) {
        ...
        res.render('crud', { username: req.cookies['username'], title: ... })
    })
    ```

3. Edite el partial _'security/views/partials/navbar.ejs'_, con:

    ```html
    ...
    <div class="navbar-nav ml-auto">

      <!-- 1. Muestre el username  -->
      <a href="#" class="nav-link user-action"> {% raw %} <%= {% endraw %}  username {% raw %}  %> {% endraw %}  </a>
      ...
    </div>
    ...
    ```

#### Pruebas

1. Compruebe la salida de la URL [http://localhost:3000/](http://localhost:3000/)
2. Habilite el inspector en la pestaña **Application**, en la sección **Storage**, en la opción **Cookies**.
3. Verifique la identificación del usuario en la aplicación.

    + Criterio de aceptación: Con credenciales correctas de _superadmin_, el usuario es redirigido a _'/users'_ y muestra el texto "superadmin".
      - usuario: superadmin <br/> contraseña: superadmin

    <div align="center">
      <img src="imagenes/user_superadmin.jpg" class="description">
    </div>

    + Criterio de aceptación: Con credenciales correctas de _someuser_, el usuario es redirigido a _'/users'_ y muestra el texto "someuser".
      - usuario: someuser <br/> contraseña: someuser 

    <div align="center">
      <img src="imagenes/user_someuser.jpg" class="description">
    </div>

    + Criterio de aceptación: El usuario intenta acceder a [http://localhost:3000/users](http://localhost:3000/users) sin ingresar las credendiales y muestra sin texto.

    <div align="center">
      <img src="imagenes/user_emptyuser.jpg" class="description">
    </div>


4. Corrija los errores y aplique las pruebas.
5. (STOP 1) Versiona local y remotamente el repositorio **security**.

#### TOKEN_SECRET

1. Genere y copie la secuencia de caracteres aleatorios, con:
  
    ```typescript
    node
    > require('crypto').randomBytes(64).toString('base64');
    ```

2. En la raíz del proyecto, agregue la variable **TOKEN_SECRET** y asigne la secuencia de caracteres aleatorios.

    ```
    SALT=...
    TOKEN_SECRET='...9udMMwr...'
    ```

#### Session

1. Instale localmente el módulo **express-session**. 

    ```command
    npm install --save express-session
    ```

2. Edite el servidor _'app.js'_, con: 

    + Use el módulo **express-session**
    + Aplique la configuración el `middleware`:
      - Con el secreto (**secret**) para encriptar los datos, 
      - El nombre (**name**) de la sesión,
      - Evitar que la sesión se vuelva a guardar si no se ha modificado (**resave**), y
      - Impide que las sesiones sin inicializar sean guardadas (**saveUninitialized**).
    
    ```typescript
    ...
    var logger = require('...');

    /* 1. Módulo express-session */
    const session = require('express-session');

    var indexRouter = require(...);
    
    ...

    app.use(logger('...'));

    /* 2. Configuración del middleware */
    app.use(session({
      secret: process.env.TOKEN_SECRET,
      name: 'session.security', 
      resave: false,
      saveUninitialized: false,
    }));

    app.use(express. ... ());
    ...
    ```

2. Edite el enrutador _'security/routes/index.js'_, con:

    + El callback asincrónico para atender las peticiones **POST** en la ruta **/login**. 
    + El callback para atender las peticiones **GET** en la ruta **/logout**.

    ```typescript
    ...
    router.post('/login', async function (req, res, next) {
      ...
      if (passwordHash === userData.password) {

        ...
        res.cookie("username", ... )

        /* 1. Habilite la sesión */
        req.session.loggedin = true;
        req.session.username = username;

        ...
        res.redirect('/users');
      }
      ...
    });

    /* GET logout. */
    /* 2. Método para terminar la sesión */
    router.get('/logout', function (req, res, next) {
      req.session.destroy();
      res.render('index');
    });

    module.exports = router;
    ````

3. Edite el partial _'security/views/partials/navbar.ejs'_, con:

    + El enlace para terminar la sesión.

    ```html
    ...
    <div class="navbar-nav ml-auto">

      ...
      
      <a href="#" class="nav-link user-action"> {% raw %} <%= {% endraw %}  username {% raw %}  %> {% endraw %}  </a>

      <!-- 1. Enlace para realizar una petición GET a la ruta '/logout' -->
      <a href="/logout" class="nav-item nav-link messages"><i class="fa fa-power-off"></i> Logout</a>
    
    </div>
    ...
    ```

#### Autenticación

1. Cree el archivo _'/middleware/authentication_session.js'_.
2. Edite el middleware _'/middleware/authentication_session.js'_, con:

    ```typescript
    /* Autenticación */

    var authenticateSession = (req, res, next) => {
        if(req.session.loggedin) {
            return next()
        } else{
            return res.redirect("/")
        }
    }

    module.exports = authenticateSession;
    ```

3. Edite el servidor _'app.js'_, con: 
  
    + Incluya la referencia al middleware
    + Agregue el middleware antes del ruteador.

    ```typescript
    ...
    
    const session = require(...);

    /* 1. Referencia a los middlewares */
    var authenticateSession = require('./middleware/authentication_session');

    var indexRouter = require(...);

    ...

    /* 2. Agregue el middleware al router */
    app.use('/users', authenticateSession, usersRouter);
    
    ...
    ```

#### Pruebas

1. Compruebe la salida de la URL [http://localhost:3000/](http://localhost:3000/)
2. Habilite el inspector en la pestaña **Application**, en la sección **Storage**, en la opción **Cookies**.
3. Verifique del `autenticación` y la redirección basada en las credenciales.

    + Criterio de aceptación: El usuario **superadmin** ingresa las credenciales correctas y es redirigido a _'/users'_. Cierre la sesión desde el enlace **logout**. 
    
    + Criterio de aceptación: El usuario **someuser** ingresa las credenciales correctas y es redirigido a _'/users'_. Cierre la sesión desde el enlace **logout**.  

    + Criterio de aceptación: El usuario intenta acceder a [http://localhost:3000/users](http://localhost:3000/users) sin ingresar las credendiales y es redirigido a _'/'_.

4. Corrija los errores y aplique las pruebas.
5. (STOP 2) Versiona local y remotamente el repositorio **security**.

#### Autorización

1. Edite el enrutador _'security/routes/index.js'_, con:

    + Todos los modelos asociados al usuario buscado. 
    + Agregue el rol del usuario en la sesión

    ```typescript
    ...

      let userData = await models.users.findOne({
        where: {
          name: username
        },

        /*1. Incluya todos los modelos asociados */
        include: { all: true, nested: true },
        raw: true,
        nest: true

      })

    ...

      req.session.loggedin = true;
      req.session.username = username;

      /* 2. Agregue el rol del usuario en la sesión */
      req.session.role = userData.users_roles.roles_idrole_role.name

    ...
    ```

2. Edite el archivo _'.env'_, con:
    + La clave **ALL_GRANTED**

    ```
    ...
    ALL_GRANTED="admin"
    ```


3. Cree el archivo _'/middleware/authorization_session.js'_. Edite el middleware _'/middleware/authorization_session.js'_, con:

    ```typescript
    /* Autorización */

    var authorizationSession = (req, res, next) => {
        if(process.env.ALL_GRANTED.includes(req.session.role)) {
            return next()
        } else{
            return res.redirect("/")
        }
    }

    module.exports = authorizationSession;
    ```

4. Edite el servidor _'app.js'_, con: 
  
    + Incluya la referencia al middleware
    + Agregue el middleware antes del ruteador.

    ```typescript
    ...
    const session = require('express-session');

    /* 1. Referencia a los middlewares */
    var authenticateSession = require('./middleware/authentication_session');
    var authorizationSession = require('./middleware/authorization_session');

    ...
    /* 2. Agregue el middleware al router */
    app.use('/users', authenticateSession, authorizationSession, usersRouter);
    ...
    ```

#### Pruebas

1. Compruebe la salida de la URL [http://localhost:3000/](http://localhost:3000/)
2. Verifique del `autenticación` y la redirección basada en las credenciales.

    + Criterio de aceptación: El usuario **superadmin** ingresa las credenciales correctas y es redirigido a _'/users'_. Cierre la sesión desde el enlace **logout**. 
    
    + Criterio de aceptación: El usuario **someuser** ingresa las credenciales correctas y es redirigido a _'/'_.

    + Criterio de aceptación: El usuario intenta acceder a [http://localhost:3000/users](http://localhost:3000/users) sin ingresar las credendiales y es redirigido a _'/'_.

3. Corrija los errores y aplique las pruebas.
4. (STOP 3) Versiona local y remotamente el repositorio **security**.

### Documentación

* [Middleware](https://expressjs.com/es/guide/using-middleware.html) en ExpressJS.

### Fundamental

* Métodos de autenticación en [X](https://twitter.com/alexxubyte/status/1737151765097951544)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Authentication in REST APIs acts as the crucial gateway, ensuring that solely authorized users or applications gain access to the API&#39;s resources.<br><br>Some popular authentication methods for REST APIs include:<br><br>1. Basic Authentication: <br>Involves sending a username and password with… <a href="https://t.co/Y4CKqZUhBF">pic.twitter.com/Y4CKqZUhBF</a></p>&mdash; Alex Xu (@alexxubyte) <a href="https://twitter.com/alexxubyte/status/1737151765097951544?ref_src=twsrc%5Etfw">December 19, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

middleware, cookies, session, autenticación, autorización

### Referencias

* Autenticación y autorización en node.js mediante Express.js. (n.d.). Retrieved from https://ull-esit-pl-1617.github.io/estudiar-cookies-y-sessions-en-expressjs-victor-pamela-jesus/cookies/chapter6.html
* Adams, D. (2024). Basic Login System with Node.js, Express, and MySQL. Retrieved from https://codeshack.io/basic-login-system-nodejs-express-mysql/
* Ram, P. (2021). Difference between Session Cookies vs. JWT (JSON Web Tokens), for session management. Retrieved from https://medium.com/@prashantramnyc/difference-between-session-cookies-vs-jwt-json-web-tokens-for-session-management-4be67d2f066e
* express-session. (n.d.). Retrieved from https://expressjs.com/en/resources/middleware/session.html
* Chan, A. (2021). Cookie and Session (II) - How session works in express-session. Retrieved from https://medium.com/@alysachan830/cookie-and-session-ii-how-session-works-in-express-session-7e08d102deb8