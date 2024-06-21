---
theme: jekyll-theme-leap-day
---

## Guía 13

[DAWM](/DAWM/) / [Proyecto03](/DAWM/proyectos/2024/proyecto03)

### Actividades previas

* Clona localmente tu repositorio **dashboard**.

### Actividades en clases

#### React Google Charts

* Desde la línea de comandos, instale [React Google Charts](https://www.react-google-charts.com/) con:

```prompt
npm install --save react-google-charts
```

#### Componente Propio: WeatherChart

* Cree el componente `src/components/WeatherChart.tsx`

* En `WeatherChart.tsx`, importe los componentes **Chart** y **Paper**:

```tsx
import { Chart } from "react-google-charts";
import Paper from '@mui/material/Paper';
``` 

* En `WeatherChart.tsx`, agregue el componente funcional:

```tsx
...

export default function WeatherChart() {

    const data = [
        ["Hora", "Precipitación [Prob]", "Humedad [%]"],
        ["03:00", 0.13, 0.78],
        ["06:00", 0.04, 0.81],
        ["09:00", 0.07, 0.82],
        ["12:00", 0.03, 0.73],
        ["15:00", 0.04, 0.66],
        ["18:00", 0.06, 0.64],
        ["21:00", 0.05, 0.77],
    ];

    return (
        <Paper
            sx={% raw %}{{{% endraw %}
                p: 2,
                display: 'flex',
                flexDirection: 'column'
            {% raw %}}}{% endraw %}
        >
            <Chart
                chartType="LineChart"
                data={data}
                width="100%"
                height="400px"
                options={% raw %}{{{% endraw %}
                    title: "Precipitación y Humedad vs Hora",
                    curveType: "function",
                    legend: { position: "bottom" },
                {% raw %}}}{% endraw %}
                legendToggle
            />
        </Paper>
    )
}
```

* En `App.tsx`, importe y use el componente **WeatherChart**

```tsx
...
	<Grid xs={12} lg={10}>
		<WeatherChart></WeatherChart>
	</Grid>
...
```

* Compruebe el resultado en el navegador.

#### Componente Propio: ControlPanel

#### Hook: useState

* Versiona local y remotamente el repositorio **dashboard**.
* Despliega la aplicación **dashboard**.

### Documentación

### Fundamental

### Términos

### Referencias

* Rakannimer. (n.d.). rakannimer/react-google-charts: A thin, typed, React wrapper over Google Charts Visualization and Charts API. Retrieved from https://github.com/RakanNimer/react-google-charts?tab=readme-ov-file
* (N.d.). Retrieved from https://www.react-google-charts.com/