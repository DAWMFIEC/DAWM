---
theme: jekyll-theme-leap-day
---

## Guía 25

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.

### Actividades

#### Railway - Servicio MySQL

* Acceda a [Railway](https://railway.app/) mediante su cuentan en GitHub.
* En caso de **NO** haber creado un proyecto de Railway con el servicio MySQL.
  * Cree un nuevo proyecto vacío, con: `New Project` > `Provision MySQL`
* Copie las **credenciales de conexión**:
  * Acceda a `Connect` > `Available Variables`: _MYSQLDATABASE_, _MYSQLHOST_, _MYSQLPASSWORD_, _MYSQLPORT_ y _MYSQLUSER_.

#### Express - REST API: Conexión con Railway - Servicio MySQL

* Modifique el archivo `config/config.json`, en el ambiente de producción (clave `production`). 
* Cambie los valores con las **credenciales de conexión** correspondientes.
* Versione los cambios en el repositorio local y remoto.

#### Express - REST API: Scripts de automatización  

* Modifique el archivo `package.json` en la clave **scripts** con las instrucciones a ejecutar con el despliegue 
	
	+ **packages:install** para instalar los paquetes del proyecto, y
	+ **start** iniciar la aplicación en el servidor.
  + (OPCIONAL) **db:reset** ejecuta ciertas acciones sobre la base de datos: migra los modelos a tablas y popula con datos generados.

  <pre><code>
  ...
  "scripts": {
      
      "packages:install": "npm install sequelize pg && npm install --save-dev sequelize-cli",

      /* OPCIONAL: solo incluya este script si no ha ejecutado las migraciones y generadores de datos */
      
      "db:reset": "npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all", 
      

      /* OPCIONAL: solo incluya la instrucción npm run db:reset en caso de no haber ejecutado previamente 
      las migraciones y generadores de datos */

      "start": "npm run packages:install && npm run db:reset && node ./bin/www"
      ...
  }
  ...
  </code></pre>

* Versione los cambios en el repositorio local y remoto.

#### Railway - Servicio REST API

* Acceda a [Railway](https://railway.app/) mediante su cuentan en GitHub.
* Utilice el proyecto en Railway que contenga el servicio MySQL.
  * **Repositorio remoto:** Acceda a `New` > `GitHub Repo` y cree un servicio a partir del repositorio remoto en **GitHub**.
	* **Producción:** En la opción `Variables`, agregue la variable de `NODE_ENV` con el valor `production`.
	* **Dominio:** En la opción `Settings` > `Domains`, genere un dominio aleatorio para la aplicación en la opción `Generate Domain`. 
* Compruebe los endpoints del API REST, por ejemplo: `https://<NOMBRE_REPOSITORIO>-production.up.railway.app/rest/<NOMBRE_CLASE>/findAll/json`

#### Logs

* Desde el panel central de la aplicación, acceda a la opción `View Logs` > `Deploy Logs`
* Identifique la ejecución de las instrucciones: **start** y **packages:install**.

#### Angular

* En el servicio de la aplicación
  * Modifique los _endpoints_ por los URLs del servicio **Railway - REST API**.

### Términos

aprovisionar, despliegue automático

### Referencias

* Express Tutorial Part 7: Deploying to production - Learn web development MDN. (2023). Retrieved 2 January 2023, from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment
