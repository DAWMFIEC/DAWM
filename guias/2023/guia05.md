---
theme: jekyll-theme-leap-day
---

## Guía 05

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2023/proyecto02)

### Actividades previas

#### Ejercicio de colocación de elementos

* Descargue el ejercicio de [colocación](ejercicios/colocacion.zip). 
* Utilice **Visual Studio Code** para abrir el ejercicio de colocación. Use o habilite el [Live Server de Visual Studio Code](https://www.geeksforgeeks.org/how-to-enable-live-server-on-visual-studio-code/).

#### Grid vs Flexbox

* Considere el siguiente diseño al aplicar flexbox y grid para la disposición de elementos:

<img src="imagenes/diseno.png" alt="diseño">

##### `Grid por columnas` 

* Modifique el archivo `css/grid_columnas.css`
* Utilice el selector CSS para la etiqueta `<main>`. Aplique cada una de las siguientes propiedades y verifique los cambios:
	> __display: grid;__ <mark>/* Modo de colocar los elementos internos a grid */</mark><br>
	> __row-gap: 0.5rem;__ <mark>/* Separación entre filas */</mark><br>
	> __column-gap: 0.5rem;__ <mark>/* Separación entre columnas */</mark><br>
	> __grid-template-columns: repeat(6, 1fr);__ <mark>/* Número de columnas donde colocar los elementos */</mark><br>

* Utilice los selectores CSS para cada elemento `<section>` dentro de la etiqueta `<main>` y aplique las siguientes propiedades:
	> __grid-column: <mark>Número de columna de inicio</mark> / <mark>Número de columna de fin</mark>;__, y<br>
	> __grid-row: <mark>Número de fila de inicio</mark> / <mark>Número de fila de fin</mark>;__ <br>

##### `Grid por areas` 

* Modifique el archivo `css/grid_areas.css`
* Utilice el selector CSS para la etiqueta `<main>` y aplique las siguientes propiedades:
	> __display: grid;__ <mark># Modo de colocar los elementos internos a grid</mark><br>
	> __row-gap: 0.5rem;__ <mark># Separación entre filas</mark><br>
	> __column-gap: 0.5rem;__ <mark># Separación entre columnas</mark><br>
	> __grid-template-areas: \"fila1 fila1 fila1 fila1 fila1 fila1\" <br> \"fila21 fila21 fila21 fila22 fila22 fila22\" <br> \"fila31 fila31 fila32 fila32 fila33 fila33\" <br> \"fila41 fila41 fila41 fila42 fila42 fila42\"__; <mark># Nombres de las áreas</mark><br>
	
* Utilice los selectores CSS para cada elemento `<section>` dentro de la etiqueta `<main>` y aplique las siguientes propiedades:
	> __grid-area: <mark>Nombre del área</mark>;__ <br>

##### `Flexbox`

* Modifique el archivo `css/flexbox.css`
* Utilice el selector CSS para la etiqueta `<main>` y aplique las siguientes propiedades:
	> __display: flex;__ <mark># Modo de colocar los elementos internos a flex</mark><br>
	> __row-gap: 0.5rem;__ <mark># Separación entre filas</mark><br>
	> __column-gap: 0.5rem;__ <mark># Separación entre columnas</mark><br>
	> __flex-wrap: wrap;__ <mark># Los ítems ocupan el espacio de acuerdo a su tamaño</mark><br>
	> __justify-content: space-between;__ <mark># Los elementos internos se distribuyen por igual</mark><br>

* Utilice los selectores CSS para cada elemento `<section>` dentro de la etiqueta `<main>` y aplique las siguientes propiedades:
	> __width: <mark>Porcentaje</mark>%;__ <br>

#### Diseño

* Elija una estructura para el sitio de [Frontend Practice](https://www.frontendpractice.com/projects)
	
	**Mínimo:** Su diseño debe considerar que los elementos estén apilados y, al menos, una fila que contenga dos elementos.



### Actividades




### Documentación

* En [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) existe una explicación extensa del uso de Grid.
  - Otras opciones: [Layoutit Grid: Learning CSS Grid Visually With a Generator](https://css-tricks.com/layoutit-grid-learning-css-grid-visually-with-a-generator/) y [grid.layoutit](https://grid.layoutit.com/).
* En [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) existe una explicación extensa del uso de Flexbox.
  - Otras opciones: [Don’t Overthink It (Flexbox) Grids](https://css-tricks.com/dont-overthink-flexbox-grids/) y [flexbox.netlify](https://flexbox.netlify.app/).

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