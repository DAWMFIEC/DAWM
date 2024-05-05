---
theme: jekyll-theme-leap-day
---

## Guía 04

[DAWM](/DAWM/) / [Proyecto01](/DAWM/proyectos/2024/proyecto01)

### Actividades previas

#### Diseño

* Escoge a tu gusto una combinación de familias tipografías para título de pricipal, para los títulos de las secciones y para todo el documento, de acuerdo con la recomendación de [Fontjoy](https://fontjoy.com/). Verifica las familias tipográficas en [Google Fonts](https://fonts.google.com/).
* Seleciona a tu gusto una combinación de colores de acuerdo con la guía de [Happy Hues](https://www.happyhues.co/), [Huemint](https://huemint.com/website-2/), o [ColorMagic](https://colormagic.app/). 


### Actividades en clase

* Clona localmente tu repositorio **curriculum**.
* Sigue las instrucciones de [Bard](bard/guia04-bard01.pdf), y:
  - Cree la carpeta _'stylesheets'_, y dentro hoja de estilo externa `CSS` _'style.css'_.
  - Agregue la referencia con la ruta a la hoja de estilo externa en el archivo _index.html_.

#### Servidor HTTP 

* Levante un [`servidor HTTP` con Python](/DAWM/tutoriales/python) en la `ruta de la aplicación`.
* Acceda desde el navegador con el URL del servidor HTTP en Python, y
* En adelante, compruebe cada uno de los cambios en la hoja de estilo CSS al actualizar el navegador.

#### `Selectores`, `estilo en cascada` y `familia tipográfica`

Compruebe la [sugerencia](bard/guia04-bard02.pdf) de Bard para las siguientes actividades:

1. Use un _selector universal_ para asignar la familia tipográfica _Arial, sans-serif_ para todo el documento. 
2. Utilice un _selector por clase_ para fijar la familia tipográfica _Times New Roman, serif_ para todos los títulos de las secciones (&lt;h2&gt;). 
3. Emplee un _selector por elemento_ para establecer la familia tipográfica _Georgia, serif_ para el título principal (&lt;h1&gt;). 

#### Familias tipográficas de Google Fonts

Compruebe la [sugerencia](bard/guia04-bard03.pdf) de Bard para las siguientes actividades:

1. En Google Fonts, genere la referencia a las familias tipográficas escogidas previamente de Fontjoy.
2. Al inicio de la hoja de estilo, agregue la referencia a las familias tipográficas de Google Fonts.
3. Asigne a su gusto las familias tipográficas a las `reglas CSS`.

#### Color de texto y color de fondo

Compruebe la [sugerencia](bard/guia04-bard04.pdf) de Bard para las siguientes actividades:

1. Tome como referencia la combinación de colores previamente seleccionada a partir de Happy Hues, Huemint o ColorMagic.
2. Utilice un _selector por identificador_ para fijar el color de fondo para cada sección.
3. Utilice un _selector anidado_ para asignar el color del texto para el contenido de cada sección.

#### Modelo de caja

Compruebe la [sugerencia](bard/guia04-bard05.pdf) de Bard para las siguientes actividades:

1. Utilice alguno de los _selectores_ para acceder a una sección (&lt;section&gt;) de su página web.
2. Aplique a su gusto las `reglas CSS` (las `propiedades CSS` y los `valores CSS`) para el `modelo de caja`: _margin_, _border_ y _padding_, por ejemplo:

  ```
  <selectorCSS> {
    margin: 2px 1px 1.5px;
    margin-top: 0.8rem;
    border: 0.2pt dashed #827d7d;
    padding: 2% 1.2%;   
  }
  ```
3. Agregue la propiedad **box-shadow** con los siguientes valores:

  ```
   box-shadow: 
      rgba(0, 0, 0, 0.25) 0px 54px 55px, 
      rgba(0, 0, 0, 0.12) 0px -12px 30px, 
      rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, 
      rgba(0, 0, 0, 0.09) 0px -3px 5px; 
  ```

* Versiona local y remotamente el repositorio **curriculum**.

### Fundamental

* Generadores de CSS en [X](https://twitter.com/Div_pradeep/status/1710898245570892182) 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">10 CSS Generators to save you hours of work:<br><br>1. Blob maker<a href="https://t.co/ExD4VVBZhS">https://t.co/ExD4VVBZhS</a><br><br>2. Getwaves<a href="https://t.co/gGDI7pqFda">https://t.co/gGDI7pqFda</a><br><br>3. Neumorphism<a href="https://t.co/NSaOALMj7j">https://t.co/NSaOALMj7j</a><br><br>4. Glassmorphism<a href="https://t.co/iWTpASvFAQ">https://t.co/iWTpASvFAQ</a><br><br>5. CSS Glow Generator<a href="https://t.co/8Moqd2n9nr">https://t.co/8Moqd2n9nr</a><br><br>6. Cubic-bezier… <a href="https://t.co/aDuLPUJkCD">pic.twitter.com/aDuLPUJkCD</a></p>&mdash; Pradeep Pandey (@Div_pradeep) <a href="https://twitter.com/Div_pradeep/status/1710898245570892182?ref_src=twsrc%5Etfw">October 8, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

* Animaciones CSS en [X](https://twitter.com/carmenansio/status/1710351098211389450)

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">🚀 Más de 500 animaciones de carga creadas con un único elemento en CSS<a href="https://t.co/kVvt9DHzFy">https://t.co/kVvt9DHzFy</a> <a href="https://t.co/VEaBgXpgyR">pic.twitter.com/VEaBgXpgyR</a></p>&mdash; Cosmic Red 🔥 (@carmenansio) <a href="https://twitter.com/carmenansio/status/1710351098211389450?ref_src=twsrc%5Etfw">October 6, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Documentación

* CSS en la documentación de [MDN](https://developer.mozilla.org/es/docs/Web/CSS).
* En [W3Schools CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.php) revise los `selectores CSS` para acceder a uno o varios elementos del documento HTML y [W3Schools CSS Reference](https://www.w3schools.com/cssref/index.php) para aplicar las `propiedades y valores CSS`.

### Términos

servidor HTTP, ruta de la aplicación, CSS, reglas CSS, selectores CSS, propiedades CSS, valores CSS, modelo de caja

### Referencias

* CSS  MDN. (2023). Retrieved 22 May 2023, from https://developer.mozilla.org/es/docs/Web/CSS
* CSS Selectors Reference. (2023). Retrieved 22 May 2023, from https://www.w3schools.com/cssref/css_selectors.php
* ColorMagic  AI Color Palette Generator. (2023). Retrieved 22 May 2023, from https://colormagic.app/
* Happy Hues - Curated colors in context. (2023). Retrieved 22 May 2023, from https://www.happyhues.co/
* Fontjoy - Generate font pairings in one click. (2023). Retrieved 22 May 2023, from https://fontjoy.com/
* The W3C Markup Validation Service. (2022). Retrieved 24 May 2022, from https://validator.w3.org/
* CSS: centering things. (2023). Retrieved 23 May 2023, from https://www.w3.org/Style/Examples/007/center.en.html
* CSS Box Model. (2023). Retrieved 23 May 2023, from https://www.w3schools.com/css/css_boxmodel.asp
* Beautiful CSS box-shadow examples - CSS Scan. (n.d.). Retrieved from https://getcssscan.com/css-box-shadow-examples