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
* Cree y configure un nuevo proyecto que supla el servicio de MySQL.
* Acceda a la configuración del proyecto y copie los datos para la conexión. Revise en `Connect` > `Available Variables`: _MYSQL_URL_, _MYSQLDATABASE_, _MYSQLHOST_, _MYSQLPASSWORD_, _MYSQLPORT_ y _MYSQLUSER_.

#### Ambiente de producción

Desde la línea de comandos, en la raíz del proyecto en Express.

* Coloque la variable de entorno _NODE_ENV_ en modo `development`

	```
	set NODE_ENV=development
	```

#### Migraciones

Desde la línea de comandos, en la raíz del proyecto en Express.

* Genere las migraciones por cada una de las tablas del proyecto, con:
	
	```
	sequelize migration:create --name <TABLA>
	```

**NOTA:** Empiece por las tablas sin claves foráneas.

* Por cada archivo de migración, agregue el código para hacer (**up**) o deshacer (**down**):

	```typescript
	...
	/* IMPORTE El ARCHIVO CON EL MODELO */
	const <NOMBRE_CLASE> = require('../models').<NOMBRE_ARCHIVO>;
	
	...
	module.exports = {
	  async up (queryInterface, Sequelize) {
	    
	    /* SINCRONIZACIÓN DEL MODELO CON LA CREACIÓN DE LA TABLA */
	    await <NOMBRE_CLASE>.sync()
	  },

	  async down (queryInterface, Sequelize) {
	    
	    /* ELIMINAR LA TABLA */
	    await queryInterface.dropTable('<NOMBRE_CLASE>');
	  }
	};
	```

* Ejecute las migraciones, con:
	
	```
	sequelize db:migrate
	```

**NOTA:** Para revertir las migraciones, use: `sequelize db:migrate:undo:all`

#### Generadores de datos


* Genere los generadores de datos por cada una de las tablas del proyecto, con:
	
	```
	sequelize seed:create --name <TABLA>
	```

* Ejecute las migraciones, con:
	
	```
	sequelize db:seed:all
	```

#### NodeJS - Express: REST - API




### Términos

Deployment

### Referencias

* Moisset, D. (2023). Estructura y nombres de archivos y carpetas de un proyecto Angular - Carpeta 'environments'. Retrieved 30 July 2023, from https://www.tutorialesprogramacionya.com/angularya/detalleconcepto.php?punto=62&codigo=62&inicio=60