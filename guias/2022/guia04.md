---
theme: jekyll-theme-leap-day
---

## Guía 04

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* CSS
	- [Modelo de cajas](https://developer.mozilla.org/es/docs/Learn/CSS/Building__blocks/El__modelo__de__caja). ¡Todo es una caja! Aquí se revisa en qué consiste el modelo de cajas, los tipos de caja: inline y block, y las partes de una caja.
	- [Pseudo-selectores](https://developer.mozilla.org/es/docs/Learn/CSS/Building__blocks/Selectors/Pseudo-classes__and__pseudo-elements) permiten seleccionar elementos y generar comportamientos relacionados con estilos.
	- [Colocación de cajas](https://www.diegocmartin.com/modelo-de-cajas-y-posicionamiento-css/). Ubicar una caja requiere identificar los componentes (margin, background, border, padding y content ) y las formas de ubicar la caja en el área visible (float, display > inline-block, grid y flexbox). En la guía completa de [grid](https://css-tricks.com/snippets/css/complete-guide-grid/) y [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) encontrarás las propiedades básicas para darle una estructura a tu sitio web. Además, de la comparación completa entre Grid y Flexbox en [CSS-Tricks](https://css-tricks.com/quick-whats-the-difference-between-flexbox-and-grid/) y en [Hackernoon](https://hackernoon.com/the-ultimate-css-battle-grid-vs-flexbox-d40da0449faf). Por otro lado, un par de sitio como sandbox para probar tus conocimientos de [grid](https://cssgridgarden.com/#es) y [flexbox](https://flexboxfroggy.com/#es). 



### Actividades

* Identifique la o las etiquetas HTML para utilizar:
	- Selectores agrupados con las propiedades a aplicar
		+ Por identificador, por clase y/o por etiqueta
	- Selector por descendientes, hijos, adyacentes y hermanos; y las propiedades a aplicar
	- Pseudo-selectores  con las propiedades a aplicar
		+ [Pseudo-clases](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes) como __:hover__ o __:focus__, por ejemplo: cambiar el [comportamiento por defecto de los enlaces](https://uniwebsidad.com/libros/css-avanzado/capitulo-3/pseudo-clases).
		+ [Pseudo-elementos](https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-elements) como __::before__ o __::after__, por ejemplo: el efecto de [agregar contenido](https://uniwebsidad.com/libros/css-avanzado/capitulo-3/pseudo-elementos) desde css sin modificar el html.

* Utilice el [ejercicio de colocación](../ejercicios/colocacion.zip) para practicar el uso de flexbox y grid. Levante el servidor incorporado en [Python](../tutoriales/python.md), el [Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb) o algún otro mecanismo para levantar un servidor http.
	

	> #### `Guía de diseño Flexbox`, según [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) y [Don’t Overthink It (Flexbox) Grids](https://css-tricks.com/dont-overthink-flexbox-grids/)
	> * Escoja la etiqueta que funcionará **contenedor global** y aplique las propiedades
	>
	> 	__display: flex;__ <mark>Cambia el modo de colocar los elementos internos a flex</mark><br>
	> 	__justify-content: space-between;__ <mark>Los elementos internos se distribuyen por igual</mark><br>
	> 	__flex-wrap: wrap;__ <mark>Los ítems ocupan el espacio de acuerdo a su tamaño</mark><br>
	> 	__row-gap: 0.5rem;__ <mark>Separación entre filas</mark><br>
	> 	__column-gap: 0.5rem;__ <mark>y/o columnas</mark>
	>
	> * Identifique las etiquetas **ítems** por filas, de tal forma que si desea una fila con: 
	>
	>	__width: 100%;__ <mark>Una columna</mark>, o<br>
	>	__width: 49%;__ <mark>Dos columna</mark>, o<br>
	>	__width: 32%;__ <mark>Tres columna</mark>
	>
	> * Repita este proceso de afuera hacia adentro dentro del html.


	> ####  `Guía de diseño Grid`, según [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) y [Layoutit Grid: Learning CSS Grid Visually With a Generator](https://css-tricks.com/layoutit-grid-learning-css-grid-visually-with-a-generator/)
	> * Escoja la etiqueta que funcionará **contenedor global** y aplique la propiedad
	>
	> 	__display: grid;__ <mark>Cambia el modo de colocar los elementos internos a grid</mark><br>
	> 	__row-gap: 0.5rem;__ <mark>Separación entre filas</mark><br>
	> 	__column-gap: 0.5rem;__ <mark>y/o columnas</mark>
	>
	>   + Identifique la plantilla de columnas y aplique la propiedad:
	>
	>	  **OPCIÓN 1:** __grid-template-columns: repeat(6, 1fr);__ <mark>Número de columnas donde acomodar los elementos</mark>, o<br>
	>	  **OPCIÓN 2:** __grid-template-areas: "fila1 fila1 fila1 fila1" "fila2 fila2 fila3 fila3";__ <mark>Nombres de las áreas</mark>, o<br>
	>
	> * Identifique las etiquetas **ítems** por filas, de tal forma que si desea una fila de:
	>
	>	**OPCIÓN 1:** __grid-column: 4 / 7;__ <mark>Columnas que ocupará en la rejilla</mark>, y<br>
	>	  				__grid-row: 1 / 2;__ <mark>Filas que ocupará en la rejilla</mark>, o<br>
	>
	>	**OPCIÓN 2:** __grid-area: fila3;__ <mark>Nombre que ocupará en el área</mark><br>
	>
	> * Repita este proceso de afuera hacia adentro dentro del html. 	

* El resultado de esta actividad está disponible en [colocacion_resultado](../ejercicios/colocacion_resultado.zip).

### Playground

* En [flexbox.netlify](https://flexbox.netlify.app/) encuentras en un espacio para practicar la acomodación mediante Flexbox, mientras que  
* En [grid.layoutit](https://grid.layoutit.com/) se ofrece un buen espacio para comprender grid.


### Términos

Colocación de cajas, `flexbox`, `grid`, servidor http, localhost, puerto, IP

### Referencias

* Pseudoclases y pseudoelementos - Aprende sobre desarrollo web MDN. (2021). Retrieved 31 May 2022, from https://developer.mozilla.org/es/docs/Learn/CSS/Building__blocks/Selectors/Pseudo-classes__and__pseudo-elements
* Pseudo-classes - CSS MDN. (2022). Retrieved 31 May 2022, from https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-classes
* Pseudoelementos - CSS MDN. (2022). Retrieved 31 May 2022, from https://developer.mozilla.org/es/docs/Web/CSS/Pseudo-elements
* 3.4. Pseudo-clases (CSS avanzado). (2022). Retrieved 31 May 2022, from https://uniwebsidad.com/libros/css-avanzado/capitulo-3/pseudo-clases
* 3.5. Pseudo-elementos (CSS avanzado). (2022). Retrieved 31 May 2022, from https://uniwebsidad.com/libros/css-avanzado/capitulo-3/pseudo-elementos
* Relación de Grid Layout con otros métodos de diseño y posicionamiento - CSS - CSS MDN. (2021). Retrieved 31 May 2022, from https://developer.mozilla.org/es/docs/Web/CSS/CSS__Grid__Layout/Relationship__of__Grid__Layout
* Don't Overthink It (Flexbox) Grids  CSS-Tricks. (2016). Retrieved 31 May 2022, from https://css-tricks.com/dont-overthink-flexbox-grids/
* flexbox-playground. (2022). Retrieved 31 May 2022, from https://flexbox.netlify.app/
* A Complete Guide to Flexbox  CSS-Tricks. (2013). Retrieved 31 May 2022, from https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* A Complete Guide to Grid CSS-Tricks. (2021). Retrieved 31 May 2022, from https://css-tricks.com/snippets/css/complete-guide-grid/
* Layoutit Grid: Learning CSS Grid Visually With a Generator CSS-Tricks. (2020). Retrieved 1 June 2022, from https://css-tricks.com/layoutit-grid-learning-css-grid-visually-with-a-generator/
* Simple HTTP server in Python - Anurag Kumar. (2022). Retrieved 1 June 2022, from https://www.hackerearth.com/practice/notes/simple-http-server-in-python/