# Ejercicio 04

![ejercicio04](imagenes/ejercicio04.png)


## Instrucciones

* Cree un proyecto nuevo llamado **album**, de acuerdo con las actividades:
  - [Express - Bases](https://dawfiec.github.io/DAWM-2022/tutoriales/express_bases.html),
  - [Express - ORM (Básico)](https://dawfiec.github.io/DAWM-2022/tutoriales/express_ormbasico.html).

* En su motor de base de datos, cree la base: **album**

* Modifique el archivo `config/config.json` para los ambientes "development" y "test" con los datos de conexión: **database**, **username** y **password**

* Desde la línea de comandos de su proyecto.
  + Cree el modelo photo, con: `sequelize model:create --name photo --attributes descripcion:string,tiempo:string,url:string`
  + Migre los cambios, con: `sequelize db:migrate`
  + Cree el _seeder_, de ser necesario, con: `sequelize seed:generate --name photos`

* En el archivo **seeders/YYYYMMDDHHMMSS-photos.js**, agregue el siguiente código:
  + A la función **up**:
  ```
  let arreglo = [
      {
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida sapien at gravida semper. Aenean a lacinia diam. Nulla facilisi. Suspendisse ut turpis at tellus porttitor hendrerit.",
        "tiempo": "3 mins",
        "url": "https://randomwordgenerator.com/img/picture-generator/53e4d2464252ae14f1dc8460962e33791c3ad6e04e507440722d72d59448c5_640.jpg"
      },
      {
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida sapien at gravida semper. Aenean a lacinia diam. Nulla facilisi. Suspendisse ut turpis at tellus porttitor hendrerit.",
        "tiempo": "9 mins",
        "url": "https://randomwordgenerator.com/img/picture-generator/57e3d2474255a814f1dc8460962e33791c3ad6e04e507440762a7cd49348cc_640.jpg"
      },
      {
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida sapien at gravida semper. Aenean a lacinia diam. Nulla facilisi. Suspendisse ut turpis at tellus porttitor hendrerit.",
        "tiempo": "5 mins",
        "url": "https://randomwordgenerator.com/img/picture-generator/57e4dd404d51a914f1dc8460962e33791c3ad6e04e5074417c2e7dd29744c7_640.jpg"
      },
      {
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida sapien at gravida semper. Aenean a lacinia diam. Nulla facilisi. Suspendisse ut turpis at tellus porttitor hendrerit.",
        "tiempo": "3 mins",
        "url": "https://randomwordgenerator.com/img/picture-generator/52e1d2454e55b10ff3d8992cc12c30771037dbf852577148762c7ad2904e_640.jpg"
      },
      {
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida sapien at gravida semper. Aenean a lacinia diam. Nulla facilisi. Suspendisse ut turpis at tellus porttitor hendrerit.",
        "tiempo": "3 mins",
        "url": "https://randomwordgenerator.com/img/picture-generator/52e8d2474851ad14f1dc8460962e33791c3ad6e04e5074417c2f7dd59f4ac1_640.jpg"
      },
      {
        "descripcion": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida sapien at gravida semper. Aenean a lacinia diam. Nulla facilisi. Suspendisse ut turpis at tellus porttitor hendrerit.",
        "tiempo": "19 mins",
        "url": "https://randomwordgenerator.com/img/picture-generator/52e3d4404852ac14f1dc8460962e33791c3ad6e04e507440772d7cdd9f4bcc_640.jpg"
      }
    ]

    for (var i = arreglo.length - 1; i >= 0; i--) {
      let foto = arreglo[i]
      await queryInterface.bulkInsert('Photos', [{  
            descripcion: foto['descripcion'],
            tiempo: foto['tiempo'],
            url: foto['url'],
            createdAt: new Date(),  
            updatedAt: new Date()  
        }], {});  
    }
  ```

  + A la función **down**:

  ```
  await queryInterface.bulkDelete('Photos', null, {});
  ```

* Ejecute los seeders, con: `sequelize db:seed:all`


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

* DAWM-2022. (2022). Retrieved 27 July 2022, from https://dawfiec.github.io/DAWM-2022/tutoriales/express_bases.html
* DAWM-2022. (2022). Retrieved 27 July 2022, from https://dawfiec.github.io/DAWM-2022/tutoriales/express_bootstrap.html
* Testing your Express.js Backend Server. (2021). Retrieved 27 July 2022, from https://dev.to/lukekyl/testing-your-express-js-backend-server-3ae6
* Expect · Jest. (2022). Retrieved 27 July 2022, from https://jestjs.io/docs/expect
