---
theme: jekyll-theme-leap-day
---

## Guía 22

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

#### JWT TOKENS

* Clone localmente el repositorio **security**.
* Abra el proyecto en VSCode y levante el servidor.
* Acceda a [http://localhost:3002/users/getToken](http://localhost:3002/users/getToken)
  * Genere un par de jwt tokens. Uno para cada usuario con un rol diferente (**user** y **admin**). 

#### Dependencias Locales

* Clone localmente el repositorio **rest_api**.
* Instale los módulos **jsonwebtoken** y **dotenv** 

  ```command
  npm install --save jsonwebtoken dotenv
  ```

* Edite el archivo `swagger_output.json` con las entradas **securityDefinitions** y **security**:

  ```typescript
  ...
  "schemes": [
    ...
  ],


  "securityDefinitions": {
    "ApiKeyAuth": {
      "name": "jwt_token",
      "in": "header",
      "type": "apiKey",
      "description": "JWT Token header"
    }
  },
  "security": [ { "ApiKeyAuth": [] } ],

  "paths": {
    ...

  ...
  ```

### Actividades

#### TOKEN SECRET

* En la raíz del proyecto, cree el archivo `.env`. Agregue las variables **PORT**, **ADMIN** y **TOKEN_SECRET**. Para el valor de  **TOKEN_SECRET**, copie la secuencia de datos aleatorios generados en el proyecto _security_.

  ```
  PORT=3002
  ADMIN=admin
  TOKEN_SECRET=...8uUYwT...
  ```

* En el archivo `app.js`, agregue el módulo `dotenv` y cargue los datos de configuración.

  ```typescript
  var logger = require('morgan');
  ...

  /* MÓDULO dotenv */
  const dotenv = require('dotenv');

  /* CARGA DE DATOS DE CONFIGURACION EN MEMORIA */
  dotenv.config();

  ...
  var indexRouter = ...

  var app = express();
  ```

#### Autenticación

* Cree el archivo `/middleware/auth.js`, con:
  
  ```typescript
  const jwt = require('jsonwebtoken');

  /* VERIFICADOR DE AUTENTICACIÓN */
  var authenticateJWT = (req, res, next) => {
      const jwt_token = req.headers["jwt_token"];

      if (jwt_token) {
          const token = jwt_token.split(' ')[1];

          /* Payload decodificado */
          jwt.verify(token, process.env.TOKEN_SECRET, (err, payload) => {
              if (err) {
                  return res.sendStatus(403);
              }

              /* Datos del usuario */
              console.log(payload)

              /* Forma parte del requerimiento */
              req.user = payload;
              
              return next();
          });
      } else {
          return res.sendStatus(403);
      }
  };

  module.exports = authenticateJWT;
  ```

* Modifique el archivo `app.js`, obtenga la referencia al _middleware_ y la intercepción para la ruta `/suppliers`

  ```typescript
  ...

  var suppliersRouter = ...;

  /* Referencia al middleware */
  var authJWT = require('./middleware/auth');
  
  const swaggerUi = ...

  ...
  app.use('/users', ...);

  /* Agregue el middleware para la ruta '/suppliers' */
  app.use('/suppliers', authJWT, suppliersRouter);

  app.use('/documentation', ... )
  ...
  ```

* Ejecute el servidor, con `npm start`
* Acceda a `http://localhost:3000/documentation`

#### Validación de autenticación

* **Prueba 1:**
  1. Realice un requerimiento a la ruta `/suppliers/findAll`
  2. Compruebe la salida **403 - Error: Forbidden**

* **Prueba 2:**
  1. Con el botón **Authorize**, acceda la ventana **Available authorizations**
  2. Agregue valor del jwt token: `Bearer eyJhbG...`
  3. Realice un requerimiento a la ruta `/suppliers/findAll`
  4. Compruebe la salida **200 - OK** con el arreglo de los datos.

#### Autorización

* Edite el archivo `routes/suppliers.js` para el controlador para el verbo HTTP `GET` con la ruta `/findAll` 

  ```typescript
  router.get('/findAll', function(req, res, next) {

    /* Verificador de autorización */

    const { role } = req.user;

    if (role !== process.env.ADMIN) {
        return res.sendStatus(401);
    }

    Suppliers.findAll({ ... })  
    ...
  });
  ...
  ```

* Ejecute el servidor, con `npm start`
* Acceda a `http://localhost:3000/documentation`

#### Validación de autorización

* **Prueba 1:**
  1. Con el botón **Authorize**, acceda la ventana **Available authorizations**
  2. Utilice el jwt token de un usuario con el rol **user**: `Bearer eyJhbG...`
  3. Realice un requerimiento a la ruta `/suppliers/findAll`
  4. Compruebe la salida **401 - Error: Unauthorized**

* **Prueba 2:**
  1. Con el botón **Authorize**, acceda la ventana **Available authorizations**
  2. Utilice el jwt token de un usuario con el rol **admin**: `Bearer eyJhbG...`
  3. Realice un requerimiento a la ruta `/suppliers/findAll`
  4. Compruebe la salida **200 - OK** con el arreglo de los datos.

* Versiona local y remotamente los repositorios **rest_api** y **security**.

### Fundamental

* Métodos de autenticación en [X](https://twitter.com/alexxubyte/status/1737151765097951544)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Authentication in REST APIs acts as the crucial gateway, ensuring that solely authorized users or applications gain access to the API&#39;s resources.<br><br>Some popular authentication methods for REST APIs include:<br><br>1. Basic Authentication: <br>Involves sending a username and password with… <a href="https://t.co/Y4CKqZUhBF">pic.twitter.com/Y4CKqZUhBF</a></p>&mdash; Alex Xu (@alexxubyte) <a href="https://twitter.com/alexxubyte/status/1737151765097951544?ref_src=twsrc%5Etfw">December 19, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


### Documentación

* [Middleware](https://expressjs.com/es/guide/using-middleware.html) en ExpressJS.

### Términos

http methods, middleware, autenticación, autorización

### Referencias

* Authentication and Authorization with JWTs in Express.js. (2020). Retrieved 21 August 2023, from https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/
* WNPower, por: (2023). Qué es un error 403 Forbidden y cómo solucionarlo. Retrieved from https://www.wnpower.com/blog/que-es-error-403-forbidden-como-solucionarlo/
* Node.js User Authentication Guide. (n.d.). Retrieved from https://www.loginradius.com/blog/engineering/guest-post/nodejs-authentication-guide/