---
theme: jekyll-theme-leap-day
---

## Guía 17

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.

* [Partials y layout](https://dev.weebly.com/pf_themes_partials.html) son mecanismos de reutilización de porciones de HTML. Con el fin de renderización alguna de las variables o renderizar otras plantillas. 
  + Nodejs utiliza [includes](https://github.com/tj/ejs#includes) para incluir porciones parciales en la plantilla original. 

* [ORM](https://www2.deloitte.com/es/es/pages/technology/articles/que-es-orm.html) es un modelo de programación que permite mapear las estructuras de una base de datos relacional (SQL Server, Oracle, MySQL, etc.), en adelante RDBMS (Relational Database Management System), sobre una estructura lógica de entidades con el objeto de simplificar y acelerar el desarrollo de nuestras aplicaciones.
  + [Sequelize](https://sequelize.org/) es un ORM moderno de TypeScript y Node.js para Postgres, MySQL, MariaDB, SQLite y SQL Server, y más. Con un sólido soporte de transacciones, relaciones, carga ansiosa y diferida, replicación de lectura y más. En este [sitio](https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465) puedes encontrar la documentación que explica la estructura de **Sequelize**.


### Actividades

* Utilice la aplicacion web en backend o gnere una aplicación en Express, siguiendo las instrucciones pertinentes de los tutoriales:
  + De [Express - Bases](https://dawfiec.github.io/DAWM/tutoriales/express_bases.html) realice el **Esqueleto de un proyecto web**.
  + De [Express - Bootstrap](https://dawfiec.github.io/DAWM/tutoriales/express_bootstrap.html) realice hasta el **Bootstrap - Dashboard example**.

* Realice completamente tutoriales: 
  + [Express - Layouts y Partials](https://dawfiec.github.io/DAWM/tutoriales/express_partials.html).
  + [Express - ORM (Básico)](https://dawfiec.github.io/DAWM/tutoriales/express_ormbasico.html)

### Términos

partials, layout, `ORM`

### Referencias

* ¿Qué es un ORM?. (2021). Retrieved 3 August 2021, from https://www2.deloitte.com/es/es/pages/technology/articles/que-es-orm.html
* Manual Sequelize. (2021). Retrieved 4 August 2021, from https://sequelize.org/master/index.html
* Node JS, Express y MySQL con Sequelize. (2021). Retrieved 3 August 2021, from https://tomasmalio.medium.com/node-js-express-y-mysql-con-sequelize-ec0a7c0ae292
* Creating Sequelize Associations with the Sequelize CLI tool. (2020). Retrieved 3 August 2021, from https://levelup.gitconnected.com/creating-sequelize-associations-with-the-sequelize-cli-tool-d83caa902233
* Creating Sequelize Associations with the Sequelize CLI tool. (2020). Retrieved 3 August 2021, from https://levelup.gitconnected.com/creating-sequelize-associations-with-the-sequelize-cli-tool-d83caa902233
* GitHub - japsolo/curso-sequelize-migrations-seeders: Creando modelos, migraciones y seeders con Sequelize en Node + Express. (2021). Retrieved 3 August 2021, from https://github.com/japsolo/curso-sequelize-migrations-seeders