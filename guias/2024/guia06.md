---
theme: jekyll-theme-leap-day
---

## Guía 06

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2024/proyecto02)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">
Evaluar el uso de componentes y utilidades mediante el desarrollo de una <i>landing page</i> funcional y atractiva utilizando una plantilla de Bootstrap para la adecuación a los requerimientos específicos.
</pre>

### Actividades previas

#### Landing Page

* Defina el objetivo de su  `landing page`, p.e.: venta de productos de belleza, información de un grupo estudiantil, datos de una veterinaria, noticias de KPOP, etc; excepto: _servicios de tienda de moda online_ o parecidos.
* Decida las secciones y el contenido que serán parte de la landing page. Tome como referencia la [recomendación](bard/guia06-bard02.pdf) de Bard.
* Decida los colores, la tipografía y los elementos visuales que refuercen el mensaje del sitio. Considere la paleta de colores de [Tintmint](https://tintmint.net/), imágenes de [DevianArt](http://www.deviantart.com) y familia de fuentes de [Google Fonts](https://fonts.google.com/).
  
### Actividades en clases

#### Github

1. Crea un repositorio en GitHub con el nombre **landing**.
2. Clone localmente tu repositorio **landing**.

#### Plantilla

1. Descargue [Kaira](https://themewagon.com/themes/kaira/) de ThemeWagon o del [recurso local](recursos/kaira-1.0.0.zip).
2. Descomprima y mueva todos los archivos en el repositorio local **landing**. 
3. Abra su proyecto con VSCode y utilice el Live Server para identificar los cambios. 
4. (STOP 1) Compruebe el resultado en el navegador.

#### Bootstrap

1. En _index.html_, identifique la referencia a la hoja de estilo.

    ```html
    <head>
      ...
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" 
        rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" 
        crossorigin="anonymous">
      ...
    </head>
    <body>
      ...
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
        crossorigin="anonymous"></script>
    </body>
    ```

2. En _index.html_, identifique la referencia a la la hoja de scripts. 

#### Navbar

1. Revise el componente `<nav>` en el _index.html_.
    
    ```html
    <nav class="navbar navbar-expand-lg bg-light text-uppercase fs-6 p-3 border-bottom align-items-center">
      ...
    </nav>
    ```

2. Considere la siguiente tabla con las clases utilizadas en el componente y el enlace a la documentación de Bootstrap.

    <table class="table">
      <caption>Componente <a href="https://getbootstrap.com/docs/5.3/components/navbar/">Navbar</a></caption>
      <thead>
          <tr>
              <th width="30%">Clase</th>
              <th>Descripción</th>
              <th>Enlace a la Documentación</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td><i>navbar</i></td>
              <td>Clase base para crear una barra de navegación.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/components/navbar/">Documentación Navbar</a></td>
          </tr>
          <tr>
              <td><i>navbar-expand-lg</i></td>
              <td>Establece que la barra de navegación se expanda en dispositivos grandes (pantallas grandes).</td>
              <td><a href="https://getbootstrap.com/docs/5.3/components/navbar/#responsive-behavior">Documentación Navbar</a></td>
          </tr>
          <tr>
              <td><i>bg-light</i></td>
              <td>Aplica un fondo claro a la barra de navegación.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/utilities/colors/#background-color">Documentación Background</a></td>
          </tr>
      </tbody>
    </table>

    <table class="table">
      <caption><a href="https://getbootstrap.com/docs/5.3/utilities/">Utility API</a></caption>
      <thead>
          <tr>
              <th width="30%">Clase</th>
              <th>Descripción</th>
              <th>Enlace a la Documentación</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td><i>text-uppercase</i></td>
              <td>Transforma el texto a mayúsculas.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/utilities/text/#text-transform">Documentación Text</a></td>
          </tr>
          <tr>
              <td><i>fs-6</i></td>
              <td>Establece el tamaño de fuente a un tamaño específico (6).</td>
              <td><a href="https://getbootstrap.com/docs/5.3/utilities/text/#font-size">Documentación Font Size</a></td>
          </tr>
          <tr>
              <td><i>p-3</i></td>
              <td>Aplica un padding de 1.5 rem a todos los lados del elemento.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/utilities/spacing/#padding">Documentación Spacing</a></td>
          </tr>
          <tr>
              <td><i>border-bottom</i></td>
              <td>Añade un borde en la parte inferior del elemento.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/utilities/borders/#border-utility">Documentación Borders</a></td>
          </tr>
          <tr>
              <td><i>align-items-center</i></td>
              <td>Alinea los elementos en el centro a lo largo del eje transversal (eje Y) en un contenedor flex.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/utilities/flex/#align-items">Documentación Flex</a></td>
          </tr>
      </tbody>
    </table>


3. Realiza las modificaciones sobre el componente **Navbar**.
4. Revise los cambios en el navegador.

#### Layout

1. Revise el elemento `<footer>` 
    
    ```html
    <footer id="footer" class="mt-5">
      <div class="container">
        <div class="row d-flex flex-wrap justify-content-between py-5">
          <div class="col-md-3 col-sm-6">...</div>
          <div class="col-md-3 col-sm-6">...</div>
          <div class="col-md-3 col-sm-6">...</div>
          <div class="col-md-3 col-sm-6">...</div>
        </div>
      </div>
      ...
    </footer>
    ```

2. Considere la siguiente tabla con las clases utilizadas en el componente y el enlace a la documentación de Bootstrap.

    <table class="table">
      <caption><a href="https://getbootstrap.com/docs/5.3/layout/">Layout</a></caption>
      <thead>
          <tr>
              <th width="30%">Clase</th>
              <th>Descripción</th>
              <th>Enlace a la Documentación</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td><i>container</i></td>
              <td>Proporciona un contenedor con ancho fijo y márgenes automáticos en los lados para centrar el contenido.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/layout/containers/#containers">Documentación Containers</a></td>
          </tr>
          <tr>
              <td><i>row</i></td>
              <td>Define una fila para el sistema de grid de Bootstrap.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/layout/grid/#rows">Documentación Grid</a></td>
          </tr>
          <tr>
              <td><i>col-md-3</i></td>
              <td>Define una columna que ocupará 3 de 12 partes del ancho en dispositivos medianos y más grandes.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/layout/grid/#grid-options">Documentación Grid</a></td>
          </tr>
          <tr>
              <td><i>col-sm-6</i></td>
              <td>Define una columna que ocupará 6 de 12 partes del ancho en dispositivos pequeños y más grandes.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/layout/grid/#grid-options">Documentación Grid</a></td>
          </tr>        
      </tbody>
    </table>

    <table class="table">
      <caption><a href="https://getbootstrap.com/docs/5.3/utilities/">Utility API</a></caption>
      <thead>
          <tr>
              <th width="30%">Clase</th>
              <th>Descripción</th>
              <th>Enlace a la Documentación</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td><i>mt-5</i></td>
              <td>Aplica un margen superior de 3 rem al elemento.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/utilities/spacing/#margin">Documentación Margin</a></td>
          </tr>
          <tr>
              <td><i>py-5</i></td>
              <td>Aplica un padding vertical (arriba y abajo) de 3 rem al elemento.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/utilities/spacing/#padding">Documentación Padding</a></td>
          </tr>
          <tr>
              <td><i>d-flex</i></td>
              <td>Aplica el estilo de diseño flex al elemento, permitiendo una distribución flexible de los elementos hijos.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/utilities/flex/#display">Documentación Flex</a></td>
          </tr>
          <tr>
              <td><i>flex-wrap</i></td>
              <td>Permite que los elementos flex se envuelvan a la siguiente línea si no hay suficiente espacio.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/utilities/flex/#flex-wrap">Documentación Flex</a></td>
          </tr>
          <tr>
              <td><i>justify-content-between</i></td>
              <td>Distribuye el espacio entre los elementos de manera que el primer elemento esté alineado a la izquierda y el último a la derecha.</td>
              <td><a href="https://getbootstrap.com/docs/5.3/utilities/flex/#justify-content">Documentación Flex</a></td>
          </tr>
      </tbody>
    </table>



3. Utilice el inspector para comprobar el cambio en el diseño

    - Habilite la opción _Toggle device toolbar_, 
    - Escoja la opción _Responsive_,
    - Cambie el ancho del dispositivo entre **575**, **576**, **768** y **769**.  

4. Revise los cambios en el navegador.

### Documentación
 
* [Bootstrap](https://getbootstrap.com/) es un `kit de herramientas` para `front-end` potente, ampliable y repleto de funciones. Con el cual puedes crear y personalizar con Sass, utilizar el sistema de grillas y los `componentes` prediseñados.
  - Algunas características distintivas de la versión 5 se encuentran en la [documentación oficial](https://getbootstrap.com/docs/5.0/migration/) y en [Web3canvas](https://web3canvas.com/convert-bootstrap-4-to-5-migration-guide/).
* Sitios con `plantillas` básicas (HTML, CSS y JS) gratuita con Bootstrap, p.e.: [Start Bootstrap](https://startbootstrap.com/?showAngular=false&showVue=false&showPro=false), [BootstrapMade](https://bootstrapmade.com/), [Creative Tim](https://www.creative-tim.com/bootstrap-themes/free) o [Theme Wagon](https://themewagon.com/theme-price/free/).


### Fundamental

* Componente UI via [X](https://twitter.com/midudev/status/1714277206149796295)

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">¡Brutal colección de componentes de UI para tu web!<br><br>✓ Open Source<br>✓ De código HTML y CSS<br>✓ Listos para copiar y usar<br>✓ Botones, inputs, cards, loaders y más<br><br>→ <a href="https://t.co/fGpDO724qL">https://t.co/fGpDO724qL</a> <a href="https://t.co/smOoViWTEv">pic.twitter.com/smOoViWTEv</a></p>&mdash; Miguel Ángel Durán (@midudev) <a href="https://twitter.com/midudev/status/1714277206149796295?ref_src=twsrc%5Etfw">October 17, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

landing page, kit de herramientas, front-end, componentes, plantilla

### Referencias

* Marcotte, E., Dauer, J., Eagan, C., MacIntyre, J., Clancey, P., Overkamp, L., & Brosset, P. (2019). Responsive Web Design. Retrieved from https://alistapart.com/article/responsive-web-design/
* Web Design History. (n.d.). Retrieved from https://www.webdesignmuseum.org/web-design-history
* UXPin. (2023). Responsive Design: Best Practices & Examples. Retrieved from https://www.uxpin.com/studio/blog/best-practices-examples-of-excellent-responsive-design/
* Mark Otto, a. (2022). Bootstrap. Retrieved 8 June 2022, from https://getbootstrap.com/
* How To Convert a Website to Bootstrap 4 (Case Study) AZMIND. (2018). Retrieved 8 June 2022, from https://azmind.com/convert-website-bootstrap-4/