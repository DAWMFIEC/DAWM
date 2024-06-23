---
theme: jekyll-theme-leap-day
---

## Guía 14

[DAWM](/DAWM/) / [Proyecto03](/DAWM/proyectos/2024/proyecto03)

### Actividades previas

* Clona localmente tu repositorio **dashboard**.

### Actividades en clases

#### Hook: useEffect - Componente Padre

* En el componente `App.tsx`, agregue la referencia a los hooks **useState** y **useEffect**

```tsx
import {useEffect, useState} from 'react';
...
```

* En el componente `App.tsx`, agregue el hook **useEffect** para reaccionar después del primer renderizado ( `fase` de **Montaje** en el [`ciclo de vida`](https://www.reactjs.wiki/que-es-el-ciclo-de-vida-de-un-componente-en-react) ) en el DOM.

```tsx
function App() {

	{/* Hook: useEffect */}
	
	useEffect(()=>{


	},[])

	...
}
```

#### Petición asíncrona de un XML

* En el hook useEffect del componente `App.tsx`, agregue una petición asíncrona con fetch

```tsx
	...

	{/* Hook: useEffect */}

	useEffect(()=>{

		{/* Request */}

		let API_KEY = "AQUÍ VA SU API KEY DE OPENWEATHERMAP"
		let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=${API_KEY}`)
		savedTextXML = await response.text();

	},[])

	...
```

#### XML Parser

* En el hook useEffect del componente `App.tsx`, agregue el analizador (`parser`) de XML

```tsx
	...

	{/* Hook: useEffect */}

	useEffect(()=>{

		{/* Request */}

		...

		{/* XML Parser */}

		const parser = new DOMParser();
		const xml = parser.parseFromString(savedTextXML, "application/xml");

	},[])

	...
```

* En el hook useEffect del componente `App.tsx`, agregue el arreglo para almacenar los resultados y analice el contenido del xml mediante el DOM (métodos **getElementsByTagName** y **getAttribute**).

```tsx
	...

	{/* Hook: useEffect */}

	useEffect(()=>{

		{/* Request */}

		...

		{/* XML Parser */}

		...

		{/* Arreglo con los resultados */}

		let results = new Array()

		{/* Análisis del XML */}

		let location = xml.getElementsByTagName("location")[1]

		let geobaseid = location.getAttribute("geobaseid")
		results.push(["Location","geobaseid", geobaseid])

		let latitude = location.getAttribute("latitude")
		results.push(["Location","Latitude", latitude])

		let longitude = location.getAttribute("longitude")
		results.push(["Location","Longitude", longitude])

	},[])

	...
```

#### Renderización Estática

* Compruebe el resultado en el navegador.

#### Renderización Dinámica con Map

* Compruebe el resultado en el navegador.

#### LocalStorage 

* Compruebe el resultado en el navegador.

* Versiona local y remotamente el repositorio **dashboard**.
* Despliega la aplicación **dashboard**.

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