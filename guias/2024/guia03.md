---
theme: jekyll-theme-leap-day
---

## Guía 03

[DAWM](/DAWM/) / [Proyecto01](/DAWM/proyectos/2024/proyecto01)

<link href="styles/mystyle.css" rel="stylesheet" />

### Actividades previas

#### Diseño y Contenido

* Diseñe el contenido de su CV en el que incorpore un formulario ([sugerencias](bard/guia03-bard01.pdf)), una imagen o un video ([sugerencias](bard/guia03-bard02.pdf)), y un mapa ([sugerencias](bard/guia03-bard03.pdf)).
* Revise [Lorem Ipsum](https://www.lipsum.com/) (texto de relleno) y [Placehold](https://placehold.co/) (marcadores de posición de imágenes) en caso de necesitar contenido temporal de relleno.

### Actividades en clases

1. Clone localmente tu repositorio **curriculum**. 

#### Etiquetas multimedia

1. Consulte con [ChatGPT](https://chat.openai.com/) o [Gemini](https://gemini.google.com/app) con alguna recomendación para el uso de etiquetas `multimedia` (una `imagen` y un `video`) y un `mapa` a incluir en alguna de las secciones de su página HTML.

    <pre class="prompt">Como desarrollador de aplicaciones web, genera la etiqueta multimedia para incrustar una imagen en un documento HTML. Utiliza un placeholder de <a href="https://placehold.co/">https://placehold.co/</a> como URL. Genera la etiqueta multimedia para incrustar un video local o un video de Youtube en un documento HTML. Genera la etiqueta para incrustar un mapa con <a href="https://leafletjs.com/">Leaflet - https://leafletjs.com/</a> y un mapa de Google en un documento HTML.</pre>

2. Agregue las etiquetas sugeridas en el paso anterior dentro las secciones (_&lt;section&gt;_) adecuadas en el archivo _index.html_.

    **Obligatorio:** Utilice al menos un (1) elemento multimedia y al menos un (1) mapa. No utilice la etiqueta _&lt;br&gt;_. 

3. (STOP 1) Compruebe el resultado en el navegador.
4. Versione local y remotamente el repositorio **curriculum**.

#### Etiquetas de formularios

1. Diseñe un formulario (_&lt;form&gt;_), con campos de entrada (_&lt;input&gt;_, _&lt;select&gt;_ y _&lt;textarea&gt;_), con etiquetas (_&lt;label&gt;_) y con botones (_&lt;button&gt;_) de acuerdo con las [indicaciones](gemini/guia03-gemini01.pdf) de Gemini.

2. Agregue las etiquetas sugeridas en el paso anterior dentro una sección (_&lt;section&gt;_) del archivo _index.html_.

    **Obligatorio:** Utilice al menos un (1) formulario, con un (1) input, un (1) select y un (1) radiobutton. No utilice la etiqueta _&lt;br&gt;_.

3. (STOP 2) Compruebe el resultado en el navegador.
4. Versione local y remotamente el repositorio **curriculum**.


### Documentación

* HTML en la documentación de [MDN](https://developer.mozilla.org/es/docs/Web/HTML).
	- Lista de atributos en [W3Docs - HTML Attributes](https://www.w3docs.com/learn-html/html-attributes.html).

* Soporte para elementos HTML:
    - [Formularios](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) y sus elementos.
    - [Imágenes](https://developer.mozilla.org/es/docs/Web/HTML/Element/img) y sus atributos.
    - Archivos videos en formato [mp3](https://www.labnol.org/internet/google-drive-mp3-embed/2232/) o enlaces a [videos](https://www.desarrollolibre.net/blog/html/como-insertar-videos-de-youtube-en-nuestra-web-html#.XtccmDr0k2w) en Youtube.
    - Mapas en [Google](https://mappinggis.com/2012/05/como-insertar-un-mapa-de-google-maps-en-tu-web/) o [Leaflet](https://mappinggis.com/2013/06/como-crear-un-mapa-con-leaflet/).

### Fundamental

* Protocolo HTTP en [X](https://twitter.com/alexxubyte/status/1692560840853962987) 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">HTTP 1.0 -&gt; HTTP 1.1 -&gt; HTTP 2.0 -&gt; HTTP 3.0 (QUIC).<br><br>What problem does each generation of HTTP solve?<br><br>The diagram below illustrates the key features.<br><br>🔹HTTP 1.0 was finalized and fully documented in 1996. Every request to the same server requires a separate TCP connection.… <a href="https://t.co/V9uSXv0tvn">pic.twitter.com/V9uSXv0tvn</a></p>&mdash; Alex Xu (@alexxubyte) <a href="https://twitter.com/alexxubyte/status/1692560840853962987?ref_src=twsrc%5Etfw">August 18, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

* Inside look at modern web browser en Chrome Developer Network [Parte 1](https://developer.chrome.com/blog/inside-browser-part1/), [Parte 2](https://developer.chrome.com/blog/inside-browser-part2/), [Parte 3](https://developer.chrome.com/blog/inside-browser-part3/) y [Parte 4](https://developer.chrome.com/blog/inside-browser-part4/)

<p style="text-align: center;">
<img src="https://developer.chrome.com/images/hero.webp?w=1160&%3Bh=608&%3BfetchPriority=high&hl=es-419"  width="80%">
</p>


### Términos

etiquetas contenedores, multimedia, imagenes, videos, formulario

### Referencias

* HTML: Lenguaje de etiquetas de hipertexto MDN. (2021). Retrieved 18 May 2022, from https://developer.mozilla.org/es/docs/Web/HTML
HTML Standard. (2022). Retrieved 18 May 2022, from https://html.spec.whatwg.org/multipage/
* HTML5. Ejemplo de estructura global para página web con HTML5. (2022). Retrieved 18 May 2022, from http://www.edu4java.com/es/web/html5-estructura-global.html
* Conceptos básicos de HTML - Aprende sobre desarrollo web MDN. (2020). Retrieved 18 May 2022, from https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/HTML_basics
* Todos los ELEMENTOS SEMÁNTICOS de HTML. (2022). Retrieved 18 May 2022, from https://www.kikopalomares.com/blog/todos-los-elementos-semanticos-de-html
* HTML, E. (2022). Etiquetas HTML - Acerca de HTML. Retrieved 18 May 2022, from https://acercadehtml.com/etiquetas-html.html