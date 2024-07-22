---
theme: jekyll-theme-leap-day
---

## Guía 20

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

#### Login UI

1. Descargue el archivo [template_login](recursos/template_login.zip). Fuente: [Tutorial Republic - Snippets](https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=simple-login-form)

    <div align="center">
      <img src="imagenes/login_base.jpg" class="description">
    </div>

### Actividades en clases

#### Express - GET '/'

1. Coloque el archivo estático _login-style.css_ dentro de la _'security/public/stylesheets'_.
2. Reemplace el contenido de _'security/views/index.ejs'_ por todo el contenido de _template_login.html_.
3. Edite la vista _'security/views/index.ejs'_ con la ruta a la carpeta con los archivos estáticos.
4. Compruebe la salida de la URL [http://localhost:3000/](http://localhost:3000/)

    <div align="center">
      <img src="imagenes/login_base.jpg" class="description">
    </div>

5. (STOP 1) Versiona local y remotamente el repositorio **security**.

#### Express - POST '/login'

1. Edite la vista _'security/views/index.js'_, con:

    + El método de envío y la ruta que procesará los datos del formulario
    + El atributo **name** para ambos elementos _input_.

    ```typescript
    ...
    <form action="/login" method="post">
      ...
      <input name="username" 
            type="text" 
            class="form-control" 
            placeholder="Username"
            required="required">
      ...
      <input 
            name="password" 
            type="password" 
            class="form-control" 
            placeholder="Password"
            required="required">
    ```

2. Edite el enrutador _'security/routes/index.js'_, con:

    ```typescript
    /* 1. Importe el módulo crypto y el objeto Op de sequelize */
    let crypto = require('crypto');
    const { Op } = require("sequelize");

    /* 2. Cargue los modelos de acuerdo con la configuración de la conexión */
    const sequelize = require('../models/index.js').sequelize;
    var initModels = require("../models/init-models");
    var models = initModels(sequelize);

    ...
    router.post('/login', async function (req, res, next) {

      let { username, password } = req.body

      if (username && password) {

        try {

          /* 3. Utilice la variable SALT para encriptar la variable password. */
          let salt = process.env.SALT
          let hash = crypto.createHmac('sha512', salt).update(password).digest("base64");
          let passwordHash = salt + "$" + hash

          /* 4. Uso del método findOne */
          let usersData = await models.users.findOne({
            where: {
              [Op.and]: {
                name: username,
                password: passwordHash
              }

            }
          })

          if (usersData != null) {
            res.redirect('/users');
          } else {
            res.redirect('/');
          }

        } catch (error) {
          res.status(400).send(error)
        }
        
      } else {
        res.redirect('/');
      }

    });
    ...
    ```

3. Compruebe la salida de la URL [http://localhost:3000/](http://localhost:3000/)
4. (STOP 2) Versiona local y remotamente el repositorio **security**.

### Documentación

### Fundamental

### Términos

### Referencias
