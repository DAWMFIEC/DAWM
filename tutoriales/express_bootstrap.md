---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

Express - Bootstrap
===============

<p align="center">
  <img src="imagenes/node_express_bootstrap.webp">
</p>

Proyecto en Express
===================

* * *

Crea un nuevo proyecto, según [Express - Bases](https://dawfiec.github.io/DAWM/tutoriales/express_bases.html).

* O, Clone el proyecto con las [aplicaciones del curso](https://github.com/DAWFIEC/DAWM-apps) para la aplicación **album/admin**
    - Para el hito: **`hito1-admin`**

* Instala las dependencias, con: `npm install`
* Establezca la variable de entorno DEBUG para el proyecto, con: `SET DEBUG=admin:\*`
* Verifique el funcionamiento al levantar los servicios, con: `npm start`



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
	  ...
	  <b style="color:red">
	  "devstart": "nodemon ./bin/www"
		</b>
		...
	}  
	</code></pre>

* En adelante, levante el servidor, con: **`npm run devstart`**
  + Con este script, ya no será necesario reiniciar el servidor para ver los cambios en el navegador.

  <p align="center">
    <img width="405" height="220" src="imagenes/nodemon.png">
  </p>


Bootstrap - Dashboard example
=============================

* * *

* Descargue y descomprima los [ejemplos de Bootstrap](https://getbootstrap.com/docs/5.2/examples/)
* Utilice el ejemplo **Dashboard**.

### Archivos estáticos

* Copie el archivo **dashboard/dashboard.css** del Ejemplo Dashboard, a la carpeta **public/stylesheets** del Proyecto de Express.
* Copie el archivo **dashboard/dashboard.js** del Ejemplo Dashboard, a la carpeta **public/javascripts** del Proyecto de Express.

### Vista principal: etiquetas HTML

* Ejemplo Dashboard, del archivo **dashboard/index.html**
	+ Copie las etiquetas `<header>` y `<div.container-fluid>`

* Proyecto de Express, en el archivo **views/index.ejs**
	+ Reemplace TODO el contenido de la etiqueta `<body>` por las etiquetas copiadas.
	
### Vista principal: Bootstrap

* Elimine la referencia previa a cualquier hoja de estilo o script.
* Agregue la referencia a las hojas de estilo **bootstrap** y **dashboard.css**

```
  <head>
	...
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel='stylesheet' href='/stylesheets/dashboard.css' />
  </head>
```
	
* Agregue la referencia a **bootstrap.bundle.min.js**, **feather.min.js**, **Chart.min.js** y **dashboard.js**.

```
 <body>
	...
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/feather-icons@4.28.0/dist/feather.min.js" integrity="sha384-uO3SXW5IuS1ZpFPKugNNWqTZRRglnUJK6UAZ/gxOX80nxEkN9NcGZTftn6RzhGWE" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.9.4/dist/Chart.min.js" integrity="sha384-zNy6FEbO50N+Cg5wap8IKA4M/ZnLJgzc6w2NqACZaK0u0FXfOWRRJOnQtpZun8ha" crossorigin="anonymous"></script>
    <script src="/javascripts/dashboard.js"></script>
  </body>
```

* Compruebe el funcionamiento del servidor, con: **npm run devstart**
* Acceda al URL `http://localhost:3000/` 

<p align="center">
  <img src="imagenes/express_bootstrap.png">
</p>


Referencias 
===========

* * *

* Express Tutorial Part 2: Creating a skeleton website - Learn web development MDN. (2022). Retrieved 22 July 2022, from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website#enable_server_restart_on_file_changes
* Mark Otto, a. (2022). Bootstrap. Retrieved 22 July 2022, from https://getbootstrap.com/