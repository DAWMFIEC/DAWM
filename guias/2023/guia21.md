---
theme: jekyll-theme-leap-day
---

## Guía 20

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas



### Actividades

#### Railway

* Obtenga una cuenta en [Railway](https://railway.app/) autenticando mediante su cuentan en GitHub.
* Cree y configure un nuevo proyecto que supla el servicio de MySQL.
* Acceda a la configuración del proyecto y copie los datos para la conexión que se encuentran en `Connect` > `Available Variables`: _MYSQL_URL_, _MYSQLDATABASE_, _MYSQLHOST_, _MYSQLPASSWORD_, _MYSQLPORT_ y _MYSQLUSER_.

#### Ambiente de producción

* Desde la línea de comandos

	```
	set NODE_ENV=development
	```

#### Migraciones


* Genere las migraciones por cada una de las entidades, con:
	
	```
	sequelize migration:create --name <ENTIDAD>
	```

* Ejecute las migraciones, con:
	
	```
	sequelize db:migrate
	```

**NOTA:** Para revertir las migraciones, use: `sequelize db:migrate:undo:all`

#### Generadores de datos


* Genere los generadores de datos por cada una de las entidades, con:
	
	```
	sequelize seed:create --name <ENTIDAD>
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