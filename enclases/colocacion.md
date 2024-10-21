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

#### Modelo de diseño Flexbox - por filas

1. Modifique la hoja de estilos _css/flexbox.css_.
2. Agregue las reglas CSS y verifique los cambios en el navegador:
	- Contenedor
		- Modelo de diseño flexible (<a href="https://developer.mozilla.org/es/docs/Web/CSS/display">display</a>).
		- Separación (<a href="https://developer.mozilla.org/es/docs/Web/CSS/gap">gap</a>) de **0.5rem** entre filas y de **0.5rem** entre columnas.
		- Dirección (<a href="https://developer.mozilla.org/es/docs/Web/CSS/flex-direction">flex-direction</a>) por filas.
		- Ajustar los elementos (<a href="https://developer.mozilla.org/es/docs/Web/CSS/flex-wrap">flex-wrap</a>) hasta ocupar la capacidad máxima.
		- Distribuya el espacio (<a href="https://developer.mozilla.org/es/docs/Web/CSS/justify-content">justify-content</a>) en medio de los items en el eje principal.
		- Estire los elementos (<a href="https://developer.mozilla.org/es/docs/Web/CSS/align-items">align-items</a>) dentro del bloque respecto con el eje transversal.
	- Contenido
		- Defina el tamaño predeterminado (<a href="https://developer.mozilla.org/es/docs/Web/CSS/flex-basis">flex-basis</a>) de cada elemento, p.e.: <i>El elemento con el identificador datosgenerales se extiende el **100%**.</i>
		- Distribuya equitativamente (<a href="https://developer.mozilla.org/es/docs/Web/CSS/flex-grow">flex-grow</a>) el espacio restante entre todos los elementos. Use el valor **1**.

#### Modelo de diseño Grid - por areas

1. Modifique la hoja de estilos _css/grid_areas.css_.
2. Agregue las reglas CSS y verifique los cambios en el navegador:
	- Contenedor
		- Modelo de diseño en cuadrícula (<a href="https://developer.mozilla.org/es/docs/Web/CSS/display">display</a>).
		- Separación (<a href="https://developer.mozilla.org/es/docs/Web/CSS/gap">gap</a>) de **0.5rem** entre filas y de **0.5rem** entre columnas.
		- Plantilla (<a href="https://developer.mozilla.org/es/docs/Web/CSS/grid-template-areas">grid-template-areas</a>) de **8** areas.
	- Contenido
		- Ubicación por areas (<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area">grid-area</a>), p.e.: <i>El elemento con el identificador datosgenerales se extiende por **solo** un área.</i>

#### Modelo de diseño Grid - por columnas 

1. Modifique la hoja de estilos _css/grid_columnas.css_.
2. Agregue las reglas CSS y verifique los cambios en el navegador:
	- Contenedor
		- Modelo de diseño en cuadrícula (<a href="https://developer.mozilla.org/es/docs/Web/CSS/display">display</a>).
		- Separación (<a href="https://developer.mozilla.org/es/docs/Web/CSS/gap">gap</a>) de **0.5rem** entre filas y de **0.5rem** entre columnas.
		- Plantilla (<a href="https://developer.mozilla.org/es/docs/Web/CSS/grid-template-columns">grid-template-columns</a>) de **6** columnas.
	- Contenido
		- Ubicación por columnas (<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column">grid-column</a>) y por filas (<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row">grid-row</a>), p.e.: <i>El elemento con el identificador datosgenerales se extiende desde la columna **1** hasta incluir a la columna **6**; y ocupa solo la fila **1**.</i>

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