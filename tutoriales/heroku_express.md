---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

Heroku - Express
================

  <p align="center">
    <img width="257" height="150" src="imagenes/heroku_express.webp">
  </p>

Ruta de la aplicación web
=========================

* * *

En adelante, se usará el término **ruta de la aplicación web** como la ruta del proyecto en Express.


Pasos iniciales
===============

* * *

* Obtén una cuentan en [Heroku](https://signup.heroku.com/login).
* Descargar e instalar el [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).
* Desde la línea de comandos en la **ruta de la aplicación web**, accede a Heroku, con: ```heroku login```

    Se le pedirá que presione cualquier tecla para ir a su navegador web y completar el inicio de sesión.
    ![logindone.jpg](./imagenes/logindone.JPG)

* Cree un proyecto, con: ```heroku create nombre-de-la-aplicación```

    ![created-1](./imagenes/created-1.JPG)

* Liste las rutas remotas. Verifique si aparece la ruta remota con heroku, use: ```git remote -v```

    ![remoteurls](./imagenes/remoteurls.JPG)

  + **Opcional:** En caso que no aparezca la ruta remota para heroku. Agregue manualmente tu ruta con: 
    
    ```
      git remote add heroku https://git.heroku.com/heroku-ruta.git
    ```


Add-ons
======

* * *

Heroku tiene ciertas [herramientas y servicios](https://elements.heroku.com/addons) para desarrollar, ampliar y operar las aplicaciones.

* En la **ruta de la aplicación web**. 
  
  + Agregue [ClearDB](https://elements.heroku.com/addons/cleardb) como add-on base de datos relacional, con:

    ```
    heroku addons:create cleardb:ignite
    ```
    
    En el sitio web de la administración de Heroku, el add-on se ve así

    <p align="center">
      <img src="imagenes/cleardb.png">
    </p>


Despliegue 
==========

* * *

* Desde la línea de comandos en la **ruta de la aplicación web**:

  + Muestre la cadena de conexión a la base de datos remota, con:
    
  ```
  heroku config 
  ```

  Con resultado: `CLEARDB_DATABASE_URL: mysql://b04e3e1fcXXXXX:eecYYYYY@us-cdbr-east-06.cleardb.net/heroku_4ec5e3cba9ZZZZZ?reconnect=true`

  Donde los datos de conexión, son:

  - username: b04e3e1fcXXXXX
  - password: eecYYYYY
  - host: us-cdbr-east-06.cleardb.net
  - database: heroku_4ec5e3cba9ZZZZZ

  + Modifique el archivo `config/config.json` con los datos para la conexión con el motor de bases de datos remota. En este caso, el ambiente a utilizar es **development**.

  <pre><code>
    ...
    {
      "production": {
        "username": "b04e3e1fcXXXXX",
        "password": "eecYYYYY",
        "database": "heroku_4ec5e3cba9ZZZZZ",
        "host": "us-cdbr-east-06.cleardb.net",
        "dialect": "mysql"
    },
  }
  </code></pre>

  * En el `package.json`, dentro de la clave **scripts**, agregue la clave **build**:

  <pre><code>
  "scripts": {  
    ...
    <b style="color:red">
    "build": "npm exec sequelize-cli db:migrate & npm exec sequelize-cli db:seed:all", 
    </b>
    ...
  }  
  </code></pre>  

  + Agregue los cambios en `origin` y `heroku` con las instrucciones de *git*.

    <pre><code>
      git add .
      git commit -m "deploy"
      git push heroku main <b style="color: red">Antes de hacer push, verifique la rama que están utilizando</b>
    </code></pre>

    - Abra la aplicación, con: ```heroku open```


Referencias 
===========

* * *

* Add-ons - Heroku Elements. (2022). Retrieved 11 August 2022, from https://elements.heroku.com/addons
* Deploying/Hosting Node.js app on Heroku with MySQL database - BezKoder. (2019). Retrieved 11 August 2022, from https://www.bezkoder.com/deploy-node-js-app-heroku-cleardb-mysql/