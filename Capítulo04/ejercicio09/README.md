# Ejercicio 09

![ejercicio09](images/ejercicio09.png)


## Requisitos

* Instale Nodejs, desde el [sitio oficial](https://nodejs.org/es/download/).
	- Mediante la línea de comandos, verifique la versión de Nodejs, con: `node -v`
* Instale Typescript globalmente, con: `npm install -g typescript`

## Instrucciones

* Complete las actividades de [React - Bases](https://dawmfiec.github.io/DAWM/tutoriales/react_bases.html), [React - Componentes Integrados](https://dawmfiec.github.io/DAWM/tutoriales/react_componentes_integrados.html), [React - MUI + Componentes Propios](https://dawmfiec.github.io/DAWM/tutoriales/react_mui_componentes_propios.html), [React - Interfaces + Props](https://dawmfiec.github.io/DAWM/tutoriales/react_props.html), [React - Virtual DOM y Eventos](https://dawmfiec.github.io/DAWM/tutoriales/react_eventos.html), [React - Hooks: useState I](https://dawmfiec.github.io/DAWM/tutoriales/react_hooks_usestate1.html), [React - Hooks: useState II](https://dawmfiec.github.io/DAWM/tutoriales/react_hooks_usestate2.html) y [React - Hooks: useEffect](https://dawmfiec.github.io/DAWM/tutoriales/react_hooks_useeffect.html).
 

## Pruebas unitarias

* Descargue y descomprima [C04E09.zip](../../zips/C04E09.zip).
* Copie la carpeta **tests** en la carpeta `src` del proyecto.
* En su proyecto de React 
	+ Instale las dependencias de **Vitest**, **Jsdom** y **React Testing**
    	- Desde otra instancia de la línea de comandos, ejecute: `npm install --save-dev vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event @vitest/coverage-v8`
    + Modifique el archivo **package.json**
    	- Agregue los pares/valores: **test**, **test:watch**, **test:ui** y **test:coverage**

    <pre><code>
    ...
      "scripts": {
      	...
        "preview": "vite preview",
        <b style="color:red">
        	"test": "vitest",
        	"coverage": "vitest run --coverage",
			    "test:watch": "vitest --watch",
			    "test:ui": "vitest --ui",
			    "test:coverage": "vitest --coverage"
    	</b>
      },
      ...
    }
    </code></pre>

    + Modifique el archivo **vite.config.ts**
    	- Agregue los pares/valores: **test**

    <pre><code>
    import { defineConfig } from 'vite'
	import react from '@vitejs/plugin-react-swc'

	// https://vitejs.dev/config/
	export default defineConfig({
	  plugins: [react()],
	  <b style="color:red">
	  test: {
	    environment: 'jsdom',
	  }
	  </b>
	})

    </code></pre>

* En la ruta de su proyecto en Express, desde la línea de comandos ejecute: `npm run test:ui`

## Referencias 

* Quick Start. (n.d.). Retrieved from https://react.dev/learn
* Vite. (n.d.). Retrieved from https://vitejs.dev/
* Cómo iniciar un proyecto React con Vite. (2022). Retrieved from https://carlosazaustre.es/react-vite
* Bruce-Crabbe, V. (2024). Vitest with React Testing Library In React(created with Vite). Retrieved from https://victorbruce82.medium.com/vitest-with-react-testing-library-in-react-created-with-vite-3552f0a9a19a
* Jaime Fernández Moreno                Soy ingeniero electrónico industrial y. (n.d.). Testing en React con Vitest. Retrieved from https://www.paradigmadigital.com/dev/testing-react-vitest/
* V, A. (2023). Vitest - Blazing fast component testing for React. Retrieved from https://dev.to/abhi0498/vitest-blazing-fast-component-testing-for-react-2992
* Bo(gr). (n.d.). Retrieved from https://bogr.dev/blog/react-testing-intro/