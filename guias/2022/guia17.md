---
theme: jekyll-theme-leap-day
---

## Guía 17

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.

* [ORM](https://www2.deloitte.com/es/es/pages/technology/articles/que-es-orm.html) es un modelo de programación que permite mapear las estructuras de una base de datos relacional (SQL Server, Oracle, MySQL, etc.), en adelante RDBMS (Relational Database Management System), sobre una estructura lógica de entidades con el objeto de simplificar y acelerar el desarrollo de nuestras aplicaciones.
  + [Sequelize](https://sequelize.org/) es un ORM moderno de TypeScript y Node.js para Postgres, MySQL, MariaDB, SQLite y SQL Server, y más. Con un sólido soporte de transacciones, relaciones, carga ansiosa y diferida, replicación de lectura y más. En este [sitio](https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465) puedes encontrar la documentación que explica la estructura de **Sequelize**.


### Prerrequisito

Utiliza el proyecto que desarrollaste con los tutoriales de [Express - Bases](https://dawfiec.github.io/DAWM/tutoriales/express_bases.html).
  
* Desde tu repositorio personal
* Clone el proyecto con las [aplicaciones del curso](https://github.com/DAWFIEC/DAWM-apps) para la aplicación **album/api**
    - Para el hito: **`hito1-api`**

### Actividades

#### Modelo: Foto

* Realice completamente el tutorial [Express - ORM (Básico)](https://dawfiec.github.io/DAWM/tutoriales/express_ormbasico.html).

#### Modelo: Etiqueta

* Tome como referencia las instrucciones el tutorial [Express - ORM (Básico)](https://dawfiec.github.io/DAWM/tutoriales/express_ormbasico.html) o [Apuntes](https://dawfiec.github.io/DAWM/paginas/apuntes.html), para:
  + **Modelo:** Crear el modelo **`etiqueta`** con el atributo `texto`. 
    - Modifique el modelo `models/etiqueta`, agregue la clave **tableName** y el nombre de la tabla `etiquetas` a la cual estará relacionado
  ```
  ...
    modelName: 'etiqueta',
    tableName: 'etiquetas'
  ...
  ```

  + **Migración:** Modifique la migración `migrations/YYYYMMDDHHMMSS-create-etiqueta` para que el nombre de la tabla sea `etiquetas`

  ```
  ...
    await queryInterface.createTable('etiquetas' 
  ...
    await queryInterface.dropTable('etiquetas' 
  ...
  ```

    - Ejecute la migración y revise los cambios en la base de datos.

  + **Generador:** Cree el generador de datos para el modelo `etiqueta`
    - Modifique las funciones:
      1. **up:** Inserte los registros con las etiquetas `'foto'`, `'payaso'`, `'rojo'`, `'azul'`,`'techo'`, `'cielo'`, `'foco'` y `'luz'` a la tabla.
      2. **down:** Eliminar todo el contenido de la tabla.
      3. Asegúrese de insertar/eliminar en la tabla `etiquetas` 

  ```
  ...
    await queryInterface.bulkInsert('etiquetas',
  ...
    await queryInterface.bulkDelete('etiquetas',
  ...
  ```

    - Ejecute el generador de datos y revise los cambios en la base de datos.
  
  + **Manejador de rutas y controladores:** Cree el manejador de rutas **routes/etiquetas.js** y agregue los controladores:
    - Para la ruta `/findAll/json` que devuelve todos los registros de la tabla en formato **json**.
    - Para la ruta `/findAll/view` que devuelve todos los registros de la tabla renderizados en la vista **views/etiquetas.ejs**.
  
  
  + **Vista:** Agregue y modifique la vista **views/etiquetas.ejs**
  
  + **Aplicación:** En la aplicación **app.js**, registre el manejador de rutas **routes/etiquetas.js** con la ruta `/etiquetas`
  
  + **Comprobación:** Verifique los resultados en el navegador para las rutas 
    - `http://localhost:3000/etiquetas/findAll/json`, y 
    - `http://localhost:3000/etiquetas/findAll/view`



### Términos

partials, `ORM`, sequelize

### Referencias

* ¿Qué es un ORM?. (2021). Retrieved 3 August 2021, from https://www2.deloitte.com/es/es/pages/technology/articles/que-es-orm.html
* Manual Sequelize. (2021). Retrieved 4 August 2021, from https://sequelize.org/master/index.html
* Node JS, Express y MySQL con Sequelize. (2021). Retrieved 3 August 2021, from https://tomasmalio.medium.com/node-js-express-y-mysql-con-sequelize-ec0a7c0ae292
* Creating Sequelize Associations with the Sequelize CLI tool. (2020). Retrieved 3 August 2021, from https://levelup.gitconnected.com/creating-sequelize-associations-with-the-sequelize-cli-tool-d83caa902233
* Creating Sequelize Associations with the Sequelize CLI tool. (2020). Retrieved 3 August 2021, from https://levelup.gitconnected.com/creating-sequelize-associations-with-the-sequelize-cli-tool-d83caa902233
* GitHub - japsolo/curso-sequelize-migrations-seeders: Creando modelos, migraciones y seeders con Sequelize en Node + Express. (2021). Retrieved 3 August 2021, from https://github.com/japsolo/curso-sequelize-migrations-seeders*
* Sequelize Many-to-Many Association example - Node.js & MySQL - BezKoder. (2019). Retrieved 17 December 2022, from https://www.bezkoder.com/sequelize-associate-many-to-many/
* How to define Sequelize associations using migrations. (2017). Retrieved 17 December 2022, from https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7
* How to create Many to Many relationship using Sequelize ORM (Postgres) on Express. (2019). Retrieved 17 December 2022, from https://medium.com/@the_ozmic/how-to-create-many-to-many-relationship-using-sequelize-orm-postgres-on-express-677753a3edb5