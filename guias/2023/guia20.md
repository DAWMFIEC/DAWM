---
theme: jekyll-theme-leap-day
---

## Guía 20

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

* Clone localmente tu repositorio **security**.
* Abra el proyecto en VSCode y levante el servidor.

#### Dependencias Locales

Desde la línea de comandos

* Dentro de la carpeta del proyecto, instale los módulos: 

  ```command
  npm install --save jsonwebtoken swagger-autogen swagger-ui-express
  ```

### Actividades

#### TOKEN SECRET

Desde la línea de comandos

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

#### users.js - POST

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

* Agregue el controlador para el verbo HTTP `POST` con la ruta `/generateToken`

  ```typescript
  ...

	router.post('/generateToken', async (req, res,next) => {

		// Parámetros en el cuerpo del requerimiento
		let { name, password } = req.body;

		try {

  		// Encripte la contraseña
  		let salt = process.env.SALT
  		let hash = crypto.createHmac('sha512', salt).update(password).digest("base64");
  		let passwordHash = salt + "$" + hash

  		/* Obtenga el usuario y su rol */
  		let user = await Users.findOne({ where: { [Op.and]: [ { name: name }, { password: passwordHash } ] } })
  		let relations = await UsersRoles.findOne({ where: { [Op.and]: [ { users_iduser: user.iduser } ] } });
  		let roles = await Roles.findOne({ where: { [Op.and]: [ { idrole: relations.roles_idrole } ] } });

  		/* Genera el token con los datos encriptados */
  		const accessToken = jwt.sign({ name: user.name, role: roles.name }, process.env.TOKEN_SECRET);

  		res.json({ accessToken });

		} catch (error) {
			res.status(400).send(error)
		}

	});

	module.exports = router;
  ```

#### Swagger

* En la raíz del proyecto, cree el archivo **swagger.js**. En la variable **endpointsFiles** coloque las rutas a los controladores de los modelos.

  ```typescript
  const swaggerAutogen = require('swagger-autogen')()

  const outputFile = './swagger_output.json'
  const endpointsFiles = ['./routes/users.js']

  swaggerAutogen(outputFile, endpointsFiles)
  ```

* Modifique el archivo **package.json** y agregue la entrada _swagger-autogen_.

  ```typescript
  ...
  "scripts": {
    ...
    "swagger-autogen": "node swagger.js"
    ...
  },
  ...
  ```

* Desde la línea de comandos, ejecute el comando:

  ```command
  npm run swagger-autogen
  ```

* En el archivo **swagger_ouput.json**, modifique el puerto (**3002**) y las URLs de cada endpoint (clave _paths_) de acuerdo con las rutas en la aplicación:

  ```typescript
    "host": "localhost:3002",
    ...
    "paths": {
      "/users": {
    		...
      },
      "/users/register": {
        ...
      },
      "/users/generateToken": {
        ...
      }
    }
    ...
  ```

* Modifique el archivo generado **app.js** con la referencia al módulo _swagger-ui-express_ y al archivo generado _swagger_output.json_. Además, agregue la ruta a la documentación.


  ```typescript
  ...
  /* REFERENCIA AL MÓDULO */
  const swaggerUi = require('swagger-ui-express')

  /* REFERENCIA AL ARCHIVO GENERADO */
  const swaggerFile = require('./swagger_output.json')
  ...

  const app = express();

  ...
  app.use('/users', usersRouter);

  /* CONFIGURACIÓN DE LA RUTA A LA DOCUMENTACIÓN */
  app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerFile))
  ...
  ```

* Ejecute el servidor, con:

  ```command
  npm start
  ```

* Compruebe el _endpoint_ para generar el token [http://localhost:3002/documentation/#/default/post_users_generateToken](http://localhost:3002/documentation/#/default/post_users_generateToken) a partir de las credenciales de acceso.

* Versiona local y remotamente el repositorio **security**.

### Fundamental

* Estructura de JSON Web Tokens (JWT) en [X](https://twitter.com/ProgressiveCod2/status/1734893719290319143)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">What&#39;s the most scalable solution to authentication?<br><br>JSON Web Tokens or JWT.<br><br>A single JWT can contain all the required information about an entity, making it an ideal candidate for authentication.<br><br>There are 3 main components of a JWT.<br><br>Here&#39;s the structure of JWT:<br><br>[1] Header… <a href="https://t.co/gwbX8UJU7l">pic.twitter.com/gwbX8UJU7l</a></p>&mdash; Saurabh Dashora (@ProgressiveCod2) <a href="https://twitter.com/ProgressiveCod2/status/1734893719290319143?ref_src=twsrc%5Etfw">December 13, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Documentación

* Revise la documentación del estándar [RFC 7519](https://jwt.io/) para JWT.

### Términos

middleware, autenticación, autorización, JSON Web Tokens

### Referencias

* JWT.IO. (2023). Retrieved 21 August 2023, from https://jwt.io/
* How To Use JSON Web Tokens (JWTs) in Express.js DigitalOcean. (2023). Retrieved 21 August 2023, from https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
* Concepts, C., & Basics, M. (2023). Model Querying - Basics Sequelize. Retrieved 21 August 2023, from https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
