---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

Railway - MySQL
=======================

<p align="center">
  <img height="120" src="imagenes/logotype-dark.png">
</p>

Railway permite alojar aplicaciones gratuitamente (por tiempo limitado) incluso con el servicio de MySQL.


Proyecto: MySQL
===============

* * *

* Desde la página principal [railway.app/dashboard](https://railway.app/dashboard).

<p align="center">
  <img src="imagenes/railway_newproject.png">
</p>

* Cree y configure un nuevo proyecto que supla con el servicio de MySQL

<p align="center">
  <img width="60%" src="imagenes/railway_project_mysql.png">
</p>


* Copie los datos para la conexión que se encuentran en la opción `Variables` 

<p align="center">
  <img width="60%" src="imagenes/railway_mysql_variables.png">
</p>


Repositorio: API
=================

* * *


* Cree un nuevo repositorio en Github: **api**
  + Copie y pegue el código de la aplicación [album/api](https://github.com/DAWFIEC/DAWM-apps), de la rama `hito7-api`, en su nuevo repositorio.
  + Modifique el archivo `config/config.json` en la clave **production** con los datos para la conexión. Agregue la clave **port** al objeto de configuración.

  <pre><code>
  ...
  "production": {
    "username": "root",
    "password": "Zrp...A29",
    "database": "railway",
    "host": "containers-us-west-XYZ.railway.app",
    "port": "7254",
    "dialect": "mysql"
  }
  ...
  </code></pre>

  + Modifique el archivo `package.json` en la clave **scripts** con los scripts a ejecutar con el despliegue (i) para la generación de la base de datos y (ii) iniciar la aplicación en el servidor

  <pre><code>
  ...
  "scripts": {
      "db:reset": "npm install sequelize pg && npm install --save-dev sequelize-cli && npx sequelize-cli db:drop && npx sequelize-cli db:create && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all",
      "start": "npm run db:reset && node ./bin/www",
      ...
  }
  ...
  </code></pre>

  + Guarde los cambios en el repositorio remoto.


Aplicación: API
===============

* * *

* Cree y configure un nuevo proyecto a partir de un repositorio de Github, de acuerdo con las instrucciones de [Railway - Sitio Estático](https://dawfiec.github.io/DAWM/tutoriales/railway_sitio_estatico.html).

<p align="center">
  <img width="60%" src="imagenes/railway_project_api.png">
</p>

* En la opción `Variables` configure la variable de `NODE_ENV` con el valor `production`

<p align="center">
  <img width="60%" src="imagenes/railway_node_env.png">
</p>

* Compruebe accediendo a las URLs disponibles en el API REST, por ejemplo: `https://api-production-2437.up.railway.app/rest/fotos/findAll/json`

<p align="center">
  <img width="60%" src="imagenes/railway_api_data.png">
</p>


Logs
======

* * *

* Desde el panel central de la aplicación, acceda a la opción `View Logs > Deploy Logs` e identifique la ejecución del script: **db:reset**

<p align="center">
  <img width="60%" src="imagenes/railway_dbcreate.png">
</p>


Comprobación de tablas y registros
==================================

* * *

* Desde la página principal [railway.app/dashboard](https://railway.app/dashboard).

<p align="center">
  <img src="imagenes/railway_projects.png">
</p>

* Identifique las tablas migradas y los registros generados a partir del despliegue de la aplicación.

<p align="center">
  <img width="60%" src="imagenes/railway_tables.png">
  <img width="60%" src="imagenes/railway_data.png">
</p>


Referencias 
===========

* * *

* Express Tutorial Part 7: Deploying to production - Learn web development MDN. (2023). Retrieved 2 January 2023, from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment
