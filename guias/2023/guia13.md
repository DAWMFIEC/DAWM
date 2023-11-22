---
theme: jekyll-theme-leap-day
---

## Guía 13

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2023/proyecto05)

### Actividades previas

* Arma tu grupo (solo 2 o 3 personas) de trabajo.
* Seleccionen un tema para la aplicación web a partir de un conjunto de datos de acceso público, p.e.: [Kaggle](https://www.kaggle.com/).
* Seleccionen una plantilla gratuita, y que utilice Bootstrap, con múltiples páginas (HTML, CSS y JS). Puede considerar alguna de las siguientes fuentes: [Creative Tim](https://www.creative-tim.com/bootstrap-themes/free), [Templatemo](https://templatemo.com/tag/multi-page), [Theme Wagon](https://themewagon.com/theme-price/free/), [Start Bootstrap](https://startbootstrap.com/?showAngular=false&showVue=false&showPro=false) o [BootstrapMade](https://bootstrapmade.com/).
  + Tomaremos como referencia la plantilla []().
* Diseñen la interfaz de la aplicación con las siguientes páginas y secciones: 
  - **Página de Inicio** con la descripción del sitio; resumen de las características del dataset; pie de página con enlaces a políticas de privacidad, términos de servicio, datos de copyright y atribuciones; y un menú de navegación para acceder rápidamente a diferentes páginas y secciones.
  - **Página de Visualización de Datos** con una tabla (con opciones para ordenar y filtrar datos) y gráficos que resumen y visualizan datos importantes.
  - **Página de Contacto** con la información de contacto y un formulario para enviar comentarios o preguntas.


### Actividades

#### Github

* Crea un repositorio vacío (sin `README.md`, ni `.gitignore`, ni licencia) en GitHub con el nombre **mpa**.

#### Angular - Proyecto Base

* Cree un proyecto en Angular
  - Siga las instrucciones de ChatGPT que se encuentran [en línea](https://chat.openai.com/share/a033dd65-d993-4dc2-afac-3bd14447b750) o [en la imagen](chatgpt/guia13-angular.png).
  - Utilice **CSS** como formato para las hojas de estilo 
  - **No** utilice _Server-Side Rendering (SSR)_, ni _Static Site Generation (SSG/Prerendering)_.
  - Levante el proyecto, con:

    ```prompt
    ng serve --open
    ```

#### Angular - Bootstrap

* Incluya bootstrap y sus dependencias siguiendo las instrucciones, hasta el paso 5, de ChatGPT que se encuentran [en línea](https://chat.openai.com/share/1d7d24cf-051c-4e2b-936c-d02757b65748) o [en la imagen](chatgpt/guia14-angular-bootstrap.png).

#### Angular - Recursos o **assets**

* De la plantilla: 

  + Copie todas las carpetas (`img`, `js`, `css` y `lib`) con los recursos de la plantilla.
  + Del archivo `index.html`, copie las referencias a los archivos estáticos (`.css` y `.js`), p.e.:

    ```html
    ...
    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    ...
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    ...
    ```

* En el proyecto de Angular: 

  + Coloque las carpetas copiadas dentro de `src/assets`.
  + Modifique el archivo `angular.json` con la ruta a los recursos locales. Coloque las rutas de acuerdo con el orden en el que aparecen en la plantilla, p.e.:

    ```typescript
    "build": {
      ...
      "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "src/assets/lib/animate/animate.css",
        "src/assets/lib/owlcarousel/assets/owl.carousel.css",
        "src/assets/css/bootstrap.min.css",
        "src/assets/css/style.css",
        "src/styles.css"
      ],
      "scripts": [
        "node_modules/bootstrap/dist/js/bootstrap.min.js",
        "src/assets/lib/wow/wow.min.js",
        "src/assets/lib/easing/easing.min.js",
        "src/assets/lib/waypoints/waypoints.min.js",
        "src/assets/lib/owlcarousel/owl.carousel.min.js",
        "src/assets/js/main.js"
      ]
      ...
    }
    ```

#### Angular - Referencias externas

* De la plantilla: Del archivo `index.html`, copie las referencias externas (`cdn` y `googleapis`), p.e.:
  
  ```html
  </html>
    </head>
      ...
      <!-- Google Web Fonts -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Poppins:wght@200;600;700&display=swap"
          rel="stylesheet">

      <!-- Icon Font Stylesheet -->
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
      ...

    </head>
    <body>
      ...
      
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      ...
    </body>
  </html>
  ```

* En el proyecto de Angular: En el archivo `index.html`, pegue las referencias externas, p.e.:

  
  ```html
  </html>
    </head>
      ...
      <!-- Google Web Fonts -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Poppins:wght@200;600;700&display=swap"
          rel="stylesheet">

      <!-- Icon Font Stylesheet -->
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    </head>
    <body>
      <app-root></app-root>
      
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
      
    </body>
  </html>
  ```

#### Angular - Componente principal

* De la plantilla: Del archivo `index.html`, copie todas las etiquetas dentro de la etiqueta `<body>`; excepto, la etiqueta `<div id="spinner">` y las etiquetas `<script>`. 
* En el proyecto de Angular: En el componente principal `src/app/app.component.html`, reemplace el contenido por las etiquetas HTML previamente copiadas.
  - Modifique los errores mostrados por la consola, como usar **entidades HTML**, p.e.: de `info@example.com` a `info&#64;`example.com`  
  - Modifique las referencias a las imágenes a la ruta relativa a los recursos, p.e. de `images/user.svg` a `assets/images/user.svg`


* Reinicie el servidor y revise los cambios en el navegador.


#### Versionamiento

* Versione su proyecto en Github
  - Siga las instrucciones de ChatGPT que se encuentran [en línea](https://chat.openai.com/share/a541c121-9b66-4273-b090-3d9d1562bb3b) o [en la imagen](chatgpt/guia13-angular-versionamiento.png)
  - Utilice la rama `main` en lugar de `master`.

* Versiona local y remotamente el repositorio **mpa**.
* Despliegue el sitio del repositorio **mpa** utilizando GitHub Pages.

### Fundamental

* Características de AngularV17 en [X](https://twitter.com/TheAngularDev/status/1726252238593560813).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Think there&#39;s a lot going on in Angular 17? Well, I&#39;ll defer to you... 😉<a href="https://twitter.com/hashtag/DEVCommunity?src=hash&amp;ref_src=twsrc%5Etfw">#DEVCommunity</a> <a href="https://twitter.com/hashtag/Angular?src=hash&amp;ref_src=twsrc%5Etfw">#Angular</a><a href="https://t.co/xkGzMAtX1A">https://t.co/xkGzMAtX1A</a></p>&mdash; The Angular Dev (@TheAngularDev) <a href="https://twitter.com/TheAngularDev/status/1726252238593560813?ref_src=twsrc%5Etfw">November 19, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Documentación
  
* La documentación de [angular.dev](https://angular.dev/) en su sitio oficial.
  - **Características:** [en línea](https://chat.openai.com/share/c307ae2f-1213-4599-9491-ed849a71e33b) o [en la imagen](chatgpt/guia13-angular-caracteristicas.png).
  - **Estructura del proyecto:** [en línea](https://chat.openai.com/share/6c2c7ae7-cffd-4097-82b8-5b5a93d0f394) o [en la imagen](chatgpt/guia13-angular-estructura.png).
  - **Patrones de diseño:** [en línea](https://chat.openai.com/share/eeee5534-3efb-4701-bbc4-9f26b622fcd8) o [en la imagen](chatgpt/guia13-angular-patrones.png).  

### Términos

Librería, marco de trabajo, bootstrapping, spa, assets

### Referencias

* (N.d.). Retrieved from https://angular.dev/
* Introduction to Angular Components and How to Implement It? (20202) https://www.simplilearn.com/tutorials/angular-tutorial/angular-components
* Guía de iniciación al data binding en Angular Qué es y cómo se utiliza. (2019). Retrieved 13 July 2022, from https://www.acontracorrientech.com/guia-practica-del-databinding-en-angular/
* Dev, T. A. (2023). Effortlessly deploy your static websites to GitHub Pages with the gh-pages NPM package.{ author: @sean_coughlin_ } #DEVCommunity #Angularhttps://t.co/Ldk3cFxz5J. Retrieved from https://twitter.com/TheAngularDev/status/1712104014630834561