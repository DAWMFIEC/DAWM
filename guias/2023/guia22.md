---
theme: jekyll-theme-leap-day
---

## Guía 22

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

* Clone localmente tu repositorio **rest_api**.
* Abra el proyecto en VSCode y levante el servidor.

#### Dependencias Locales

* Instale los módulos **jsonwebtoken** y **dotenv** 

  ```command
  npm install --save jsonwebtoken dotenv
  ```

### Actividades

#### TOKEN SECRET

* En la raíz del proyecto, cree el archivo `.env`. Agregue las variables **PORT** y **TOKEN_SECRET**. Para el valor de  **TOKEN_SECRET**, copie la secuencia de datos aleatorios generados en el proyecto _security_.

  ```
  PORT=3002
  TOKEN_SECRET=...8uUYwT...
  ```

* En el archivo `app.js`, agregue el módulo `dotenv` y cargue los datos de configuración.

  ```text
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

#### Autorización

* Versiona local y remotamente el repositorio **rest_api**.

### Fundamental

* Métodos de autenticación en [X](https://twitter.com/alexxubyte/status/1737151765097951544)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Authentication in REST APIs acts as the crucial gateway, ensuring that solely authorized users or applications gain access to the API&#39;s resources.<br><br>Some popular authentication methods for REST APIs include:<br><br>1. Basic Authentication: <br>Involves sending a username and password with… <a href="https://t.co/Y4CKqZUhBF">pic.twitter.com/Y4CKqZUhBF</a></p>&mdash; Alex Xu (@alexxubyte) <a href="https://twitter.com/alexxubyte/status/1737151765097951544?ref_src=twsrc%5Etfw">December 19, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

* Authentication and Authorization with JWTs in Express.js. (2020). Retrieved 21 August 2023, from https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/


### Documentación

* 

### Términos

autenticación, autorización

### Referencias

* 