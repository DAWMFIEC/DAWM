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

#### Usuarios y Roles

1. Ingrese los siguientes usuarios con los roles:

    |   Usuario  | Contraseña |   Rol   |
    | :--------: | :--------: | :-----: |
    | superadmin | superadmin |  admin  |
    | superuser  | superuser  |  user   | 

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

1. Edite el enrutador _'security/routes/index.js'_, con:

    ```typescript
    ...
    /* 1. Importe el módulo crypto */
    

    /* 2. Cargue los modelos de acuerdo con la configuración de la conexión */
    
    ...

    /* POST user. */
    /* 3. Cree el callback asíncrono que responda al método POST */
    router.post('/login',           function (req, res, next) {

      /* 4. Desestructure los elementos en el cuerpo del requerimiento */
      let { ,  } = req.body

      /* 5. Verifique que username sea diferente de null, y que password sea diferente de null. */
      if (username != null &&     ) {

        try {

          /* 6. 
            Del modelo users, use el método findOne para encontrar un registro
            cuyo campo name sea igual que username
          */
          let userData = await models.users.findOne({
            where: {
                  : 
            }
          })

          /* 7. Verifique que userData sea diferente de null, y que userData.password sea diferente de null. */
          if ( && ) {

            /* 8. Divida userData.password por el símbolo "$", y use el primer elemento como SALT. */
            let salt = 
            let hash = crypto.createHmac('sha512', salt).update(password).digest("base64");
            let passwordHash = salt + "$" + hash

            /* 9. Compare passwordHash y userData.password que sean iguales. */
            if (   ) {
              /* 10. En caso de éxito, redirija a '/users' */
              
            } else {
              /* 11. En caso de fallo, redirija a '/' */
              
            }
          } else {
            res.redirect('/');
          }

        } catch (error) {
          /* 12. En caso de error, retorne el estado 400 y el objeto error */
          
        }
      } else {
        res.redirect('/');
      }

    });
    ...
    ```

    <details>
      <summary><div>Haga click aquí para ver la solución</div></summary>
      <pre lang="typescript"><code>
        ...
        /* 1. Importe el módulo crypto */
        let crypto = require('crypto');

        /* 2. Cargue los modelos de acuerdo con la configuración de la conexión */
        const sequelize = require('../models/index.js').sequelize;
        var initModels = require("../models/init-models");
        var models = initModels(sequelize);
        ...

        /* POST user. */
        /* 3. Cree el callback asíncrono que responda al método POST */
        router.post('/login', async function (req, res, next) {

          /* 4. Desestructure los elementos en el cuerpo del requerimiento */
          let { username, password } = req.body

          /* 5. Verifique que username sea diferente de null, y que password sea diferente de null. */
          if (username != null && password != null) {

            try {

              /* 6. 
                Del modelo users, use el método findOne para encontrar un registro
                cuyo campo name sea igual que username
              */
              let userData = await models.users.findOne({
                where: {
                  name: username
                }
              })

              /* 7. Verifique que userData sea diferente de null, y que userData.password sea diferente de null. */
              if (userData != null && userData.password != null) {

                /* 8. Divida userData.password por el símbolo "$", y use el primer elemento como SALT. */
                let salt = userData.password.split("$")[0]
                let hash = crypto.createHmac('sha512', salt).update(password).digest("base64");
                let passwordHash = salt + "$" + hash

                /* 9. Compare passwordHash y userData.password que sean iguales. */
                if (passwordHash === userData.password) {
                  /* 10. En caso de éxito, redirija a '/users' */
                  res.redirect('/users');
                } else {
                  /* 11. En caso de fallo, redirija a '/' */
                  res.redirect('/');
                }
              } else {
                res.redirect('/');
              }

            } catch (error) {
              /* 12. En caso de error, retorne el estado 400 y el objeto error */
              res.status(400).send(error)
            }
          } else {
            res.redirect('/');
          }

        });
        ...
      </code></pre>
    </details>

2. Compruebe la salida de la URL [http://localhost:3000/](http://localhost:3000/)
3. (STOP 2) Versiona local y remotamente el repositorio **security**.

#### `Verificación` y `Validación`

1.  

### Documentación

* Documentación de [Express](https://expressjs.com/) y [Sequelize](https://sequelize.org/docs/v6/getting-started/).

### Fundamental

* Data Association in MongoDB with Express.js en [X](https://x.com/SinghYadav58685/status/1797660631501561956?ref_src=twsrc%5Etfw)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">🚀 Mini-Project: Data Association in MongoDB with Express.js!<br><br>1️⃣ Create userSchema<br>2️⃣ User Registration Functionality<br>3️⃣ LogIn LogOut Functionality<br>4️⃣ isLoggedIn Middleware<br>5️⃣ Profile Route Setup<br>6️⃣ Like Edit Functionality<br>7️⃣ Update Post<a href="https://twitter.com/hashtag/MongoDB?src=hash&amp;ref_src=twsrc%5Etfw">#MongoDB</a> <a href="https://twitter.com/hashtag/ExpressJS?src=hash&amp;ref_src=twsrc%5Etfw">#ExpressJS</a> <a href="https://twitter.com/hashtag/WebDev?src=hash&amp;ref_src=twsrc%5Etfw">#WebDev</a> <a href="https://t.co/yRyAK1hDM6">pic.twitter.com/yRyAK1hDM6</a></p>&mdash; Ayushmaan Singh Yadav (@SinghYadav58685) <a href="https://twitter.com/SinghYadav58685/status/1797660631501561956?ref_src=twsrc%5Etfw">June 3, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

verificación, validación

### Referencias

* Autenticación y autorización en node.js mediante Express.js. (n.d.). Retrieved from https://ull-esit-pl-1617.github.io/estudiar-cookies-y-sessions-en-expressjs-victor-pamela-jesus/cookies/chapter6.html
* Adams, D. (2024). Basic Login System with Node.js, Express, and MySQL. Retrieved from https://codeshack.io/basic-login-system-nodejs-express-mysql/
* Ram, P. (2021). Difference between Session Cookies vs. JWT (JSON Web Tokens), for session management. Retrieved from https://medium.com/@prashantramnyc/difference-between-session-cookies-vs-jwt-json-web-tokens-for-session-management-4be67d2f066e
* express-session. (n.d.). Retrieved from https://expressjs.com/en/resources/middleware/session.html
* Chan, A. (2021). Cookie and Session (II) - How session works in express-session. Retrieved from https://medium.com/@alysachan830/cookie-and-session-ii-how-session-works-in-express-session-7e08d102deb8