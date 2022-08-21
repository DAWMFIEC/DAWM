---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM-2022/)

Express - Cookies y Sesión
==========================




Proyecto en Express
===================

* * *

* Utiliza el proyecto que desarrollaste con los tutoriales de [Express - Bases](https://dawfiec.github.io/DAWM-2022/tutoriales/express_bases.html), [Express - Bootstrap](https://dawfiec.github.io/DAWM-2022/tutoriales/express_bootstrap.html), [Express - Formularios](https://dawfiec.github.io/DAWM-2022/tutoriales/express_forms.html), [Express - Layouts y Partials](https://dawfiec.github.io/DAWM-2022/tutoriales/express_partials.html), [Express - ORM (Básico)](https://dawfiec.github.io/DAWM-2022/tutoriales/express_ormbasico.html), [Express - Parámetros de consulta y Parámetros de ruta](https://dawfiec.github.io/DAWM-2022/tutoriales/express_pcpr.html) y [Express - REST](https://dawfiec.github.io/DAWM-2022/tutoriales/express_rest.html).

* Instala las dependencias, con: `npm install`
* Verifica que funcione correctamente al levantar los servicios: `SET DEBUG=misitio:\* & npm start`
* Verifique el acceso libre a todas las URLs:
  + Principal: `http://localhost:3000/`
  + Productos: `http://localhost:3000/productos`
  + Reporte: `http://localhost:3000/reporte`
  + Login: `http://localhost:3000/login`


Autorización
============

* * *

* Instale [**express-session**](https://www.npmjs.com/package/express-session) , con: `npm install express-session`

* Modifique `app.js`:
  + Agregue la referencia a **express-session**, con: 

    <pre><code>
    ...
    var cors = require('cors')
    <b style="color:red">
    var session = require('express-session');
    </b>
    var indexRouter = require('./routes/index');
    ...
    </code></pre>

  + Añada el _middleware_ session a la aplicación, con:

    <pre><code>
    ...
    var app = express();
    <b style="color:red">
    app.use(session({
        secret: '2C44-4D44-WppQ38S',
        resave: true,
        saveUninitialized: false
    }));
    </b>
    // view engine setup
    ...
    </code></pre>

* Agregue el **middleware** de _autorización_

  + Cree la carpeta `middlewares`
  + Agregue el _script_ de autorización en `middlewares\auth.js`:
  
    <pre><code>
    var express = require('express');
    var router = express.Router();

    let bd = {  
      'usuario': 'abc',  
      'contrasenia': '123'  
    }

    var auth = (req, res, next) => {
      if (req.session && req.session.user === bd['usuario'] && req.session.admin)
        return next();
      else
        return res.sendStatus(401);
    };

    module.exports = auth;
    </code></pre>

* Modifique `app.js`:
  + Agregue la referencia al **middleware**, con:  

    <pre><code>
    var apiRouter = require('./routes/api');
    <b style="color:red">
    var auth = require('./middlewares/auth');
    </b>
    var app = express();
    </code></pre>

  + Agregue el _middleware_ a la ruta raíz `/`

    <pre><code>
    ...
    app.use('/', auth, indexRouter);
    ...
    </code></pre>

  + Verifique el acceso **restringido** a todas las URLs:
    - Principal: `http://localhost:3000/`
    - Productos: `http://localhost:3000/productos`
    - Reporte: `http://localhost:3000/reporte`
    - Login: `http://localhost:3000/login`

* Autorice la ruta `/login`
  + En `app.js`, coloque la ruta `/login` antes de la ruta raíz `/`

    <pre><code>
    ...
    app.use('/login', loginRouter);
    app.use('/', auth, indexRouter);
    ...
    </code></pre>

  + Verifique el acceso **restringido** a todas las URLs:
    - Principal: `http://localhost:3000/`
    - Productos: `http://localhost:3000/productos`
    - Reporte: `http://localhost:3000/reporte`

  + Verifique el acceso **libre** a la URL:
    - Login: `http://localhost:3000/login`

Autenticación
============

* * *

* Modifique `routes/login.js`:
  + Agregue la instanciación de la sesión, con:

    <pre><code>
    ...
    if(usuario == bd['usuario'] && contrasenia == bd['contrasenia']) {
      <b style="color:red">
      req.session.user = bd['usuario'];
      req.session.admin = true;  
      </b>
      res.redirect('/');  
    } else {  
    ...
    </code></pre>

* Acceda a la ruta `/login`
  + Revise las **cookies de sesión** en el inspector del navegador

<p align="center">
  <img src="imagenes/nosession.png">
</p>

  + Ingrese las credenciales de usuario `abc` y contraseña `123`
  + Luego de la redirección, revise las **cookies de sesión**

<p align="center">
  <img src="imagenes/session.png">
</p>

Referencias 
===========

* * *

* Terminal, F. (2011). Formatting cURL Output in the Windows Terminal. Retrieved 11 August 2022, from https://superuser.com/questions/275229/formatting-curl-output-in-the-windows-terminal
* Wieruch, R. (2020). How to create a REST API with Express.js in Node.js. Retrieved 10 August 2022, from https://www.robinwieruch.de/node-express-server-rest-api/
* Node.js Rest APIs example with Express, Sequelize & MySQL - BezKoder. (2020). Retrieved 14 August 2022, from https://www.bezkoder.com/node-js-express-sequelize-mysql/