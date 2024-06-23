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

	{/* Configuración */}

    let options = {
        title: "Precipitación, Humedad y Nubosidad vs Hora",
        curveType: "function",
        legend: { position: "right" },
    }

	{/* Datos de las variables meteorológicas */}

    const data = [
        ["Hora", "Precipitación", "Humedad", "Nubosidad"],
        ["03:00", 13, 78, 75],
        ["06:00", 4, 81, 79],
        ["09:00", 7, 82, 69],
        ["12:00", 3, 73, 62],
        ["15:00", 4, 66, 75],
        ["18:00", 6, 64, 84],
        ["21:00", 5, 77, 99]
    ];

    {/* JSX */}

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
				options={options}
		/>
		</Paper>
    )
}	
```

* En `App.tsx`, importe y use el componente **WeatherChart**

```tsx
...

import WeatherChart from './components/WeatherChart';

function App() {
	
	...

	{/* JSX */}

	return (
		...
		<Grid xs={12} lg={10}>
			<WeatherChart></WeatherChart>
		</Grid>
	)
}
```

* Compruebe el resultado en el navegador.

#### Componente Propio: ControlPanel

* Cree el componente `src/components/ControlPanel.tsx`

* En `ControlPanel.tsx`, importe los componentes:

```tsx
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
``` 

* En `ControlPanel.tsx`, agregue el componente funcional:

```tsx
...
export default function ControlPanel() {

	{/* Datos de los elementos del Select */}

	let items = [
		{"name":"Precipitación", "description":"Cantidad de agua, en forma de lluvia, nieve o granizo, que cae sobre una superficie en un período específico."}, 
		{"name": "Humedad", "description":"Cantidad de vapor de agua presente en el aire, generalmente expresada como un porcentaje."}, 
		{"name":"Nubosidad", "description":"Grado de cobertura del cielo por nubes, afectando la visibilidad y la cantidad de luz solar recibida."}
	]

	let options = items.map( (item, key) => <MenuItem key={key} value={key}>{item["name"]}</MenuItem> )
    
    {/* JSX */}

    return (
		<Paper
			sx={% raw %}{{{% endraw %}
				p: 2,
				display: 'flex',
				flexDirection: 'column'
			{% raw %}}}{% endraw %}
		>

			<Typography mb={2} component="h3" variant="h6" color="primary">
				Variables Meteorológicas
			</Typography>

			<Box sx={% raw %}{{{% endraw %} minWidth: 120 {% raw %}}}{% endraw %}>
				
				<FormControl fullWidth>
					<InputLabel id="simple-select-label">Variables</InputLabel>
					<Select
						labelId="simple-select-label"
						id="simple-select"
						label="Variables"
						defaultValue='-1'
					>
						<MenuItem key="-1" value="-1" disabled>Seleccione una variable</MenuItem>

						{options}

					</Select>
				</FormControl>

			</Box>


		</Paper>


    )
}
```

* En `App.tsx`, importe y use el componente **ControlPanel**

```tsx
...
import ControlPanel from './components/ControlPanel';

