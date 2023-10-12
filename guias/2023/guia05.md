---
theme: jekyll-theme-leap-day
---

## Guía 05

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2023/proyecto02)

### Actividades previas

#### Ejercicio de colocación de elementos

* Descargue el ejercicio de [colocación](ejercicios/colocacion.zip). 
* Utilice **Visual Studio Code** para abrir el ejercicio de colocación. Use o habilite el [Live Server de Visual Studio Code](https://www.geeksforgeeks.org/how-to-enable-live-server-on-visual-studio-code/).
* Habilite el inspector en el navegador para visualizar los cambios en vivo.

#### Grid vs Flexbox

* Considere el siguiente diseño al aplicar `flexbox` y `grid` para la `colocación de elementos`.

<img src="imagenes/diseno.png" alt="diseño">

**Grid por columnas** 

* Modifique el archivo _css/grid_columnas.css_.
* Utilice el selector CSS para acceder a la etiqueta &lt;main&gt;. Aplique cada una de las siguientes propiedades y valores. Verifique los cambios en el navegador.

	```

		/* Modo de colocar los elementos internos en una rejilla */
		display: grid; 

		/* Separación entre filas */
		row-gap: 0.5rem; 

		/* Separación entre columnas */
		column-gap: 0.5rem; 

		/* Número de columnas: 6 * 1fr */
		grid-template-columns: repeat(6, 1fr); 

	```
	
* Utilice los selectores CSS para acceder a cada elemento &lt;section&gt; que se encuentran dentro de la etiqueta &lt;main&gt;. 
* Coloque los valores para **cinicio**, **cfinal**, **finicio** y **ffinal**. Verifique los cambios en el navegador
	
	```

		grid-column: cinicio / cfinal;
		grid-row: finicio / ffinal;

	```


**Grid por area**

* Modifique el archivo _css/grid_areas.css_.
* Utilice el selector CSS para acceder a la etiqueta &lt;main&gt;. Aplique cada una de las siguientes propiedades y valores. Verifique los cambios en el navegador.

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

* Utilice los selectores CSS para acceder a cada elemento &lt;section&gt; que se encuentran dentro de la etiqueta &lt;main&gt;. 
* Coloque los valores para **idarea**. Verifique los cambios en el navegador
	
	```

		grid-area: idarea;

	```

**Flexbox**

* Modifique el archivo _css/grid_columnas.css_.
* Utilice el selector CSS para acceder a la etiqueta &lt;main&gt;. Aplique cada una de las siguientes propiedades y valores. Verifique los cambios en el navegador.

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

* Utilice los selectores CSS para acceder a cada elemento &lt;section&gt; que se encuentran dentro de la etiqueta &lt;main&gt;. 
* Coloque los valores para **valor**. Verifique los cambios en el navegador
	
	```

		flex-basis: valor%;

		/* El espacio restante en el contenedor se distribuirá equitativamente entre todos los elementos internos */
		flex-grow: 1;

	```

### Actividades

#### Diseño

* Tome como referencia [Frontend Practice](https://www.frontendpractice.com/projects) para elegir la colocación de elementos de su proyecto.
	
	**Mínimo:** Su diseño NO solo debe considerar que los elementos estén apilados. Al menos, una fila debe contener dos elementos.

* Clona localmente tu repositorio **curriculum**.
* Aplique la colocación de elementos en su proyecto.
* Versiona local y remotamente el repositorio **curriculum**.

### Documentación

* En [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) existe una explicación extensa del uso de Grid.
  - Otras opciones: [Layoutit Grid: Learning CSS Grid Visually With a Generator](https://css-tricks.com/layoutit-grid-learning-css-grid-visually-with-a-generator/) y [grid.layoutit](https://grid.layoutit.com/).
* En [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) existe una explicación extensa del uso de Flexbox.
  - Otras opciones: [Don’t Overthink It (Flexbox) Grids](https://css-tricks.com/dont-overthink-flexbox-grids/) y [An Interactive Guide to Flexbox](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox/).

### Fundamental

* Colocando elementos con Grid Garden y Flexbox Froggy via [X](https://twitter.com/cristiank170319/status/1710508125567000742)

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">Descubre <a href="https://twitter.com/hashtag/CSSGrid?src=hash&amp;ref_src=twsrc%5Etfw">#CSSGrid</a> y <a href="https://twitter.com/hashtag/Flexbox?src=hash&amp;ref_src=twsrc%5Etfw">#Flexbox</a> de manera divertida con Grid Garden y Flexbox Froggy. 🎮🌐 Aprende jugando . 💻🚀 <br>Jardín Grid: <a href="https://t.co/SLubvps9gb">https://t.co/SLubvps9gb</a><br>Flexbox Froggy: <a href="https://t.co/e17lQydbXT">https://t.co/e17lQydbXT</a><br>¡CSS nunca fue tan divertido! 🌈✨<a href="https://twitter.com/hashtag/WebDev?src=hash&amp;ref_src=twsrc%5Etfw">#WebDev</a> <a href="https://twitter.com/hashtag/CodingFun?src=hash&amp;ref_src=twsrc%5Etfw">#CodingFun</a> <a href="https://t.co/OPd5eAouGd">pic.twitter.com/OPd5eAouGd</a></p>&mdash; Cristian Omar Guzman (@cristiank170319) <a href="https://twitter.com/cristiank170319/status/1710508125567000742?ref_src=twsrc%5Etfw">October 7, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

Colocación de elementos, flexbox, grid

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