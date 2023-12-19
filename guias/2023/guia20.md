---
theme: jekyll-theme-leap-day
---

## Guía 20

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

* Clone localmente los repositorios **rest_api** y **security**.
* Abra los proyectos en un espacio de trabajo de VSCode
* Levante el servidor para cada aplicación.

### Actividades

#### Security

##### Token Secret

Desde la línea de comandos

* Instale el módulo **jsonwebtoken**, con:

  ```command
  npm install --save jsonwebtoken
  ```

* Acceda a la interfaz de **nodeJS**, con:
  
  ```typescript
  node
  ```

* Genere y copie la secuencia de datos aleatorios, con:

  ```typescript
  > let crypto = require('crypto');
  > crypto.randomBytes(64).toString('hex');
  ```

* En la raíz del proyecto, modifique el archivo `.env`. Agregue la variable **TOKEN_SECRET**. Asigne la secuencia de datos aleatorios a la variable **TOKEN_SECRET**.

  ```
  PORT=3002
  SALT=...8uUYwT...
  TOKEN_SECRET=...26e402586e2faa8da4c98a35f1b20d6b033c60...
  ```

##### users.js - POST

* Agregue el módulo **jsonwebtoken**.

  ```typescript
  var express = require('express');
  var router = express.Router();

  /* Módulo jsonwebtoken */
  const jwt = require('jsonwebtoken');

  /* Módulo crypto */
  let crypto = require('crypto');
  ...
  ```

* Agregue el controlador para el verbo HTTP `POST` con la ruta `/getToken`

  ```typescript
    ...

	router.post('/getToken', async (req, res,next) => {



  	});

	module.exports = router;
  ```

#### REST API

* Instale el módulo **jsonwebtoken**, con:

  ```command
  npm install --save jsonwebtoken
  ```

### Fundamental

* Estructura de JSON Web Tokens (JWT) en [X](https://twitter.com/ProgressiveCod2/status/1734893719290319143)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">What&#39;s the most scalable solution to authentication?<br><br>JSON Web Tokens or JWT.<br><br>A single JWT can contain all the required information about an entity, making it an ideal candidate for authentication.<br><br>There are 3 main components of a JWT.<br><br>Here&#39;s the structure of JWT:<br><br>[1] Header… <a href="https://t.co/gwbX8UJU7l">pic.twitter.com/gwbX8UJU7l</a></p>&mdash; Saurabh Dashora (@ProgressiveCod2) <a href="https://twitter.com/ProgressiveCod2/status/1734893719290319143?ref_src=twsrc%5Etfw">December 13, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Documentación

* Revise la documentación del estándar [RFC 7519](https://jwt.io/) para JWT.

### Términos

middleware, autenticación, autorización, JSON Web Tokens

### Referencias

* JWT.IO. (2023). Retrieved 21 August 2023, from https://jwt.io/
* Authentication and Authorization with JWTs in Express.js. (2020). Retrieved 21 August 2023, from https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/
* How To Use JSON Web Tokens (JWTs) in Express.js DigitalOcean. (2023). Retrieved 21 August 2023, from https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
* Concepts, C., & Basics, M. (2023). Model Querying - Basics Sequelize. Retrieved 21 August 2023, from https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
