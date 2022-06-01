---
theme: jekyll-theme-leap-day
---

## Guía 04

[Regresar](/DAWM-2022/)

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
* Utilice el diseño de su sitio web como referencia para [(re)colocar las secciones de la página HTML](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout).

	> #### `Guía de diseño Flexbox`, según [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) y [Don’t Overthink It (Flexbox) Grids](https://css-tricks.com/dont-overthink-flexbox-grids/)
	> * Escoja la etiqueta que funcionará **contenedor global** y aplique las propiedades
	> 	__display: flex;__ <mark>Cambie el modo de colocar los elementos internos a flex</mark><br>
	> 	__justify-content: space-between;__ <mark>Justifique los elementos internos</mark><br>
	> 	__flex-wrap: wrap;__ <mark>Para que los ítems decidan el espacio que ocuparán del contenedor global</mark><br>
	> 	__row-gap: 1rem;__ <mark>Agregue la separación entre filas</mark><br>
	> 	__column-gap: 1rem;__ <mark>y/o columnas</mark>
	> * Identifique las etiquetas **ítems** por filas, de tal forma que si desea una fila con: 
	>	+ __width: 100%;__ <mark>Una columna</mark>,
	>	+ __width: 49%;__ <mark>Dos columna</mark>, o
	>	+ __width: 32%;__ <mark>Tres columna</mark>
	> * Repita este proceso de afuera hacia adentro dentro del html.

	- `Guía de diseño Grid`, según [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) y [Layoutit Grid: Learning CSS Grid Visually With a Generator](https://css-tricks.com/layoutit-grid-learning-css-grid-visually-with-a-generator/)
		+ Escoja la etiqueta que funcionará **contenedor global** 
			- Cambie el modo de colocar los elementos internos con la propiedad __display: grid;__ y verifique los resultados
			- Identifique el número máximo de columnas de la cuadrícula con __grid-template-columns: repeat(3, 1fr);__ y verifique los resultados
		+ Identifique las etiquetas **ítems** por filas, de tal forma que si desea una fila de: 
			- Una columna, coloque las propiedades __grid-column-start: 1;__, __grid-column-end: 4;__, __grid-row-start: 1;__ y __grid-row-end: 3;__
			- Dos columna, coloque las propiedades __grid-column-start: 1;__, __grid-column-end: 4;__, __grid-row-start: 1;__ y __grid-row-end: 3;__

### Playgrounds

* Un buen __playground__ para flexbox se encuentra en [flexbox.netlify](https://flexbox.netlify.app/); mientras que [grid.layoutit](https://grid.layoutit.com/) ofrece un buen espacio para comprender grid.

### Términos

Colocación de cajas, `flexbox`, `grid`

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