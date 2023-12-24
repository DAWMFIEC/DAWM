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

      /* Guarda el token en las cookies de la respuesta */
      res.cookie("token", token)

      /* Redirección al controlador para el verbo HTTP GET con la ruta /getToken */
      res.redirect('/users/getToken')
    

    } catch (error) {
      res.status(400).send(error)
    }

  });

  module.exports = router;
  ```

#### users.js - GET

* Descargue el archivo [gettoken.ejs](recursos/gettoken.ejs) y coloque el archivo dentro la carpeta `views`

* Modifique el controlador para el verbo HTTP `GET` con la ruta `/getToken` 

  ```typescript
  router.get('/getToken', async function (req, res, next) {
  
    let token = req.cookies.token
    res.render('gettoken', { title: 'User Login', token: token });

  });
  ```

* Ejecute el servidor, con:

  ```
  npm start
  ```

* Compruebe el _endpoint_ para generar el token [http://localhost:3002/users/getToken](http://localhost:3002/users/getToken) a partir de las credenciales de acceso.

* Versiona local y remotamente el repositorio **security**.

### Fundamental

* 

### Documentación

* 

### Términos

cookies

### Referencias

* 