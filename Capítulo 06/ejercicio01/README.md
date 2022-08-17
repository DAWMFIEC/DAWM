# Ejercicio 01

![ejercicio01](imagenes/ejercicio01.png)


## Instrucciones

* Tome como referencia las instrucciones de:

  + [Express - Bases](https://dawfiec.github.io/DAWM-2022/tutoriales/express_bases.html),
  + [Express - Formularios](https://dawfiec.github.io/DAWM-2022/tutoriales/express_forms.html),
  + [Express - Parámetros de consulta y Parámetros de ruta](https://dawfiec.github.io/DAWM-2022/tutoriales/express_pcpr.html)
  + [Firebase - Realtime database](https://dawfiec.github.io/DAWM-2022/tutoriales/firebase_realtime_database.html)

* Cree un proyecto nuevo llamado **movies**
* Instale el módulo **axios**, con: `npm i axios`
* En el app.js
  + Registre la ruta "/movies" para que enrute las peticiones a "routes/movies.js"
  + Agregue la funcionalidad para **GET all** con axios.

  ```
  var express = require('express');
  const axios = require('axios')
  var router = express.Router();

  const myapp = ''

  /* GET all. */
  router.get('/', (req, res, next) => {

    axios({
      method: 'get',
      url: `https://${myapp}-default-rtdb.firebaseio.com/movies.json`,
      responseType: 'json'
    })
    .then( resAxios => {
        res.json(resAxios.data)
    })
    .catch(err => console.log(err))

  });
  ```

  Con el resultado en el navegador

  <p align="center">  
    <img width="40%" src="imagenes/GET-all.png">
  </p>

  + Agregue la funcionalidad a los _callbacks_ para **GET one**, **POST**, **PUT** y **DELETE**.

  ```
  /* GET one. */
  router.get('/:id', (req, res, next) => {

  });

  /* POST. */
  router.post('/', (req, res, next) => {

  });

  /* PUT. */
  router.put('/:id', (req, res, next) => {

  });

  /* DELETE. */
  router.delete('/:id', (req, res, next) => {

  });
  module.exports = router;
  ``` 


## Pruebas unitarias

* En su proyecto de Express 
  + Instale las dependencias **Jest**, **SuperTest** y **cross-env**
    - Desde la línea de comandos ejecute: `npm install --save-dev jest supertest cross-env`
  + Agregue la carpeta **tests** de este repositorio a su proyecto 
  + Modifique el archivo **package.json**
    - Agregue los pares clave-valor

    <pre><code>
    ...
      "scripts":{
        ...
        <b style="color:red">
        ,
        "test": "jest --detectOpenHandles"
        </b>
      }
    ...
        "nodemon": "^2.0.19",
        "supertest": "^6.2.4"
      }
      <b style="color:red">
      ,
      "jest": {
        "testEnvironment": "node",
        "coveragePathIgnorePatterns": [
          "/node_modules/"
        ]
      }
      </b>
    }
    </code></pre> 

* En la ruta de su proyecto en Express, desde la línea de comandos ejecute: `npm test`
* Los resultados posibles a las pruebas unitarias pueden ser: jest
  
  <p align="center">
    <img src="imagenes/jest.png">
  </p>

  + Todos fueron exitosas, o
  + Existen pruebas unitarias fallidas.
* En caso de ser necesario, modifique el/los archivo(s) y vuelva a ejecutar las pruebas unitarias.

## Referencias 

* DAWM-2022. (2022). Retrieved 17 August 2022, from https://dawfiec.github.io/DAWM-2022/tutoriales/express_bases.html
* DAWM-2022. (2022). Retrieved 17 August 2022, from https://dawfiec.github.io/DAWM-2022/tutoriales/express_forms.html
* DAWM-2022. (2022). Retrieved 17 August 2022, from https://dawfiec.github.io/DAWM-2022/tutoriales/express_pcpr.html
* DAWM-2022. (2022). Retrieved 17 August 2022, from https://dawfiec.github.io/DAWM-2022/tutoriales/firebase_realtime_database.html
* Axios API | Axios Docs. (2022). Retrieved 17 August 2022, from https://axios-http.com/docs/api_intro
* How to make HTTP requests in Node.js ? - GeeksforGeeks. (2021). Retrieved 17 August 2022, from https://www.geeksforgeeks.org/how-to-make-http-requests-in-node-js/