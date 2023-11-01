---
theme: jekyll-theme-leap-day
---

## Guía 09

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2023/proyecto04)

### Actividades previas

* En la [documentación del API](https://open-meteo.com/en/docs) de [Open Meteo](https://open-meteo.com/):
  - Busque y elija en _Search Location_ la ciudad de `Guayaquil`,
  - En  _Timezone_ seleccione la opci[on] `Automatically detect time zone`.
  - Elija en _Forecast Length_ el valor de `7 días (default)`.
  - Marque en _Hourly Weather Variables_ la opción `Precipitation Probability`.
* En la sección _Preview and API URL_, recargue e inspeccione los resultados del gráfico.
* Abra _API URL_ en una pestaña nueva e identifique el JSON resultante.

### Actividades

* Clona localmente tu repositorio **dashboard**.
* Abra el proyecto en VSCode y levante el live server.

#### Chart.js

Edite el archivo `index.html`

* Agregue la referencia a la librería [Chart.js](https://www.chartjs.org/)

```html
      ...
      <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>

    </body>
</html>
```

* Agregue las etiquetas contenedoras del gráfico

```html
  ... 
  
  <!-- Gráficos -->
  <section class="p-4 text-right bg-light">
      <h4 id="graficos" class="mb-3">
          Gráficos
      </h4>
      <div class="container">
          <div
              class="row d-flex justify-content-center row-cols-1 row-cols-md-1 g-4 mt-2">
              <div class="col">
                  <canvas id="plot1"></canvas>
              </div>
          </div>
      </div>
  </section>
  <!-- Gráficos -->
  
  ...
```

#### Requerimiento asíncrono

Edite el archivo `public/javascript/load_data.js`

* Agregue e invoque la función flecha **cargarOpenMeteo**.

* Dentro de la función _cargarOpenMeteo_, agregue una **petición asíncrona**. Utilice el **endpoint** previamente generado. 

```typescript
... 

let cargarOpenMeteo = () => {

  //URL que responde con la respuesta a cargar
  let URL = ''; 

  fetch( URL )
    .then(responseText => responseText.json())
    .then(responseJSON => {
      
      console.log(responseJSON);
      
      //Respuesta en formato JSON

    })
    .catch(console.error);

}


cargarPrecipitacion()
cargarFechaActual()
cargarOpenMeteo()
```

**NOTA:** Utilice la documentación del método [fetch](https://www.javascripttutorial.net/javascript-fetch-api/) y el procesamiento de [JSON](https://codetogo.io/how-to-fetch-json-in-javascript/)


#### Requerimiento asíncrono

Edite el archivo `public/javascript/load_data.js`

* Dentro del callback con la respuesta JSON, agregue las instrucciones para procesar los datos como un gráfico.

```typescript
  ...
  .then(responseJSON => {
        
    //Respuesta en formato JSON

    //Referencia al elemento con el identificador plot
    let plotRef = document.getElementById('plot');

    //Etiquetas del gráfico
    let labels = responseJSON.hourly.time;

    //Etiquetas de los datos
    let data = responseJSON.hourly.temperature_2m;

    //Objeto de configuración del gráfico
    let config = {
      type: 'line',
      data: {
        labels: labels, 
        datasets: [
          {
            label: 'Temperature [2m]',
            data: data, 
          }
        ]
      }
    };

    //Objeto con la instanciación del gráfico
    let chart  = new Chart(plotRef, config);

    //Modificación en el estilo del contenedor 
    chart.canvas.parentNode.style.width = '100vh';

  })
  ...
```

* Procese la respuesta del JSON para mostrar los datos en la plantilla, de acuerdo con:
  - La documentación de [Document API](https://developer.mozilla.org/es/docs/Web/API/Document).
  - [Análisis de JSON](https://blog.greenroots.info/how-to-parse-json-in-javascript).

* Versiona local y remotamente el repositorio **curriculum**.

### Documentación

* [AJAX](https://www.espai.es/blog/2019/07/ajax-con-fetch-api/). La tecnología de requerimientos asincrónicos que maneja JavaScript permite hacer requerimientos a terceros sin que necesite recargar todo el contenido de la página. 
* El [API-fetch](https://www.javascripttutorial.net/javascript-fetch-api/) tiene una explicación clara de la estructura para requerimientos de [JSON](https://codetogo.io/how-to-fetch-json-in-javascript/) y [XML](https://codetogo.io/how-to-fetch-xml-in-javascript/).

### Fundamental

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Day 18 of JS30Xplore:<br><br>1. What is Asynchronous Programming:<br><br>JavaScript is a single-threaded language, meaning it can execute one operation at a time in a sequential manner. However, many operations in web development are inherently asynchronous.<br> These operations include… <a href="https://t.co/PWYIzeJ736">pic.twitter.com/PWYIzeJ736</a></p>&mdash; Sanjana Sanghi (@ainasanghi) <a href="https://twitter.com/ainasanghi/status/1719306612165468659?ref_src=twsrc%5Etfw">October 31, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

dashboard, endpoint, ajax, json

### Referencias

* Javascript Asíncrono: La guía definitiva — Lemoncode formacion. (2018). Retrieved 15 June 2022, from https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono
* JavaScript Fetch API Explained By Examples. (2022). Retrieved 15 June 2022, from https://www.javascripttutorial.net/javascript-fetch-api/
* Joubran, J., & Joubran, J. (2022). How to fetch json in JavaScript Code to go. Retrieved 15 June 2022, from https://codetogo.io/how-to-fetch-json-in-javascript/
* Joubran, J., & Joubran, J. (2022). How to fetch XML in JavaScript Code to go. Retrieved 15 June 2022, from https://codetogo.io/how-to-fetch-xml-in-javascript/
* Chart.js. (n.d.). Retrieved from https://www.chartjs.org/