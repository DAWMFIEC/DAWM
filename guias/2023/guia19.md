---
theme: jekyll-theme-leap-day
---

## Guía 19

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

#### Base de datos Relacional

* Copie y ejecute el script (DDL y DML) SQL del esquema [security](recursos/security.sql) en el MySQL Community Server.

#### Github

* Crea un repositorio en GitHub con el nombre **security**.

#### Express - Proyecto Base

Desde la línea de comandos

* Cree un proyecto en Express, con: `express --view=ejs security`
* Dentro de la carpeta del proyecto, instale los módulos: `npm install --save sequelize mysql2 dotenv swagger-autogen swagger-ui-express`
* Genere los archivos de configuración de Sequelize, con: `sequelize init`
* Reconstruya los modelos con las credenciales de acceso y el esquema de la base de datos, con: `sequelize-auto -h 127.0.0.1 -d security -u root -x root -p 3306`
* Modifique el archivo `config/config.json`, en el ambiente **development**, con los datos de conexión con el motor de bases de datos.

### Actividades


### SALT

Desde la línea de comandos.

* Acceda a la interfaz de **nodeJS**, con:
  
  ```typescript
  node
  ```

* Genere y copie la secuencia de datos aleatorios, con:

  ```typescript
  let crypto = require('crypto');
  crypto.randomBytes(16).toString('base64');
  ```

* En la raíz del proyecto, cree el archivo `.env`. Agregue las variables **PORT** y **SALT**. Asigne el  como **SALT**.

  ```
  PORT=3002
  SALT=...8uUYwT...
  ```

#### Manejador de rutas: users.js

* Referencie los modelos autogenerados y el operador **Op**.

  ```typescript
  var express = require('express');
  var router = express.Router();

  let crypto = require('crypto');

  /* Referencia a los modelos */
  const Users = require('../models').users;
  const Roles = require('../models').roles;
  const UsersRoles = require('../models').users_roles;
  const { Op } = require("sequelize");
  ...
  ```

* Agregue el controlador para el verbo HTTP `POST` con la ruta `/register` 

  ```typescript
  router.post('/register', async (req, res,next) => {

  	// Parámetros en el cuerpo del requerimiento
  	let { name, password, roleName } = req.body;

  	try {

  		// Encripte la contraseña
  		let salt = process.env.SALT
		let hash = crypto.createHmac('sha512',salt).update(password).digest("base64");
		let passwordHash = salt + "$" + hash

  		// Guarde los datos del usuario
	    let user = await Users.create({ name: name, password: passwordHash })
	    
	    // Obtenga el rol en función del nombre
	    let role = await Roles.findOne({ 
	      where: { 
	        [Op.and]: [
	          {name: roleName}
	        ]
	      } 
	    })

	    // Cree la relación usuario-rol
	    await UsersRoles.create({ users_iduser: user.iduser, roles_idrole: role.idrole })

	    res.status(200).json({ user: user.name, role: role.name })

	} catch (error) {
	    res.status(400).send(error)
	}

  })

  module.exports = router;
  ```

* Versiona local y remotamente el repositorio **security**.

### Fundamental

Renderización de las vistas, Encriptación

### Documentación

Sequelize

Express

### Términos

vistas, encriptación

### Referencias
