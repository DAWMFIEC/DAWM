---
theme: jekyll-theme-leap-day
---

## Guía 07

[DAWM](/DAWM/) / [Proyecto02](/DAWM/proyectos/2024/proyecto02)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">
Proponer código de scripting para el manejo de datos desde el cliente mediante el desarrollo de una <i>landing page</i> funcional y atractiva utilizando una plantilla de Bootstrap para la adecuación a los requerimientos específicos.
</pre>

### Actividades en clases

1. Clona localmente tu repositorio **landing**.
2. Sigue las instrucciones de [Gemini](gemini/guia07-gemini01.pdf), y:
  - Cree, o utilice, una carpeta con scripts y agregue el archivo de código externo _'main.js'_.
  - Agregue la referencia con la ruta al archivo de código externo en el archivo _index.html_.

#### DOMContentLoaded & Window API

1. Defina la `función flecha` _loaded_, con un parámetro _eventLoaded_. 
  + Del `API` del objeto `window`, use la función **alert** para mostrar un mensaje.
  + Use el objeto `console` para mostrar el contenido del parámetero. 
  + Detenga la ejecución del código con el objeto `debugger`.

  ```typescript
  let loaded = ( eventLoaded ) => {
    
    window.alert("landing page loaded");
    console.log( eventLoaded );
    debugger;

  }
  ```

2. Del API del objeto window, use la función **addEventListener** para establecer la función _loaded_ como un callback que responda al `evento` **DOMContentLoaded**.  

  ```typescript
  let loaded = ( ... ) => {

    ...

  }

  window.addEventListener("DOMContentLoaded", loaded);
  ```

3. (STOP 1) Compruebe el resultado en el navegador.
4. Habilite el inspector del navegador. Actualice su navegador e inspecione los objetos con el depurador.

#### Document API

1. Asigne un identificador único al elemento formulario del documento HTML.
2. Dentro de la función flecha _loaded_:
  + Del API del objeto `document`, use la función **getElementById** para obtener una referencia al elemento HTML de acuerdo con el argumento. 

  ```typescript
  let loaded = ( eventLoaded ) => {

    let myform = document.getElementById('<identificador-del-formulario>');
    debugger;

  }

  window.addEventListener( ... ) 
  ```

3. (STOP 2) Compruebe el resultado en el navegador.
4. Habilite el inspector del navegador. Actualice su navegador e inspecione los objetos con el depurador.

#### Evento predeterminado

1. Dentro de la función flecha _loaded_:
  + Al objeto con la referencia al formulario, agregue un callback que responda al evento _submit_ (con el parámetro _eventSubmit_). 

  ```typescript
  let loaded = ( eventLoaded ) => {

    let myform = document.getElementById('<identificador-del-formulario>');
    
    myform.addEventListener('submit', ( eventSubmit ) => { 

      debugger;

    })

  }

  window.addEventListener( ... ) 
  ```
2. (STOP 3) Compruebe el resultado en el navegador.
3. Habilite el inspector del navegador. Actualice su navegador e inspecione los objetos con el depurador.

#### Evento personalizado

1. Asigne un identificador único para cada elemento de ingreso de datos del formulario, p.e.:

  ```html
  ...
  <input id="element1" type="text">
  ...
  ```

2. Dentro de la función flecha _loaded_:
  + Del API del objeto _eventSubmit_, use la función **preventDefault** para detener el proceso predeterminado. 
  + Del API del objeto con la referencia al elemento HTML con identificador **element1**, use la propiedad **value** para extraer el contenido. 
  + Del API de la cadena de texto, use la propiedad **length** para contar las cantidad de letras en el texto.
  + Del API del objeto con la referencia al elemento HTML con identificador **element1**, use el método **focus** para establecer el enfoque en el elemento HTML.
  + Del API del objeto window, use él método alert para mostrar con un mensaje de alerta.

  ```typescript
  let loaded = ( eventLoaded ) => {

    ...
    
    myform.addEventListener('submit', ( eventSubmit ) => {

      eventSubmit.preventDefault();

      let element1Value = element1.value;
      
      // Validación del contenido del input 

      if( element1Value.length == 0 ) {
        
        element1.focus()

        alert('Ingrese un texto válido')

        return;
      }

      debugger;

    })

  }

  window.addEventListener( ... ) 
  ```

3. (STOP 4) Compruebe el resultado en el navegador.
4. Habilite el inspector del navegador. Actualice su navegador e inspecione los objetos con el depurador.

#### Validación del contenido del formulario

1. Continúe con la validación del resto de elementos HTML para el ingreso de datos en el formulario.
2. (STOP 5) Compruebe el resultado en el navegador.
3. Versiona local y remotamente el repositorio **landing**.

### Documentación

* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)  es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase: [Básico](https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics), [EcmaScript6](http://es6-features.org/#) y la [compatibilidad con los diferentes navegadores](http://kangax.github.io/compat-table/es6/), [Arreglos](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array), [Objetos](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Trabajando_con_objectos), y [Elementos del navegador](https://javascript.info/browser-environment).
  - [Web API](https://developer.mozilla.org/es/docs/Web/API) En esta sección puedes encontrar las referencias al Web API que se utiliza cuando programas con Javascript.
  - [DOM](https://javascript.info/dom-nodes). El DOM y su uso a través de ejemplos de etiquetas, anidamientos, autocorrección e inspección por la consola del navegador con sus [propiedades y métodos](https://developer.mozilla.org/es/docs/Web/API/Document).
  - [Objeto: Document](https://javascript.info/dom-navigation). Este objeto te permite manipular el DOM de cualquier página web.
  - [Eventos](https://javascript.info/events). Cada elemento dentro del navegador responde a un conjunto de señales disparadas en el DOM.

### Fundamental

* Tiempo de descarga y ejecución del código Javascript via [X](https://twitter.com/kamrify/status/1436392322451841026)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Avoid render blocking JavaScript using async and defer scripts. <a href="https://t.co/JPDOlshMpk">pic.twitter.com/JPDOlshMpk</a></p>&mdash; Kamran Ahmed (@kamrify) <a href="https://twitter.com/kamrify/status/1436392322451841026?ref_src=twsrc%5Etfw">September 10, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

* Preguntas básicas relacionadas con el DOM via [X](https://x.com/emiko_dev/status/1719339017051738188)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">You&#39;re in a web developer internship interview. 💼<br><br>The interviewer asked:<br><br>&quot;What&#39;s a DOM (Document Object Model) in web development?&quot;<br><br>Here&#39;s how to answer:</p>&mdash; Emiko.dev ☀️ (@emiko_dev) <a href="https://twitter.com/emiko_dev/status/1719339017051738188?ref_src=twsrc%5Etfw">October 31, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

Javascript, función flecha, API, console, debugger, window, evento, document, propiedad, función.

### Referencias

* JavaScript Guide - JavaScript MDN. (2022). Retrieved 9 June 2022, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
* Tutorial, T. (2022). The Modern JavaScript Tutorial. Retrieved 9 June 2022, from https://javascript.info/ 
* JavaScript Tutorial. (2022). Retrieved 9 June 2022, from https://www.javascripttutorial.net/
* JavaScript Tutorial. (2022). Retrieved 9 June 2022, from https://www.w3schools.com/js/
* Free JavaScript Resources Java5cript.com. (2022). Retrieved 9 June 2022, from https://www.java5cript.com/
* ¿Qué diferencia async y defer en JavaScript? (2019). Retrieved from https://cybmeta.com/diferencia-async-y-defer