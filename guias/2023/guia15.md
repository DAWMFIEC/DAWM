---
theme: jekyll-theme-leap-day
---

## Guía 15

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2023/proyecto05)

### Actividades previas

#### Preparación de los datos

Estas instrucciones aplican si su fuente de datos es de formato CSV, caso contrario pase a la siguiente actividad. 

* Descargue su fuente de datos en formato CSV.
* Desde la línea de comando:
	- Instale globalmente [csvtojson](https://www.npmjs.com/package/csvtojson), con:

		```
		npm i -g csvtojson
		```
	- Convierta el archivo CSV a JSON, con:

		```
		csvtojson <NOMBRE DEL ARCHIVO>.csv > <NOMBRE DEL ARCHIVO>.json
		```


#### Firebase (Realtime Database)

* Siga las instrucciones del tutorial [Firebase - Realtime Database](/DAWM/tutoriales/firebase_realtime_database).
	- Realice las pruebas de peticiones mediante la línea de comandos para [Todos](/DAWM/tutoriales/firebase_realtime_database.html#peticin---todos), [Por índice](/DAWM/tutoriales/firebase_realtime_database.html#peticin---por-ndice) y [Filtrado de datos](/DAWM/tutoriales/firebase_realtime_database.html#peticin---filtrado-de-datos).

#### JSON a TypeScript

* De la colección de datos, copie un objeto del arreglo.
* Utilice el servicio de [Transform Tools](https://transform.tools/json-to-typescript), para generar la interfaz en TypeScript a partir del objeto copiado.

### Actividades

* Clona localmente tu repositorio **mpa**.
* Abra el proyecto en VSCode y levante el servidor.

#### Interfaz de Tipo de Datos

* Cree una interfaz de Angular, con:

	```
	ng generate interface interfaces/<NOMBRE_INTERFAZ>
	```

* Coloque la interfaz generada a partir del objeto en lugar de la interfaz creada. 

#### Versionamiento

* Versiona local y remotamente el repositorio **mpa**.

### Fundamental

* Duet AI for Firebase en [X](https://twitter.com/Firebase/status/1730632854151762207)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Using AI to improve app development 🚀<br><br>Two AI announcements from Firebase Demo Day:<br>1️⃣ We started building Duet AI for Firebase, a helpful assistant for developers.<br>2️⃣ We&#39;re bringing AI-powered automated testing to App Distribution.<br><br>Get the details → <a href="https://t.co/4TmBtZ1v8o">https://t.co/4TmBtZ1v8o</a> <a href="https://t.co/6tnhfay0Rc">pic.twitter.com/6tnhfay0Rc</a></p>&mdash; Firebase (@Firebase) <a href="https://twitter.com/Firebase/status/1730632854151762207?ref_src=twsrc%5Etfw">December 1, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

csvtojson, firebase, interfaz, servicio, httpclient, inyección de dependencias, proveedor, directivas

### Referencias

* csvtojson. (2019). Retrieved 9 July 2023, from https://www.npmjs.com/package/csvtojson
* DAWM. (2023). Retrieved 9 July 2023, from https://dawmfiec.github.io/DAWM/tutoriales/firebase_realtime_database.html