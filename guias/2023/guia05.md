---
theme: jekyll-theme-leap-day
---

## Guía 05

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2023/proyecto02)

### Actividades previas

#### Diseño

* Elija una estructura para el sitio de [Frontend Practice](https://www.frontendpractice.com/projects)

#### Ejercicio de colocación de elementos

* Descargue el ejercicio de [colocación](ejercicios/colocacion.zip). 
* Utilice **Visual Studio Code** para abrir el ejercicio de colocación.
* Instale el [Live Server de Visual Studio Code](https://www.geeksforgeeks.org/how-to-enable-live-server-on-visual-studio-code/).

### Actividades

### Grid vs Flexbox

* Considere el siguiente diseño para practicar el uso de flexbox y grid con el ejercicio de colocación de elementos:

<img src="imagenes/diseno.png" alt="diseño" width="49%">

### `Grid por columnas` 

* Utilice el selector CSS para la etiqueta `<main>` y aplique las siguientes propiedades:
	> __display: grid;__ <mark># Modo de colocar los elementos internos a grid</mark><br>
	> __row-gap: 0.5rem;__ <mark># Separación entre filas</mark><br>
	> __column-gap: 0.5rem;__ <mark># y/o columnas</mark><br>
	> __grid-template-columns: repeat(6, 1fr);__ <mark># Número de columnas donde acomodar los elementos</mark><br>

* Utilice los selectores CSS para cada elemento `<section>`:
	> __grid-column: 1 / 7;__ <mark>Columnas que ocupará en la rejilla</mark>, y<br>
	> __grid-row: 1 / 2;__ <mark>Filas que ocupará en la rejilla</mark>
 

### Documentación

*  [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) y [Layoutit Grid: Learning CSS Grid Visually With a Generator](https://css-tricks.com/layoutit-grid-learning-css-grid-visually-with-a-generator/)

### Términos


### Referencias

* 