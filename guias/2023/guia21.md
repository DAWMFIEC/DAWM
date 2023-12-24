---
theme: jekyll-theme-leap-day
---

## Guía 21

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

* Clone localmente tu repositorio **security**.
* Abra el proyecto en VSCode y levante el servidor.

### Actividades

#### users.js - POST

* Modifique el controlador para el verbo HTTP `POST` con la ruta `/generateToken`

  ```typescript
    ...

  router.post('/generateToken', async (req, res,next) => {

      ...

      const accessToken = jwt.sign({ name: user.name, role: roles.name }, process.env.TOKEN_SECRET);

      /* Tiempo de expiración de la cookie: 30 segundos */
      const options = {
        expires: new Date(
          Date.now() + 30 * 1000
        )
      }

      /* Crea la cookie "jwt-token" con el accessToken */
      res.cookie("jwt-token", accessToken, options)

      /* Redirección al controlador para el verbo HTTP GET con la ruta /getToken */
      res.redirect('/users/getToken')
    

    } catch (error) {

      /* En caso de error, elimina la cookie */
      res.clearCookie('jwt-token')

      /* Tiempo de expiración de la cookie: 10 segundos */
      const options = {
        expires: new Date(
          Date.now() + 10 * 1000
        )
      }
      
      res.cookie("error", "No token generated", options)

      /* Redirige a la página original */
      res.redirect('/users/getToken')

    }

  });

  module.exports = router;
  ```

#### users.js - GET

* Descargue el archivo [gettoken.ejs](recursos/gettoken.ejs) y coloque el archivo dentro la carpeta `views`

* Modifique el controlador para el verbo HTTP `GET` con la ruta `/getToken` 

  ```typescript
  router.get('/', async function (req, res, next) {
    ...
  });

  router.get('/getToken', async function (req, res, next) {
  
    /* Lee las cookies "jwt-token" y "error" */
    let token = req.cookies['jwt-token']
    let error = req.cookies['error']

    /* Renderiza el contenido de las cookies en la vista */
    res.render('gettoken', { title: 'User Login', token: token, error: error });

  });

  ...
  ```

* Ejecute el servidor, con:

  ```
  npm start
  ```

* Compruebe el _endpoint_ para generar el token [http://localhost:3002/users/getToken](http://localhost:3002/users/getToken) a partir de las credenciales de acceso.

* Versiona local y remotamente el repositorio **security**.

### Fundamental

* Manejo de cookies en Express via [X](https://twitter.com/KhandakarRuhan/status/1195013895460540416) 

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Day 13<br>✔️ Implement <a href="https://twitter.com/hashtag/jsonWebToken?src=hash&amp;ref_src=twsrc%5Etfw">#jsonWebToken</a> and sent with <a href="https://twitter.com/hashtag/cookies?src=hash&amp;ref_src=twsrc%5Etfw">#cookies</a> <a href="https://twitter.com/hashtag/CodingPhase?src=hash&amp;ref_src=twsrc%5Etfw">#CodingPhase</a> <a href="https://twitter.com/hashtag/365CodingPhase?src=hash&amp;ref_src=twsrc%5Etfw">#365CodingPhase</a> <a href="https://twitter.com/hashtag/365codingphasechallenge?src=hash&amp;ref_src=twsrc%5Etfw">#365codingphasechallenge</a> <a href="https://twitter.com/hashtag/100DaysOfCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysOfCode</a> <a href="https://twitter.com/hashtag/mvc?src=hash&amp;ref_src=twsrc%5Etfw">#mvc</a> <a href="https://twitter.com/hashtag/expressjs?src=hash&amp;ref_src=twsrc%5Etfw">#expressjs</a> <a href="https://twitter.com/hashtag/nodejs?src=hash&amp;ref_src=twsrc%5Etfw">#nodejs</a> <a href="https://twitter.com/hashtag/jwt?src=hash&amp;ref_src=twsrc%5Etfw">#jwt</a> <a href="https://t.co/IZ3jGY5zzJ">pic.twitter.com/IZ3jGY5zzJ</a></p>&mdash; Ruhan Khandakar (@KhandakarRuhan) <a href="https://twitter.com/KhandakarRuhan/status/1195013895460540416?ref_src=twsrc%5Etfw">November 14, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Documentación

* Manejo de [Cookies](https://ull-esit-pl-1617.github.io/estudiar-cookies-y-sessions-en-expressjs-victor-pamela-jesus/cookies/chapter5.html) en Express.js

### Términos

cookies

### Referencias

* Manejo de Cookies en Express.js. (n.d.). Retrieved from https://ull-esit-pl-1617.github.io/estudiar-cookies-y-sessions-en-expressjs-victor-pamela-jesus/cookies/chapter5.html