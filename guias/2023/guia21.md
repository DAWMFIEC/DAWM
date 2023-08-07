---
theme: jekyll-theme-leap-day
---

## Guía 20

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

[Railway](https://docs.railway.app/getting-started) es una plataforma de despliegue donde puede aprovisionar infraestructura, desarrollar con esa infraestructura localmente y luego implementar en la nube.

### Actividades

#### Railway

* Obtenga una cuenta en [Railway](https://railway.app/) autenticando mediante su cuentan en GitHub.
* Cree y configure un nuevo proyecto que supla el servicio de MySQL. Acceda a `New` > `Database` > `Add MySQL`.
* Acceda a la configuración del proyecto y copie los datos para la conexión. Acceda a `Connect` > `Available Variables`: _MYSQL_URL_, _MYSQLDATABASE_, _MYSQLHOST_, _MYSQLPASSWORD_, _MYSQLPORT_ y _MYSQLUSER_.

#### Ambiente de producción

Desde la línea de comandos, en la raíz del proyecto en Express.

* Coloque la variable de entorno _NODE_ENV_ en modo `development`

	```
	set NODE_ENV=development
	```

**NOTA:** En adelante, todas los instrucciones se ejecutarán en el servicio en Railway.

#### Migraciones

Desde la línea de comandos, en la raíz del proyecto en Express.

* Cree las migraciones por cada una de las tablas del proyecto, con:
	
	```
	sequelize migration:create --name <TABLA>
	```

**NOTA:** Empiece por los nombres de tablas sin claves foráneas.

* Por cada archivo de migración, agregue el código para hacer (**up**) o deshacer (**down**):

	```typescript
	...
	/* IMPORTE El ARCHIVO CON EL MODELO */
	const <NOMBRE_CLASE> = require('../models').<NOMBRE_TABLA>;
	
	...
	module.exports = {
	  async up (queryInterface, Sequelize) {
	    
	    /* SINCRONIZACIÓN DEL MODELO CON LA CREACIÓN DE LA TABLA */
	    await <NOMBRE_CLASE>.sync()
	  },

	  async down (queryInterface, Sequelize) {
	    
	    /* ELIMINAR LA TABLA */
	    await queryInterface.dropTable('<NOMBRE_TABLA>');
	  }
	};
	```

#### Generadores de datos

Desde la línea de comandos, en la raíz del proyecto en Express.

* Cree los generadores de datos por cada una de las tablas del proyecto, con:
	
	```
	sequelize seed:create --name <TABLA>
	```

**NOTA:** Empiece por los nombres de tablas sin claves foráneas.

* Por cada archivo generador de dato, agregue el código para hacer (**up**) o deshacer (**down**):

	```typescript
	...
	module.exports = {
	  async up (queryInterface, Sequelize) {
	    
	    /* INSERTAR LOS REGISTROS EN LA TABLA */
	    await queryInterface.bulkInsert('<NOMBRE_TABLA>', [
	     
	     /*

     	CREE LOS OBJETOS SON (CLAVE-VALOR)
		TOME COMO REFERENCIA LOS NOMBRES DE LAS CLAVES DE LOS MODELOS 

		POR EJEMPLO:
	     
	    {
	        idautor: 1,
	        nombre: 'J. R. R. Tolkien'
	    }
	    */

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


* Registre todas las referencias de las rutas (dentro de la carpeta `routes`) en la aplicación (`app.js`).
* Ejecute la aplicación
* Revise la respuesta con los URLs `http://localhost:3000/rest/<NOMBRE_CLASE>/findAll/json`

### Términos

migraciones, generadores de datos

### Referencias

* Sebhastian, N. (2023). How to create a database table using Sequelize code. Retrieved 7 August 2023, from https://sebhastian.com/sequelize-create-table/
* topics, O. (2023). Migrations Sequelize. Retrieved 7 August 2023, from https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-model-and-migration
* topics, O. (2023). Migrations Sequelize. Retrieved 7 August 2023, from https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed