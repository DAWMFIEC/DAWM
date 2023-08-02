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

1. Instale los módulos **Express Generator**, **Sequelize CLI** y **Sequelize auto** de manera global, con:

	```
	npm i -g express-generator sequelize-cli sequelize-auto
	```

2. Cree un proyecto para su REST - API, p.e. `rest_libreria`, con: 

	```
	express --view=ejs rest_<NOMBRE_DEL_PROYECTO>
	```

3. Acceda a la carpeta del proyecto, instale las dependencias y corra la aplicación, con:

	```
	cd rest_<NOMBRE_DEL_PROYECTO>
	npm install
	SET DEBUG=rest-<NOMBRE_DEL_PROYECTO>:* & npm start
	```


### Términos

reverse engineer, forward engineer, mysql workbench

### Referencias

* Creating a Secure REST API in Node.js. (2021). Retrieved 7 August 2021, from https://www.toptal.com/nodejs/secure-rest-api-in-nodejs 
* GitHub - sequelize/sequelize-auto: Automatically generate bare sequelize models from your database. (2021). Retrieved 7 August 2021, from https://github.com/sequelize/sequelize-auto 
* Route Parameters in Express. (2019). Retrieved 7 August 2021, from https://masteringjs.io/tutorials/express/route-parameters
* Manual Sequelize. (2021). Retrieved 7 August 2021, from https://sequelize.org/master/manual/model-querying-basics.html#applying-where-clauses