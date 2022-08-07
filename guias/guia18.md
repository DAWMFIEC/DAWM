---
theme: jekyll-theme-leap-day
---

## Guía 18

[Regresar](/DAWM-2022/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* [Sequelize](https://sequelize.org/docs/v6/) es una herramienta ORM de Node.js basada en promesas para Postgres, MySQL, MariaDB, SQLite, Microsoft SQL Server, Amazon Redshift y Snowflake's Data Cloud. Cuenta con un sólido soporte de transacciones, relaciones, carga _eager_ y _lazy_, replicación de lectura y más.
  + Los [modelos](https://sequelize.org/docs/v6/core-concepts/model-basics/) son una abstracción para representa una tabla en la base de datos. 
  + Las [migraciones](https://sequelize.org/docs/v6/other-topics/migrations/) se usan para dar seguimiento a los cambios en la base de datos, pasando de un estado a otro.
  + Los [generadores](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed) son utilizados para llenar las tablas de la base de datos con datos de muestra o de prueba.
* Para [MVC](https://desarrolloweb.com/articulos/que-es-mvc.html) es un patrón de arquitectura del software utilizada para separar el código por sus distintas responsabilidades, manteniendo distintas capas que se encargan de hacer una tarea muy concreta, lo que ofrece beneficios diversos.
  + El modelo es la capa donde se trabaja con los datos, por tanto contendrá mecanismos para acceder a la información y también para actualizar su estado.
  + La vista contienen el código de nuestra aplicación que va a producir la visualización de las interfaces de usuario, o sea, el código que nos permitirá renderizar los estados de nuestra aplicación en HTML.
  + El controlador contiene el código necesario para responder a las acciones que se solicitan en la aplicación, como visualizar un elemento, realizar una compra, una búsqueda de información, etc.


### Actividades

* Genere una aplicación en Express, siguiendo las instrucciones pertinentes de los tutoriales:
  + De [Express - Bases](https://dawfiec.github.io/DAWM-2022/tutoriales/express_bases.html) realice el **Esqueleto de un proyecto web**.
  + De [Express - Bootstrap](https://dawfiec.github.io/DAWM-2022/tutoriales/express_bootstrap.html) realice hasta el **Bootstrap - Dashboard example**.
  + De [Express - Layouts y Partials](https://dawfiec.github.io/DAWM-2022/tutoriales/express_partials.html) hasta **Productos: layout y partial**.
  + De [Express - ORM (Básico)](https://dawfiec.github.io/DAWM-2022/tutoriales/express_ormbasico.html) hasta la **Vista** de Productos.

* Cree el ruteador **routes/api.js**
* Agregue la referencia del ruteador **routes/api.js** en el `app.js`
  + Use la ruta `/api` para el ruteador **routes/api.js**

* El ruteador **routes/api.js** agregue: 
  + El método **GET** de la subruta **`/productos`** que retorna un _json_ con todos los productos.

  En lugar de renderizar la respuesta en la vista

  ```
  .then(resultado => {  
        res.render('vista', { arrResultado: resultado });  
    })  
  ```

  Renderice el json:

  ```
  then(resultado => {  
      res.json(resultado)
  })
  ``` 


  + El método **GET** de la subruta **`/productos/:id`** que retorna un _json_ con el producto con el _id_ en la ruta.

  En lugar de renderizar la respuesta en la vista, renderice el json.

* Compruebe el funcionamiento del servidor, con: **npm run devstart**
* Acceda al URL `http://localhost:3000/api/productos` 

<p align="center">
  <img src="imagenes/restapiget.png">
</p>

* Acceda al URL `http://localhost:3000/api/productos/3` 

<p align="center">
  <img src="imagenes/restapigetid.png">
</p>

* Componentes para proyecto en angular 
  + Servicio

### Términos


### Referencias

* Sequelize v6 Sequelize. (2022). Retrieved 7 August 2022, from https://sequelize.org/docs/v6/
* Concepts, C., & Basics, M. (2022). Model Basics Sequelize. Retrieved 7 August 2022, from https://sequelize.org/docs/v6/core-concepts/model-basics/
* topics, O. (2022). Migrations Sequelize. Retrieved 7 August 2022, from https://sequelize.org/docs/v6/other-topics/migrations/
* Qué es MVC. (2022). Retrieved 7 August 2022, from https://desarrolloweb.com/articulos/que-es-mvc.html