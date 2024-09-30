---
theme: jekyll-theme-leap-day
---

## Guía 09

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2024/proyecto02)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="objective">

</pre>

### Actividades previas

1. Complete la funcionalidad el envío de datos mediante fetch - HTTP POST.
2. Compruebe el acceso a la colección de datos mediante el patrón de URL:

	```
	https://<nombre-del-proyecto>.firebaseio.com/<nombre-de-la-coleccion>.json
	```

3. Diseñe una estrategia para el procesamiento de datos, p.e.:
	+ Utilice las estructuras [Map y Set](https://javascript.info/map-set) para obtener valores únicos con sus valores correspondientes.

### Actividades en clases

#### Fetch - GET

1. Identifique la sección del documento HTML donde agregará el contenido dinámicamente, p.e.:

	```html
	<div id="resultados" class="blog-section">
		<div class="container">
			...
			<div class="row">
				<div class="p-3 p-lg-5 border bg-white">
					<table class="table site-block-order-table mb-5">
						<thead>
							<th>Categoría</th>
							<th>Conteo</th>
						</thead>
						<tbody id="tablebody">

						<!-- Filas dinámicas -->
						
						</tbody>
					</table>
				</div>
			</div>
			...
		</div>
	</div>
	```

2. Identifique el o los eventos en los que realizará la petición asíncrona de datos, p.e.:

	+ Inmediatamente después de cargar el documento HTML.
	+ Luego de recibir una respuesta a la petición fetch - POST

3. Utilice las instrucciones de [Gemini](gemini/guia09-gemini01.pdf) para realizar un requerimiento asíncrono `HTTP - GET`, de la colección de datos en `firebase`, mediante fetch.
	
	+ Aplique la estrategia para el procesamiento de datos.
	+ Diseñe una plantilla para rellenar con el contenido dinámico, p.e.:

	```javascript
	let template = `
		<tr>
			<td>${categoria}</td>
			<td>${conteo}</td>
		</tr>
	`
	```
4. (STOP 1) Compruebe el resultado en el navegador.
5. Acceda al URL de la colección de firebase para comprobar el resultado.

### Documentación

* El [API-fetch](https://www.javascripttutorial.net/web-apis/javascript-fetch-api/) tiene una explicación clara de la estructura para requerimientos asíncronos cuya respuesta viene en formato [JSON](https://codetogo.io/how-to-fetch-json-in-javascript/) o [XML](https://codetogo.io/how-to-fetch-xml-in-javascript/).

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