---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM-2022/)

Express - Parámetros y Cadena de consultas
==========================================

Express.js ofrece dos mecanismos para proveer de datos al servidor para el filtrado de datos: parámetros y cadena de consultas


Proyecto en Express
===================

* * *

Utiliza el proyecto que desarrollaste con el tutorial de [Express - Bases](https://dawfiec.github.io/DAWM-2022/tutoriales/express_bases.html), [Express - Bootstrap](https://dawfiec.github.io/DAWM-2022/tutoriales/express_bootstrap.html) y [Express - Formularios](https://dawfiec.github.io/DAWM-2022/tutoriales/express_forms.html).

* Instala las dependencias, con: `npm install`
* Verifica que funcione correctamente al levantar los servicios: `SET DEBUG=misitio:\* & npm start`

Cadena de consultas (Query String)
==================================
* * *

Una cadena de consulta es parte de una URL después del signo de interrogación (?). Sirve para enviar datos al servidor, que se utilizarán como filtros para la respuesta.

* **Current month**


Parámetros
==========
* * *

Otra forma para pasar datos al servidor, es colocar información dentro de la ruta URL real. A este mecanismo se denomina parámetros de ruta en Express. 

* **Last quarter**



Referencias 
===========

* * *

* ᐉ Obtener cadenas de consulta y parámetros en Express.js Pharos. (2021). Retrieved 1 August 2022, from https://pharos.sh/obtener-cadenas-de-consulta-y-parametros-en-express-js/
* Query vs. URL Parameters in Express.js. (2020). Retrieved 1 August 2022, from https://javascript.plainenglish.io/query-strings-url-parameters-d1a35b9a694f
* Get Query Strings and Parameters in Express.js. (2017). Retrieved 1 August 2022, from https://stackabuse.com/get-query-strings-and-parameters-in-express-js/