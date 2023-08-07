---
theme: jekyll-theme-leap-day
---

## Guía 21

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

[Railway](https://docs.railway.app/getting-started) es una plataforma de despliegue donde puede aprovisionar infraestructura, desarrollar con esa infraestructura localmente y luego implementar en la nube.

### Actividades

#### Railway

* Obtenga una cuenta en [Railway](https://railway.app/) autenticando mediante su cuentan en GitHub.
* Cree y configure un nuevo proyecto que supla el servicio de MySQL. Acceda a `New` > `Database` > `Add MySQL`.
* Acceda a la configuración del proyecto y copie los datos para la conexión. Acceda a `Connect` > `Available Variables`: _MYSQL_URL_, _MYSQLDATABASE_, _MYSQLHOST_, _MYSQLPASSWORD_, _MYSQLPORT_ y _MYSQLUSER_.


#### Ambiente de producción


* Modifique el archivo el archivo `config/config.json`, el ambiente de producción (clave `production`), con los valores previos.

* En el proyecto en Express, desde la línea de comandos, coloque la variable de entorno _NODE_ENV_ con el valor `production`

	```
	set NODE_ENV=production
	```

**NOTA:** En adelante, todas los instrucciones se ejecutarán en el servicio con MySQL de Railway.

#### Migraciones

Desde la línea de comandos, en la raíz del proyecto en Express.

* Cree las migraciones por cada una de las tablas de la base de datos del proyecto, con:
	
	```
	sequelize migration:create --name <TABLA>
	```

**NOTA:** Empiece por los nombres de tablas SIN claves foráneas.

* En cada archivo de migración, agregue el código para aplicar (**up**) o deshacer (**down**):

	```typescript
	...
	/* IMPORTE El ARCHIVO CON EL MODELO */
	const <NOMBRE_CLASE> = require('../models').<NOMBRE_TABLA>;
	
	...
	module.exports = {
	  async up (queryInterface, Sequelize) {
	    
	    /* CREACIÓN DE LA TABLA A PARTIR DE LA CLASE */
	    await <NOMBRE_CLASE>.sync()
	  },

	  async down (queryInterface, Sequelize) {
	    
	    /* ELIMINACIÓN LA TABLA */
	    await queryInterface.dropTable('<NOMBRE_TABLA>');
	  }
	};
	```

#### Generadores de datos

Desde la línea de comandos, en la raíz del proyecto en Express.

* Cree los generadores de datos por cada una de las tablas de la base de datos del proyecto, con:
	
	```
	sequelize seed:create --name <TABLA>
	```

**NOTA:** Empiece por los nombres de tablas SIN claves foráneas.

* Por cada archivo generador de dato, agregue el código para hacer (**up**) o deshacer (**down**):

	```typescript
	...
	module.exports = {
	  async up (queryInterface, Sequelize) {
	    
	    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
	    await queryInterface.bulkInsert('<NOMBRE_TABLA>', [
	     
	     /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
	     {
	     	<CLAVE_1_DEL_MODELO>: <VALOR_1>,
	     	<CLAVE_2_DEL_MODELO>: <VALOR_2>,
	     	...
	     	<CLAVE_N_DEL_MODELO>: <VALOR_N>,
	     },
	     {
	     	...
	     }
	     ...
	     ], {});
	  },

	  async down (queryInterface, Sequelize) {
	    
	    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
	    await queryInterface.bulkDelete('<NOMBRE_TABLA>', null, {});
	  }
	};
	```

#### Express - ORM

Desde la línea de comandos, en la raíz del proyecto en Express. 

* Ejecute las migraciones, con:
	
	```
	sequelize db:migrate
	```

**NOTA:** Para revertir la ejecución de todas las migraciones, use: `sequelize db:migrate:undo:all`

* Ejecute las migraciones, con:
	
	```
	sequelize db:seed:all
	```

**NOTA:** Para revertir la ejecución de todos los generadores de datos, con: `sequelize db:seed:undo:all`


* Cree todos los manejadores de rutas en la carpeta `routes`. 
* Registre todos los manejadores de rutas con las rutas respectivas, en archivo de la aplicación (`app.js`).
* Ejecute la aplicación, con: 
	
	```
	npm start
	```

* Revise la respuesta de todas las rutas creadas, de acuerdo con la plantilla de URLs `http://localhost:3000/rest/<NOMBRE_CLASE>/findAll/json`

### Términos

servicios, migraciones, generadores de datos

### Referencias

* Sebhastian, N. (2023). How to create a database table using Sequelize code. Retrieved 7 August 2023, from https://sebhastian.com/sequelize-create-table/
* topics, O. (2023). Migrations Sequelize. Retrieved 7 August 2023, from https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration
* topics, O. (2023). Migrations Sequelize. Retrieved 7 August 2023, from https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed