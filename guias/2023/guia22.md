---
theme: jekyll-theme-leap-day
---

## Guía 22

[DAWM](/DAWM/) / [ProyectoYY](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.

#### REST vs CRUD

* Consulte con ChatGPT por la [diferencia entre REST y CRUD](chatgpt/guia22-rest-crud.png).

#### REST API

* Identifique un modelo de su aplicación en Express.
* Revise el código provisto por alguno de los chatbots (ChatGPT o Bard) del REST API, con el CRUD del modelo, p.e.: [REST API con el CRUD del modelo Autor](chatgpt/guia22-rest-autor.png)

### Actividades

#### Ambiente de desarrollo

* En el proyecto en Express, desde la línea de comandos, coloque la variable de entorno _NODE_ENV_ con el valor `development`

	```
	set NODE_ENV=development
	```

**NOTA:** En adelante, todas los instrucciones se ejecutarán en el servicio con MySQL local.

#### Manejador de ruta

* En adelante, modifique el archivo manejador de rutas `routes/rest_<NOMBRE_CLASE>.js`.

#### REST API: GET-All

* Revise que el controlador para el verbo GET de la ruta **`/findAll/json`** retorne un json con todos los registros.

	```typescript
	  ...
	  router.get('/findAll/json', function(req, res, next) {  

	  	/* MÉTODO ESTÁTICO findAll  */

	    <NOMBRE_CLASE>.findAll({  
	        attributes: { exclude: ["updatedAt", "createdAt"] } ,
	    })  
	    .then(resultado => {  
	        res.json(resultado);  
	    })  
	    .catch(error => res.status(400).send(error)) 

	  });
	  
	  module.exports = router;
	```

* Reinicie o ejecute la aplicación

* Revise la respuesta con el URL `http://localhost:3000/rest/<NOMBRE_CLASE>/findAll/json`

#### REST API: GET-id

* Cree el controlador para el verbo GET de la ruta **`/findById/:id/json`** que retorne un json dado el id de un foto.

  ```typescript
  ...
	  router.get('/findById/:id/json', function(req, res, next) {  

	    let id = parseInt(req.params.id);

	    <NOMBRE_CLASE>.findAll({  
	        attributes: { exclude: ["updatedAt", "createdAt"] } ,
	        where: {
		      idautor: id,
		    },
	    })  
	    .then(resultado => {  
	        res.json(resultado);  
	    })  
	    .catch(error => res.status(400).send(error))  

	  });
  ...
  ```

### Términos

rest api, crud

### Referencias

* Terminal, F. (2011). Formatting cURL Output in the Windows Terminal. Retrieved 11 August 2022, from https://superuser.com/questions/275229/formatting-curl-output-in-the-windows-terminal
* Wieruch, R. (2020). How to create a REST API with Express.js in Node.js. Retrieved 10 August 2022, from https://www.robinwieruch.de/node-express-server-rest-api/
* Node.js Rest APIs example with Express, Sequelize & MySQL - BezKoder. (2020). Retrieved 14 August 2022, from https://www.bezkoder.com/node-js-express-sequelize-mysql/
* -->QueryInterface, H. (2022). sequelize.QueryInterface.removeColumn JavaScript and Node.js code examples Tabnine. Retrieved 24 December 2022, from https://www.tabnine.com/code/javascript/functions/sequelize/QueryInterface/removeColumn
* -->QueryInterface, H. (2022). sequelize.QueryInterface.addColumn JavaScript and Node.js code examples Tabnine. Retrieved 24 December 2022, from https://www.tabnine.com/code/javascript/functions/sequelize/QueryInterface/addColumn
* orm, b., bagade, a., Panneerselvam, S., Grin, O., & OurBigBook.com, C. (2019). bulkUpdate in sequelize orm. Retrieved 24 December 2022, from https://stackoverflow.com/questions/54898994/bulkupdate-in-sequelize-orm
* S., McConnell, H., & McConnell, H. (2020). Sequelize many-to-many M:N relationship not functioning. Error: 'SequelizeEagerLoadingError:${model1} is not associated to ${model2}'. Retrieved 24 December 2022, from https://stackoverflow.com/questions/64790882/sequelize-many-to-many-mn-relationship-not-functioning-error-sequelizeeagerl
* expected, O., & Vidal, L. (2021). One To Many relationship using Sequelize creates more foreign keys than expected. Retrieved 24 December 2022, from https://stackoverflow.com/questions/66696143/one-to-many-relationship-using-sequelize-creates-more-foreign-keys-than-expected