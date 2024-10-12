---
theme: jekyll-theme-leap-day
---

## Guía 05

[DAWM](/DAWM/) / [Proyecto01](/DAWM/proyectos/2024/proyecto01)

<link href="styles/mystyle.css" rel="stylesheet" />
<script src="javascripts/tabs.js" type="text/javascript"></script>

### Objetivo general

<pre class="purpose">
Utlizar reglas CSS en la presentación y la accesibilidad del contenido mediante el desarrollo de un currículum vitae digital para la presentación de información profesional de manera organizada y accesible en línea.
</pre>

### Actividades en clases

1. Clona localmente tu repositorio **curriculum**.

#### Etiquetas contenedoras

1. En el navegador, identifique los elementos desalineados:

	<img src="./imagenes/guia05_elementos_desalineados.png" alt="elementos_desalineados" class="img-centered img-focus">

2. Edite el archivo _index.html_ con las etiqueta contenedoras:

	- &lt;div&gt; para agrupar varios elementos (como etiquetas y el texto relacionado), y 
	- &lt;span&gt; para contener solo texto. 

	<table>
		<caption>Etiquetas contenedoras</caption>
		<thead>
			<tr>
				<th>Antes</th>
				<th>Después</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
&lt;input type="checkbox" 
	name="habilidades" value="HTML"&gt; HTML
				</td>
				<td>
<b>&lt;div&gt;</b>
		&lt;input type="checkbox" 
			name="habilidades" value="HTML"&gt;
		<b>&lt;span&gt;</b>HTML<b>&lt;/span&gt;</b>
<b>&lt;/div&gt;</b>
				</td>
			</tr>
		</tbody>
	</table>

2. (STOP 1) Actualice el navegador y compruebe los cambios.
3. Versiona local y remotamente el repositorio **curriculum**.

#### Flex

1. Edite la hoja de estilo externa _'stylesheets/style.css'_.
2. Agregue la regla CSS al final de la hoja de estilos.

	```css
	nav ul {
		display: flex;
		justify-content: space-around;
	}
	```

3. Actualice el navegador y compruebe los cambios.
4. Versiona local y remotamente el repositorio **curriculum**.

#### Grid

1. Edite la hoja de estilo externa _'stylesheets/style.css'_.
2. Agregue la regla CSS al final de la hoja de estilos.

	```css
	section form {
		display: grid;
		row-gap: 0.5rem;
	}
	```

3. (STOP 2) Actualice el navegador y compruebe los cambios.
4. Versiona local y remotamente el repositorio **curriculum**.

#### Diseño: Flex vs Grid

1. Utilice:

	- Los elementos en el archivo _index.html_:

	```html
	<section id="resumen">
		<h2 class="subtitle">Resumen</h2>
		<p>Breve descripción de tus habilidades y experiencia.</p>
		<img id="photo" src="https://placehold.co/300x200" 
				 alt="Placeholder de imagen">
	</section>
	```

	- Con su vista previa en el navegador:

	<img src="./imagenes/guia05_diseno00.png" alt="diseño 00" class="img-centered">

2. En la hoja de estilo externa _'stylesheets/style.css'_ utilice el **estilo temporal**:

	```css
	#resumen {
		margin: 1.2% 33%;
	}
	```

3. En la hoja de estilo externa _'stylesheets/style.css'_ utilice el **diseño temporal**:

	

4. (STOP 3) Actualice el navegador y compruebe los cambios.

	<img src="./imagenes/guia05_diseno01.png" alt="diseño 01" class="img-centered">

5. Versiona local y remotamente el repositorio **curriculum**.

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
* (WAI), W. W. A. I. (n.d.). Example of Tabs with Manual Activation. Retrieved from https://www.w3.org/WAI/ARIA/apg/patterns/tabs/examples/tabs-manual/
* Olo, oloolo 5, Ethan VuEthan Vu 2, symlinksymlink 12.2k77 gold badges3030 silver badges5454 bronze badges, Dean WilsonDean Wilson 6155 bronze badges, & lucidlipslucidlips 4622 bronze badges. (1964). CSS flex-wrap how to make the height do not stretch. Retrieved from https://stackoverflow.com/questions/56999956/css-flex-wrap-how-to-make-the-height-do-not-stretch