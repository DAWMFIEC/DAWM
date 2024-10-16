---
theme: jekyll-theme-leap-day
---

## Colocación de elementos

[DAWM](/DAWM/)

<!-- <link href="../guias/2024/styles/mystyle.css" rel="stylesheet" /> -->

### Actividades previas

1. Descargue y descomprima el ejercicio de [colocación](/DAWM/ejercicios/colocacion.zip). 
2. Utilice VSCode y habilite el [Live Server](https://www.geeksforgeeks.org/how-to-enable-live-server-on-visual-studio-code/).
3. En el navegador, habilite el inspector para visualizar los cambios en vivo.
4. Considere la siguiente imagen como referencia para escribir las reglas CSS de cada modelo de diseño en la hoja de estilos correspondiente.

<img src="imagenes/diseno.png" alt="diseño">

### Actividades en clases

#### Modelo de diseño Grid - por columnas 

1. Modifique la hoja de estilos _css/grid_columnas.css_.
2. Agregue las reglas CSS y verifique los cambios en el navegador:
	
	- Modelo de diseño en cuadrícula. [<a href="https://developer.mozilla.org/es/docs/Web/CSS/display">Pista</a>]
	- 0.5rem como espacio de separación entre filas y entre columnas. [<a href="https://developer.mozilla.org/es/docs/Web/CSS/gap">Pista</a>]
	- Plantilla de 6 columnas. [<a href="https://developer.mozilla.org/es/docs/Web/CSS/grid-template-columns">Pista</a>]
	

#### Modelo de diseño Grid - por area

* Modifique la hoja de estilos _css/grid_areas.css_.
* Utilice el selector CSS de su preferencia para acceder a la etiqueta &lt;main&gt;. Aplique cada una de las siguientes propiedades y valores. Verifique los cambios en el navegador.

	```

		/* Modo de colocar los elementos internos en una rejilla */
		display: grid; 

		/* Separación entre filas */
		row-gap: 0.5rem; 

		/* Separación entre columnas */
		column-gap: 0.5rem; 

		/* Nombres de las áreas*/
		grid-template-areas: "A A A A A A"
	                         "B B B Q Q Q"
	                         "D D E E F F"
	                         "M M M T T T"

	```

* Para cada elemento **&lt;section&gt;** que se encuentran dentro de la etiqueta **&lt;main&gt;**
	+ Acceda al elemento con el selector CSS de su preferencia. 
	+ Para la propiedad **grid-area**, en lugar **nombre_area** coloque el nombre del área de acuerdo con la plantilla.
	
		```

			grid-area: nombre_area;

		```
	+ Verifique los cambios en el navegador


#### Modelo de diseño Flexbox - por fila 

* Modifique la hoja de estilos _css/flexbox.css_.
* Utilice el selector CSS de su preferencia para acceder a la etiqueta &lt;main&gt;. Aplique cada una de las siguientes propiedades y valores. Verifique los cambios en el navegador.

	```

		/* Modo de colocar los elementos internos de manera flexible */
	  display: flex; 

	  /* Eje primario con la dirección de los elementos */
	  flex-direction: row;

	  /* Separación entre filas */
	  row-gap: 0.5rem; 

	  /* Separación entre columnas */
	  column-gap: 0.5rem; 

	  /* Los elementos ocupan el espacio de acuerdo a su tamaño */
	  flex-wrap: wrap;

	  /* Los elementos están distribuidos uniformemente en el eje primario  */
	  justify-content: space-between;

	  /* Los elementos se estiran para llenar el eje transversal */
	  align-items: stretch;

	```

* Para cada elemento **&lt;section&gt;** que se encuentran dentro de la etiqueta **&lt;main&gt;**
	+ Acceda con el selector CSS de su preferencia. 
	+ Para la propiedad **flex-basis**, reemplace **porcentaje** por el valor que crea conveniente. 
	
		```
			flex-basis: porcentaje%;

			/* El espacio restante en el contenedor se distribuirá 
			equitativamente entre todos los elementos internos */
			
			flex-grow: 1;
		```

    + Verifique los cambios en el navegador

### Entregable

* Comprima todos los archivos en formato .zip, o .rar, y responda a la actividad en el aulavirtual.

#### Documentación

* En [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) existe una explicación extensa del uso de Grid. Otras opciones: [Layoutit Grid: Learning CSS Grid Visually With a Generator](https://css-tricks.com/layoutit-grid-learning-css-grid-visually-with-a-generator/) y [grid.layoutit](https://grid.layoutit.com/).
* En [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) existe una explicación extensa del uso de Flexbox. Otras opciones: [Don’t Overthink It (Flexbox) Grids](https://css-tricks.com/dont-overthink-flexbox-grids/) y [An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/).

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