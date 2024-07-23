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

    + **Usuario:** superadmin, **Contraseña:** superadmin

    <div align="center">
      <img src="imagenes/user_superadmin.jpg" class="description">
    </div>

    + **Usuario:** someuser, **Contraseña:** someuser

    <div align="center">
      <img src="imagenes/user_someuser.jpg" class="description">
    </div>
    
   
5. (STOP 1) Versiona local y remotamente el repositorio **security**.

#### Session

node
require('crypto').randomBytes(64).toString('base64');
TOKEN_SECRET='...9udMMwr...'

npm install express-session --save

const session = require('express-session');

app.use(session({
  secret: process.env.TOKEN_SECRET,
  name: 'session.security', 
  resave: false,
  saveUninitialized: false,
}));

request.session.loggedin = true;
request.session.username = username;

<a href="/logout" class="nav-item nav-link messages"><i class="fa fa-power-off"></i> Logout</a></a>

#### Autenticación

/middleware/authentication_session.js

/* Autenticación */

var authenticateSession = (req, res, next) => {
    if(req.session.loggedin) {
        return next()
    } else{
        return res.redirect("/")
    }
}

module.exports = authenticateSession;

app.use('/users', authenticateSession,  usersRouter);

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

### Referencias

* Autenticación y autorización en node.js mediante Express.js. (n.d.). Retrieved from https://ull-esit-pl-1617.github.io/estudiar-cookies-y-sessions-en-expressjs-victor-pamela-jesus/cookies/chapter6.html
* Adams, D. (2024). Basic Login System with Node.js, Express, and MySQL. Retrieved from https://codeshack.io/basic-login-system-nodejs-express-mysql/
* Ram, P. (2021). Difference between Session Cookies vs. JWT (JSON Web Tokens), for session management. Retrieved from https://medium.com/@prashantramnyc/difference-between-session-cookies-vs-jwt-json-web-tokens-for-session-management-4be67d2f066e
* express-session. (n.d.). Retrieved from https://expressjs.com/en/resources/middleware/session.html
* Chan, A. (2021). Cookie and Session (II) - How session works in express-session. Retrieved from https://medium.com/@alysachan830/cookie-and-session-ii-how-session-works-in-express-session-7e08d102deb8