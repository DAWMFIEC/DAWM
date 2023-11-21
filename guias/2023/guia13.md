---
theme: jekyll-theme-leap-day
---

## Guía 13

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2023/proyecto05)

### Actividades previas

* Arma tu grupo (solo 2 o 3 personas) de trabajo.
* Seleccionen un tema para la aplicación web a partir de un conjunto de datos de acceso público, p.e.: [Kaggle](https://www.kaggle.com/).
* Seleccionen una plantilla (HTML, CSS y JS) gratuita con Bootstrap que contenga múltiples páginas, p.e.: [Theme Wagon](https://themewagon.com/theme-price/free/), [Start Bootstrap](https://startbootstrap.com/?showAngular=false&showVue=false&showPro=false), [BootstrapMade](https://bootstrapmade.com/) o [Creative Tim](https://www.creative-tim.com/bootstrap-themes/free).
  + Para esta guía utilizaremos [Ogani – Free Bootstrap 4 HTML5 Responsive Ecommerce Website Template](https://themewagon.com/themes/free-bootstrap-4-html5-responsive-ecommerce-website-template-ogani/).
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

#### Angular - Plantilla

* HTML

  - De la plantilla: Del archivo `index.html`, copie todas las etiquetas dentro de la etiqueta `<body>` excepto las etiquetas `<script>`. 
  - En el proyecto de Angular: En el componente principal `src/app/app.component.html`, reemplace el contenido por las etiquetas HTML previamente copiadas.

* Recursos o **assets**

  - De la plantilla: Copie todas las carpetas (p.e. `images`, `js`, `css`, etc) con los recursos de la plantilla.
  - En el proyecto de Angular: 

    + Coloque las carpetas dentro de `src/assets`.
    + Modifique el archivo `angular.json` con la ruta a los recursos. Coloque las rutas de acuerdo con el orden en la plantilla, p.e.:

      ```typescript
      "build": {
        ...
        "styles": [
          "node_modules/bootstrap/dist/css/bootstrap.min.css",
          "src/assets/css/tiny-slider.css",
          "src/assets/css/style.css"
        ],
        "scripts": [
          "node_modules/bootstrap/dist/js/bootstrap.min.js",
          "src/assets/js/tiny-slider.js",
          "src/assets/js/custom.js"
        ]
        ...
      }
      ```

* Reinicie el servidor y revise los cambios en el navegador.

#### Angular - Referencias

* De ser necesario, modifique en `src/index.html`
* De ser necesario, modifique en `src/app/app.component.html` las referencias a las imágenes a la ruta de recursos, p.e. `images/user.svg` a `assets/images/user.svg`
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