function App() {
	
	...

	{/* JSX */}

	return (
		...
		<Grid xs={12} lg={2}>
			<ControlPanel />
		</Grid>
		<Grid xs={12} lg={10}>
			<WeatherChart></WeatherChart>
		</Grid>
}
```

* Compruebe el resultado en el navegador.

#### Evento: onChange

* En `ControlPanel.tsx`, importe la interfaz **ChangeEvent**.

```tsx
...
import Select, { SelectChangeEvent } from '@mui/material/Select';
...
```

* En `ControlPanel.tsx`, agregue el manejador **handleChange** para el evento _ChangeEvent_.

```tsx
...
export default function ControlPanel() {

	...

	{/* Manejador de eventos */}
	
	const handleChange = (event: SelectChangeEvent) => {
		
		let idx = parseInt(event.target.value)
		alert( idx );

	};

	{/* JSX */}

	...

}
```

* En `ControlPanel.tsx`, agregue el manejador _handleChange_ al prop **onChange** del componente _Select_.

```tsx
	...
	
	<Select
		labelId="simple-select-label"
		id="simple-select"
		label="Variables"
		defaultValue='-1'
		onChange={handleChange}
	>
    ...
```

* Compruebe el resultado en el navegador.

#### Hook: useState - Componente Hijo

* En `ControlPanel.tsx`, importe la función **useState**.

```tsx
import { useState } from 'react';
import Paper from '@mui/material/Paper';
...
```

* En `ControlPanel.tsx`, agregue la `variable de estado` **selected** y la `función de actualización` **setSelected**. El valor predeterminado de la variable de estado es una cadena de caracteres vacío.

```tsx
...
export default function ControlPanel() {
	
	{/* Variable de estado y función de actualización */}

	let [selected, setSelected] = useState(-1)

	{/* Datos de los elementos del Select */}

	...
}
```

* En `ControlPanel.tsx`, use la función de actualización en el manejador **handleChange** y renderice el contenido del elemento seleccionado.

```tsx
...

export default function ControlPanel() {

	...

    {/* Manejador de eventos */}

	const handleChange = (event: SelectChangeEvent) => {

		let idx = parseInt(event.target.value)
		setSelected( idx );

	};

    ...
}
```

y

```tsx
...
export default function ControlPanel() {

	...

	{/* JSX */}	

	return (

		<Paper>

			...

			</Box>

			{/* Muestra la descripción de la variable seleccionada */}
			<Typography mt={2} component="p" color="text.secondary">
			{
				(selected >= 0)?items[selected]["description"]:""
			}
			</Typography>
			

		</Paper>
	)

}
```

* Compruebe el resultado en el navegador.

#### Hook: useRef - Componente Hijo

* En `ControlPanel.tsx`, importe la función **useRef**.

```tsx
import { useState, useRef } from 'react';
import Paper from '@mui/material/Paper';
...
```

* En `ControlPanel.tsx`, agregue la constante **descriptionRef** que servirá como referencia a un elemento HTML.

```tsx
...
export default function ControlPanel() {
	
	{/* Variable de estado y función de actualización */}

	...

	{/* Variable de referencia a un elemento */ }

    const descriptionRef = useRef<HTMLDivElement>(null);

	...
}
```

* En `ControlPanel.tsx`, establezca la referencia al elemento con la descripción de la variable seleccionada. 

```tsx
...
export default function ControlPanel() {

	...

	{/* JSX */}	

	return (

		<Paper>

			...

			</Box>


			{/* Muestra la descripción de la variable seleccionada */}
			<Typography ref={descriptionRef} mt={2} component="p" color="text.secondary" />
			

		</Paper>
	)

}
```

* En `ControlPanel.tsx`, agregue la modificación de la referencia en el manejador de eventos.

```tsx
...

export default function ControlPanel() {

	...

    {/* Manejador de eventos */}

	const handleChange = (event: SelectChangeEvent) => {

		let idx = parseInt(event.target.value)
		setSelected( idx );

		{/* Modificación de la referencia */}

		if (descriptionRef.current !== null) {
			descriptionRef.current.innerHTML = (idx >= 0) ? items[idx]["description"] : ""
		}

	};

    ...
}
```

* Compruebe el resultado en el navegador.
* Versiona local y remotamente el repositorio **dashboard**.
* Despliega la aplicación **dashboard**.

### Documentación

* En [React Google Charts](https://www.react-google-charts.com/) se encuentra la documentación de la biblioteca React Google Charts.

### Fundamental

* Guía de `hooks` en React

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">⚛️ Massive React hooks cheatsheet ↓ <br><br>1/8 <a href="https://t.co/S0BPD9OHrf">pic.twitter.com/S0BPD9OHrf</a></p>&mdash; George Moller (@_georgemoller) <a href="https://twitter.com/_georgemoller/status/1748347605606600820?ref_src=twsrc%5Etfw">January 19, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


### Términos

hooks, variable de estaddo, función de actualización

### Referencias

* Rakannimer. (n.d.). rakannimer/react-google-charts: A thin, typed, React wrapper over Google Charts Visualization and Charts API. Retrieved from https://github.com/RakanNimer/react-google-charts?tab=readme-ov-file
* Yosami. "Creating a Weather Dashboard Using HTML, CSS, and JavaScript." Medium, 8 Jul. 2020, https://medium.com/@yosami14/creating-a-weather-dashboard-using-html-css-and-javascript-217f80229fb.
* (N.d.). Retrieved from https://www.react-google-charts.com/