---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

## Preguntas

Elabore sus respuestas a las siguientes preguntas:

1. ¿Cuál es el propósito en desarrollar un API rest en mi aplicación web?
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
6. Explique el porqué es recomendable (**v1** del proyecto restapi) separar el enrutador y el controlador versus (**v2** del proyecto security) colocar todo el código en el enrutador.

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

7. ¿Para qué utilizar una variable del proyecto en lugar de asignar el valor en el código?
8. ¿Cuál es el propósito en utilizar la variable _TOKEN_SECRET_ en el proyecto **security** y en el proyecto **restapi**? 
9. ¿Cuál es el propósito de usar un JWT en el contexto de los proyectos **security** y **restapi**?
10. ¿Para qué utilizar Ionic para crear una aplicación para un dispositivo móvil si existen lenguajes de programación nativos, p.e. Java, Objective-C o Swift?
11. En el contexto de un proyecto en Ionic (con la arquitectura de Angular), ¿Para qué crear y utilizar un servicio en lugar de una requerimiento mediante fetch?
12. ¿Cuáles situaciones, y por qué, son recomendables de utilizar _cookies_ en lugar de _session_?
13. ¿Cuál es el próposito de utilizar un ORM (**v1**) en lugar de escribir el DQL (**v2**)?

	+ **v1**

	```typescript
	app.get('/users', async (req, res) => {
	    try {
	        const users = await User.findAll();
	        res.json(users);
	    } catch (error) {
	        res.status(500).json({ error: 'Error fetching users' });
	    }
	});
	```

	+ **v2**

	```typescript
	app.get('/users', async (req, res) => {
	    try {
	        const result = await pool.query('SELECT * FROM users');
	        res.json(result.srows);
	    } catch (error) {
	        res.status(500).json({ error: 'Error fetching users' });
	    }
	});
	```