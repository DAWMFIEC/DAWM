---
theme: jekyll-theme-leap-day
---

## Guía 20

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

#### Modelo EER a SQL script

* Del modelo de su base de datos, considere al menos dos entidades y su relación entre sí. 
* Siga las instrucciones del tutorial [Modelo EER a SQL](tutoriales/modeloeer_sql)

* Express
* ORM

### Actividades

#### Express - Base

Desde la línea de comandos:

1. Instale el módulo **express-generator** de manera global, con:

	```
	npm i -g express-generator
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

