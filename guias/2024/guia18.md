---
theme: jekyll-theme-leap-day
---

## Guía 18

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2024/proyecto04)

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

### Actividades previas

#### Schema DB

1. Descargue el archivo [security](recursos/security.sql).
2. Acceda a MySQL Workbench y ejecute el script.

#### CRUD UI

1. Descargue el archivo [crud](recursos/crud.zip).
2. Compruebe el funcionamiento de las ventanas modales con las **Add New User**, **Edit** y **Delete**.

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
2. Agregue el script **autostart** en _./package.json_.

    ```typescript
    ...
      "scripts": {
        "start": "node ./bin/www",
        "autostart": "nodemon ./bin/www"
      },
    ...
    ```

3. Desde la línea de comandos, inicie el servidor:

    ```command
    npm run autostart
    ```

4. Compruebe la salida de la URL [http://localhost:3002/users](http://localhost:3002/users)
5. (STOP 1) Versiona local y remotamente el repositorio **security**.

#### Express - Archivos estáticos y Vistas

1. Del archivo descargado:
    + Mueva el archivo `crud-style.css` dentro de la carpeta _security/public/stylesheets_.
    + Mueva el archivo `crud-javascript.js` dentro de la carpeta _security/public/javascripts_.

2. Cree el archivo _security/views/crud.ejs_. Copie todo el contenido de _test.html_ dentro del archivo _crud.ejs_.

3. Edite el enrutador _security/views/users.js_ con la ruta a la carpeta pública.

    ```html
    ...
    <!-- 1. Referencia al archivo estático en public -->
    <link rel="stylesheet" href="stylesheets/crud-style.css">
    ...
    <!-- 2. Referencia al archivo estático en public -->
    <script src="javascripts/crud-javascript.js" defer></script>
    ...
    ```

4. Edite el enrutador _security/routes/users.js_ con la renderización de la vista.
    
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

5. Compruebe la salida de la URL [http://localhost:3002/users](http://localhost:3002/users)
6. (STOP 2) Versiona local y remotamente el repositorio **security**.

#### Express - ORM


1. Desde la línea de comandos: 
    + Genere los archivos de configuración de Sequelize, con: `sequelize init`
    + Reconstruya los modelos con las credenciales de acceso y el esquema de la base de datos, con: 

      ```command
      sequelize-auto -h 127.0.0.1 -d security -u <USUARIO_ADMIN> -x <CONTRASEÑA> -p 3306
      ```

2. Modifique el archivo `config/config.json`, en el ambiente **development**, con los datos de conexión con el motor de bases de datos.

    ```json
    "development": {
      "username": "<USUARIO_ADMIN>",
      "password": "<CONTRASEÑA>",
      "database": "security",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    ...
    ```

3. Edite el enrutador _security/routes/users.js_.
    
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

4. Edite la vista _security/views/crud.js_.

    ```html
    ...
    <!-- 3. Título de la página -->
    <title><%= title %></title>
    ...
    <!-- 4. Título de la tabla -->
    <h2><%= title %></h2>
    ...
    <!-- 5. Cabecera de datos -->
    <th>ID</th>
    <th>Name</th>
    <th>Role</th>
    <th>Actions</th>
    ...
    <!-- 6. Arreglo de usuarios -->
    <tbody>
        <% users.forEach( user => { %>
        <tr>
            <td>
                <span class="custom-checkbox">
                    <input type="checkbox" id="checkbox1"
                        name="options[]" value="1">
                    <label for="checkbox1"></label>
                </span>
            </td>
            <td><%= user.iduser %></td>
            <td><%= user.name %></td>
            <td></td>
            <td>
                <a href="#editEmployeeModal" class="edit"
                    data-toggle="modal"><i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Edit">&#xE254;</i></a>
                <a href="#deleteEmployeeModal"
                    class="delete" data-toggle="modal"><i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Delete">&#xE872;</i></a>
            </td>
        </tr>
        <% }) %>
    </tbody>
    ```

5. Compruebe la salida de la URL [http://localhost:3002/users](http://localhost:3002/users)
6. (STOP 3) Versiona local y remotamente el repositorio **security**.


4. Versiona local y remotamente el repositorio **security**.

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