---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)


Diseño de sitio web de noticias con Flexbox.
============================================

* * *

En este tutorial revisaremos el diseño de un sitio web de noticias con flexbox inspirado en [How to Build a News Website Layout with Flexbox](https://webdesign.tutsplus.com/tutorials/how-to-build-a-news-website-layout-with-flexbox--cms-26611) y las de acuerdo con [4 Quick Steps to Make a Website Responsive.](https://webdesign.tutsplus.com/tutorials/quick-steps-to-make-a-website-responsive--cms-37330). En el mismo sitio encontrarás otros tutoriales como: [Solving Problems With CSS Grid and Flexbox: The Card UI](https://webdesign.tutsplus.com/tutorials/solving-problems-with-css-grid-and-flexbox-the-card-ui--cms-27468), [Exercises in Flexbox: Simple Web Components](https://webdesign.tutsplus.com/tutorials/exercises-in-flexbox-simple-web-components--cms-28049) y [2 Ways to Build a Scrolling Card UI (Flexbox and CSS Grid)](https://webdesign.tutsplus.com/tutorials/horizontal-scrolling-card-ui-flexbox-and-css-grid--cms-41922).


Instrucciones
===============

* Descargue y descomprima el archivo [sitio_flexible.zip](../ejercicios/sitio_flexible.zip)
* Levante un servidor HTTP en la ruta de los archivos extraídos
  + Compruebe los cambios en el navegador desde la **URL** del sitio.

#### 1. Comience con dos columnas

* En el `index.html`, agregue las siguientes etiquetas dentro de la etiqueta `<body>`

```
<main class="main columns">
  <section class="column main-column">
     2/3 column
  </section>
  <section class="column">
    1/3 column
  </section>
</main>
```

* En el `public/stylesheets/layout.css` agregue las propiedades

```
.columns {
  display: flex; /*Contenedor de columnas*/
}

.column {
  flex: 1; /*Tamaño predeterminado de todas las columnas*/
}

.main-column {
  flex: 2; /*Columna principal*/
}
```

* Compruebe los resultados en el navegador

#### 2. Convierta cada columna en un contenedor Flexbox


* En el `index.html`, reemplace el contenido anterior por:
  + Dos etiquetas `<article>` dentro la primera etiqueta `<section>`, y tres etiquetas `<article>` dentro la segunda etiqueta `<section>`

```
<article class="article">
  Hello World
</article>
```


* En el `public/stylesheets/layout.css` modifique/agregue las siguientes propiedades

```
.column {
  ...
  display: flex;
  flex-direction: column; /* Cada artículo se ubica verticalmente */
}
 
.article {
  flex: 1; /* Ajusta el artículo para que rellene el espacio sobrante */
}
```

* Compruebe los resultados en el navegador


#### 3. Convierta cada artículo en un contenedor Flexbox 

* En el `index.html`:
  + Reemplace cada una de las dos primeras etiquetas `<article>` por:


```
<article class="article">
    <figure class="article-image">
      <img src="" alt="">
    </figure>
    <div class="article-body">
      <h2 class="article-title">
      Hello World
      </h2>
      <p class="article-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <footer class="article-info">
        <span>By Joe Smith</span>
        <span>42 comments</span>
      </footer>
    </div>
</article>
```

  - Para las imágenes, utilice los URLs 
    `https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/1366/posts/26611/attachment/image-01.png` y 
    `https://s3.amazonaws.com/cms-assets.tutsplus.com/uploads/users/1366/posts/26611/attachment/image-02.png`

  + Reemplace cada una de las tres últimas etiquetas `<article>` por:

```
<article class="article">
    <div class="article-body">
      <h2 class="article-title">
      Hello World
      </h2>
      <p class="article-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas sed tempus urna et. Lectus mauris ultrices eros in cursus turpis. Laoreet suspendisse interdum consectetur libero id faucibus nisl. Enim tortor at auctor urna. Tortor pretium viverra suspendisse potenti. Nisl pretium fusce id velit ut tortor pretium viverra suspendisse. Aliquet nibh praesent tristique magna sit amet. Orci dapibus ultrices in iaculis. 
      </p>
      <footer class="article-info">
        <span>By Joe Smith</span>
        <span>42 comments</span>
      </footer>
    </div>
</article>
```   

* En el `public/stylesheets/layout.css` agregue las propiedades

```
.article {
  ...
  display: flex;
  flex-direction: column;
  flex-basis: auto; /* Coloca el tamaño del elemento inicial basado en su contenido  */
}
 
.article-body {
  display: flex;
  flex: 1;
  flex-direction: column;
}
 
.article-content {
  flex: 1; /* Hace que el contenido llene el espacio sobrante y empuja el resto de etiquetas hasta el final */
}

.article-info {
  display: flex;
  justify-content: space-between;
}
```

* Compruebe los resultados en el navegador y para un dispositivo con un ancho máximo 800px. Notará que aún no es responsivo.

#### 4. Hacer que el diseño sea responsivo

* En el `index.html`, agregue la etiqueta `<meta>` dentro de la etiqueta `<head>`

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

* En el `public/stylesheets/layout.css` agregue las propiedades

```
@media screen and (max-width: 800px) {
  .columns,
  .column {
    display: flex;
  }

  .columns {
    flex-direction: column;
  }
}
```

* Compruebe los resultados en el navegador y para un dispositivo con un ancho máximo 800px.

#### 5. Los toques finales

* En el `index.html`, comente la referencia a la hoja de estilo `guides.css`

```
<link rel="stylesheet" href="public/stylesheets/guides.css">
```


* En el `public/stylesheets/style.css` agregue las propiedades

```
.article:hover,
.article:focus {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  color: #444;
}

.article {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
```


Referencias 
===========

* * *

* How to Build a News Website Layout with Flexbox. (2022). Retrieved 25 October 2022, from https://webdesign.tutsplus.com/tutorials/how-to-build-a-news-website-layout-with-flexbox--cms-26611
* 4 Quick Steps to Make a Website Responsive. (2022). Retrieved 26 October 2022, from https://webdesign.tutsplus.com/tutorials/quick-steps-to-make-a-website-responsive--cms-37330
* 2 Ways to Build a Scrolling Card UI (Flexbox and CSS Grid). (2022). Retrieved 26 October 2022, from https://webdesign.tutsplus.com/tutorials/horizontal-scrolling-card-ui-flexbox-and-css-grid--cms-41922
* Solving Problems With CSS Grid and Flexbox: The Card UI. (2022). Retrieved 26 October 2022, from https://webdesign.tutsplus.com/tutorials/solving-problems-with-css-grid-and-flexbox-the-card-ui--cms-27468
* Exercises in Flexbox: Simple Web Components. (2022). Retrieved 26 October 2022, from https://webdesign.tutsplus.com/tutorials/exercises-in-flexbox-simple-web-components--cms-28049