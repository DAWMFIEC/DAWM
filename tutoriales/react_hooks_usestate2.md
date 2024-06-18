---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

React - Hooks: useState II
===============

![react banner](imagenes/react_native_logo.png)

El Hook de useState ofrece una variable de estado para mantener los datos entre renderizados y una función que coloca el estado para actualizar la variable y provocar que React renderice el componente nuevamente.

<div align="center">
	<img src="imagenes/reac_usestate_logo.png" alt="" width="60%">
	<p>Fuente: <a href="http://www.room51.co.uk/tutorials/react/usestate/part1.html">Managing component state with the useState Hook</a> </p>
</div>

App.tsx: Hook - useState
==========

* * *

* En el componente `App.tsx`, agregue la referencia a los componentes:

```tsx
import * as React from 'react';

...
```

* En el componente `App.tsx`, agregue la desestructuración de arreglo (**estado actual** y **función de actualización**) para declarar los estados del componente. El valor predeterminado de ambos estado actual es -1.

```tsx
...

function App() {

  {/* Hooks: useState */}
  const [plan, setPlan] = React.useState(new Array<String>());
  const [result, setResult] = React.useState(new Array<String>());

  ...

}
```

App.tsx: Callbacks
==========

* * *

* En el componente `App.tsx`, agregue los callbacks que serán enviados al componente **Calculator**.

```tsx
...

function App() {

  {/* Hooks: useState */}
  ...

  {/* Callbacks */}
  const getPlan = (msgPlan: Array<String>) => {
    setPlan(msgPlan);
  };

  const getResult = (msgResult: Array<String>) => {
    setResult(msgResult);
  };

...

}
```

* En el componente `App.tsx`, envíe los callbacks al componente **Calculator**.

```tsx
...
function App() {

	...
		<Grid xs={12} sm={12} md={12} lg={12} >
			<Calculator setPlan={getPlan} setResult={getResult}/>
		</Grid>
	...
}
```

Calculator.tsx: Callbacks como Props
==========

* * *

App.tsx: Variable de estadco como Props
==========

* * *

* Compruebe el funcionamiento del servidor, con: **npm run dev**
* Acceda al URL [http://localhost:5174/](http://localhost:5174/)

![react_componentes_useState1](imagenes/react_componentes_useState1.png)

Referencias
=======

* Quick Start. (n.d.). Retrieved from https://react.dev/learn
* Vite. (n.d.). Retrieved from https://vitejs.dev/
* Cómo iniciar un proyecto React con Vite. (2022). Retrieved from https://carlosazaustre.es/react-vite
