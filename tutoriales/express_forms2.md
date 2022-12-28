---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

Express - Formularios II
========================

El usuario, mediante el navegador, hace peticiones para traer información desde el servidor. Estas peticiones predeterminadas son etiquetadas con el verbo GET. Mientras que para enviar datos nuevos del cliente al servidor, se recomienda el uso de peticiones etiquetadas con el verbo POST mediante el uso de formularios.

<p align="center">
  <img width="250" src="imagenes/form.jpg">
</p>


Prerrequisito: REST
===================

Crea un nuevo proyecto, según [Express - Bases](https://dawfiec.github.io/DAWM/tutoriales/express_bases.html), [Express - ORM (Básico)](https://dawfiec.github.io/DAWM/tutoriales/express_ormbasico.html), [Express - ORM (Intermedio)](https://dawfiec.github.io/DAWM/tutoriales/express_ormintermedio.html), [Express - Parámetros de consulta y Parámetros de ruta](https://dawfiec.github.io/DAWM/tutoriales/express_pcpr.html) y [Express - REST](https://dawfiec.github.io/DAWM/tutoriales/express_rest.html).

* O, Una (merge) el proyecto con las [aplicaciones del curso](https://github.com/DAWFIEC/DAWM-apps) para la aplicación **album/api**
    - Para el hito: **`hito7-api`**
* Instale las dependencias, con: `npm install`
* Use la variable de entorno **PORT**, con: `set PORT=4444`
* Verifique el funcionamiento al levantar los servicios, con: `npm run devstart`


Proyecto en Express: Admin
==========================

* * *

Crea un nuevo proyecto, según [Express - Bases](https://dawfiec.github.io/DAWM/tutoriales/express_bases.html), [Express - Bootstrap](https://dawfiec.github.io/DAWM/tutoriales/express_bootstrap.html), [Express - Layouts y Partials](https://dawfiec.github.io/DAWM/tutoriales/express_partials.html) y [Express - Formularios I](https://dawfiec.github.io/DAWM/tutoriales/express_forms1.html).

* O, Clone el proyecto con las [aplicaciones del curso](https://github.com/DAWFIEC/DAWM-apps) para la aplicación **album/admin**
    - Para el hito: **`hito4-admin`**
* Instale las dependencias, con: `npm install`
* Use la variable de entorno **PORT**, con: `set PORT=3080`
* Verifique el funcionamiento al levantar los servicios, con: `npm run devstart`





* Compruebe el funcionamiento del servidor, con: **npm run devstart**
  + En el navegador, acceda a la ruta `"/photos/add"`
  + Complete el formulario con los datos solicitados y de clic en el botón **Add**
  + En el navegador, en la ruta `"/photos"`, verifique que aparezcan los datos recientemente ingresados.


Referencias 
===========

* * *

* HTML Snippets for Twitter Boostrap framework : Bootsnipp.com. (2021). Retrieved 1 August 2021, from [https://bootsnipp.com/snippets/dldxB](https://bootsnipp.com/snippets/dldxB)
* Express Tutorial Part 6: Working with forms - Learn web development MDN. (2021). Retrieved 1 August 2021, from [https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express\_Nodejs/forms](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms)
* Usuario iconos vectoriales gratuitos diseñados por Smashicons. (2021). Retrieved 1 August 2021, from [https://www.flaticon.es/icono-gratis/usuario\_149452?related\_id=149452&origin=pack](https://www.flaticon.es/icono-gratis/usuario_149452?related_id=149452&origin=pack)
* Get Query Strings and Parameters in Express.js. (2021). Retrieved 1 August 2021, from [https://stackabuse.com/get-query-strings-and-parameters-in-express-js](https://stackabuse.com/get-query-strings-and-parameters-in-express-js)