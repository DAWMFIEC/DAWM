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
    
    ```html
    ...
    <link rel="stylesheet" href="stylesheets/login-style.css">
    ...
    ```

4. Compruebe la salida de la URL [http://localhost:3000/](http://localhost:3000/)
5. (STOP 1) Versiona local y remotamente el repositorio **security**.

#### Express - POST '/login'

1. Edite la vista _'security/views/index.js'_, con:

    + El método de envío (_'post'_) y la ruta (_'login'_) que procesará los datos del formulario
    + El atributo **name** para todos elementos _input_.

    ```typescript
    ...
    <form action="/login" method="post">
      ...
      <input name="username" 
            ...
            placeholder="Username"
            ...>
      ...
      <input 
            name="password" 
            ... 
            placeholder="Password"
            ...>
    ```

2. Edite el enrutador _'security/routes/index.js'_, con:

    + Importe el módulo **crypto**,
    + Configuración de conexión (en _'models/index.js'_),
    + Estructura de [modelos](https://sequelize.org/docs/v6/core-concepts/model-basics/) (de _'models/init-models'_),
    + Carga los modelos de acuerdo con la configuración de la conexión,
    + El callback para los requerimientos del método **POST**,

    ```typescript
    /* 1. Importe el módulo crypto y el objeto Op de sequelize */
    let crypto = require('crypto');
    
    /* 2. Cargue los modelos de acuerdo con la configuración de la conexión */
    const sequelize = require('../models/index.js').sequelize;
    var initModels = require("../models/init-models");
    var models = initModels(sequelize);

    ...

    router.post('/login', async function (req, res, next) {

      let { username, password } = req.body

      if (username && password) {

        try {

          /* 3. Uso del método findOne */
          let userData = await models.users.findOne({
            where: {
              name: username,
            }
          })

          /* 4. Verifica si existe, o no, el usuario y si tiene, o no, contraseña. */
          if (userData != null && userData.password != null) {

            /* 5. Utilice la SALT para encriptar la variable password. */
            let salt = userData.password.split("$")[0]
            let hash = crypto.createHmac('sha512', salt).update(password).digest("base64");
            let passwordHash = salt + "$" + hash

            /* 6. Compare la contraseña encriptada con la contraseña almacenada. */
            if (passwordHash === userData.password) {
              res.redirect('/users');
            } else {
              res.redirect('/');
            }
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

* Documentación de [Express](https://expressjs.com/) y [Sequelize](https://sequelize.org/docs/v6/getting-started/).

### Fundamental

* Data Association in MongoDB with Express.js en [X](https://x.com/SinghYadav58685/status/1797660631501561956?ref_src=twsrc%5Etfw)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🚀 Mini-Project: Data Association in MongoDB with Express.js!<br><br>1️⃣ Create userSchema<br>2️⃣ User Registration Functionality<br>3️⃣ LogIn LogOut Functionality<br>4️⃣ isLoggedIn Middleware<br>5️⃣ Profile Route Setup<br>6️⃣ Like Edit Functionality<br>7️⃣ Update Post<a href="https://twitter.com/hashtag/MongoDB?src=hash&amp;ref_src=twsrc%5Etfw">#MongoDB</a> <a href="https://twitter.com/hashtag/ExpressJS?src=hash&amp;ref_src=twsrc%5Etfw">#ExpressJS</a> <a href="https://twitter.com/hashtag/WebDev?src=hash&amp;ref_src=twsrc%5Etfw">#WebDev</a> <a href="https://t.co/yRyAK1hDM6">pic.twitter.com/yRyAK1hDM6</a></p>&mdash; Ayushmaan Singh Yadav (@SinghYadav58685) <a href="https://twitter.com/SinghYadav58685/status/1797660631501561956?ref_src=twsrc%5Etfw">June 3, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

### Referencias

* Autenticación y autorización en node.js mediante Express.js. (n.d.). Retrieved from https://ull-esit-pl-1617.github.io/estudiar-cookies-y-sessions-en-expressjs-victor-pamela-jesus/cookies/chapter6.html
* Adams, D. (2024). Basic Login System with Node.js, Express, and MySQL. Retrieved from https://codeshack.io/basic-login-system-nodejs-express-mysql/
* Ram, P. (2021). Difference between Session Cookies vs. JWT (JSON Web Tokens), for session management. Retrieved from https://medium.com/@prashantramnyc/difference-between-session-cookies-vs-jwt-json-web-tokens-for-session-management-4be67d2f066e
* express-session. (n.d.). Retrieved from https://expressjs.com/en/resources/middleware/session.html
* Chan, A. (2021). Cookie and Session (II) - How session works in express-session. Retrieved from https://medium.com/@alysachan830/cookie-and-session-ii-how-session-works-in-express-session-7e08d102deb8