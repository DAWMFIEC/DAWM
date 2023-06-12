---
theme: jekyll-theme-leap-day
---

## Guía 09

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2023/proyecto05)

### Actividades previas

* De [Open Meteo](https://open-meteo.com/) identifique la [documentación del API](https://open-meteo.com/en/docs).
  - Permita la ubicación mediante el GPS.
  - Identifique las variables, el dato, el tipo de dato y unidades disponibles.
  - Abra el **API URL** con el **JSON** resultante de la configuración.
* Busque una _plantilla gratuita_ de un _dashboard_ que utilice _bootstrap_, como: [MDBootstrap](https://mdbootstrap.com/freebies/), [CORE UI](https://coreui.io/product/free-bootstrap-admin-template/), [Start Bootstrap](https://startbootstrap.com/?showAngular=false&showVue=false&showPro=false) u otros.
* Diseñe la interfaz del dashboard al ubicar las variables y el dato dentro de la plantilla. Utilice cualquiera de las herramientas de diseño que conoce.


### Actividades

#### Proyecto Base

* Descargue la _plantilla gratuita_ de un _dashboard_ que utilice _bootstrap_. 
* Abra el proyecto en VSCode y levante el live server.
* Depure el dashboard de enlaces a secciones innesarias, de acuerdo con su diseño.

#### Requerimiento asíncrono

* Agregue un archivo de Javascript siguiendo la estructura del sitio. 
* Agregue la referencia en el `index.html`.
* Dentro del archivo de Javascript, agregue una [función autoejecutable](https://developer.mozilla.org/es/docs/Glossary/IIFE):

  ```
  (
    function () {
        
    }
  )();
  ```
* Dentro de la _función autoejecutable_, agregue una petición asíncrona al _endpoint_ de **Open Meteo**. Utilice la documentación del método [fetch](https://www.javascripttutorial.net/javascript-fetch-api/) y el procesamiento de [JSON](https://codetogo.io/how-to-fetch-json-in-javascript/):

  ```
  let URL = '';
  fetch( URL )
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(console.error);
  ```

* Procese la respuesta del JSON para mostrar los datos en la plantilla, de acuerdo con:
  - La documentación de [Document API](https://developer.mozilla.org/es/docs/Web/API/Document).
  - [Análisis de JSON](https://blog.greenroots.info/how-to-parse-json-in-javascript).

### Documentación

* [AJAX](https://www.espai.es/blog/2019/07/ajax-con-fetch-api/). La tecnología de requerimientos asincrónicos que maneja JavaScript permite hacer requerimientos a terceros sin que necesite recargar todo el contenido de la página. El [API-fetch](https://www.javascripttutorial.net/javascript-fetch-api/) tiene una explicación clara de la estructura para requerimientos de [JSON](https://codetogo.io/how-to-fetch-json-in-javascript/) y [XML](https://codetogo.io/how-to-fetch-xml-in-javascript/).

### Términos

dashboard, endpoint, ajax, json

### Referencias

* Javascript Asíncrono: La guía definitiva — Lemoncode formacion. (2018). Retrieved 15 June 2022, from https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono
* JavaScript Fetch API Explained By Examples. (2022). Retrieved 15 June 2022, from https://www.javascripttutorial.net/javascript-fetch-api/
* Joubran, J., & Joubran, J. (2022). How to fetch json in JavaScript Code to go. Retrieved 15 June 2022, from https://codetogo.io/how-to-fetch-json-in-javascript/
* Joubran, J., & Joubran, J. (2022). How to fetch XML in JavaScript Code to go. Retrieved 15 June 2022, from https://codetogo.io/how-to-fetch-xml-in-javascript/