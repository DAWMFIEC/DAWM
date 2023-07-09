---
theme: jekyll-theme-leap-day
---

## Guía 15

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.

### Actividades

#### Preparación de los datos * 

**Nota:** Estas instrucciones aplican si su fuente de datos es de formato CSV, caso contrario pase a la siguiente actividad. 

* Descargue su fuente de datos en formato CSV.
* Desde la línea de comando:
	- Instale globalmente [csvtojson](https://www.npmjs.com/package/csvtojson), con:

		```
		npm i -g csvtojson
		```
	- Convierta el archivo CSV a JSON, con:

		```
		csvtojson <ARCHIVO>.csv > <ARCHIVO>.json
		```


#### Firebase (Realtime Database)

* Utilice los datos previamente preparados y siga las instrucciones del tutorial [Firebase - Realtime Database](/DAWM/tutoriales/firebase_realtime_database/).

### Términos

csvtojson, firebase

### Referencias

* csvtojson. (2019). Retrieved 9 July 2023, from https://www.npmjs.com/package/csvtojson
* DAWM. (2023). Retrieved 9 July 2023, from https://dawmfiec.github.io/DAWM/tutoriales/firebase_realtime_database.html