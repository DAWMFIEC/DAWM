---
theme: jekyll-theme-leap-day
---

## Guía 08

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2024/proyecto02)

### Actividades previas

* Realice la actividad [`Sincronía vs Asincronía`](/DAWM/enclases/syncasync) 

### Actividades en clases

#### Firebase - Realtime Database

1. Siga el tutorial de [Firebase - Realtime Database](/DAWM/tutoriales/firebase_realtime_database) para crear una colección de datos para su proyecto, en modo de prueba. 
	+ Compruebe el acceso a la colección de datos mediante el patrón de URL:

	```
	https://<nombre-del-proyecto>.firebaseio.com/<nombre-de-la-coleccion>.json
	```

#### Fetch - POST

1. Coloque identificadores únicos al formulrio y a los elementos del formulario, p.e.:

	```html
	<form id="formulario" ... >
		...
		<input id="form_name" type="text" ... >
		...
		<select id="form_products"> ... </select>
		...
	</form>	
	```

2. Detenga el comportamiento predeterminado del formulario al evento submit, p.e.:

	```javascript
	...
		myform.addEventListener('submit', (eventSubmit) => {
			
			eventSubmit.preventDefault() 
			...
		})
	...
	```

3. Verifique la existencia de contenido válido en los elementos del formulario.  

	```javascript
	...
		myform.addEventListener('submit', (eventSubmit) => {

		        eventSubmit.preventDefault()

		        if (form_name.value.length == 0) {
		            alert("Nombre requerido")
		            form_name.focus()
		            return;
		        }

		        ...

		})
	...
	```

4. Utilice las instrucciones de [Gemini](gemini/guia08-gemini01.pdf) para realizar un requerimiento `asíncrono` `HTTP - POST`, de los datos de un formulario, mediante `fetch`.
5. (STOP 1) Compruebe el resultado en el navegador.
6. Acceda al URL de la colección de firebase para comprobar el resultado.


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