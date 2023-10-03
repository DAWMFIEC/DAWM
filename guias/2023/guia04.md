---
theme: jekyll-theme-leap-day
---

## Guía 04

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2023/proyecto02)

### Actividades previas

#### Diseño

* Escoja una combinación de familias tipografías de acuerdo con la recomendación de [Fontjoy](https://fontjoy.com/).
* Selecione una combinación de colores de acuerdo con la guía de [Happy Hues](https://www.happyhues.co/), [Huemint](https://huemint.com/website-2/), o [ColorMagic](https://colormagic.app/). 


### Actividades en clase

* Descargue los archivos del repositorio **curriculum**, y
* Siga las instrucciones de [Bard](bard/guia04-bard01.pdf) para crear la **hoja de estilo externa** `CSS` _stylesheets/style.css_ y para agregar la referencia en el archivo _index.html_

#### Servidor HTTP 

* Levante un [servidor HTTP en Python](/DAWM/tutoriales/python) en la ruta de la aplicación.
* Acceda desde el navegador al URL del servidor HTTP en Python, y
* Compruebe cada uno de los cambios en la hoja de estilo CSS al actualizar el URL en el navegador.

#### Estilo en cascada y familia tipográfica

Compruebe la sugerencia de [Bard](bard/guia04-bard02.pdf) para las siguientes actividades:

1. Use un _selector universal_ para asignar la familia tipográfica _'Arial, sans-serif'_ a todo el documento. 
2. Utilice un _selector por clase_ para fijar la familia tipográfica _'Times New Roman, serif'_ en todos los títulos de las secciones &lt;h2&gt;. 
3. Emplee un _selector por elemento_ para establecer la familia tipográfica _'Georgia, serif'_ solo el título principal &lt;h1&gt;. 

#### Familias tipográficas de Google Fonts

Compruebe la sugerencia de [Bard](bard/guia04-bard03.pdf) para las siguientes actividades:

1. Agregue la referencia las familias tipográficas externas de [Google Fonts](https://fonts.google.com/) que seleccionó de Fontjoy.
2. Cambie las familias tipográficas para todo el documento, los títulos de las secciones y el título principal.

#### Color de texto y color de fondo

Compruebe la sugerencia de [Bard](bard/guia04-bard04.pdf) para las siguientes actividades:

1. Utilice la combinación de colores de acuerdo con la guía de Happy Hues.
2. Utilice un _selector por identificador_ para fijar el color de fondo para cada sección.
3. Utilice un _selector anidado_ para asignar el color del texto para el contenido de cada sección.

#### Propiedades de texto

Consulte y compruebe la sugerencia de alguna de las IAs para la pregunta:

```
Las propiedades CSS para eliminar el subrayado predeterminado y aplicar el 
tamaño de la fuente de 1.2rem a todas las etiquetas <a>
```

#### Modelo de caja

Busque y compruebe la documentación en [W3School](https://www.w3schools.com/css/css_boxmodel.asp) para las siguientes actividades:

1. Utilice cualquier tipo de selector para acceder a una imagen dentro del sitio web.  
2. Modifique la propiedadees:
  * Borde de *1pt solid black*
  * Relleno de *1.1rem*
  * Margen superior *10px*
  * Margen izquierdo y derecho *25%*
  * Margen inferior *2px*

**Nota:** Experimenta con otros valores para las propiedades.

#### Centrar contenido y contenedor

Busque y compruebe la documentación en [CSS: Centering things](https://www.w3.org/Style/Examples/007/center.en.html) para las siguientes actividades:

1. Tome como referencia la sección &lt;section&gt; que contiene el mapa &lt;iframe&gt;. 
2. Centre horizontalmente **el contenedor** &lt;section&gt; o **el contenido** &lt;iframe&gt;.


* Actualice todos los archivos en el repositorio **curriculum**.

### Documentación

* CSS en la documentación de [MDN](https://developer.mozilla.org/es/docs/Web/CSS).
  - [Selectores CSS](https://www.w3schools.com/cssref/css_selectors.php) para acceder a uno o varios elementos del documento HTML.
  - [Propiedades y valores](https://www.w3schools.com/cssref/index.php)

### Términos

CSS, reglas CSS, propiedades CSS, selectores CSS, HTTP, servidor HTTP, peticiones y respuestas HTTP

### Referencias

* CSS  MDN. (2023). Retrieved 22 May 2023, from https://developer.mozilla.org/es/docs/Web/CSS
* CSS Selectors Reference. (2023). Retrieved 22 May 2023, from https://www.w3schools.com/cssref/css_selectors.php
* ColorMagic  AI Color Palette Generator. (2023). Retrieved 22 May 2023, from https://colormagic.app/
* Happy Hues - Curated colors in context. (2023). Retrieved 22 May 2023, from https://www.happyhues.co/
* Fontjoy - Generate font pairings in one click. (2023). Retrieved 22 May 2023, from https://fontjoy.com/
* The W3C Markup Validation Service. (2022). Retrieved 24 May 2022, from https://validator.w3.org/
* CSS: centering things. (2023). Retrieved 23 May 2023, from https://www.w3.org/Style/Examples/007/center.en.html
* CSS Box Model. (2023). Retrieved 23 May 2023, from https://www.w3schools.com/css/css_boxmodel.asp