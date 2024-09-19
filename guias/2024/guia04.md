---
theme: jekyll-theme-leap-day
---

## Guía 04

[DAWM](/DAWM/) / [Proyecto01](/DAWM/proyectos/2024/proyecto01)

<link href="styles/mystyle.css" rel="stylesheet"></link>

### Actividades previas

#### Diseño

* Escoge a tu gusto una combinación de familias tipografías para título de pricipal, para los títulos de las secciones y para todo el documento, de acuerdo con la recomendación de [Fontjoy](https://fontjoy.com/). Verifica las familias tipográficas en [Google Fonts](https://fonts.google.com/).
* Seleciona a tu gusto una combinación de colores de acuerdo con la guía de [Happy Hues](https://www.happyhues.co/), [Huemint](https://huemint.com/website-2/), o [ColorMagic](https://colormagic.app/). 


### Actividades en clases

1. Clona localmente tu repositorio **curriculum**.
2. Sigue las instrucciones de [Bard](bard/guia04-bard01.pdf), y:
  - Cree la carpeta _'stylesheets'_, y dentro la hoja de estilo externa `CSS` _'style.css'_.
  - Agregue la referencia con la ruta a la hoja de estilo externa en el archivo _index.html_.

#### Servidor HTTP 

1. Siguiendo las instrucciones del [tutorial](/DAWM/tutoriales/python), levante un `servidor HTTP` con Python en la `ruta de la aplicación`.
2. En el navegador, acceda a la URL [http:\\localhost:8079](http:\\localhost:8079) quen el que responde el servidor HTTP.
3. (STOP 1) Actualice el navegador y compruebe los cambios.

#### Reglas CSS - I

1. Coloque las siguientes `reglas CSS` (`selector CSS`,`propiedad CSS` y `valor CSS`) en la hoja de estilo externa:

    <table>
      <thead>
        <tr>
          <th colspan="2">Selector CSS</th>
          <th>Propiedad CSS</th>
          <th>Valor CSS</th>
          <th>MDN</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">Universal</td>
          <td rowspan="2">*</td>
          <td> <b>font-family</b> </td>
          <td> <i>'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;</i> </td>
          <td> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family">Ir</a> </td>
        </tr>
        <tr>
          <td> <b>font-weight</b> </td>
          <td> <i>200</i> </td>
          <td> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">Ir</a> </td>
        </tr>
        <tr>
          <td rowspan="3">Por elemento</td>
          <td rowspan="2">h1</td>
          <td> <b>text-align</b> </td>
          <td> <i>center</i> </td>
          <td> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align">Ir</a> </td>
        </tr>
        <tr>
          <td> <b>font-weight</b> </td>
          <td> <i>bold</i> </td>
          <td> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">Ir</a> </td>
        </tr>
      </tbody>
    </table>

    <details>
      <summary><div>Haga click aquí para ver la solución</div></summary>
      <pre lang="css"><code>
        * {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 200;
        }

        h1 {
          text-align: center;
          font-weight: bold;
        }
      </code></pre>
    </details>


2. (STOP 1) Actualice el navegador y compruebe los cambios.
3. Versiona local y remotamente el repositorio **curriculum**.

#### Reglas CSS - II

1. Coloque las siguientes reglas CSS en la hoja de estilo externa:

    <table>
      <thead>
        <tr>
          <th colspan="2">Selector CSS</th>
          <th>Propiedad CSS</th>
          <th>Valor CSS</th>
          <th>MDN</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td rowspan="2">Universal</td>
          <td rowspan="2">*</td>
          <td> <b>font-family</b> </td>
          <td> <i>'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;</i> </td>
          <td> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family">Ir</a> </td>
        </tr>
        <tr>
          <td> <b>font-weight</b> </td>
          <td> <i>200</i> </td>
          <td> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">Ir</a> </td>
        </tr>
        <tr>
          <td rowspan="3">Por elemento</td>
          <td rowspan="2">h1</td>
          <td> <b>text-align</b> </td>
          <td> <i>center</i> </td>
          <td> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align">Ir</a> </td>
        </tr>
        <tr>
          <td> <b>font-weight</b> </td>
          <td> <i>bold</i> </td>
          <td> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">Ir</a> </td>
        </tr>
      </tbody>
    </table>

    <details>
      <summary><div>Haga click aquí para ver la solución</div></summary>
      <pre lang="css"><code>
        * {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 200;
        }

        h1 {
          text-align: center;
          font-weight: bold;
        }
      </code></pre>
    </details>

2. (STOP 2) Actualice el navegador y compruebe los cambios.
3. Versiona local y remotamente el repositorio **curriculum**.

#### Modelo de caja

Tome como referencia la [sugerencia](bard/guia04-bard05.pdf) de Bard para las siguientes actividades:

1. Utilice el selector por elemento para acceder a las etiquetas &lt;section&gt; y aplique las reglas CSS para el `modelo de caja`: _margin_, _border_ y _padding_, por ejemplo:

   ```css
    section {
      margin: 2px 1px 1.5px;
      margin-top: 1.2rem;
      border: 0.2pt solid #cedddd;
      padding: 2% 1.2%;   
    }
   ```

2. (STOP 5) Actualice el navegador y compruebe los cambios.
3. Versiona local y remotamente el repositorio **curriculum**.

#### Efectos CSS

1. Utilice el servicio de [CSSmatic](https://www.cssmatic.com/es/box-shadow) para generar los valores de la propiedad **box-shadow**, p.e.:
   
    ```css
      section {
        ...
        
        -webkit-box-shadow: 5px 5px 5px 0px rgba(194,194,194,0.56);
        -moz-box-shadow: 5px 5px 5px 0px rgba(194,194,194,0.56);
        box-shadow: 5px 5px 5px 0px rgba(194,194,194,0.56);   
      }
    ```

2. Utilice el servicio de [Border Radius](https://border-radius.com/) para generar los valores de la propiedad **border-radius**, p.e.:

    ```css
      section {
        ...

        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
      }
    ```

3. (STOP 6) Actualice el navegador y compruebe los cambios.
4. Versiona local y remotamente el repositorio **curriculum**.

### Documentación

* CSS en la documentación de [MDN](https://developer.mozilla.org/es/docs/Web/CSS).
* En [W3Schools CSS Selector Reference](https://www.w3schools.com/cssref/css_selectors.php) revise los `selectores CSS` para acceder a uno o varios elementos del documento HTML y [W3Schools CSS Reference](https://www.w3schools.com/cssref/index.php) para aplicar las `propiedades y valores CSS`.

### Fundamental

* Generadores de CSS en [X](https://twitter.com/Div_pradeep/status/1710898245570892182) 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">10 CSS Generators to save you hours of work:<br><br>1. Blob maker<a href="https://t.co/ExD4VVBZhS">https://t.co/ExD4VVBZhS</a><br><br>2. Getwaves<a href="https://t.co/gGDI7pqFda">https://t.co/gGDI7pqFda</a><br><br>3. Neumorphism<a href="https://t.co/NSaOALMj7j">https://t.co/NSaOALMj7j</a><br><br>4. Glassmorphism<a href="https://t.co/iWTpASvFAQ">https://t.co/iWTpASvFAQ</a><br><br>5. CSS Glow Generator<a href="https://t.co/8Moqd2n9nr">https://t.co/8Moqd2n9nr</a><br><br>6. Cubic-bezier… <a href="https://t.co/aDuLPUJkCD">pic.twitter.com/aDuLPUJkCD</a></p>&mdash; Pradeep Pandey (@Div_pradeep) <a href="https://twitter.com/Div_pradeep/status/1710898245570892182?ref_src=twsrc%5Etfw">October 8, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

* Animaciones CSS en [X](https://twitter.com/carmenansio/status/1710351098211389450)

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">🚀 Más de 500 animaciones de carga creadas con un único elemento en CSS<a href="https://t.co/kVvt9DHzFy">https://t.co/kVvt9DHzFy</a> <a href="https://t.co/VEaBgXpgyR">pic.twitter.com/VEaBgXpgyR</a></p>&mdash; Cosmic Red 🔥 (@carmenansio) <a href="https://twitter.com/carmenansio/status/1710351098211389450?ref_src=twsrc%5Etfw">October 6, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

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
* Editor Sombras. (n.d.). Retrieved from https://www.cssmatic.com/es/box-shadow
* (N.d.). Retrieved from https://border-radius.com/