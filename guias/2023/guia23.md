---
theme: jekyll-theme-leap-day
---

## Guía 23

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

* Acceda a [Railway](https://railway.app/) mediante su cuentan en GitHub.

### Actividades


* Clone localmente los repositorios **security** y **rest_api**.
* Levante el servidor y compruebe el funcionamiento en el navegador.

#### Railway - Servicio MySQL

* Cree un proyecto de Railway con el servicio MySQL, con: `New Project` > `Provision MySQL`
  + Dentro del proyecto, cree otro nuevo servicio MySQL. 

**NOTA:** Su proyecto debe contener dos (2) servicios MySQL, uno para cada proyecto (**security** y **rest_api**).

* Por cada servicio MySQL, Copie las **credenciales de conexión**:
  + En la opción `Variables`: _MYSQLDATABASE_, _MYSQLHOST_, _MYSQLPASSWORD_, _MYSQLPORT_ y _MYSQLUSER_.

#### MySQL Workbench - Migración

* Dentro de la conexión local, por cada esquema (**northwind** y **security**) por separado, con:
  + Haga clic en la opción **Server** > **Data Export**.
  + Seleccione el esquema con las tablas.
  + Seleccione la opción **Export to Self-Contained File** con un nombre específico. 
  + Haga clic en la opción **Start Export**.

* Por cada conjunto de credenciales de conexión:
  + Cree una nueva conexión
  + Haga clic en la opción **Server** > **Data Import**.
  + Seleccione la opción **Import from Self-Contained File** con el nombre específico. 
  + Seleccione en la opción _Default Target Schema_: **railway**.
  + Haga clic en la opción **Start Import**.

#### Express - REST API: Conexión con Railway - Servicio MySQL

* En cada proyecto:
  + Modifique el archivo `config/config.json`, en el ambiente de producción (clave `production`). 
  + Cambie los valores con las **credenciales de conexión** correspondientes.
  + Versione los cambios en el repositorio local y remoto.



### Fundamental

### Documentación

### Términos

### Referencias

* Express Tutorial Part 7: Deploying to production - Learn web development MDN. (2023). Retrieved 2 January 2023, from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/deployment
