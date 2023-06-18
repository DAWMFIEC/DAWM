---
theme: jekyll-theme-leap-day
---

## Guía 10

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2023/proyecto05)

### Actividades previas

* De [Open Meteo](https://open-meteo.com/) identifique la [documentación del API](https://open-meteo.com/en/docs).
  - Seleccione una variable de la sección **Hourly Weather Variables**, p.e.: `Temperature (2 m)` 
  - Seleccione una variable de la sección **Daily Weather Variables**, p.e.: `UV Index`

* De [Chart.js](https://www.chartjs.org/) identifique la [documentación del API](https://www.chartjs.org/docs/latest/getting-started/)
  - Identifique los [tipos de gráficos](https://www.chartjs.org/docs/latest/charts/) disponibles.

* Asocie cada una de las variables con el arreglo de datos y los gráficos de Chart.js. Considere la descripción de los gráficos en [Dataviz Catalogue](https://datavizcatalogue.com/).


### Actividades

#### Chart.js

##### HTML

* Levante el proyecto _dashboard_.
* En el `index.html`, agregue:
  - El contenedor del gráfico donde considere conveniente, con:

      ```
      <canvas id="myChart"></canvas>
      ```

  - La referencia a **Chart.js** desde el CDN, con:

      ```
      /* Coloque la referencia a Chart.js antes del script creado en la guía anterior */
      
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

      <script src="script-de-la-guia-anterior.js"></script>
      ```

##### JavaScript

Dentro del archivo javascript creado en la guía anterior.

* Agregue la función flecha **plot** con el parámetro **data**, antes con la función autoejecutable:

  ```
  let plot = (data) => { ... }
  

  (
    function () { ... }

  )();
  ```

* Dentro de la función **plot**, agregue:
  - La referencia al elemento HTML.

      ```
      const ctx = document.getElementById('myChart');
      ```
  - La fuente de datos.

      ```
      const dataset = {
          labels: data.hourly.time, /* ETIQUETA DE DATOS */
          datasets: [{
              label: 'Temperatura semanal', /* ETIQUETA DEL GRÁFICO */
              data: data.hourly.temperature_2m, /* ARREGLO DE DATOS */
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1
          }]
      };
      ```
  - La configuración del gráfico

      ```
      const config = {
          type: 'line',
          data: dataset,
      };
      ```

  - La instanciación del gráfico

      ```
      const chart = new Chart(ctx, config)
      ```

* Dentro del callback del segundo `then`, agregue la llamada a la función plot.
  
  ```
  fetch(URL)
  .then(response => response.json())
  .then(data => {
    
    ...

    plot(data)
  })
  .catch(console.error);
  ```

#### LocalStorage

##### JavaScript

Dentro del archivo javascript (antes con la función autoejecutable).

* Agregue la función flecha **load** con el parámetro **data**:

  ```
  let plot = (data) => { ... }

  let load = (data) => { ... }

  (
    function () { ... }
  )();
  ```

* Mueva el contenido del segundo `then` a la función flecha **load**.
  
  ```
  let URL = 'https://...'

  fetch(URL)
    .then(response => response.json())
    .then(data => {
        load(data)
    })
    .catch(console.error);
  ```

* Dentro de la función anónima:

  - Obtenga el contenido de la entrada `'meteo'` en la memoria del navegdor.

      ```
      let meteo = localStorage.getItem('meteo');
      ```

  - La petición asincrónica se ejecuta solo si no existe (`meteo == null`) la respuesta guardada y guarda DATA en la memoria. Caso contrario, carga DATA desde la memoria.

      ```
      if(meteo == null) {
        let URL = 'https://...';
        
        fetch(URL)
        .then(response => response.json())
        .then(data => {
            load(data)

            /* GUARDAR DATA EN LA MEMORIA */

        })
        .catch(console.error);

      } else {

          /* CARGAR DATA DESDE LA MEMORIA */

      }
      ```

  - Guarde el resultado de la petición asincrónica en la entrada 'meteo' de la memoria del navegador. Los valores en la memoria del navegador son de tipo texto.

    Utilice el método [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) para convertir el objeto en texto.

      ```
      ...
       

      /* GUARDAR DATA EN MEMORIA */
      localStorage.setItem("meteo", JSON.stringify(data))

      ...
      ```

  - Convierta el contenido de la entrada 'meteo' a objeto y cargue con la función **load**.

    Utilice el método [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) para convertir el texto en objeto.

      ```
      else {

        /* CARGAR DATA EN MEMORIA */
        load(JSON.parse(meteo))
      
      }
      ```



### Documentación

* [Documentación del API](https://www.chartjs.org/docs/latest/getting-started/) de **Chart.js**.
* Documentación del [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) en MDN.

### Términos

cdn, librerías externas

### Referencias

* Chart.js. (2023). Retrieved 13 June 2023, from https://www.chartjs.org/ 
* Chart JS - YouTube. (2023). Retrieved 14 June 2023, from https://www.youtube.com/@ChartJS-tutorials
* Window.localStorage - Referencia de la API Web MDN. (2023). Retrieved 14 June 2023, from https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
* JSON.parse() - JavaScript MDN. (2023). Retrieved 14 June 2023, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse