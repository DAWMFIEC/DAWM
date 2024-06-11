---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

React - Componentes Integrados
===============

![react banner](imagenes/react_native_logo.png)

Componentes Integrados
==========

* * *

De manera predeterminada, React provee de algunos componentes integrados ([Built-in React Components](https://react.dev/reference/react/components)) que se pueden utilizar con JSX.

* `<Fragment>`, escrito alternativamente como `<>`...`</>`, le permite agrupar varios nodos JSX.
* `<Profiler>` le permite medir el rendimiento del renderizado del árbol de React.
* `<Suspense>` le permite mostrar un respaldo mientras se cargan los componentes secundarios.
* `<StrictMode>` permite comprobaciones adicionales solo de desarrollo que le ayudan a encontrar errores con antelación.

<div align="center">
    <img src="imagenes/react_jsx.png" alt="" width="60%">
    <p>Fuente: <a href="https://medium.com/nerd-for-tech/jsx-rules-in-react-a-javascript-framework-4b0ab66fdbf9">JSX Rules in React(A JavaScript Framework).</a> </p>
</div>

Componente App
==========

* * *

* En el archivo `src/App.tsx`, modifique el JSX a renderizar por:

```jsx
...

function App() {
  return (
    <>
        ¡Hola mundo!
    </>
  )
}

export default App
```

Referencias
=======

* Quick Start. (n.d.). Retrieved from https://react.dev/learn
* Vite. (n.d.). Retrieved from https://vitejs.dev/
* Cómo iniciar un proyecto React con Vite. (2022). Retrieved from https://carlosazaustre.es/react-vite
