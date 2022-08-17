# Ejercicio 01

![ejercicio01](imagenes/ejercicio01.png)


## Instrucciones

* Tome como referencia las instrucciones de:

  + [Express - Bases](https://dawfiec.github.io/DAWM-2022/tutoriales/express_bases.html),
  + [Express - Formularios](https://dawfiec.github.io/DAWM-2022/tutoriales/express_forms.html),
  + [Express - Parámetros de consulta y Parámetros de ruta](https://dawfiec.github.io/DAWM-2022/tutoriales/express_pcpr.html)
  + [Firebase - Realtime database](https://dawfiec.github.io/DAWM-2022/tutoriales/firebase_realtime_database.html)

* Cree un proyecto nuevo llamado **movies**

* En el app.js
  + Registre la ruta "/disney" para que enrute las peticiones a "routes/disney.js" 

* En el router "routes/disney.js" agregue la referencia a los módulos **Sequelize** y **Op**. Además, al modelo **Photo**.

```
...
const { Sequelize, Op } = require('sequelize');
const Photo = require('../models').photo;  
...
```

* Agregue el controlador para el método `GET` con la subruta `/album`. Además, agregue un _query_ para traer todos los datos de la entidad **photo**.

```
...
Photo.findAll()  
  .then(photos => {  
      res.json(photos)
  })  
  .catch(error => res.status(400).send(error))
...
```

* Agregue el controlador para el método `GET` con la subruta `/album/:id`. Además, agregue un _query_ para traer la **photo** con _id_ enviado como parámetro.

```
...
Photo.findOne({ where: { id: req.params.id } })  
  .then(photos => {  
      res.json(photos)
  })  
  .catch(error => res.status(400).send(error))
...
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

* DAWM-2022. (2022). Retrieved 4 August 2022, from https://dawfiec.github.io/DAWM-2022/tutoriales/express_bases.html
* DAWM-2022. (2022). Retrieved 4 August 2022, from https://dawfiec.github.io/DAWM-2022/tutoriales/express_ormbasico.html
* Testing your Express.js Backend Server. (2021). Retrieved 27 July 2022, from https://dev.to/lukekyl/testing-your-express-js-backend-server-3ae6
* Expect · Jest. (2022). Retrieved 27 July 2022, from https://jestjs.io/docs/expect
* Concepts, C., & Finders, M. (2022). Model Querying - Finders Sequelize. Retrieved 4 August 2022, from https://sequelize.org/docs/v6/core-concepts/model-querying-finders/