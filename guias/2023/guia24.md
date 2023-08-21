---
theme: jekyll-theme-leap-day
---

## Guía 07

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.

#### JSON Web Tokens

[JSON Web Token (abreviado JWT)](https://jwt.io/) es un estándar abierto basado en JSON propuesto por IETF (RFC 7519) para la creación de tokens de acceso que permiten la propagación de identidad y privilegios. Por ejemplo, un servidor podría generar un token indicando que el usuario tiene privilegios de administrador y proporcionarlo a un cliente.

#### Express - REST API

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.
* Escoja un modelo del proyecto y compruebe el acceso a los datos en el navegador con: `http://localhost:3000/rest/<NOMBRE_CLASE>/findAll/json`

### Actividades

#### Base de Datos - Security

* Desde _MySQL Workbench_, ejecute el script:
	
	```text
	CREATE SCHEMA IF NOT EXISTS `security` DEFAULT CHARACTER SET utf8 ;
	USE `security` ;
	
	
	CREATE TABLE IF NOT EXISTS `security`.`usuario` (
	  `idusuario` INT NOT NULL AUTO_INCREMENT,
	  `nombre` VARCHAR(45) NULL,
	  `contrasena` VARCHAR(200) NULL,
	  `rol` VARCHAR(45) NULL,
	  PRIMARY KEY (`idusuario`));

	INSERT INTO `security`.`usuario` (`idusuario`, `nombre`, `contrasena`, `rol`)
	VALUES (1, "admin", "admin123key","admin");
	```

#### Express - Security

* Desde la línea de comandos: 

	+ Cree un proyecto de express, acceda a la carpeta e instale los módulos:

		```
		express --no-view security
		cd security
		npm install --save dotenv sequelize mysql2 dotenv
		```

	+ Inicialice la estructura de archivos para _sequelize_, con:

		```
		sequelize init
		```

	+ Configure los datos de conexión en **config/config.json**.
	+ Reconstruya los modelos lógicos, con:
		```
		sequelize-auto -h "127.0.0.1" -d security -u "root" -x <CONTRASEÑA> -p 3306
		```

#### Generación del Token Secreto

* En la línea de comandos, acceda a node y genere un token secreto de seguridad, con:
	
	```text
	node
	> require('crypto').randomBytes(64).toString('hex')
	```

* Copie todos los caracteres del **token secreto**, sin las comillas.

* Salga de node, con:

	```
	.exit
	```

#### Token Secreto de aplicación

* En la raíz del proyecto **security**, cree el archivo `.env` 
* Agregue las variables `PORT` y `TOKEN_SECRET`. Asigne a la `TOKEN_SECRET` el valor previamente generado. 

	```
	PORT=3001
	TOKEN_SECRET=09f26e402586e2faa8da4c98a35f1b20d6b033c60...
	```

#### Generador del access token

* En el archivo `app.js`, agregue el módulo `dotenv` y cargue los datos de configuración.

	```text
	var logger = require('morgan');
	...

	/* MÓDULO dotenv */
	const dotenv = require('dotenv');
	dotenv.config();

	...
	var indexRouter = ...
	```

* Agregue a `routes\users.js` el manejador a la ruta `/login`, con:

	```text
	...
	/* ACCEDA AL MÓDULO jwt */ 
	const jwt = require('jsonwebtoken');

	/* ACCEDA AL MODELO usuario */
	const Usuario = require('../models').usuario;
	const { Op } = require("sequelize");
	
	...

	/* MANEJADOR DE LA RUTA '/login' */
	router.post('/login', function (req, res, next) {

	  const { nombre, contrasena } = req.body;

	  Usuario.findOne({
	      where: {
	        [Op.and]: [
	          { nombre: nombre },
	          { contrasena: contrasena }
	        ]
	      }
	    })
	    .then(resultado => {

	      /* GENERE EL accessToken CON LOS DATOS CIFRADOS */
	      const accessToken = jwt.sign({ nombre: resultado.nombre, rol: resultado.rol }, process.env.TOKEN_SECRET);

	      res.json({
	        accessToken
	      });

	    })
	    .catch(error => res.status(400).send(error))

	});

	module.exports = router;
	``` 

* Levante el servidor del proyecto **security**
	

#### Token de acceso

* Desde una nueva línea de comandos, haga un requerimiento:

	```
	curl -X POST -d "nombre=admin&contrasena=admin123key" "http://localhost:3001/users/login" 
	```

* Copie el **accessToken** para las futuras peticiones.

	```
	{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6Ikp..."} 
	```

#### 

### Términos

middleware, autenticación, autorización, JSON Web Tokens

### Referencias

* JWT.IO. (2023). Retrieved 21 August 2023, from https://jwt.io/
* Authentication and Authorization with JWTs in Express.js. (2020). Retrieved 21 August 2023, from https://stackabuse.com/authentication-and-authorization-with-jwts-in-express-js/
* How To Use JSON Web Tokens (JWTs) in Express.js DigitalOcean. (2023). Retrieved 21 August 2023, from https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
* Concepts, C., & Basics, M. (2023). Model Querying - Basics | Sequelize. Retrieved 21 August 2023, from https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators