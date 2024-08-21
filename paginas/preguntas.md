---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

## Preguntas

Elabore sus respuestas a las siguientes preguntas:

1. ¿Para qué desarrollar un API rest en mi aplicación web?
2. ¿Qué elementos específicos están involucrados desde la solicitud HTTP hasta la actualización en la base de datos en una petición HTTP POST? Utilice un diagrama de secuencia para explicar el proceso. 
3. Evalúa la implementación del endpoint que crea un nuevo, o elimina un, documento en Firestore. ¿Qué validaciones sugerirías para mejorar la calidad del código?

	```typescript
	 exports.createItem = async (req, res) => {
	   try {
	     const data = req.body;
	     const itemRef = await db.collection('items').add(data);
	     res.status(201).send(`Created a new item: ${itemRef.id}`);
	   } catch (error) {
	     res.status(400).send(error.message);
	   }
	 };
	```

4. Evalúa la efectividad de las pruebas automatizadas realizadas con Postman. ¿Qué tan bien cubren los diferentes casos de uso y escenarios posibles? ¿Qué mejoras sugerirías?
5. Explique el porqué no se recomienda agregar el archivo .env en el versionamiento de un repositorio público en GitHub.
6. Explique el porqué es recomendable (v1 - el proyecto **restapi**) separar el enrutador y el controlador versus (v2 - proyecto **security**) colocar todo el código en el enrutador.

	+ **v1**

	__Enrutador__

	```typescript
	const itemController = require('../controllers/itemController');

	router.get('/items', itemController.getAllItems);
	
	module.exports = router;
	```

	__Controlador__

	```typescript
	exports.getAllItems = async (req, res) => {

	    ...
	};
	```

	+ **v2** 


	__Enrutador__
	
	```typescript
	router.get('/', function (req, res, next) {

	  ...
	
	});

	module.exports = router;
	```

