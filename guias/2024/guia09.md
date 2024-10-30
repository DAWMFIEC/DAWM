---
theme: jekyll-theme-leap-day
---

## Guía 09

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2024/proyecto02)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">
Proponer código de scripting para la recuperación de datos de una base de datos alojada en la nube mediante el desarrollo de una <i>landing page</i> funcional y atractiva utilizando una plantilla de Bootstrap para la adecuación a los requerimientos específicos.</pre>

### Actividades previas

#### Firebase - Realtime Database

1. Complete la funcionalidad el envío de datos mediante fetch - HTTP POST.
2. Verifique el acceso a la colección de datos y compruebe que contenga datos:

	```
	https://<nombre-del-proyecto>.firebaseio.com/<nombre-de-la-coleccion>.json
	```

3. Identifique una estrategia para el procesamiento de datos utilizando alguna de las estructuras [Map y Set](https://javascript.info/map-set) de Javascript.

### Actividades en clases

#### Tabla de datos

1. Agregue al archivo _index.html_ la jerarquía de etiquetas `<!-- Suscribers - START -->` y `<!-- Suscribers - END -->`. Tome como referencia el `<!-- DIV contenedor del formulario -->`

	```html
	<section class="newsletter bg-light" style="background: url(images/pattern-bg.png) no-repeat;">
		<div class="container">
			<div class="row justify-content-center">
	        	
	        	<!-- DIV contenedor del formulario -->
	        	<div class="col-md-8 py-5 my-5">
	        		<div class="subscribe-header text-center pb-3">...</div>
	        		<form id="form" class="d-flex flex-wrap gap-2">...</form>
	        	</div>

			        <!-- Suscribers - START -->
			        <div class="col-md-4 py-5 my-5">
			          <h4 class="element-title text-capitalize my-3">Subscribers per Day</h4>
			          <table class="table table-hover table-light table-borderless">
			            <thead>
			              <tr>
			                <th scope="col">#</th>
			                <th scope="col">Day</th>
			                <th scope="col">Subscribers</th>
			              </tr>
			            </thead>
			            <tbody id="subscribers">
			            
			            </tbody>
			          </table>
			        </div>
			        <!-- Suscribers - END -->

			</div>
		</div>
	</section>
	```

#### Recuperación de datos - Fetch GET

1. Edite el archivo de código externo _js/main.js_.

	+ Agregue la función flecha _getData_ asíncrona:

	```js
	const databaseURL = ... 

	let sendData = () => { ... }

	let getData = async () => { }

	let ready = () => { ... }
    let loaded = () => { ... }

    ...
	```

	+ Dentro de _getData_, agregue una petición asíncrona utilizando `fetch` para recibir los datos de la URL _databaseURL_.

	```js
	const databaseURL = ...; 

	let sendData = () => { ... }

	let getData = async () => {  

		try {

		    // Realiza la petición fetch a la URL de la base de datos
		    const response = await fetch(databaseURL, {
		    	method: 'GET'
		    }});

		    // Verifica si la respuesta es exitosa
		    if (!response.ok) {
		      alert('Hemos experimentado un error. ¡Vuelve pronto!'); // Maneja el error con un mensaje
		    }

		    // Convierte la respuesta en formato JSON
		    const data = await response.json();

		    if(data != null) {

		    	// Cuente el número de suscriptores registrados por fecha a partir del objeto data

		    	// END

			    // Genere y agregue filas de una tabla HTML para mostrar fechas y cantidades de suscriptores almacenadas 

			    // END

		    }

		  } catch (error) {
		    // Muestra cualquier error que ocurra durante la petición
		    alert('Hemos experimentado un error. ¡Vuelve pronto!'); // Maneja el error con un mensaje
		  }

	}

	let ready = () => { ... }
    let loaded = () => { ... }

    ...
	```

	+ Dentro de _getData_, itere sobre el objeto **data** y utilice el mapa **countSuscribers** para procesar los datos por fecha.

	```js
	const databaseURL = ...; 

	let sendData = () => { ... }

	let getData = async () => {  

		try {

		    ...
		    const data = ...

		    if(data != null) {

			    // Cuente el número de suscriptores registrados por fecha a partir del objeto data
		        let countSuscribers = new Map()

		        if (Object.keys(data).length > 0) {
		            for (let key in data) {

		                let { email, saved } = data[key]
		                
		                let date = saved.split(",")[0]
		                
		                let count = countSuscribers.get(date) || 0;
		                countSuscribers.set(date, count + 1)
		            }
		        }
		        // END
			   
			    // Genere y agregue filas de una tabla HTML para mostrar fechas y cantidades de suscriptores almacenadas

			    // END
			
			}    

		  } catch (error) {
		    ...
		  }

	}

	let ready = () => { ... }
    let loaded = () => { ... }

    ...
	```

	+ Dentro de _getData_, itere sobre el mapa **countSuscribers**, renderice la plantilla **rowTemplate** y agregue al cuerpo de la tabla de datoscon el id **subscribers**.

	```js
	const databaseURL = ...; 

	let sendData = () => { ... }

	let getData = async () => {  

		try {

		    ...
		    const data = ...

		    if(data != null) {

			    // Cuente el número de suscriptores registrados por fecha a partir del objeto data
		        ...
		        // END
			   
			    // Genere y agregue filas de una tabla HTML para mostrar fechas y cantidades de suscriptores almacenadas
			    if (countSuscribers.size > 0) {

			    	subscribers.innerHTML = ''

		            for (let [date, count] of countSuscribers) {
		                let rowTemplate = `
		                    <tr>
		                        <th scope="row">1</th>
		                        <td>${date}</td>
		                        <td>${count}</td>
		                    </tr>`
		                subscribers.innerHTML += rowTemplate
		            }
		        }
		        // END

		    }

		  } catch (error) {
		    ...
		  }

	}

	let ready = () => { ... }
    let loaded = () => { ... }

    ...
	```

	+ Llame a la función _getData_ después de reiniciar el formulario y cuando el DOM esté listo.

	```js

	const databaseURL = ...; 

	let sendData = ( ) => { 
		
		fetch( ... )
		.then(response => { ... })
		.then(result => {
            alert('Agradeciendo tu preferencia, nos mantenemos actualizados y enfocados en atenderte como mereces'); // Maneja la respuesta con un mensaje
            form.reset()

            // Recuperación de datos
            getData()
        })
        .catch(error => { ... });

	}


	let getData = ( ) => {  ... }

	let ready = () => { 
		
		console.log('DOM está listo')

		// Recuperación de datos
	    getData();
	}

    let loaded = () => { ...  }

    ...
	````

### Documentación

* El [API-fetch](https://www.javascripttutorial.net/web-apis/javascript-fetch-api/) tiene una explicación clara de la estructura para requerimientos asíncronos cuya respuesta viene en formato [JSON](https://codetogo.io/how-to-fetch-json-in-javascript/) o [XML](https://codetogo.io/how-to-fetch-xml-in-javascript/).
* El [REST API de Firebase Realtime Database](https://firebase.google.com/docs/database/rest/start?hl=es).

### Fundamental

#### Sincronía

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">For comparison here is how synchronous data fetching would work. <a href="https://t.co/GTjqmpnz3K">pic.twitter.com/GTjqmpnz3K</a></p>&mdash; Yash (@yashguptaz) <a href="https://twitter.com/yashguptaz/status/1236594518054469632?ref_src=twsrc%5Etfw">March 8, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

#### Asincronía

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Asynchronous JavaScript Promises Visualized.<br><br>Notice how Web APIs are given the task of processing the request and the output is received back by the main thread.<br><br>This shows how single-threaded JavaScript can do async operations.<br><br>Animation made by me. <a href="https://t.co/p5vprPyxzn">pic.twitter.com/p5vprPyxzn</a></p>&mdash; Yash (@yashguptaz) <a href="https://twitter.com/yashguptaz/status/1236586576722812928?ref_src=twsrc%5Etfw">March 8, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

fetch, sincronía, asíncrona, firebase, json, xml, HTTP - POST

### Referencias

* Javascript Asíncrono: La guía definitiva — Lemoncode formacion. (2018). Retrieved 15 June 2022, from https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono
* JavaScript Fetch API Explained By Examples. (2022). Retrieved 15 June 2022, from https://www.javascripttutorial.net/javascript-fetch-api/
* Joubran, J., & Joubran, J. (2022). How to fetch json in JavaScript Code to go. Retrieved 15 June 2022, from https://codetogo.io/how-to-fetch-json-in-javascript/
* Joubran, J., & Joubran, J. (2022). How to fetch XML in JavaScript Code to go. Retrieved 15 June 2022, from https://codetogo.io/how-to-fetch-xml-in-javascript/
* Chart.js. (n.d.). Retrieved from https://www.chartjs.org/