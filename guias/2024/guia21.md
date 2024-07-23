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

??

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
      }
      ...
    });
    ...
    ````
2. Edite el partial _'security/views/partials/navbar.ejs'_, con:

    ```html
    ...
    <div class="navbar-nav ml-auto">
      <a href="#" class="nav-link user-action"> {% raw %} <%= {% endraw %}  username {% raw %}  %> {% endraw %}  </a>
      ...
    </div>
    ...
    ```

3. Compruebe la salida de la URL [http://localhost:3000/](http://localhost:3000/)
4. Verifique el resultado de los siguientes escenarios:

    |   Usuario  | Contraseña |   Resultado   |
    | :--------: | :--------: | :-----------: |
    | superadmin | superadmin |  <div align="center"><img src="imagenes/user_superadmin.jpg" class="description"></div>  |
    | someuser   | someuser   |  <div align="center"><img src="imagenes/user_someuser.jpg" class="description"></div>    |

   
5. (STOP 1) Versiona local y remotamente el repositorio **security**.

#### TOKEN_SECRET

1. Genere y copie la secuencia de caracteres aleatorios, con:
  
    ```typescript
    node
    > require('crypto').randomBytes(64).toString('base64');
    ```

2. En la raíz del proyecto, agregue la variable **TOKEN_SECRET** y asigne la secuencia de caracteres aleatorios.

    ```
    TOKEN_SECRET='...9udMMwr...'
    ```

#### Session

1. Instale localmente el módulo **express-session**. 

    ```command
    npm install --save express-session
    ```

2. Edite el servidor _'app.js'_, con: 

    + La configuración el _middleware_ 
      - Con el secreto (**secret**) para encriptar los datos, 
      - El nombre (**name**) de la sesión,
      - Evita que la sesión se vuelva a guardar en el almacén de sesiones si no se ha modificado durante la solicitud (**resave**), y
      - Impide que las sesiones sin inicializar (nuevas pero no modificadas) se guarden en el almacén de sesiones (**saveUninitialized**).
    
    ```typescript
    ...
    var logger = require('morgan');

    /* 1. Módulo express-session */
    const session = require('express-session');
    ...
    app.use(logger('dev'));

    /* 2. Configuración del middleware */
    app.use(session({
      secret: process.env.TOKEN_SECRET,
      name: 'session.security', 
      resave: false,
      saveUninitialized: false,
    }));
    app.use(express.json());
    ...
    ```

2. Edite el enrutador _'security/routes/index.js'_, con:

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
      }
      ...
    });

    /* GET logout. */
    /* 2. Método para terminar la sesión */
    router.get('/logout', function (req, res, next) {
      req.session.destroy();
      res.render('index');
    });
    ...
    ````

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
  
    + Agregue 

    ```typescript
    ...
    const session = require('express-session');

    /* 1. Referencia a los middlewares */
    var authenticateSession = require('./middleware/authentication_session');

    ...
    /* 2. Agregue el middleware al router */
    app.use('/users', authenticateSession, usersRouter);
    ...
    ```
4. Edite el partial _'security/views/partials/navbar.ejs'_, con:

    ```html
    ...
    <div class="navbar-nav ml-auto">
      <a href="#" class="nav-link user-action"> {% raw %} <%= {% endraw %}  username {% raw %}  %> {% endraw %}  </a>
      <a href="/logout" class="nav-item nav-link messages"><i class="fa fa-power-off"></i> Logout</a></a>
    </div>
    ...
    ```

5. [http://localhost:3000/users](http://localhost:3000/users)

#### Autorización

/middleware/authorization_session.js

/* Autorización */

var authorizationSession = (req, res, next) => {
    if(req.session.role === 'admin') {
        return next()
    } else{
        return res.redirect("/")
    }
}

module.exports = authorizationSession;

app.use('/users', authenticateSession, authorizationSession, usersRouter);

### Documentación

### Fundamental

### Términos

middleware

### Referencias

* Autenticación y autorización en node.js mediante Express.js. (n.d.). Retrieved from https://ull-esit-pl-1617.github.io/estudiar-cookies-y-sessions-en-expressjs-victor-pamela-jesus/cookies/chapter6.html
* Adams, D. (2024). Basic Login System with Node.js, Express, and MySQL. Retrieved from https://codeshack.io/basic-login-system-nodejs-express-mysql/
* Ram, P. (2021). Difference between Session Cookies vs. JWT (JSON Web Tokens), for session management. Retrieved from https://medium.com/@prashantramnyc/difference-between-session-cookies-vs-jwt-json-web-tokens-for-session-management-4be67d2f066e
* express-session. (n.d.). Retrieved from https://expressjs.com/en/resources/middleware/session.html
* Chan, A. (2021). Cookie and Session (II) - How session works in express-session. Retrieved from https://medium.com/@alysachan830/cookie-and-session-ii-how-session-works-in-express-session-7e08d102deb8