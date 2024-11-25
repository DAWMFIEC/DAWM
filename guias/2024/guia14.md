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

1. En el componente _src/App.tsx_, agregue:

	- La referencia al hook **useEffect**.

	```tsx
	{/* Hooks */ }
	import { useEffect } from 'react';
	```

	- La interfaz _Indicator_:

	```tsx
	{/* Hooks */ }
	...

	interface Indicator {
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

2. En el hook useEffect del componente _src/App.tsx_

	+ Agregue y ejecute la función asíncrona **request** dentro de la función para el efecto secundario.

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
	
	+ Agregue una petición asíncrona con fetch dentro de la función de autoejecución **async**.

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

	+ Agregue el analizador (`parser`) de XML

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

	+ Agregue el arreglo para almacenar temporalmente los resultados, extraiga el contenido del xml mediante el API del DOM (métodos **getElementsByTagName** y **getAttribute**) y guarde los resultado en arreglo. Revise la estructura del documento XML para extraer los datos necesarios.

	```tsx
	function App() {

		{/* Hook: useEffect */}

		useEffect(()=>{

			let request = async () => {

				...

				{/* XML Parser */}

				...

				{/* Arreglo para agregar los resultados */}

				let dataToIndicators : Indicator[] = new Array<Indicator>();

				{/* 
					Análisis, extracción y almacenamiento del contenido del XML 
					en el arreglo de resultados
				*/}

				let name = xml.getElementsByTagName("name")[0].innerHTML || ""
				dataToIndicators.push({"title":"Location", "subtitle": "City", "value": name})

				let location = xml.getElementsByTagName("location")[1]

				let latitude = location.getAttribute("latitude") || ""
				dataToIndicators.push({ "title": "Location", "subtitle": "Latitude", "value": latitude })

				let longitude = location.getAttribute("longitude") || ""
				dataToIndicators.push({ "title": "Location", "subtitle": "Longitude", "value": longitude })

				let altitude = location.getAttribute("altitude") || ""
				dataToIndicators.push({ "title": "Location", "subtitle": "Altitude", "value": altitude })

				console.log( dataToIndicators )

			}

			request();


		},[])

		return ( ... )
	}
	```

4. (STOP 1) Compruebe el resultado en el navegador.

#### Componente App: hook - useState

1. En el componente _src/App.tsx_, agregue: 

	- La referencia al hook **useState**.

	```tsx
	import { useEffect, useState } from 'react';
	```

	- La variable de estado **indicators** y la función de actualización **setIndicators**. El valor predeterminado de la variable de estado es un arreglo vacío del tipo _Indicator_.

	```tsx
	function App() {

		{/* Variable de estado y función de actualización */}
		let [indicators, setIndicators] = useState<Indicator[]>([])

		{/* Hook: useEffect */}
		...

		return ( ... )
	}
	```

2. En el hook useEffect del componente _src/App.tsx_, modifique la variable de estado mediante la función de actualización.

	```tsx
	function App() {

		{/* Hook: useEffect */}
		useEffect(()=>{

			let request = async () => {

				...
 
				// console.log( dataToIndicators )

				{/* Modificación de la variable de estado mediante la función de actualización */}
				setIndicators( dataToIndicators )

			}

			request()

		},[])

		return ( ... )

	}
	```

3. En el componente _src/App.tsx_:
	
	- Comente el grid de indicadores
	- Itere la variable de estado **indicators** usando la plantilla de elementos `<Grid>` e `<IndicatorWeather>`.

	```tsx
	...

	function App() {

		...

		{/* JSX */}
		return (

			<Grid container spacing={5}>
				
				{/* Indicadores */}
				{/* <Grid size={{ xs: 12, xl: 3 }}> ... </Grid> */}

				{
					indicators
					.map(
						(indicator, idx) => (
							<Grid key={idx} size={% raw %}{{{% endraw %} xs: 12, xl: 3 {% raw %}}}{% endraw %}>
								<IndicatorWeather 
									title={indicator["title"]} 
									subtitle={indicator["subtitle"]} 
									value={indicator["value"]} />
							</Grid>
						)
					)
				}
				
			</Grid>

			...
		)
	}
	```

4. (STOP 2) Compruebe el resultado en el navegador.

#### LocalStorage

1. En el componente _src/App.tsx_, agregue: 
	
	- La variable de estado **owm** y la función de actualización **setOWM**. El valor predeterminado de la variable de estado es el valor en localStorage _openWeatherMap_.

	```tsx
	function App() {

		{/* Variable de estado y función de actualización */}
		let [indicators, setIndicators] = useState<Indicator[]>([])
		let [owm, setOWM] = useState(localStorage.getItem("openWeatherMap"))

		{/* Hook: useEffect */}
		...

		return ( ... )
	}
	```

2. En el hook useEffect del componente _src/App.tsx_, agregue: 
	
	- La referencia a las claves del **LocalStorage**: `openWeatherMap` y `expiringTime`

	```jsx
	...
	function App() {

		{/* Hook: useEffect */}
		useEffect(() => {

			let request = async () => {

				{/* Referencia a las claves del LocalStorage: openWeatherMap y expiringTime */}
				let savedTextXML = localStorage.getItem("openWeatherMap") || "";
                let expiringTime = localStorage.getItem("expiringTime");

				{/* Request */}
				...

				{/* XML Parser */}
                ...
			}

	    	request();

    	}, [])
	}
	```

	- Obtenga la estampa de tiempo actual

	```jsx
	...
	function App() {

		{/* Hook: useEffect */}
		useEffect(() => {

			let request = async () => {

				{/* Referencia a las claves del LocalStorage: openWeatherMap y expiringTime */}
				...

				{/* Obtenga la estampa de tiempo actual */}
                let nowTime = (new Date()).getTime();

				{/* Request */}
				...

				{/* XML Parser */}
                ...
			}

	    	request();

    	}, [])
	}
	```

	- Verifique si no existe la clave `expiringTime` o si la estampa de tiempo actual supera el tiempo de expiración para realizar la petición asincrónica

	```jsx
	...
	function App() {

		{/* Hook: useEffect */}
		useEffect(() => {

			let request = async () => {

				{/* Referencia a las claves del LocalStorage: openWeatherMap y expiringTime */}
				...

				{/* Obtenga la estampa de tiempo actual */}
                ...

                {/* Verifique si es que no existe la clave expiringTime o si la estampa de tiempo actual supera el tiempo de expiración */}
                if(expiringTime === null || nowTime > parseInt(expiringTime)) {

					{/* Request */}
					...
				
				}

				{/* XML Parser */}
                ...
			}

	    	request();

    	}, [])
	}
	```

	- Luego de realizar la petición asincrónica, calcule y almacene el tiempo de expiración, almacene el texto en la clave openWeatherMap y use la función de actualización con el resultado de la petición.

	```jsx
	...
	function App() {

		{/* Hook: useEffect */}
		useEffect(() => {

			let request = async () => {

				{/* Referencia a las claves del LocalStorage: openWeatherMap y expiringTime */}
				...

				{/* Obtenga la estampa de tiempo actual */}
                ...

                {/* Verifique si es que no existe la clave expiringTime o si la estampa de tiempo actual supera el tiempo de expiración */}
                if(expiringTime === null || nowTime > parseInt(expiringTime)) {

					{/* Request */}
					...

					{/* Tiempo de expiración */}
                    let hours = 0.01
                    let delay = hours * 3600000
                    let expiringTime = nowTime + delay


					{/* En el LocalStorage, almacene el texto en la clave openWeatherMap, estampa actual y estampa de tiempo de expiración */}
					localStorage.setItem("openWeatherMap", savedTextXML)
					localStorage.setItem("expiringTime", expiringTime.toString())
					localStorage.setItem("nowTime", nowTime.toString())

					{/* DateTime */}
					localStorage.setItem("expiringDateTime", new Date(expiringTime).toString())
					localStorage.setItem("nowDateTime", new Date(nowTime).toString())

			        {/* Modificación de la variable de estado mediante la función de actualización */ }
			        setOWM( savedTextXML )
				}

				{/* XML Parser */}
                ...
			}

	    	request();

    	}, [])
	}
	```

	- Valide el procesamiento con el valor de savedTextXML.

	```jsx
	...
	function App() {

		{/* Hook: useEffect */}
		useEffect(() => {

			let request = async () => {

				{/* Referencia a las claves del LocalStorage: openWeatherMap y expiringTime */}
				...

				{/* Obtenga la estampa de tiempo actual */}
                ...

                {/* Verifique si es que no existe la clave expiringTime o si la estampa de tiempo actual supera el tiempo de expiración */}
                if(expiringTime === null || nowTime > parseInt(expiringTime)) {

					...
				}

				{/* Valide el procesamiento con el valor de savedTextXML */}
				if( savedTextXML ) {

						{/* XML Parser */}

	                	{/* Arreglo para agregar los resultados */ }

	                	{/* 
				           Análisis, extracción y almacenamiento del contenido del XML 
				           en el arreglo de resultados
				        */}

	                	{/* Modificación de la variable de estado mediante la función de actualización */ }

				}
			}

	    	request();

    	}, [])
	}
	```

	- Habilite la ejecución cada vez que cambie la variable de estado **owm**.

	```jsx
	...
	function App() {

		{/* Hook: useEffect */}
		useEffect(() => {

			let request = async () => {

				...
			}

	    	request();

    	}, [owm])
	}
	```

3. (STOP 3) Compruebe el resultado en el navegador.
4. Versiona local y remotamente el repositorio **dashboard**.
5. Despliega la aplicación **dashboard**.

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
* Matharu, M. (2024). A Practical Guide to Using Local Storage in Web and React.js. Retrieved from https://meenumatharu.medium.com/a-practical-guide-to-using-local-storage-in-web-and-react-js-6d163a000c3a
* Renard, G. (2023). Under the Hood of React useEffect Dependencies. Retrieved from https://blog.bitsrc.io/understanding-dependencies-in-useeffect-7afd4df37c96