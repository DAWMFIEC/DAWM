---
theme: jekyll-theme-leap-day
---

## Guía 06

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2024/proyecto02)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">
mediante el desarrollo de una <i>landing page</i> funcional y atractiva utilizando una plantilla de Bootstrap.
</pre>

### Actividades previas

#### Landing Page

* Defina el objetivo de su  `landing page`, p.e.: venta de productos de belleza, información de un grupo estudiantil, datos de una veterinaria, noticias de KPOP, etc; excepto: _e-learning_ o cualquier tema cercano a educación.
* Decida las secciones y el contenido que serán parte de la landing page. Tome como referencia la [recomendación](bard/guia06-bard02.pdf) de Bard.
* Decida los colores, la tipografía y los elementos visuales que refuercen el mensaje del sitio. Considere la paleta de colores de [Tintmint](https://tintmint.net/), imágenes de [DevianArt](http://www.deviantart.com) y familia de fuentes de [Google Fonts](https://fonts.google.com/).
  
### Actividades en clases

#### Github

1. Crea un repositorio en GitHub con el nombre **landing**.
2. Clone localmente tu repositorio **landing**.

#### Plantilla

1. Descargue [Elearning ](https://themewagon.com/themes/elearning-free-bootstrap-5-css3-education-website-template/) de ThemeWagon o del [recurso local](recursos/elearning-1.0.0.zip).
2. Descomprima y mueva todos los archivos en el repositorio local **landing**. 
3. Modifique **únicamente** el archivo _index.html_. De ser necesario, use las secciones de las otras páginas en la plantilla para incorporar a la página _index.html_.
4. Abra su proyecto con VSCode y utilice el Live Server para identificar los cambios. 
5. (STOP 1) Compruebe el resultado en el navegador.

#### Bootstrap - Navbar

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
                <th>Clase de Bootstrap</th>
                <th>Explicación</th>
                <th>Enlace a la documentación</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>navbar</code></td>
                <td>Clase principal que define una barra de navegación.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/components/navbar/#how-it-works">How it works</a></td>
            </tr>
            <tr>
                <td><code>navbar-expand-lg</code></td>
                <td>Hace que la barra de navegación se expanda en pantallas grandes (tamaño <code>lg</code> o superior).</td>
                <td><a href="https://getbootstrap.com/docs/5.0/components/navbar/#responsive-behaviors">Responsive behaviors</a></td>
            </tr>
            <tr>
                <td><code>bg-white</code></td>
                <td>Aplica un fondo blanco al contenedor.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/utilities/background/#background-color">Background color</a></td>
            </tr>
            <tr>
                <td><code>navbar-light</code></td>
                <td>Configura el texto y los elementos interactivos del navbar para usarse en fondos claros.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/components/navbar/#color-schemes">Color schemes</a></td>
            </tr>
            <tr>
                <td><code>shadow</code></td>
                <td>Agrega una sombra alrededor del contenedor para crear profundidad.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/utilities/shadows/">Shadows</a></td>
            </tr>
            <tr>
                <td><code>sticky-top</code></td>
                <td>Fija la barra de navegación en la parte superior cuando se hace scroll en la página.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/helpers/position/#sticky-top">Sticky top</a></td>
            </tr>
            <tr>
                <td><code>p-0</code></td>
                <td>Elimina el padding en todos los lados del elemento.</td>
                <td><a href="https://getbootstrap.com/docs/5.0/utilities/spacing/#margin-and-padding">Margin and padding</a></td>
            </tr>
        </tbody>
    </table>



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