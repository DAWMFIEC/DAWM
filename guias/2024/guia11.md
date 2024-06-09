---
theme: jekyll-theme-leap-day
---

## Guía 11

[DAWM](/DAWM/) / [Proyecto03](/DAWM/proyectos/2024/proyecto03)

### Actividades previas

* Desde la línea de comandos:
	- Verifique la versión de npm

### Actividades en clases

#### Github

* Crea un repositorio en GitHub con el nombre **dashboard**.

#### Proyecto Base

* Desde la línea de comandos, cree un nuevo sitio con Vite:

```prompt
	npm create vite@latest <NOMBRE_DEL_PROYECTO>
```

   - Seleccione **React** como framework: `√ Select a framework: » React`
   - Seleccione **Javascript** como variante: `√ Select a variant: » Typescript`

* Ingrese a la carpeta creada:

```prompt
	cd <NOMBRE_DEL_PROYECTO>
```

* Instale las dependencias

```prompt
	npm install
```

* Inicie el servidor.

```prompt
	npm run dev
```

* Revise el resultado en [http://localhost:5173/](http://localhost:5173/)

<div align="center">
    <img src="imagenes/default_site_react_vite.png" alt="">
</div>

* Versiona local y remotamente el repositorio **dashboard**.

#### Estructura de archivos del proyecto en Vite - React.

* Archivos de configuración
    + **./vite.config.js** contiene la información al ejecutar el servidor de Vite.
    + **./package.json** contiene la lista de los paquetes instalados

* Código fuente
    + **./index.html** página de inicio
    + **src/index.css** estilo global de la página
    + **src/main.jsx** punto de entrada de la página
    + **src/App.jsx** función componente principal
    + **src/App.css** estilo de la función componente principal

#### Despliegue automático

* Desde la línea de comandos, acceda a la ruta del proyecto.
* Instale el paquete `gh-pages`

```prompt
	npm install gh-pages --save-dev
```

* En el archivo `package.json` agregue las siguientes líneas antes de la entrada **build**:

```typescript
    ...
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist",
    ...
```

* En el archivo `vite.config.js` agregue esta línea antes de: `plugins: [react()],`:

```typescript
    base: "/<NOMBRE_DEL_REPOSITORIO>",
    ...
```

* Versiona local y remotamente el repositorio **dashboard**.

* Desde la línea de comandos, ejecute el comando de despliegue

```prompt
	npm run deploy
```

* En GitHub:
	+ En `Settings` > `Code and automation` > `Pages` > `Build and deployment` seleccione la rama `gh-pages`
	+ Revise que exista la rama `gh-pages` y que contenga el sitio web transpilado.
	+ Revise el URL del sitio web desplegado, que se encuentra en `Settings` > `Code and automation` > `Pages` > `GitHub Pages`: `https://<NOMBRE_DE_USUARIO>.github.io/<NOMBRE_DEL_REPOSITORIO>/`. 

### Documentación

* En [react.dev](https://react.dev/) se encuentra la documentación, tutoriales, playground y referencias para crear interfaces de sitios web y aplicaciones nativas.
* En [vitejs.dev](https://vitejs.dev/) se encuentra la documentación y referencias que provee de un servidor de desarrollo local que se utiliza para crear aplicaciones web de JavaScript. Vite es conocido por su velocidad, facilidad de uso y soporte para una amplia gama de marcos y bibliotecas de JavaScript.

### Fundamental

* React.dev Blog

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Join us for a tour around the new site in our introductory blog post. You’ll learn what’s new, how to access the old site (in case you need it), and what’s coming next. <a href="https://t.co/h6K8uMyRXN">https://t.co/h6K8uMyRXN</a></p>&mdash; React (@reactjs) <a href="https://twitter.com/reactjs/status/1636444645981863967?ref_src=twsrc%5Etfw">March 16, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

* MUI is more than just Material UI!

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">🗣️💬 Shout it from the rooftops:<br><br>MUI is more than just Material UI! ✨<br><br>Headless components? <br>✅ Base UI<br><br>Next-gen design &amp; DX?<br>✅ Joy UI<br><br>Advanced components?<br>✅ MUI X Data Grid &amp; Date Pickers<br><br>Low-code admin builder?<br>✅ MUI Toolpad<br><br>Learn more here:<a href="https://t.co/ZulMd41oIf">https://t.co/ZulMd41oIf</a></p>&mdash; MUI org (@MUI_hq) <a href="https://twitter.com/MUI_hq/status/1651256048307585029?ref_src=twsrc%5Etfw">April 26, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

librería, ui, ui material

### Referencias

* Quick Start. (n.d.). Retrieved from https://react.dev/learn
* Vite. (n.d.). Retrieved from https://vitejs.dev/
* Cómo iniciar un proyecto React con Vite. (2022). Retrieved from https://carlosazaustre.es/react-vite
* Shamloo, R. (2023). Deploying Vite / React App to GitHub Pages. Retrieved from https://dev.to/rashidshamloo/deploying-vite-react-app-to-github-pages-35hf