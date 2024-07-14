---
theme: jekyll-theme-leap-day
---

<style type="text/css" media="screen">
  details {
    margin: 5% 0%;
    padding: 2%;
    border: dashed 2px black;
    border-radius: 11px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  }

  details div {
    color: lightseagreen;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
  }

  img.description {
    width: 50%;
    text-align: center;
    margin: 0 25%;
  }
</style>

## Guía 18

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2024/proyecto04)

### Actividades previas

#### Schema DB

1. Descargue el archivo [security](recursos/security.sql).
2. Acceda a MySQL Workbench y ejecute el script.

#### CRUD UI

1. Acceda a [Bootstrap Crud Data Table for Database with Modal Form](https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=crud-data-table-for-database-with-modal-form).
2. Haga clic en el botón **View Code**.
3. Haga clic en el botón **Download Source Code** y descargue el archivo _test.html_.
4. Acceda al archivo _test.html_ y compruebe el funcionamiento de las ventanas modales con las **Add New Employee**, **Edit** y **Delete**.

    <div align="center">
      <img src="imagenes/crud_base.png" width="70%">
    </div>

### Actividades en clases

#### Github

1. Cree un repositorio en GitHub con el nombre **security**.
2. Asegúrese de marcar la opción **Add .gitignore** y seleccione la opción **Node**.
3. Clone y acceda a la carpeta en el directorio local.

#### Express - Proyecto Base

1. Dentro de la carpeta _security_, mediante la línea de comandos: 
    + Inicialice un proyecto en Express, con: `express --view=ejs .`
    + Instale los módulos **sequelize** (`ORM` para el acceso a la BD), **mysql2** (conector con MySQL), **dotenv** y **nodemon**. 

    ```command
    npm install --save sequelize mysql2 dotenv nodemon
    ```
2. Genere los archivos de configuración de Sequelize, con: `sequelize init`
3. Reconstruya los modelos con las credenciales de acceso y el esquema de la base de datos, con: 

    ```command
    sequelize-auto -h 127.0.0.1 -d security -u root -x root -p 3306
    ```

4. Modifique el archivo `config/config.json`, en el ambiente **development**, con los datos de conexión con el motor de bases de datos.

    ```json
    "development": {
      "username": "root",
      "password": "root",
      "database": "security",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    ...
    ```

5. Agregue el script **autostart** en _./package.json_.

    ```typescript
    ...
      "scripts": {
        "start": "node ./bin/www",
        "autostart": "nodemon ./bin/www"
      },
    ...
    ```

6. Desde la línea de comandos, inicie el servidor:

    ```command
    npm run autostart
    ```

7. Compruebe la salida de las URLs [http://localhost:3002/](http://localhost:3002/) y [http://localhost:3002/users](http://localhost:3002/users)

8. (STOP 1) Versiona local y remotamente el repositorio **security**.

#### Express - Vistas

1. Dentro de la carpeta de la carpeta _security/views_, cree el archivo _crud.ejs_.
2. Copie el contenido de _test.html_ dentro del archivo _crud.ejs_.
3. Edite el enrutador _security/routes/users.js_.
    
    ```typescript
    ...

    /* GET users listing. */
    router.get('/', function(req, res, next) {
    
      //res.send('respond with a resource');

      /* 1. Renderización de la vista */
      res.render('crud');
    
    });

    module.exports = router;

    ```

7. Compruebe la salida de la URL [http://localhost:3002/users](http://localhost:3002/users)
8. (STOP 2) Versiona local y remotamente el repositorio **security**.

#### Express - ORM

1. Edite el enrutador _security/routes/users.js_.
    
    ```typescript
    ...
    var express = require('express');
    var router = express.Router();

    /* 1. Modelos y Operadores */

    const Users = require('../models').users;

    /* GET users listing. */

    /* 2. Callback asíncrono */
    router.get('/', async function(req, res, next) {

      //res.send('respond with a resource');

      /* 3. Requerimiento a la BD mediante el modelo */
      let users = await Users.findAll({ })

      /* 4. Renderización de la respuesta en la vista */
      res.render('crud', { title: 'CRUD of users', users: users });

    });
    ```
2. Edite la vista _security/views/crud.js_.

    |  Antes   |  Después  |
    | :------- | :---------|
    | ```html
    <div class="col-sm-6">
      <h2>Manage <b>Employees</b></h2>
    </div>
    ``` | ```html
    <div class="col-sm-6">
      <h2><%= title %></h2>
    </div>
    ``` |

1. Versiona local y remotamente el repositorio **security**.

### Documentación

* Documentación de [Express](https://expressjs.com/) y [Sequelize](https://sequelize.org/docs/v6/getting-started/).

### Fundamental

* Introduction to Sequelize: Simplifying Database Operations in Node.js en [X](https://x.com/prod42net/status/1806236123217158619)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">&quot;Discover the power of Sequelize for simplifying database operations in Node.js with <a href="https://twitter.com/vaishnavirawool?ref_src=twsrc%5Etfw">@VaishnaviRawool</a>&#39;s insightful guide. From advantages to getting started, it&#39;s a must-read for developers. <a href="https://twitter.com/hashtag/NodeJS?src=hash&amp;ref_src=twsrc%5Etfw">#NodeJS</a> <a href="https://twitter.com/hashtag/Sequelize?src=hash&amp;ref_src=twsrc%5Etfw">#Sequelize</a> <a href="https://twitter.com/hashtag/DatabaseOps?src=hash&amp;ref_src=twsrc%5Etfw">#DatabaseOps</a> <a href="https://twitter.com/hashtag/ORM?src=hash&amp;ref_src=twsrc%5Etfw">#ORM</a>&quot; <a href="https://t.co/DvopupkfYV">https://t.co/DvopupkfYV</a></p>&mdash; prod42net (@prod42net) <a href="https://twitter.com/prod42net/status/1806236123217158619?ref_src=twsrc%5Etfw">June 27, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

* Encriptación de una contraseña con SALT en [X](https://twitter.com/El_Pop/status/1560356275774447618)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="es" dir="ltr">Como almacenar passwords en una BD para que estos no estén expuestos en el caso de un acceso a esta base:<br><br>el truco es reconstruir el password a partir de su hash y el salt previamente generado y almacenado. <a href="https://t.co/sdESoBZOeg">pic.twitter.com/sdESoBZOeg</a></p>&mdash; Fernando Romo (@El_Pop) <a href="https://twitter.com/El_Pop/status/1560356275774447618?ref_src=twsrc%5Etfw">August 18, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

vistas, orm, encriptación, salt

### Referencias

* Bootstrap Crud Data Table for Database with Modal Form. (n.d.). Retrieved from https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=crud-data-table-for-database-with-modal-form
* (N.d.). Retrieved from https://expressjs.com/en/guide/using-template-engines.html