---
theme: jekyll-theme-leap-day
---

## Guía 20

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

#### Nodejs y Express

* Node.js® es un entorno de ejecución para JavaScript construido con el [motor de JavaScript V8 de Chrome](https://v8.dev/ "https://v8.dev/"). 
* Mientras que [Express](https://expressjs.com/es/) permite crear una infraestructura web rápida, minimalista y flexible el backend para Node.js

#### Sequelize

* Sequelize es un [ORM](https://www2.deloitte.com/es/es/pages/technology/articles/que-es-orm.html) para Nodejs que te permite agilizar el desarrollo de aplicaciones que incluyen la conexión con bases de datos relacionales como Postgres, MySQL, MariaDB, SQLite y SQL Server.
* El módulo [sequelize-auto](https://www.npmjs.com/package/sequelize-auto) sirve para reconstruir los modelos de una base de datos preconstruida (tablas, relaciones y datos) a un proyecto de Express.

#### Modelo EER a SQL script

* Del modelo de su base de datos, considere al menos dos entidades y su relación entre sí. 
* Siga las instrucciones del tutorial [Modelo EER a SQL](/DAWM/tutoriales/modeloeer_sql)


### Actividades

#### Express - Base

Desde la línea de comandos:

* Instale los módulos **Express Generator**, **Sequelize CLI** y **Sequelize auto** de manera global, con:

	```
	npm i -g express-generator sequelize-cli sequelize-auto
	```

* Cree un proyecto para su REST - API, p.e. `rest_libreria`, con: 

	```
	express --view=ejs rest_<NOMBRE_DEL_PROYECTO>
	```

* Acceda a la carpeta del proyecto, instale las dependencias y corra la aplicación, con:

	```
	cd rest_<NOMBRE_DEL_PROYECTO>
	npm install
	SET DEBUG=rest-<NOMBRE_DEL_PROYECTO>:* & npm start
	```

* Compruebe los resultados al acceder a `http://localhost:3000`

#### ORM Sequelize

Dentro de la carpeta del proyecto y desde la línea de comandos:

* Instale Sequelize y el conector para MySQL para el proyecto, con: 

	```
	npm install --save sequelize mysql2
	```

* Genere los archivos de configuración de Sequelize, con: 

	```
	sequelize init
	```  

* Modifique el archivo `config/config.json` con los datos para la conexión con el motor de bases de datos. En este caso, el ambiente a utilizar es **development**.

	```
	{
	  "development": {
	    "username": "root",
	    "password": <CONTRASEÑA>,
	    "database": <NOMBRE_SCHEMA>,
	    "host": "127.0.0.1",
	    "dialect": "mysql"
	  },
	  ...
	```

#### ORM Sequelize Auto

Desde la línea de comandos, en la raíz de la carpeta del proyecto.

* Reconstruya los modelos lógicos desde las entidades relacionales, con: 

	```
	sequelize-auto -h "127.0.0.1" -d <NOMBRE_SCHEMA> -u "root" -x <CONTRASEÑA> -p 3306
	```

**NOTA:** Los valores de `<NOMBRE_SCHEMA>` y `<CONTRASEÑA>` son cadenas de caracteres por lo que debe colocarlo entre comillas dobles

#### Manejador de rutas y registro en la aplicación

* Cree el archivo manejador de rutas `routes/rest_<MODELO>.js`. 
* En `app.js`, relacione la ruta del URL **`'/rest/<MODELO>'`** con el manejador de rutas.

	```typescript
	...
	var indexRouter = require('./routes/index');
	...
	
	/* REFERENCIA AL MANEJADOR DE RUTAS */
	var <MODELO>Router = require('./routes/rest_<MODELO>');
	...
	app.use('/', indexRouter);
	...
	
	/* RELACIÓN ENTRE LA RUTA DEL URL CON LA REFERENCIA CON EL MANEJADOR DE RUTAS */
	app.use('/rest/<MODELO>', <MODELO>Router);
	...
	``` 

**NOTA:** En este caso el valor de `<MODELO>` es `libros`. 

* Revise la respuesta con el URL `http://localhost:3000/rest/<MODELO>`

#### REST: GET-All

Para obtener TODOS los registros de una entidad en una base de datos relacional, implemente el controlador para el verbo **GET** con el método **findAll** de la clase.

* Modifique el archivo manejador de rutas `routes/rest_<MODELO>.js`

* Incluya los módulos y modelos en el encabezado del manejador de rutas.

	```typescript
	var express = require('express');
	var router = express.Router();

	const { Sequelize, Op } = require('sequelize');

	/* IMPORTE EL MODELO */
	const <NOMBRE_CLASE> = require('../models').<NOMBRE_ARCHIVO>;
	...
	```

* Cree el controlador para el verbo GET de la ruta **`/findAll/json`** que retorna un json con todos los registros.

	```typescript
	  ...
	  router.get('/findAll/json', function(req, res, next) {  

	  	/* MÉTODO ESTÁTICO findAll  */

	    <NOMBRE_CLASE>.findAll({  
	        attributes: { exclude: ["updatedAt", "createdAt"] } ,
	    })  
	    .then(resultado => {  
	        res.json(resultado);  
	    })  
	    .catch(error => res.status(400).send(error)) 

	  });
	  ...
	```

**NOTA:** En este caso el valor de `<NOMBRE_ARCHIVO>` es `libro` y de `<NOMBRE_CLASE>` es `claseLibro`.

* Revise la respuesta con el URL `http://localhost:3000/rest/<MODELO>/findAll/json`

### Términos

reverse engineer, forward engineer, mysql workbench

### Referencias

* Creating a Secure REST API in Node.js. (2021). Retrieved 7 August 2021, from https://www.toptal.com/nodejs/secure-rest-api-in-nodejs 
* GitHub - sequelize/sequelize-auto: Automatically generate bare sequelize models from your database. (2021). Retrieved 7 August 2021, from https://github.com/sequelize/sequelize-auto 
* Route Parameters in Express. (2019). Retrieved 7 August 2021, from https://masteringjs.io/tutorials/express/route-parameters
* Manual Sequelize. (2021). Retrieved 7 August 2021, from https://sequelize.org/master/manual/model-querying-basics.html#applying-where-clauses