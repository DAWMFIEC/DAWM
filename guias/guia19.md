---
theme: jekyll-theme-leap-day
---

## Guía 19

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* Las [bases de datos no relacionales](https://aws.amazon.com/es/nosql/) o bases de datos NoSQL están diseñadas específicamente para modelos de datos específicos y tienen esquemas flexibles para crear aplicaciones modernas. Entre sus principales características podemos destacar el hecho de que este sistema no trabaja como estructuras definidas. En este sentido, los datos no se almacenan en tablas y la información tampoco se organiza en registros o campos. 
  + [Mongodb](https://www.mongodb.com/es/what-is-mongodb) es una base de datos de documentos que ofrece una gran escalabilidad y flexibilidad, y un modelo de consultas e indexación avanzado.
* Un [ODM](https://frre-dacs.github.io/teoria-practicos/acceso-datos/odm/) hace de intermediario entre la app y la DB no relacional así tenemos métodos propios que hacen todo el trabajo.
  + [MongooseJS](https://mongoosejs.com/) es un ODM que facilita el uso de MongoDB al traducir documentos en una base de datos a objetos en el programa. Además de MongooseJS, hay varios otros ODM que se han desarrollado para MongoDB, incluidos Doctrine, MongoLink y Mandango.



### Actividades

* Realice completamente el tutorial [Express - ODM (Básico)](https://dawfiec.github.io/DAWM/tutoriales/express_odmbasico.html)
* Tome como referencia la [documentación de Mongoose](https://mongoosejs.com/docs/index.html) o de los [tutoriales en ObjectRocket](https://kb.objectrocket.com/mongo-db) para implementar los siguientes métodos:
  + Agregue el controlador de la ruta `"/findAllByGender/:genero/json"` para el verbo **GET**. El cual responde un json con todos los documentos (findAll) que se encuentran en la colección, dado el genero.
  + Agregue el controlador de la ruta `"/findAllByTime/:tiempo_navegacion_seg_menor/:tiempo_navegacion_seg_mayor/json"` para el verbo **GET**. El cual responde un json con todos los documentos (findAll) que se encuentran en la colección, dado que el tiempo de navegacion se encuentre en el rango.
  + Agregue el controlador de la ruta `"/findByUser/:usuario/json"` para el verbo **GET**. El cual responde un json con el documento (find) que se encuentra en la colección, dado el usuario.

* Compruebe el funcionamiento del servidor, con: **npm start** o **npm run devstart**
  + Acceda a los endpoints:
    - `http://localhost:3000/log_visitas/findAll/json`
    - `http://localhost:3000/log_visitas/findById/2/json`
    - `http://localhost:3000/log_visitas/findAllByGender/Female/json`
    - `http://localhost:3000/log_visitas/findAllByTime/10/30/json`
    - `http://localhost:3000/log_visitas/findByUser/tcaff0/json`


### Términos

endpoint, `base de datos no relacional`

### Referencias

* Bases de datos no relacionales Bases de datos de gráficos AWS. (2022). Retrieved 26 December 2022, from https://aws.amazon.com/es/nosql/
* Drew, E. (2022). Base de datos no relacional. Retrieved 26 December 2022, from https://blog.wearedrew.co/concepts/base-de-datos-no-relacional
* ¿Qué es MongoDB? (2022). Retrieved 26 December 2022, from https://www.mongodb.com/es/what-is-mongodb
* Prácticos, T., Datos, C., & Mapper, O. (2022). Object Document Mapper FRRe - Desarrollo de Aplicaciones Cliente-Servidor. Retrieved 26 December 2022, from https://frre-dacs.github.io/teoria-practicos/acceso-datos/odm/
* MongoDB ObjectRocket. (2022). Retrieved 26 December 2022, from https://kb.objectrocket.com/mongo-db