---
theme: jekyll-theme-leap-day
---

## Guía 06

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2024/proyecto02)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">
Identificar el uso de componentes web mediante el desarrollo de una <i>landing page</i> funcional y atractiva utilizando una plantilla de Bootstrap.
</pre>

### Actividades previas

#### Landing Page

* Defina el objetivo de su  `landing page`, p.e.: venta de productos de belleza, información de un grupo estudiantil, datos de una veterinaria, noticias de KPOP, etc; excepto: _lavandería_ o cualquier tema cercano.
* Decida las secciones y el contenido que serán parte de la landing page. Tome como referencia la [recomendación](bard/guia06-bard02.pdf) de Bard.
* Decida los colores, la tipografía y los elementos visuales que refuercen el mensaje del sitio. Considere la paleta de colores de [Tintmint](https://tintmint.net/), imágenes de [DevianArt](http://www.deviantart.com) y familia de fuentes de [Google Fonts](https://fonts.google.com/).
  
### Actividades en clases

#### Github

1. Crea un repositorio en GitHub con el nombre **landing**.
2. Clone localmente tu repositorio **landing**.

#### Plantilla

1. Descargue [Freshen](https://themewagon.com/themes/freshen/) de ThemeWagon o del [recurso local](recursos/Freshen-1.0.0.zip).
2. Descomprima y mueva todos los archivos en el repositorio local **landing**. 
3. Modifique **únicamente** el archivo _index.html_. De ser necesario, use las secciones de las otras páginas en la plantilla para incorporar a la página _index.html_.
4. Abra su proyecto con VSCode y utilice el Live Server para identificar los cambios. 
5. (STOP 1) Compruebe el resultado en el navegador.

#### Bootstrap

1. Identifique la referencia a la hoja de estilo y 

#### Navbar

1. Revise el componente `<nav>` en el _index.html_.
    
    ```html
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      ...
    </nav>
    ```

2. Considere la siguiente tabla con las clases utilizadas en el componente y el enlace a la documentación de Bootstrap.

    <table>
        <caption>Documentación del componente <a href="https://getbootstrap.com/docs/5.3/components/navbar/">Navbar</a></caption>
        <thead>
            <tr>
                <th width="25%">Clase de Bootstrap</th>
                <th>Explicación</th>
                <th>Enlace a la documentación</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><i>navbar</i></td>
                <td>Clase principal que define una barra de navegación.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/components/navbar/#how-it-works">How it works</a></td>
            </tr>
            <tr>
                <td><i>navbar-expand-lg</i></td>
                <td>Hace que la barra de navegación se expanda en pantallas grandes (tamaño <i>lg</i> o superior).</td>
                <td>
                  <a href="https://getbootstrap.com/docs/5.0/components/navbar/#responsive-behaviors">Responsive behaviors</a> y <br>
                  <a href="https://getbootstrap.com/docs/5.0/layout/breakpoints/#available-breakpoints">Available breakpoints</a>
                </td>
            </tr>
            <tr>
                <td><i>bg-white</i></td>
                <td>Aplica un fondo blanco al contenedor.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/utilities/background/#background-color">Background color</a></td>
            </tr>
            <tr>
                <td><i>navbar-light</i></td>
                <td>Configura el texto y los elementos interactivos del navbar para usarse en fondos claros.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/components/navbar/#color-schemes">Color schemes</a></td>
            </tr>
            <tr>
                <td><i>shadow</i></td>
                <td>Agrega una sombra alrededor del contenedor para crear profundidad.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/utilities/shadows/">Shadows</a></td>
            </tr>
            <tr>
                <td><i>sticky-top</i></td>
                <td>Fija la barra de navegación en la parte superior cuando se hace scroll en la página.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/helpers/position/#sticky-top">Sticky top</a></td>
            </tr>
            <tr>
                <td><i>p-0</i></td>
                <td>Elimina el padding en todos los lados del elemento.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/utilities/spacing/#margin-and-padding">Margin and padding</a></td>
            </tr>
        </tbody>
    </table>

3. Realiza las modificaciones sobre el componente **Navbar**.
4. Revise los cambios en el navegador.

#### Layout

1. Revise la sección servicio marcada entre `<!-- Service Start -->` y `<!-- Service End -->`.
    
    ```html
    <!-- Service Start -->
    <div class="container-xxl py-5">
      <div class="container">
            <div class="row g-4">
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s"> ... </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s"> ... </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s"> ... </div>
              <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s"> ... </div>
            </div>
        </div>
    </div>
    <!-- Service End -->
    ```

2. Considere la siguiente tabla con las clases utilizadas en el componente y el enlace a la documentación de Bootstrap.

    <table>
        <thead>
            <tr>
                <th width="25%">Clase de Bootstrap</th>
                <th>Explicación</th>
                <th>Enlace a la documentación</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><i>container-xxl</i></td>
                <td>Un contenedor responsivo que ocupa el ancho máximo en pantallas extra grandes y ajusta su tamaño en pantallas más pequeñas.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/layout/containers/#how-they-work">How they work</a></td>
            </tr>
            <tr>
                <td><i>container</i></td>
                <td>Contenedor predeterminado, adaptable y de ancho fijo, lo que significa que su ancho máximo cambia en cada punto de interrupción.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/layout/containers/#default-container">Default container</a></td>
            </tr>
            <tr>
                <td><i>row</i></td>
                <td>Se utiliza para crear una fila dentro del sistema de cuadrícula de Bootstrap, agrupando las columnas.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/layout/grid/">Grid system</a></td>
            </tr>
            <tr>
                <td><i>col-lg-3</i></td>
                <td>Define una columna que ocupa 3 unidades de un total de 12 en pantallas grandes (tamaño <i>lg</i> o superior).</td>
                <td rowspan="2"><a href="https://getbootstrap.com/docs/5.0/layout/grid/#grid-options">Grid options</a></td>
            </tr>
            <tr>
                <td><i>col-sm-6</i></td>
                <td>Define una columna que ocupa 6 unidades de un total de 12 en pantallas pequeñas (tamaño <i>sm</i> o superior).</td>
            </tr>
            <tr>
                <td><i>mb-4</i></td>
                <td>Aplica un margen en la parte inferior (margin-bottom) de 1.5 rem al encabezado del servicio.</td>
                <td rowspan="4"><a href="https://getbootstrap.com/docs/5.0/utilities/spacing/#margin-and-padding">Margin and padding</a></td>
            </tr>
            <tr>
                <td><i>p-4</i></td>
                <td>Aplica un padding de 2 rem en todas las direcciones (arriba, abajo, izquierda, derecha) al contenedor del servicio.</td>
            </tr>
            <tr>
                <td><i>py-5</i></td>
                <td>Aplica un padding vertical (arriba y abajo) de 3 rem (padding-y) al contenedor.</td>
            </tr>
            <tr>
                <td><i>pt-3</i></td>
                <td>Aplica un padding en la parte superior (padding-top) de 1 rem al elemento.</td>
            </tr>
            <tr>
                <td><i>g-4</i></td>
                <td>Aplica un margen de 1.5 rem (gutters) entre las columnas en la fila, permitiendo espacio entre los elementos.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/layout/gutters/">Gutters</a></td>
            </tr>
            <tr>
                <td><i>text-center</i></td>
                <td>Aplica una alineación centrada al texto dentro del elemento.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/utilities/text/#text-alignment">Text alignment</a></td>
            </tr>            
        </tbody>
    </table>

3. Utilice el inspector para comprobar el cambio en el diseño

    - Habilite la opción _Toggle device toolbar_, 
    - Escoja la opción _Responsive_,
    - Cambie el ancho del dispositivo entre **575**, **576**, **991** y **992**.  

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