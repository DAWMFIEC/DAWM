---
theme: jekyll-theme-leap-day
---

## Guía 08

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2023/proyecto02)

### Actividades previas

#### Proyecto Base

* Descargue la plantilla del [_dashboard_](recursos/dashboard_template.zip) de [**MDBootstrap**](https://mdbootstrap.com/freebies/). 
* Abra el proyecto en VSCode y levante el live server.

### Actividades

#### Github

* Crea un repositorio en GitHub con el nombre **dashboard**.

#### Referencia a los módulos

Edite el archivo `index.html` 

* Agregue la referencia a los módulos de **Javascript** `public/javascript/static_data.js` y `public/javascript/load_data.js`.

```html
    ...
    <!-- Static data -->
    <script type="module" src="public/javascript/static_data.js"></script>

    <!-- Load data -->
    <script type="module" src="public/javascript/load_data.js"></script>

  </body>
</html>
```

#### Indicadores: Precipitación

Edite el archivo `public/javascript/load_data.js`

* Importe los arreglos de _tiempoArr_, _precipitacionArr_, _uvArr_ y _temperaturaArr_.

```typescript
import {tiempoArr, precipitacionArr, uvArr, temperaturaArr} from './static_data.js';
```

* Agregue la **función flecha** para obtener la fecha actual:

```typescript
...
let fechaActual = () => new Date().toISOString().slice(0,10);
```

* Agregue e invoque la función flecha **cargarPrecipitacion**:

```typescript
let cargarPrecipitacion = () => {

  //Obtenga la función fechaActual
  //Defina un arreglo temporal vacío
  //Itere en el arreglo tiempoArr para filtrar los valores de precipitacionArr que sean igual con la fecha actual
  //Con los valores filtrados, obtenga los valores máximo, promedio y mínimo
  //Obtenga la referencia a los elementos HTML con id precipitacionMinValue, precipitacionPromValue y precipitacionMaxValue
  //Actualice los elementos HTML con los valores correspondientes

}

cargarPrecipitacion()
```

* Dentro de la función cargarPrecipitacion:

  + Obtenga la fecha actual y defina un arreglo temporal vacío.

```typescript
  ...
  
  //Obtenga la fecha actual
  let actual = fechaActual();

  //Defina un arreglo temporal vacío
  let datos = []
  ...
```

  + Itere en el arreglo tiempoArr para filtrar los valores de precipitacionArr que sean igual con la fecha actual.

```typescript
  ...
  //Itere en el arreglo tiempoArr para filtrar los valores de precipitacionArr que sean igual con la fecha actual
  for (let index = 0; index < tiempoArr.length; index++) {
    const tiempo = tiempoArr[index];
    const precipitacion = precipitacionArr[index]

    if(tiempo.includes(actual)) {
      datos.push(precipitacion)
    }
  }
  ...
```

  + Con los valores filtrados, obtenga los valores máximo, promedio y mínimo

```typescript
  ...
  //Con los valores filtrados, obtenga los valores máximo, promedio y mínimo
  let max = Math.max(...datos)
  let min = Math.min(...datos)
  let sum = datos.reduce((a, b) => a + b, 0);
  let prom = (sum / datos.length) || 0;
  ...
```

  + Obtenga la referencia a los elementos HTML con id precipitacionMinValue, precipitacionPromValue y precipitacionMaxValue

```typescript
  ...
  //Obtenga la referencia a los elementos HTML con id precipitacionMinValue, precipitacionPromValue y precipitacionMaxValue
  
  let precipitacionMinValue = document.getElementById("precipitacionMinValue")
  let precipitacionPromValue = document.getElementById("precipitacionPromValue")
  let precipitacionMaxValue = document.getElementById("precipitacionMaxValue")
  ...
```

  + Actualice los elementos HTML con los valores correspondientes

```typescript
  ...
  //Actualice los elementos HTML con los valores correspondientes
  precipitacionMinValue.textContent = `Min ${min} [mm]`
  precipitacionPromValue.textContent = `Prom ${ Math.round(prom * 100) / 100 } [mm]`
  precipitacionMaxValue.textContent = `Max ${max} [mm]`
  ...
```


#### Fecha actual

* Agregue e invoque la función flecha cargarFechaActual

```typescript
let cargarFechaActual = () => {
  
  //Obtenga la referencia al elemento h6
  //Actualice la referencia al elemento h6 con el valor de la función fechaActual()
}

...

cargarFechaActual()
```

* Obtenga la referencia al elemento h6

```typescript
  ...
  //Obtenga la referencia al elemento h6
  let coleccionHTML = document.getElementsByTagName("h6")

  let tituloH6 = coleccionHTML[0]
  ...
```

* Actualice la referencia al elemento h6 con el valor de la función fechaActual()

```typescript
  ...
  //Actualice la referencia al elemento h6 con el valor de la función fechaActual()
  tituloH6.textContent = fechaActual()
  ...
```

* Versiona local y remotamente el repositorio **dashboard**.
* Despliegue el sitio del repositorio **dashboard** utilizando GitHub Pages.

### Fundamental

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">You&#39;re in a web developer internship interview. 💼<br><br>The interviewer asked:<br><br>&quot;What&#39;s a DOM (Document Object Model) in web development?&quot;<br><br>Here&#39;s how to answer:</p>&mdash; Emiko.dev ☀️ (@emiko_dev) <a href="https://twitter.com/emiko_dev/status/1719339017051738188?ref_src=twsrc%5Etfw">October 31, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Documentación

* [MDB](https://mdbootstrap.com/docs/standard/getting-started/installation/) es el kit de interfaz de usuario más popular para crear aplicaciones y sitios web con capacidad de respuesta para dispositivos móviles, gratis para uso personal y comercial, que implementa Material Design. Tiene versiones disponibles para jQuery, Angular, React y Vue.
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)  es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase: [Básico](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics), [EcmaScript6](http://es6-features.org/#) y la [compatibilidad con los diferentes navegadores](http://kangax.github.io/compat-table/es6/), [Arreglos](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array), [Objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos), y [Elementos del navegador](https://javascript.info/browser-environment).
  - [Web API](https://developer.mozilla.org/es/docs/Web/API) En esta sección puedes encontrar las referencias al Web API que se utiliza cuando programas con Javascript.
  - [DOM](https://javascript.info/dom-nodes). El DOM y su uso a través de ejemplos de etiquetas, anidamientos, autocorrección e inspección por la consola del navegador con sus [propiedades y métodos](https://developer.mozilla.org/es/docs/Web/API/Document).
  - [Objeto: Document](https://javascript.info/dom-navigation). Este objeto te permite manipular el DOM de cualquier página web.
  - [Eventos](https://javascript.info/events). Cada elemento dentro del navegador responde a un conjunto de señales disparadas en el DOM.

### Términos

MDBootstrap, Javascript, función flecha, DOM, eventos.

### Referencias

* Material Design . (2023). Retrieved 7 June 2023, from https://m3.material.io/
* Material Design for Bootstrap 5 & 4. (2023). Retrieved 7 June 2023, from https://mdbootstrap.com/
* 2021.stateofjs.com. 2022. The State of JS 2021: T-shirt. [online] Available at: <https://2021.stateofjs.com/en-US/tshirt/> [Accessed 9 June 2022].
* JavaScript Guide - JavaScript MDN. (2022). Retrieved 9 June 2022, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
* Tutorial, T. (2022). The Modern JavaScript Tutorial. Retrieved 9 June 2022, from https://javascript.info/ 
* JavaScript Tutorial. (2022). Retrieved 9 June 2022, from https://www.javascripttutorial.net/
* JavaScript Tutorial. (2022). Retrieved 9 June 2022, from https://www.w3schools.com/js/
* Free JavaScript Resources Java5cript.com. (2022). Retrieved 9 June 2022, from https://www.java5cript.com/