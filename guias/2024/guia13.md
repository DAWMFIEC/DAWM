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
        ["Hora", "Precipitación [Prob]", "Humedad [% como decimal]"],
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

* Cree el componente `src/components/ControlPanel.tsx`

* En `ControlPanel.tsx`, importe los componentes **Paper**, **FormControlLabel**, **Checkbox** y **Typography**:

```tsx
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
``` 

* En `ControlPanel.tsx`, agregue el componente funcional:

```tsx
...
export default function ControlPanel() {
    

    return (
		<Paper
			sx={% raw %}{{{% endraw %}
					p: 2,
					display: 'flex',
					flexDirection: 'column'
				{% raw %}}}{% endraw %}>

				<Typography gutterBottom component="h2" variant="h6" color="primary">
					Controles
				</Typography>

				<FormControlLabel
					control={
							<Checkbox
								name="precipitation"
								value="precipitation"
							/>}
					label="Precipitación"
				/>

				<FormControlLabel
					control={
							<Checkbox
								name="humidity"
								value="humidity"
							/>}
					label="Humedad"
				/>

		</Paper>
    )
}
```

* En `App.tsx`, importe y use el componente **ControlPanel**

```tsx
...
	<Grid xs={12} lg={2}>
		<ControlPanel />	
	</Grid>

	<Grid xs={12} lg={10}>
		<WeatherChart></WeatherChart>
	</Grid>
...
```

* Compruebe el resultado en el navegador.

#### Evento: onChange

* En `ControlPanel.tsx`, importe la interfaz **ChangeEvent**.

```tsx
import { ChangeEvent } from 'react';
...
import Paper from '@mui/material/Paper';
...
```

* En `ControlPanel.tsx`, agregue el manejador **handleChange** para el evento _ChangeEvent_.

```tsx
...
export default function ControlPanel() {

	{/* manejador de eventos */}
	
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => { 
		alert(event.target.name)
	}

	...

}
```

* En `ControlPanel.tsx`, agregue el manejador _handleChange_ al prop **onChange** del componente _Checkbox_.

```tsx
	...
	
	<Checkbox
		name="precipitation"
		value="precipitation"
		onChange={handleChange}
	/>
    
    ...

	<Checkbox
		name="humidity"
		value="humidity"
		onChange={handleChange}
	/>
    ...
```

* Compruebe el resultado en el navegador.

#### Hook: useState - Componente Hijo

* En `ControlPanel.tsx`, importe la función **useState**.

```tsx
import { ChangeEvent, useState } from 'react';
...
import Paper from '@mui/material/Paper';
...
```

* En `ControlPanel.tsx`, agregue la variable de estado **checked** y la función de actualización **setChecked**. El valor predeterminado de la variable de estado es un arreglo de cadena de caracteres vacío.

```tsx
...
export default function ControlPanel() {
	
	{/* variable de estado y función de actualización */}

	let emptyArray = new Array<String>()
	let [checked, setChecked] = useState(emptyArray)


	{/* manejador de eventos */}

	...
}
```

* En `ControlPanel.tsx`, agregue la estrategia de actualización de la variable de estado en el manejador **handleChange**.

```tsx
...

export default function ControlPanel() {

	{/* variable de estado y función de actualización */}
	...

    {/* manejador de eventos */}

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        {/* Copia del arreglo (variable de estado) con el operador spread  */ }
        let copy = [...checked]

        let element = event.target.name

        {/* Indice del elemento en el arreglo. Si no existe en el arreglo, el resultado es -1 */ }
        let index = copy.indexOf(element)

        if (index != -1) {

            {/* Filtra los elementos del arreglo que sean diferentes del elemento seleccionado */ }
            let copyFilter = copy.filter(value => value !== element)

            {/* Actualiza la variable de estado checked */ }
            setChecked([...copyFilter])
        } else {

            {/* Actualiza la variable de estado checked */ }
            setChecked([...copy, element])
        }


    };

    ...
}
```

```tsx
...
export default function ControlPanel() {

	...

	return (

		<Paper>

			...

			{/* Temporal: Muestra los elementos seleccionados */}
			<ul>
				{
				    checked.map(el => <li> {el} </li>)
				}
			</ul>

		</Paper>
	)

}
```


* Compruebe el resultado en el navegador.

#### Hook: useState - Componente Padre

* Compruebe el resultado en el navegador.

* Versiona local y remotamente el repositorio **dashboard**.
* Despliega la aplicación **dashboard**.

### Documentación

### Fundamental

### Términos

### Referencias

* Rakannimer. (n.d.). rakannimer/react-google-charts: A thin, typed, React wrapper over Google Charts Visualization and Charts API. Retrieved from https://github.com/RakanNimer/react-google-charts?tab=readme-ov-file
* (N.d.). Retrieved from https://www.react-google-charts.com/