---
theme: jekyll-theme-leap-day
---

## Guía 10

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2023/proyecto5)

### Actividades previas

* De [Open Meteo](https://open-meteo.com/) identifique la [documentación del API](https://open-meteo.com/en/docs).
  - Seleccione una de las variables en la sección **Hourly Weather Variables**.

* De [Chart.js](https://www.chartjs.org/) identifique la [documentación del API](https://www.chartjs.org/docs/latest/getting-started/)
  - Identifique los [tipos de gráficos](https://www.chartjs.org/docs/latest/charts/) disponibles.

* Asocie la variable con el arreglo de datos y el tipo de gráficos de Chart.js. Consider la descripción de los gráficos en [Dataviz Catalogue](https://datavizcatalogue.com/).


### Actividades

### HTML

* Levante el proyecto _dashboard_.
* En el `index.html`, agregue:
  - El contenedor del gráfico, con:

      ```
      <div>
         <canvas id="myChart"></canvas>
      </div>
      ```

  - La referencia a **Chart.js** desde el CDN, con:

      ```
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      ```

### JavaScript

Dentro del archivo javascript (antes con la función autoejecutable).

* Agregue la función flecha **plot** con el parámetro **data**:

  ```
  let plot = (data) => {
    
    ...

  }

  (
    function () {
      ...
    }
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

* Dentro del callback del último `then`, agregue la llamada a la función plot.
  
  ```
  .then(data => {
    
    ...

    plot(data)
  })
  .catch(console.error);
  ```

### Documentación

* [Documentación del API](https://www.chartjs.org/docs/latest/getting-started/) de **Chart.js**.

### Términos

cdn, librerías externas

### Referencias

* Chart.js. (2023). Retrieved 13 June 2023, from https://www.chartjs.org/ 