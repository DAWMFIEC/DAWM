---
theme: jekyll-theme-leap-day
---

## Guía 08

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2024/proyecto02)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">
Proponer código de scripting para el manejo de datos en una base de datos alojada en la nube mediante el desarrollo de una <i>landing page</i> funcional y atractiva utilizando una plantilla de Bootstrap para la adecuación a los requerimientos específicos.
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

#### Envío de datos - Fetch POST

1. Verifique que su formulario, y los elementos del formulario, tengan valores de identificadores únicos, p.e.:

	```html
	<form id="formulario" ... >
		...
		<input id="form_name" type="text" ... >
		...
		<select id="form_products"> ... </select>
		...
		<input id="form_option1" type="radio">
	</form>	
	```

2. Edite el archivo de código externo _js/main.js_.

	+ Agregue un **return** en los bloques de código con validación en el caso que sea fallida, p.e.:

	<pre><code>
	let loaded = ( eventLoaded ) => {

          let myform = document.getElementById('form');
          
          myform.addEventListener('submit', (eventSubmit) => {
              eventSubmit.preventDefault(); 
              
              const emailElement = document.querySelector('.form-control-lg');
              const emailText = emailElement.value;

              if (emailText.length === 0) {
                emailElement.focus()

                <b>return</b>
              }
          })

        }
	</code></pre>

	+ Agregue la constante _databaseURL_:

	<pre><code>
	// Reemplaza con tu URL
	const databaseURL = 'https://&lt;nombre-del-proyecto&gt;.firebaseio.com/&lt;nombre-de-la-coleccion&gt;.json'; 

	let ready = () => { ... }
    let loaded = () => { ... }
	</code></pre>

	+ Agregue la función flecha _sendData_.


	<pre><code>
	function sendData() { 
	}
	</code></pre>
		


4. Compruebe el resultado en el navegador.
5. (STOP 1) Acceda al URL de la colección de firebase para comprobar el resultado.

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