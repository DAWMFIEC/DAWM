---
theme: jekyll-theme-leap-day
---

## Guía 22

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.

#### Métodos y códigos de respuesta HTTP

* HTTP define un conjunto de [métodos de petición](https://developer.mozilla.org/es/docs/Web/HTTP/Methods) para indicar la acción que se desea realizar para un recurso determinado.
* Los [códigos de estado de respuesta](https://developer.mozilla.org/es/docs/Web/HTTP/Status) HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. 

#### Sequelize

* Revise los [conceptos básicos](https://sequelize.org/docs/v6/category/core-concepts/) de Sequelize: [instancias](https://sequelize.org/docs/v6/core-concepts/model-instances/), [consulta](https://sequelize.org/docs/v6/core-concepts/model-querying-basics/) y [buscadores por parámetros](https://sequelize.org/docs/v6/core-concepts/model-querying-finders/) de modelos.

#### REST vs CRUD

* Consulte con ChatGPT por la [diferencia entre REST y CRUD](chatgpt/guia22-rest-crud.png).

#### REST API

* Identifique un modelo de su aplicación en Express.
* Revise el código provisto por alguno de los chatbots (ChatGPT o Bard) del REST API, con el CRUD del modelo. Por ejemplo, para el prompt:

	```
	Como desarrollador de aplicaciones web, escribe solo el código del router con el 
	REST API que contenga el CRUD del modelo <MODELO> (con los atributos <ATRIBUTOS>). 
	Utiliza Promesas para manejar las respuestas de sequelize.

	La plataforma es NodeJS. El web framework del servidor es Express. 
	El ORM es sequelize. El motor de la base de datos es MySQL.
	```
	
	Tiene como resultado del REST API con el CRUD del modelo Autor, en el [enlace](https://chat.openai.com/share/c932b53f-4d41-4a48-b923-1469c7248b0a) o en la [imagen](chatgpt/guia22-rest-autor.png).

### Actividades

#### Ambiente de desarrollo

* En el proyecto en Express, desde la línea de comandos, coloque la variable de entorno _NODE_ENV_ con el valor `development`

	```
	set NODE_ENV=development
	```

**NOTA:** En adelante, todas los instrucciones se ejecutarán en el servicio con MySQL local.

* Ejecute el servidor de la aplicación: `npm start`

#### Manejador de ruta

* En adelante, modifique el archivo manejador de rutas `routes/rest_<NOMBRE_CLASE>.js` con los controladores para los métodos `GET`, `POST`, `PUT` y `DELETE`.

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

* Reinicie o ejecute el servidor de la aplicación
* En otra línea de comandos, realice la petición con cURL con el método GET:
	
	```
	curl -X GET http://localhost:3000/rest/<NOMBRE_CLASE>/findAll/json
	```

#### REST API: GET-id

* Cree el controlador para el verbo GET de la ruta **`/findById/:id/json`** que retorne un json dado el id.

  ```typescript
  ...
	  router.get('/findById/:id/json', function(req, res, next) {  

	    let id = req.params.id;

	    <NOMBRE_CLASE>.findByPk(id)
		    .then(instancia => {
		      if(instancia) {
		        res.status(200).json(instancia);
		      } else {
		        res.status(404).json({error: "No existe registro con el identificador "+id})
		      }
		    })
		    .catch(error => res.status(400).send(error))
	  });
  ...
  ```

* Reinicie o ejecute el servidor de la aplicación
* En otra línea de comandos, realice la petición con cURL con el método GET con parámetro en la ruta `<ID>`:
	
	```
	curl -X GET http://localhost:3000/rest/<NOMBRE_CLASE>/findById/<ID>/json
	```

#### REST API: POST

* Cree el controlador para el verbo POST de la ruta **`/save`** que recibe los datos en el cuerpo del requerimiento y guarda los datos en la base de datos relacional.

	```typescript
	...
		router.post('/save', function(req, res, next) {  

		  <NOMBRE_CLASE>.create(req.body)
		    .then(instancia => {
		      res.status(201).json(instancia);
		    })
		    .catch(error => {
		      res.status(500).json({ error: 'Error al crear el registro' });
		    });

		});
	...
	```


* Reinicie o ejecute el servidor de la aplicación
* En otra línea de comandos, realice la petición con cURL con el método POST con parámetros en el cuerpo del requerimiento `-d`:

    ```
    curl -X POST -d "<ATRIBUTO1>=<VALOR1>&...&<ATRIBUTON>=<VALORN>" http://localhost:3000/rest/<NOMBRE_CLASE>/save
    ```

#### REST API: PUT

* Cree el controlador para el verbo PUT de la ruta **`/update/:id`** que recibe los datos en el cuerpo del requerimiento y actualiza los datos en la base de datos relacional.

	```typescript
	...
		router.put('/update/:id', function(req, res, next) {  

		  let id = req.params.id;

		  <NOMBRE_CLASE>.findByPk(id)
		    .then(instancia => {
		      if(instancia) {

		        instancia.update(req.body)
		          .then(instanciaActualizada => {
		            res.status(201).json(instanciaActualizada);
		          })
		          .catch(error => {
		            res.status(500).json({ error: 'Error al actualizar el registro' });
		          });

		      } else {
		        res.status(404).json({error: "No existe registro con el identificador "+id})
		      }
		    })
		    .catch(error => res.status(400).send(error))
		  
		});
	...
	```


* Reinicie o ejecute el servidor de la aplicación
* En otra línea de comandos, realice la petición con cURL con el método PUT con parámetros en el cuerpo del requerimiento `-d` y con parámetro en la ruta `<ID>`:

    ```
    curl -X PUT -d "<ATRIBUTO1>=<VALOR1>&...&<ATRIBUTON>=<VALORN>" http://localhost:3000/rest/<NOMBRE_CLASE>/update/<ID>
    ```

#### REST API: DELETE

* Cree el controlador para el verbo DELETE de la ruta **`/delete/:id`** que recibe los datos en el cuerpo del requerimiento y elimina los datos en la base de datos relacional.

	```typescript
	...
		router.delete('/delete/:id', function(req, res, next) {  

		  let id = req.params.id;

		  <NOMBRE_CLASE>.findByPk(id)
	        .then(instancia => {
	          if(instancia) {

	            instancia.destroy()
	              .then(() => {
	                res.status(204).json({ mensaje: 'Registro eliminado'});
	              })
	              .catch(error => {
	                res.status(500).json({ error: 'Error al actualizar el registro' });
	              });

	          } else {
	            res.status(404).json({error: "No existe registro con el identificador "+id})
	          }
	        })
	        .catch(error => res.status(400).send(error))
		  
		});
	...
	```


* Reinicie o ejecute el servidor de la aplicación
* En otra línea de comandos, realice la petición con cURL con el método DELETE con parámetros en el cuerpo del requerimiento `-d` y con parámetro en la ruta `<ID>`:

    ```
    curl -X DELETE http://localhost:3000/rest/<NOMBRE_CLASE>/delete/<ID>
    ```

### Términos

rest api, crud, verbos HTTP, estados HTTP

### Referencias

* Terminal, F. (2011). Formatting cURL Output in the Windows Terminal. Retrieved 11 August 2022, from https://superuser.com/questions/275229/formatting-curl-output-in-the-windows-terminal
* Wieruch, R. (2020). How to create a REST API with Express.js in Node.js. Retrieved 10 August 2022, from https://www.robinwieruch.de/node-express-server-rest-api/
* Node.js Rest APIs example with Express, Sequelize & MySQL - BezKoder. (2020). Retrieved 14 August 2022, from https://www.bezkoder.com/node-js-express-sequelize-mysql/
* -->QueryInterface, H. (2022). sequelize.QueryInterface.removeColumn JavaScript and Node.js code examples Tabnine. Retrieved 24 December 2022, from https://www.tabnine.com/code/javascript/functions/sequelize/QueryInterface/removeColumn
* -->QueryInterface, H. (2022). sequelize.QueryInterface.addColumn JavaScript and Node.js code examples Tabnine. Retrieved 24 December 2022, from https://www.tabnine.com/code/javascript/functions/sequelize/QueryInterface/addColumn
* orm, b., bagade, a., Panneerselvam, S., Grin, O., & OurBigBook.com, C. (2019). bulkUpdate in sequelize orm. Retrieved 24 December 2022, from https://stackoverflow.com/questions/54898994/bulkupdate-in-sequelize-orm
* S., McConnell, H., & McConnell, H. (2020). Sequelize many-to-many M:N relationship not functioning. Error: 'SequelizeEagerLoadingError:${model1} is not associated to ${model2}'. Retrieved 24 December 2022, from https://stackoverflow.com/questions/64790882/sequelize-many-to-many-mn-relationship-not-functioning-error-sequelizeeagerl
* expected, O., & Vidal, L. (2021). One To Many relationship using Sequelize creates more foreign keys than expected. Retrieved 24 December 2022, from https://stackoverflow.com/questions/66696143/one-to-many-relationship-using-sequelize-creates-more-foreign-keys-than-expected