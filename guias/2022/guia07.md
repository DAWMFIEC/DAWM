---
theme: jekyll-theme-leap-day
---

## Guía 07

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* [Básico](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics). En esta publicación encontrarán las generalidades de Javascript y una introducción al lenguaje que incluye definición de variables, condicionales, funciones y eventos.
* [EcmaScript6](http://es6-features.org/#). Aquí encontrarás las características incorporadas al EcmaScript6 y la [compatibilidad con los diferentes navegadores](http://kangax.github.io/compat-table/es6/). 
* [Arreglos](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array). El manejo de arreglos en JavaScript resulta primordial, especialmente para la aplicación de propiedades a un grupo de elementos.
* [Objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos). Esencialmente, todo es un objeto en JavaScript. En algunos casos son elementos propios del navegador y otros son objetos creados por los desarrolladores.
* [Elementos del navegador](https://javascript.info/browser-environment). Existen elementos básicos que todo navegador debe proveer como interfaz para los desarrolladores de aplicaciones web del lado del cliente.
* [Web API](https://developer.mozilla.org/es/docs/Web/API) En esta sección puedes encontrar las referencias al Web API que se utiliza cuando programas con Javascript.
* [DOM](https://javascript.info/dom-nodes). El DOM y su uso a través de ejemplos de etiquetas, anidamientos, autocorrección e inspección por la consola del navegador con sus [propiedades y métodos](https://developer.mozilla.org/es/docs/Web/API/Document).
* [Objeto: Document](https://javascript.info/dom-navigation). Este objeto te permite manipular el DOM de cualquier página web.


### Actividades

* Descargue y descomprima el archivo [album.zip](../ejercicios/album.zip).
* Agregue la etiqueta _script_ al final de la etiqueta _body_, con referencia al archivo `scripts/ejercicio.js`.
* Dentro del archivo `scripts/ejercicio.js`
	+ Agregue la función flecha *ejecutarCodigo*
	+ Dentro de la función flecha agregue la instrucción
	  
	  >
	  > alert('Hola, mundo!')
	  >

	+ Llame a la función *ejecutarCodigo*
	+ Guarde los cambios y revise el resultado en el navegador
		- Puede revisar más métodos y atributos del objeto [BOM](https://www.arkaitzgarro.com/javascript/capitulo-14.html) del navegador en la referencia del [MDN](https://developer.mozilla.org/es/docs/Web/API/Window).

	+ Comente el código que se encuentra dentro de la función *ejecutarCodigo*
	+ Agregue el código en Javascript para que:
		- Seleccione el elemento con el identificador `titulo1`. Cambie el texto por:
		  
		  >
		  >	Album de fotos
		  >

		- Seleccione los elementos con la clase `text-muted`. Para el elemento en la posición 1, cambie el contenido HTML el texto: 

		  >
		  > ````<span> En este sitio encontrarás un album de fotos
		  > inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>
		  > ````
		  >

		- Seleccione los elementos con la etiqueta `p`. Para el elemento en la posición 2, agregue la clase *d-none*.

* Reto

	+ Reemplace todos los elementos `svg` por `img`. Utilice las referencias:
		- [Reemplazar una etiqueta por otra ](https://javascript.plainenglish.io/how-to-replace-a-dom-element-in-place-using-javascript-e6aba3f8177f)
		- [Recorrer un arreglo de objetos](https://www.microverse.org/blog/how-to-loop-through-the-array-of-json-objects-in-javascript)
	+ Utilice los datos que se encuentra en el arreglo. 

	<pre><code>
		let arreglo = [
			{ url: 'https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camino'},
			{ url: 'https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'energia'},
			{ url: 'https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'papá'},
			{ url: 'https://images.unsplash.com/photo-1648737962619-16e5cd465d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'desayuno' },
			{ url: 'https://images.unsplash.com/photo-1654002300319-6c882ad161ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'copa' },
			{ url: 'https://images.unsplash.com/photo-1653934004892-1399fb4444c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60', alt: 'polar' },
			{ url: 'https://images.unsplash.com/photo-1653896775515-ae85244f58a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'camara' },
			{ url: 'https://images.unsplash.com/photo-1654041563290-2d6118dba2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'bosque' },
			{ url: 'https://images.unsplash.com/photo-1653883094445-9a53d0e9ac2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'cueva'},
			{ url: 'https://images.unsplash.com/photo-1578255321055-d9ed6a976af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt: 'perro'},
		]
	</code></pre>
	
	


### Términos

`Javascript`, polyfills, `API`, interfaz

### Referencias

* 2021.stateofjs.com. 2022. The State of JS 2021: T-shirt. [online] Available at: <https://2021.stateofjs.com/en-US/tshirt/> [Accessed 9 June 2022].
* JavaScript Guide - JavaScript MDN. (2022). Retrieved 9 June 2022, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
* Tutorial, T. (2022). The Modern JavaScript Tutorial. Retrieved 9 June 2022, from https://javascript.info/	
* JavaScript Tutorial. (2022). Retrieved 9 June 2022, from https://www.javascripttutorial.net/
* JavaScript Tutorial. (2022). Retrieved 9 June 2022, from https://www.w3schools.com/js/
* Free JavaScript Resources Java5cript.com. (2022). Retrieved 9 June 2022, from https://www.java5cript.com/
* 2022. online[online] Available at: <https://codepen.io/JavaScriptJunkie/pen/jvRGZy> [Accessed 10 June 2022].
