---
theme: jekyll-theme-leap-day
---

## Guía 08

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* [DOM](https://javascript.info/dom-nodes). El DOM y su uso a través de ejemplos de etiquetas, anidamientos, autocorrección e inspección por la consola del navegador con sus [propiedades y métodos](https://developer.mozilla.org/es/docs/Web/API/Document).
* [Objeto](https://javascript.info/dom-navigation). Este objeto te permite manipular el DOM de cualquier página web.
* [Eventos](https://javascript.info/events). Cada elemento dentro del navegador responde a un conjunto de señales disparadas en el DOM.
* [Asincronía](https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono). En este sitio encontrarás una descripción completa de los patrones de asincronía que maneja JavaScript.
* [AJAX](https://www.espai.es/blog/2019/07/ajax-con-fetch-api/). La tecnología de requerimientos asincrónicos que maneja JavaScript permite hacer requerimientos a terceros sin que necesite recargar todo el contenido de la página. El [API-fetch](https://www.javascripttutorial.net/javascript-fetch-api/) tiene una explicación clara de la estructura para requerimientos de [JSON](https://codetogo.io/how-to-fetch-json-in-javascript/) y [XML](https://codetogo.io/how-to-fetch-xml-in-javascript/).


### Actividades

* Descargue y descomprima el archivo [rappo.zip](../ejercicios/rappo.zip).
* Agregue el archivo `js/ejercicio.js` y la referencia en el `index.html`.
* Levante un servidor HTTP en la carpeta del ejercicio.
* Agregue las siguientes funciones al archivo `js/ejercicio.js` 
* Evento [_DOMContentLoaded_](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event)
	+ Agregue el *listener* al evento *DOMContentLoaded* de la ventana (objeto window).

	<pre><code>
		window.addEventListener('DOMContentLoaded', (event) => {
		});
	</code></pre>

	+ Agregue la funcion flecha *cargarDatos* con el mensaje por consola.
	<pre><code>
		console.log('DOM cargado y analizado');
	</code></pre>
	+ Dentro del listener de la ventana, agregue la llamada a la función *cargarDatos*.
	+ Recargue la página en el navegador y revise los resultados en la consola del navegador.

* Dentro de la función flecha *cargarDatos*
	+ Realice una petición asincrónica con el objeto [fetch](https://www.javascripttutorial.net/javascript-fetch-api/) al url <a href="https://dataserverdawm.herokuapp.com/escritores/xml">Escritores</a>

	<pre><code>
		let url = 'https://dataserverdawm.herokuapp.com/escritores/xml'
		fetch(url)
		    .then(response => {
		        // handle the response
		    })
		    .catch(error => {
		        // handle the error
		    });
	</code></pre>

	+ Haga los cambios necesarios para procesar la respuesta de texto como un objeto [XML](https://codetogo.io/how-to-fetch-xml-in-javascript/).

	  <pre><code>
	  let url = 'https://dataserverdawm.herokuapp.com/escritores/xml'
	  fetch(url)
			  .then(response => response.text())
			  .then(data => {
			    const parser = new DOMParser();
			    const xml = parser.parseFromString(data, "application/xml");
			    // Procesamiento de la constante xml
			  })
			  .catch(console.error);
	  </code></pre>

	+ Procesamiento de la constante **xml**:
		- Obtenga la referencia a la etiqueta `<select>` del html. Puede usar el método [`getElementsByClassName`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName).
		- Obtenga la referencia a las etiquetas `<escritor>` de la constante xml. Puede usar el método [`getElementsByTagName`](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByTagName).
		- Recorra la respuesta anterior con la colección de etiquetas `<escritor>` con un [Array.from()](https://www.geeksforgeeks.org/htmlcollection-for-loop/) 
			2. Por cada etiqueta `<escritor>` cree un elementoHTML `<option>`. Utilice el método [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) del objeto document.
			3. Extraiga el valor de la etiqueta `<nombre>` y colóquelo como valor de la etiqueta `<option>`.
			4. Extraiga el valor de la etiqueta `<id>` y colóquelo como valor del atributo *value* de la etiqueta `<option>`.
			5. Agregue la etiqueta `<option>` como hija de la etiqueta `<select>` del html. Puede usar el método [`appendChild`](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild).
	+ Compruebe los resultados en el navegador.


* Reto
	+ Cree la función *mostrarFrases*
	+ Dentro del listener de la ventana, agregue la llamada a la función *mostrarFrases*.
	+ Dentro de la función mostrarFrases: agregue el *listener* al evento [*change*](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) de la etiqueta `<select>` del html.
		- Guarde el valor del parámetro del callback: `event.target.value`
	+ Dentro del listener: realice una petición asincrónica con el objeto [fetch](https://codetogo.io/how-to-fetch-json-in-javascript/) al url <a href="https://dataserverdawm.herokuapp.com/escritores/frases">Frases</a>
	  - Procese la respuesta **data** como un objeto JSON
	  	1. Obtenga el arreglo de objetos a partir de la clave `"frases"`
	  	2. Filtre el arreglo de objetos con [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter), compare el valor del atributo **id_author** y el valor del parámetro del callback.
		3. Itere sobre el arreglo filtrado con [for...of](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...of).
		4. Por cada elemento del arreglo filtrado: use las etiquetas dentro del archivo _etiquetasfrases.txt_ como [plantillas literales](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Template_literals), inyecte como marcador el valor de la clave `texto` de cada objeto y agregue la cadena resultante a la referencia de la etiqueta con el id **frases** del html.
	+ Compruebe los resultados en el navegador.

* Revise el resultado en [rappo_resultado.zip](../ejercicios/rappo_resultado.zip).

### Términos

`eventos`, listener, XML, JSON, `AJAX`, `asincrónico`

### Referencias

* Events, I. (2022). Introduction to Events. Retrieved 15 June 2022, from https://javascript.info/events
* Javascript Asíncrono: La guía definitiva — Lemoncode formacion. (2018). Retrieved 15 June 2022, from https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono
* JavaScript Fetch API Explained By Examples. (2022). Retrieved 15 June 2022, from https://www.javascripttutorial.net/javascript-fetch-api/
* Joubran, J., & Joubran, J. (2022). How to fetch json in JavaScript Code to go. Retrieved 15 June 2022, from https://codetogo.io/how-to-fetch-json-in-javascript/
* Joubran, J., & Joubran, J. (2022). How to fetch XML in JavaScript Code to go. Retrieved 15 June 2022, from https://codetogo.io/how-to-fetch-xml-in-javascript/