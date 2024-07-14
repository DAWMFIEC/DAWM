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
2. Haga clic en **View Code**.
3. Descargue el código en la opción **Download Source Code**
4. Compruebe el funcionamiento de las ventanas modales con las **Add New Employee**, **Edit** y **Delete**.

    <div align="center">
      <img src="imagenes/crud_base.png" width="70%">
    </div>

### Actividades en clases

#### Github

1. Cree un repositorio en GitHub con el nombre **security**.
2. Asegúrese de marcar la opción **Add .gitignore** y seleccione la opción **Node**.
3. Clone y acceda a la carpeta en el directorio local.

#### Express - Proyecto Base

1. Desde la línea de comandos, en la carpeta _security_: 
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

7. (STOP 1) Compruebe la salida de las URLs [http://localhost:3002/](http://localhost:3002/) y [http://localhost:3002/users](http://localhost:3002/users)



1. Versiona local y remotamente el repositorio **security**.

### Documentación

* Documentación de [Express](https://expressjs.com/) y [Sequelize](https://sequelize.org/docs/v6/getting-started/).

### Fundamental

* Encriptación de una contraseña con SALT en [X](https://twitter.com/El_Pop/status/1560356275774447618)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="es" dir="ltr">Como almacenar passwords en una BD para que estos no estén expuestos en el caso de un acceso a esta base:<br><br>el truco es reconstruir el password a partir de su hash y el salt previamente generado y almacenado. <a href="https://t.co/sdESoBZOeg">pic.twitter.com/sdESoBZOeg</a></p>&mdash; Fernando Romo (@El_Pop) <a href="https://twitter.com/El_Pop/status/1560356275774447618?ref_src=twsrc%5Etfw">August 18, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

vistas, encriptación

### Referencias

* Bootstrap Crud Data Table for Database with Modal Form. (n.d.). Retrieved from https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=crud-data-table-for-database-with-modal-form
* (N.d.). Retrieved from https://expressjs.com/en/guide/using-template-engines.html