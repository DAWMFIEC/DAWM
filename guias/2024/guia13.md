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
					title: "Precipitación, Humedad y Nubosidad vs Hora",
					curveType: "function",
					legend: { position: "right" },
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
					>
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
...
import Select, { SelectChangeEvent } from '@mui/material/Select';
...
```

* En `ControlPanel.tsx`, agregue el manejador **handleChange** para el evento _ChangeEvent_.

```tsx
...
export default function ControlPanel() {

	{/* manejador de eventos */}
	
	const handleChange = (event: SelectChangeEvent) => {
		alert( parseInt(event.target.value) );
	};

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

* En `ControlPanel.tsx`, agregue la variable de estado **selected** y la función de actualización **setSelected**. El valor predeterminado de la variable de estado es una cadena de caracteres vacío.

```tsx
...
export default function ControlPanel() {
	
	{/* variable de estado y función de actualización */}

	let [selected, setSelected] = useState(-1)

	{/* Datos de los elementos del Select */}

	...
}
```

* En `ControlPanel.tsx`, agregue la estrategia de actualización de la variable de estado en el manejador **handleChange**.

```tsx
...

export default function ControlPanel() {

	...

    {/* manejador de eventos */}

	const handleChange = (event: SelectChangeEvent) => {
		setSelected( parseInt(event.target.value) );
	};

    ...
}
```

```tsx
...
export default function ControlPanel() {

	...

	{/* JSX */}	

	return (

		<Paper>

			...

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