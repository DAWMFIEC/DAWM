---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM-2022/)

Express - Bootstrap
===============


Proyecto en Angular
===================

* * *

Utiliza el proyecto que desarrollaste con el tutorial de [Express - Bases](https://dawfiec.github.io/DAWM-2022/tutoriales/express_bases.html).

* Instala las dependencias, con: `npm install`
* Verifica que funcione correctamente al levantar los servicios: `SET DEBUG=misitio:\* & npm start`


Detección de cambios y reinicio del servidor
============================================

* * *

Desde la línea de comandos del proyecto:

* Agregue nodemon como módulo del proyecto, con: `npm install --save-dev nodemon`
  + Con esta instrucción se agregará la clave **devDependencies** en el package.json

	<pre><code>
	"devDependencies": {  
	     "nodemon": "X.Y.Z"  
	}
	</code></pre>

* En el `package.json`, dentro de la clave **scripts**, agregue la clave **devstart**:

	<pre><code>
	"scripts": {  
	  "start": "node ./bin/www",  
	  **"devstart": "nodemon ./bin/www"**  
	}  
	</code></pre>

* En adelante, levante el servidor, con: **npm run devstart**
  + Con este script, ya no será necesario reiniciar el servidor para ver los cambios en el navegador.


Referencias 
===========

* * *

* 