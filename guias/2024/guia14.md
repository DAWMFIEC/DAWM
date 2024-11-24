---
theme: jekyll-theme-leap-day
---

## Guía 14

[DAWM](/DAWM/) / [Proyecto03](/DAWM/proyectos/2024/proyecto03)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">
Desarrollar un dashboard interactivo y visualmente intuitivo utilizando tecnologías web modernas, como React, que permita a los usuarios monitorear en tiempo real métricas clave del clima.</pre>

### Actividades en clases

1. Clona localmente tu repositorio **dashboard**.

#### Componente App: hook - useEffect
##### Petición asíncrona de un XML

1. En el componente `App.tsx`, agregue:

	- La referencia al hook **useEffect**.

	```tsx
	{/* Hooks */ }
	import { useEffect } from 'react';
	```

	- La interfaz _Config_:

	```tsx
	{/* Hooks */ }
	...

	interface Config {
	  title?: String;
	  subtitle?: String;
	  value?: String;
	}

	function App() { ... }
	```

	- El hook **useEffect** para reaccionar únicamente después del renderizado ( `fase` de **Montaje** en el [`ciclo de vida`](https://www.reactjs.wiki/que-es-el-ciclo-de-vida-de-un-componente-en-react) ) en el DOM.

	```tsx
	...

	function App() {

		{/* Hook: useEffect */}
		useEffect( ()=>{}, [] )

		return ( ... )
	}
	```

2. En el hook useEffect del componente `App.tsx`

	+ (1) Agregue y ejecute la función asíncrona **request** dentro de la función para el efecto secundario.

	```tsx
	function App() {

		{/* Hook: useEffect */}
		useEffect(()=>{

			let request = async () => { }

			request();

		},[])

		return ( ... )
	}
	```
	
	+ (2) Agregue una petición asíncrona con fetch dentro de la función de autoejecución **async**.

	```tsx
	function App() {

		{/* Hook: useEffect */}
		useEffect(()=>{

			let request = async () => {

				{/* Request */}
				let API_KEY = "OPENWEATHERMAP' API KEY"
				let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`)
				let savedTextXML = await response.text();

			}

			request();

		},[])

		return ( ... )
	}
	```

	+ (3) Agregue el analizador (`parser`) de XML

	```tsx
	function App() {

		{/* Hook: useEffect */}
		useEffect(()=>{

			let request = async () => {

				{/* Request */}

				...

				{/* XML Parser */}
				const parser = new DOMParser();
				const xml = parser.parseFromString(savedTextXML, "application/xml");

			}

			request();

		},[])

		return ( ... )
	}	
	```

	+ (4) Agregue el arreglo para almacenar temporalmente los resultados, extraiga el contenido del xml mediante el API del DOM (métodos **getElementsByTagName** y **getAttribute**) y guarde los resultado en arreglo. Revise la estructura del documento XML para extraer los datos necesarios.

	```tsx
	function App() {

		{/* Hook: useEffect */}

		useEffect(()=>{

			let request = async () => {

				...

				{/* XML Parser */}

				...

				{/* Arreglo para agregar los resultados */}

				let dataToIndicators : Config[] = new Array<Config>();

				{/* 
					Análisis, extracción y almacenamiento del contenido del XML 
					en el arreglo de resultados
				*/}

				let name = xml.getElementsByTagName("name")[0].innerHTML || ""
				dataToIndicators.push({"title":"Location", "subtitle": "City", "value": name})

				let location = xml.getElementsByTagName("location")[1]

				let latitude = location.getAttribute("latitude") || ""
				dataToIndicators.push({"title":"Location", "subtitle": "Latitud", "value":latitude})

				let longitude = location.getAttribute("longitude") || ""
				dataToIndicators.push({"title":"Location", "subtitle": "Longitude", "value":longitude})

				let geobaseid = location.getAttribute("geobaseid") || ""
				dataToIndicators.push({"title":"Location", "subtitle": "geobaseid", "value": geobaseid})

				console.log( dataToIndicators )

			}

			request();


		},[])

		return ( ... )
	}
	```

4. (STOP 1) Compruebe el resultado en el navegador.

#### Componente App: hook - useState
#### Renderización Dinámica

1. En el componente `App.tsx`, agregue: 

	- La referencia al hook **useState**.

	```tsx
	import { useEffect, useState } from 'react';
	```

	- La variable de estado **indicators** y la función de actualización **setIndicators**. El valor predeterminado de la variable de estado es un arreglo vacío del tipo _Config_.

	```tsx
	function App() {

		{/* Variable de estado y función de actualización */}
		let [indicators, setIndicators] = useState<Config[]>([])

		{/* Hook: useEffect */}
		...

		return ( ... )
	}
	```

2. En el hook useEffect del componente `App.tsx`, modifique la variable de estado mediante la función de actualización.

	```tsx
	function App() {

		{/* Hook: useEffect */}
		useEffect(()=>{

			(async ()=>{

				...

				{/* 
					Análisis, extracción y almacenamiento del contenido del XML 
					en el arreglo de resultados
				*/}

				...
 
				// console.log( dataToIndicators )

				{/* Modificación de la variable de estado mediante la función de actualización */}
				setIndicators(indicatorsElements)

			})()

		},[])

		return ( ... )

	}
	```

3. En el componente `App.tsx`, itere la variable de estado.

	```tsx
	...

	function App() {

		...

		{/* JSX */}
		return (

			<Grid container spacing={5}>
				
				{/* Indicadores */}
				{/* <Grid size={{ xs: 12, xl: 3 }}> ... </Grid> */}

				{indicators
					.map(
						
						(indicator, idx) => (
						<Grid key={idx} size={{ xs: 12, xl: 3 }}>
							<IndicatorWeather title={indicator["title"]} 
											  subtitle={indicator["subtitle"]} 
											  value={indicator["value"]} />
						</Grid>)
					)
				}
				
			</Grid>

			...
		)
	}
	```

4. (STOP 2) Compruebe el resultado en el navegador.

#### LocalStorage (OPCIONAL)

1. En el hook useEffect del componente `App.tsx`, reorganice el código para usar el almacenamiento del navegador (`LocalStorage`) para guardar la respuesta de la petición asincrónica.

	```tsx
		...

		{/* Hook: useEffect */}

		useEffect(()=>{


			(async ()=>{

				
				{/* 1. Comente el código anterior con el Request */}

				// {/* Request */ }

				// let API_KEY = "AQUÍ VA SU API KEY DE OPENWEATHERMAP"
				// let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`)
				// let savedTextXML = await response.text();


				{/* 2. Del LocalStorage, obtiene el valor de las claves openWeatherMap y expiringTime */}

				let savedTextXML = localStorage.getItem("openWeatherMap")
				let expiringTime = localStorage.getItem("expiringTime")

				{/* 3. Obtenga la estampa de tiempo actual */}

				let nowTime = (new Date()).getTime();

				{/* 4. Realiza la petición asicrónica cuando: 
					(1) La estampa de tiempo de expiración (expiringTime) es nula, o  
					(2) La estampa de tiempo actual es mayor al tiempo de expiración */}

				if(expiringTime === null || nowTime > parseInt(expiringTime)) {

					{/* 5. Request */}

					let API_KEY = "AQUÍ VA SU API KEY DE OPENWEATHERMAP"
					let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`)
					savedTextXML = await response.text();


					{/* 6. Diferencia de tiempo */}

					let hours = 1
					let delay = hours * 3600000


					{/* 7. En el LocalStorage, almacena texto en la clave openWeatherMap y la estampa de tiempo de expiración */}

					localStorage.setItem("openWeatherMap", savedTextXML)
					localStorage.setItem("expiringTime", (nowTime + delay ).toString() )
				}

				{/* XML Parser */}

				... 

				{/* Arreglo para agregar los resultados */}

				...

			})()

		},[])

		...
	```

2. (STOP 3) Compruebe el resultado en el navegador.

#### BasicTable: Análisis del XML

1. Defina:

	+ Los datos a procesar y mostrar, p.e.: **rangeHours** y **windDirection**.
	+ La estructura de datos para almacenar los datos, p.e.: Arreglo de objetos `[{ ... }, { ... }]`.

2. En el componente `App.tsx`: 

	**NOTA:** Revise los comentarios numerados y adáptelos al código de su componente

	```tsx
	function App() {

		{/* 
			1. Agregue la variable de estado (dataTable) y función de actualización (setDataTable).
		*/}

		let [rowsTable, setRowsTable] = useState([])

		...

		
		useEffect(()=>{

			(async ()=>{

				...

				{/* Modificación de la variable de estado mediante la función de actualización */}

				...

				{/* 
					2. Procese los resultados de acuerdo con el diseño anterior.
					   Revise la estructura del documento XML para extraer los datos necesarios. 
				*/}

				let arrayObjects = Array.from( xml.getElementsByTagName("time") ).map( (timeElement) =>  {
					
					let rangeHours = timeElement.getAttribute("from").split("T")[1] + " - " + timeElement.getAttribute("to").split("T")[1]

					let windDirection = timeElement.getElementsByTagName("windDirection")[0].getAttribute("deg") + " "+  timeElement.getElementsByTagName("windDirection")[0].getAttribute("code") 
					
					return { "rangeHours": rangeHours,"windDirection": windDirection }
				
				})

				arrayObjects = arrayObjects.slice(0,8)
			
				{/* 3. Actualice de la variable de estado mediante la función de actualización */}

				setRowsTable(arrayObjects)

			})()

		},[])

		...

		return (

			...

			<Grid xs={12} lg={8}>

				{/* 4. Envíe la variable de estado (dataTable) como prop (input) del componente (BasicTable) */}

				<BasicTable rows={rowsTable}></BasicTable>

			</Grid>

			...

		)
	}
	```


3. En el componente `BasicTable.tsx`. 

	**NOTA:** Revise los comentarios numerados y adáptelos al código de su componente
	
	```tsx
	{/* 1. Importe los hooks de estado y ejecución en segundo plano (useState y useEffect)  */}
	
	import { useState, useEffect } from 'react';
	
	{/* 2. Comente la funciones de procesamiento de datos (createData) y las variables con valores fijos (rows) */}

	/*
		function createData(
			...	
		}
	*/

	/*
		const rows = [
		...
		];
	*/

	{/* 3. Declare la interfaz del prop de entrada */}

	interface Config {
		rows: Array<object>;
	}

	export default function BasicTable( data:Config ) {

		{/* 
			4. Declare la variable de estado (rows) y la función de actualización (setRows).
			Use el mismo identificador de la variable con valores fijos (rows)
		*/}

		let [rows, setRows] = useState([])
		
		{/* 
			5. Agregue el hook useEffect, controlado por el prop del componente (data), y
			Dentro del hook, invoque al métdo de actualización con el valor del prop (data.rows).
		*/}

		useEffect( () => {

			(()=> {

				setRows(data.rows)

			})()

		}, [data] )


		{/* JSX */}

		return (

			...
				{/* Modifique la cabecera de la tabla con los títulos adecuados */}

				<TableCell>Rango de horas</TableCell>
				<TableCell align="right">Dirección del viento</TableCell>
            ...

            	{/* Modifique las filas de la tabla con las claves rangeHours y windDirection del objeto  */}
				{rows.map((row) => (
					<TableRow
						key={row.rangeHours}
						...
					>
						<TableCell component="th" scope="row">
							{row.rangeHours}
						</TableCell>
						<TableCell align="right">{row.windDirection}</TableCell>
					</TableRow>
				))}
			...

		)
	}
	```

4. (STOP 4) Compruebe el resultado en el navegador.
5. Versiona local y remotamente el repositorio **dashboard**.
6. Despliega la aplicación **dashboard**.

### Documentación

* En [React](https://react.dev/reference/react/useEffect) se encuentra la documentación de useEffect.

### Fundamental

* Ciclo de vida de los componentes en React

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">3️⃣ React Lifecycle<br><br>- Interactive React Lifecycle Methods diagram.<br><br>🔗 <a href="https://t.co/7UVoA1rXCZ">https://t.co/7UVoA1rXCZ</a> <a href="https://t.co/ZcicnZauXC">pic.twitter.com/ZcicnZauXC</a></p>&mdash; Pratham (@Prathkum) <a href="https://twitter.com/Prathkum/status/1372737347717070853?ref_src=twsrc%5Etfw">March 19, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

* Guía de useEffect en React

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">⚛️ useEffect cheatsheet ↓<br><br>❌ Thinking of useEffect as a lifecycle method.<br><br>✅ Thinking of useEffect as a mechanism to sync data (state/props) with systems that aren’t controlled by React. <a href="https://t.co/v8BK5CLsSn">pic.twitter.com/v8BK5CLsSn</a></p>&mdash; George Moller (@_georgemoller) <a href="https://twitter.com/_georgemoller/status/1714250976947794418?ref_src=twsrc%5Etfw">October 17, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

React Lifecycle, React Lifecycle phases, parser

### Referencias

* Using Google charts for react data visualization (no date) Home. Available at: https://code.pieces.app/blog/google-charts-react-data-visualization (Accessed: 22 June 2024). 
* Blog, A. (2023) How to use google charts with react for Dynamic Data Visualization, DEV Community. Available at: https://dev.to/ably/how-to-use-google-charts-with-react-for-dynamic-data-visualization-4e11 (Accessed: 22 June 2024). 
* Jamal, T. (2023) How to use google charts with react for Dynamic Data Visualization, Ably Realtime. Available at: https://ably.com/blog/how-to-use-google-charts-with-react (Accessed: 22 June 2024). 
* How to fetch XML in JavaScript (no date) Code to go. Available at: https://codetogo.io/how-to-fetch-xml-in-javascript/ (Accessed: 22 June 2024). 
* diego.coder26 (2024) Ciclo de Vida en react.js (hook useeffect), Medium. Available at: https://medium.com/@diego.coder/ciclo-de-vida-en-react-js-hook-useeffect-68d35cf287cf (Accessed: 22 June 2024). 