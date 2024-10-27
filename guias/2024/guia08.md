---
theme: jekyll-theme-leap-day
---

## Guía 08

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2024/proyecto02)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">
Proponer código de scripting para el envío de datos a una base de datos alojada en la nube mediante el desarrollo de una <i>landing page</i> funcional y atractiva utilizando una plantilla de Bootstrap para la adecuación a los requerimientos específicos.
</pre>

### Actividades en clases

#### Firebase - Realtime Database

1. Acceda a la consola de [Firebase](https://console.firebase.google.com/u/0/), inicie sesión y cree un proyecto, p.e.: **landing**.
2. Dentro del proyecto, en el menú de navegación:
	+ Seleccione la categoría **Build**,
	+ Escoja la opción **Realtime Database**,
	+ Haga clic en **Create Database**.
3. Selecciona la ubicación y selecciona el **Modo de prueba** para permitir lecturas/escrituras sin restricciones por autenticación (para uso en desarrollo).
4. Copie la URL para acceder al _API REST_ de Firebase. La URL tiene el siguiente patrón:

	```
	https://<nombre-del-proyecto>.firebaseio.com/<nombre-de-la-coleccion>.json
	```

	Aquí, ```<nombre-de-la-coleccion>``` es el nombre de la colección con la que se interactuará.

#### Preparación de formulario y validación de campos

1. Modifique su formulario, y los elementos del formulario, con identificadores únicos, p.e.:

	```html
	<form id="form" ... >
		...
		<input id="form_name" type="text" ... >
		...
		<select id="form_products"> ... </select>
		...
		<input id="form_option1" type="radio">
	</form>	
	```

2. En el archivo de código externo _js/main.js_, agregue **return;** para terminar con la ejecución del código en caso de una validación fallida, p.e.:

	```js
	let loaded = ( eventLoaded ) => {

          let myform = document.getElementById('form');
          
          myform.addEventListener('submit', (eventSubmit) => {
              eventSubmit.preventDefault(); 
              
              ...

              if (emailText.length === 0) {
                emailElement.animate( ... )
                emailElement.focus()

                return;

              }
          })

        }
	```

#### Envío de datos - Fetch POST

1. Edite el archivo de código externo _js/main.js_.

	+ Agregue la constante _databaseURL_ y la función flecha _sendData_:

	```js
	// Reemplaza con tu URL
	const databaseURL = 'https://<nombre-del-proyecto>.firebaseio.com/<nombre-de-la-coleccion>.json'; 

	let sendData = () => {  }

	let ready = () => { ... }
    let loaded = () => { ... }

    ...
	```

	+ Dentro de _sendData_, obtenga la referencia al formulario mediante el objeto creado a partir del id, p.e.: **form**.

	```js
	const databaseURL = ...; 

	let sendData = ( ) => {  

		// Obtén los datos del formulario
	    const formData = new FormData(form);
	    const data = Object.fromEntries(formData.entries()); // Convierte FormData a objeto

	}

	let ready = () => { ... }
    let loaded = () => { ... }

    ...
	```

	+ Dentro de _sendData_, agregue la fecha actual al objeto **data** mediante el _Date API_ de Javascript.

	```js
	const databaseURL = ...; 

	let sendData = ( ) => {  

		...
		const data = ...

	    // new Date().toLocaleString( locales, options )
	    data['saved'] = new Date().toLocaleString('es-CO', { timeZone: 'America/Guayaquil' })

	}

	let ready = () => { ... }
    let loaded = () => { ... }

    ...
	```

	+ Dentro de _sendData_, agregue una petición asíncrona utilizando `fetch` para enviar datos de un formulario a la URL _databaseURL_.

	```js
	const databaseURL = ...; 

	let sendData = ( ) => {  

		...
		data['saved'] = ...

	    // Realiza la petición POST con fetch
	    fetch(databaseURL, {
	        method: 'POST', // Método de la solicitud
	        headers: {
	            'Content-Type': 'application/json' // Especifica que los datos están en formato JSON
	        },
	        body: JSON.stringify(data) // Convierte los datos a JSON
	    })
	    .then(response => {
	        if (!response.ok) {
	            throw new Error(`Error en la solicitud: ${response.statusText}`);
	        }
	        return response.json(); // Procesa la respuesta como JSON
	    })
	    .then(result => {
	        alert('Agradeciendo tu preferencia, nos mantenemos actualizados y enfocados en atenderte como mereces'); // Maneja la respuesta con un mensaje
	        form.reset()
	    })
	    .catch(error => {
	        alert('Hemos experimentado un error. ¡Vuelve pronto!'); // Maneja el error con un mensaje
	    });

	}

	let ready = () => { ... }
    let loaded = () => { ... }

    ...
	```

	+ Llame a la función _sendData_ después de la validación de campos del formulario.

	```js

	const databaseURL = ...; 

	let sendData = ( ) => {  ... }

	let ready = () => { ... }
    let loaded = () => {
    	

    	myform.addEventListener('submit', function (eventSubmit) {
    		...
	    	if (emailText.length === 0) {
	    		...
	    		return;
	    	}

	    	//Llamada a la función sendData()
	    	sendData();

    	});
    }

    ...
	````

2. Compruebe el envío de datos desde el formulario.
3. (STOP 1) Acceda a Firebase - Realtime Database para comprobar el resultado.

### Documentación

* El [API-fetch](https://www.javascripttutorial.net/web-apis/javascript-fetch-api/) tiene una explicación clara de la estructura para requerimientos asíncronos cuya respuesta viene en formato [JSON](https://codetogo.io/how-to-fetch-json-in-javascript/) o [XML](https://codetogo.io/how-to-fetch-xml-in-javascript/).

### Fundamental

#### Sincronía

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">For comparison here is how synchronous data fetching would work. <a href="https://t.co/GTjqmpnz3K">pic.twitter.com/GTjqmpnz3K</a></p>&mdash; Yash (@yashguptaz) <a href="https://twitter.com/yashguptaz/status/1236594518054469632?ref_src=twsrc%5Etfw">March 8, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Asincronía

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Asynchronous JavaScript Promises Visualized.<br><br>Notice how Web APIs are given the task of processing the request and the output is received back by the main thread.<br><br>This shows how single-threaded JavaScript can do async operations.<br><br>Animation made by me. <a href="https://t.co/p5vprPyxzn">pic.twitter.com/p5vprPyxzn</a></p>&mdash; Yash (@yashguptaz) <a href="https://twitter.com/yashguptaz/status/1236586576722812928?ref_src=twsrc%5Etfw">March 8, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

fetch, sincronía, asíncrona, firebase, json, xml, HTTP - GET

### Referencias

* Javascript Asíncrono: La guía definitiva — Lemoncode formacion. (2018). Retrieved 15 June 2022, from https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono
* JavaScript Fetch API Explained By Examples. (2022). Retrieved 15 June 2022, from https://www.javascripttutorial.net/javascript-fetch-api/
* Joubran, J., & Joubran, J. (2022). How to fetch json in JavaScript Code to go. Retrieved 15 June 2022, from https://codetogo.io/how-to-fetch-json-in-javascript/
* Joubran, J., & Joubran, J. (2022). How to fetch XML in JavaScript Code to go. Retrieved 15 June 2022, from https://codetogo.io/how-to-fetch-xml-in-javascript/
* Chart.js. (n.d.). Retrieved from https://www.chartjs.org/
* freeCodeCamp. (2022). JavaScript Get Current Date – Today’s Date in JS. Retrieved from https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/
* W3Schools.com. (n.d.). Retrieved from https://www.w3schools.com/jsref/jsref_tolocalestring.asp
* (N.d.). Retrieved from https://www.localeplanet.com/java/es-EC/index.html