---
theme: jekyll-theme-leap-day
---

## Guía 18

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.

#### Compilación

* Compile la aplicación en Angular en el directorio de salida `dist/`, con: 

	```
	ng build
	```
	
	o 

	```
	npm run build
	```

**NOTA:** Este comando crea la carpeta `dist/<NOMBRE_APLICACION>` con los archivos que pueden ejecutarse en un [servidor HTTP](https://www.hostinger.es/tutoriales/que-es-un-servidor-web). Revise el contenido de la carpeta.

#### Servidor HTTP

* Desde la línea de comandos, en la raíz del proyecto, levante el servidor HTTP de Python:

	```
	python -m http.server --dir dist/<NOMBRE_APLICACION>
	```

* En el navegador, acceda al URL `http://localhost:8000/` y verifique el funcionamiento correcto de su aplicación.

### Actividades



### Términos

servidor HTTP, 

### Referencias

* 