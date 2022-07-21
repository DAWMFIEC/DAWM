---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM-2022/)

Express - Bases
===============




Node.js® es un entorno de ejecución para JavaScript construido con el [motor de JavaScript V8 de Chrome (Enlaces a un sitio externo.)](https://v8.dev/ "https://v8.dev/"). Mientras que Express permite crear una infraestructura web rápida, minimalista y flexible para Node.js

Considere el tutorial [Express - Bases](https://dawfiec.github.io/DAWM-2022/tutoriales/express_bases.html).

Esqueleto de un proyecto web
============================

Utilizaremos el [generador de aplicaciones de express](https://expressjs.com/en/starter/generator.html). Desde la línea de comandos:

* Instale el **express-generator**, con: `npm i -g express-generator`
  + Para obtener ayuda acerca del comando, utilice: `express --help`

* Cree un sitio de prueba llamado **misitio**, con: `express --view=ejs misitio`
  
  

* El generador producirá la siguiente estructura de archivos:

  <pre><code>
    .
    ├── app.js           <b style="background-color: #FFCC00;"># La aplicación que se ejecutará en el servidor</b>
    ├── package.json     <b style="background-color: #FFCC00;"># Módulos de la aplicación</b>
    ├── package-lock.json
    ├── bin
    │   └── www          <b style="background-color: #FFCC00;"># Punto de arranque de la aplicación</b>
    ├── public           <b style="background-color: #FFCC00;"># Directorio de archivos estáticos</b>
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes           <b style="background-color: #FFCC00;"># Rutas de la aplicación en módulos separados</b>
    │   ├── index.js
    │   └── users.js
    └── views            <b style="background-color: #FFCC00;"># Vistas de la aplicación por renderizar</b>
        ├── error.ejs
        └── index.ejs
  </code></pre>


* Compruebe el funcionamiento del servidor, con:  
  
  <pre><code>
      cd misitio   
      npm install   
      SET DEBUG=misitio:\* & npm start
  </code></pre>
    
* Acceda al URL `http://localhost:3000/` 


  



Referencias 
===========

* * *

* Introducción a Express/Node - Aprende sobre desarrollo web MDN. (2022). Retrieved 21 July 2022, from https://developer.mozilla.org/es/docs/Learn/Server-side/Express_Nodejs/Introduction
* Express - Infraestructura de aplicaciones web Node.js. (2022). Retrieved 21 July 2022, from https://expressjs.com/es/
* Express application generator. (2022). Retrieved 21 July 2022, from https://expressjs.com/en/starter/generator.html
Express Tutorial Part 2: Creating a skeleton website - Learn web development MDN. (2022). Retrieved 21 July 2022, from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website