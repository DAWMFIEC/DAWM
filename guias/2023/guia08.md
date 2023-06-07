---
theme: jekyll-theme-leap-day
---

## Guía 08

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2023/proyecto04)

### Actividades previas

* Identifique los elementos comunes para el desarrollo de una aplicación web.
* Identifique el valor por hora a cobrar

### Actividades

#### Proyecto Base

* Clone el proyecto [DAWM-apps](https://github.com/DAWMFIEC/DAWM-apps)
* Cámbiese a la rama **hito1-calculadora**, con:

  ```
  git switch hito1-calculadora 
  ```

* Abra el proyecto en VSCode en la carpeta `frontend`. Levante el live server.

#### HTML

* Agregue los elementos (`input` y `label`) que considere necesarios. Tome como referencia el elemento `Elemento 1: Diseño de interfaz`.
* Por cada elemento, coloque los valores correspondientes a los atributos `id` y `for`.

#### Javascript

* Agregue en el `index.html` la referencia al archivo `public/javascript/calculadora.js`
* En `public/javascript/calculadora.js`:
  - Cree e invoque la función flecha `funcionPredeterminada`.

* Dentro de la función `funcionPredeterminada`.  
  - Obtenga la referencia al elemento HTML con el id `formulario`, con `document.getElementById`.
  -  A la referencia del elemento anterior, agregue un _callback_ al evento `submit`. El callback debe contener el parámetro `evento`.

* Dentro del callback del evento `submit`.
  - Detenga el comportamiento predeterminado al evento, con: 
    ```
    evento.preventDefault();
    ```

  - Obtenga la referencia al elemento HTML con el id `valorPorHora`. Extraiga el valor con la propiedad `value`.
  - Obtenga la referencia a los elementos HTML con las horas. Extraiga el valor de cada elemento.
  - Realice los cálculos correspondientes. Y coloque el valor resultante en el elemento con el id `valorTotal`.


### Documentación

* [Material Design](https://material.io/design) es una guía de diseño enfocado en la visualización del sistema operativo Android, además en la web y en cualquier plataforma. Fue desarrollado por Google y anunciado en la conferencia Google I/O del 2014.
  - [Material Minimal](https://material-minimal.com/) fundamentos de Material Minimal, un enfoque de diseño elegante y moderno que fusiona la funcionalidad de Material Design con una estética minimalista.
  - [MDB](https://mdbootstrap.com/docs/standard/getting-started/installation/) es el kit de interfaz de usuario más popular para crear aplicaciones y sitios web con capacidad de respuesta para dispositivos móviles, gratis para uso personal y comercial, que implementa Material Design. Tiene versiones disponibles para jQuery, Angular, React y Vue.
* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)  es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase.
  - [Básico](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics). En esta publicación encontrarán las generalidades de Javascript y una introducción al lenguaje que incluye definición de variables, condicionales, funciones y eventos.
  - [EcmaScript6](http://es6-features.org/#). Aquí encontrarás las características incorporadas al EcmaScript6 y la [compatibilidad con los diferentes navegadores](http://kangax.github.io/compat-table/es6/). 
  - [Arreglos](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array). El manejo de arreglos en JavaScript resulta primordial, especialmente para la aplicación de propiedades a un grupo de elementos.
  - [Objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos). Esencialmente, todo es un objeto en JavaScript. En algunos casos son elementos propios del navegador y otros son objetos creados por los desarrolladores.
  - [Elementos del navegador](https://javascript.info/browser-environment). Existen elementos básicos que todo navegador debe proveer como interfaz para los desarrolladores de aplicaciones web del lado del cliente.
  - [Web API](https://developer.mozilla.org/es/docs/Web/API) En esta sección puedes encontrar las referencias al Web API que se utiliza cuando programas con Javascript.
  - [DOM](https://javascript.info/dom-nodes). El DOM y su uso a través de ejemplos de etiquetas, anidamientos, autocorrección e inspección por la consola del navegador con sus [propiedades y métodos](https://developer.mozilla.org/es/docs/Web/API/Document).
  - [Objeto: Document](https://javascript.info/dom-navigation). Este objeto te permite manipular el DOM de cualquier página web.
  - [Eventos](https://javascript.info/events). Cada elemento dentro del navegador responde a un conjunto de señales disparadas en el DOM.

### Términos

material design, Javascript, DOM y eventos.

### Referencias

* Material Design . (2023). Retrieved 7 June 2023, from https://m3.material.io/
* Material Design for Bootstrap 5 & 4. (2023). Retrieved 7 June 2023, from https://mdbootstrap.com/
* 2021.stateofjs.com. 2022. The State of JS 2021: T-shirt. [online] Available at: <https://2021.stateofjs.com/en-US/tshirt/> [Accessed 9 June 2022].
* JavaScript Guide - JavaScript MDN. (2022). Retrieved 9 June 2022, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
* Tutorial, T. (2022). The Modern JavaScript Tutorial. Retrieved 9 June 2022, from https://javascript.info/ 
* JavaScript Tutorial. (2022). Retrieved 9 June 2022, from https://www.javascripttutorial.net/
* JavaScript Tutorial. (2022). Retrieved 9 June 2022, from https://www.w3schools.com/js/
* Free JavaScript Resources Java5cript.com. (2022). Retrieved 9 June 2022, from https://www.java5cript.com/
* 2022. online[online] Available at: <https://codepen.io/JavaScriptJunkie/pen/jvRGZy> [Accessed 10 June 2022].