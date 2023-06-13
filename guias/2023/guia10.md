---
theme: jekyll-theme-leap-day
---

## Guía 10

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2023/proyecto5)

### Actividades previas

* De [Open Meteo](https://open-meteo.com/) identifique la [documentación del API](https://open-meteo.com/en/docs).
  - Identifique una variable compuesta por un arreglo de datos, el tipo de dato y la unidad.

* De [Chart.js](https://www.chartjs.org/) identifique la [documentación del API](https://www.chartjs.org/docs/latest/getting-started/)


### Actividades


* Levante el proyecto del _dashboard_.
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

### Documentación


### Términos

cdn

### Referencias

* Chart.js. (2023). Retrieved 13 June 2023, from https://www.chartjs.org/