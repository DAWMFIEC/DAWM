---
theme: jekyll-theme-leap-day
---

## Guía 16

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2023/proyecto05)

### Actividades previas

#### Nombre del proyecto y nombre del repositorio remoto

En adelante, para: 

* El `<NOMBRE_APLICACION>` se encuentra la clave `"name"` del `package.json`.
* El `<NOMBRE_DEL_REPOSITORIO_REMOTO>` es el nombre del repositorio de GitHub. Puede ser igual a `<NOMBRE_APLICACION>`.

#### Compilación

* Compile la aplicación en Angular en el directorio de salida `dist/`, con el comando [build](https://angular.io/cli/build): 

	```
	ng build
	```

**NOTA:** Este comando crea la carpeta `dist/<NOMBRE_APLICACION>/browser` con los archivos que pueden ejecutarse en un [servidor HTTP](https://www.hostinger.es/tutoriales/que-es-un-servidor-web). Revise el contenido de la carpeta.


#### Servidor HTTP

* Desde la línea de comandos, en la raíz del proyecto, levante el servidor HTTP de Python:

	```
	python -m http.server --dir dist/<NOMBRE_APLICACION>/browser/
	```

* En el navegador, acceda al URL `http://localhost:8000/` y verifique el funcionamiento correcto de su aplicación.

### Actividades

* Clone localmente tu repositorio **mpa**.
* Abra el proyecto en VSCode y levante el servidor.

#### Compilación del repositorio remoto

* En el archivo `package.json`, agregue en la clave `scripts`:


	```
	...
	"scripts": {
		...
		"build:prod": "ng build --configuration production --base-href /<NOMBRE_DEL_REPOSITORIO_REMOTO>/browser",
		...
	}
	...
	```

* Reemplace `<NOMBRE_DEL_REPOSITORIO_REMOTO>` por el nombre del repositorio de GitHub


#### Repositorio local

* Verifique la clave `origin` con URL del repositorio remoto, con:

	```
	git remote -v
	```

	+ De ser necesario, agregue o cambie la clave `origin`, con:

		```
		git remote add origin https://github.com/<USUARIO>/<NOMBRE_DEL_REPOSITORIO_REMOTO>.git
		```

* Verifique que su repositorio local se encuentre en la rama `main`, con:

	```
	git branch -v
	```

	+ De ser necesario, cambie a la rama main, con:

		```
		git checkout -b main
		```

* Verifique que su repositorio local este sincronizado con el repositorio remoto y que se encuentre en la rama `main`, con:

	```
	git status
	```

* De ser necesario, guarde los cambios en el repositorio remoto, con:

	```
	git add .
	git commit -m "updates"
	git push origin main
	```

#### Workflow

* Cree el directorio `.github/workflows/`
* Cree el archivo `deploy.yml` dentro del directorio `.github/workflows/`, con el contenido:

	```text
	# This is a basic workflow to help you get started with Actions

	name: Angular CI

	# Controls when the workflow will run
	on:
	  # Triggers the workflow on push or pull request events but only for the "main" branch
	  push:
	    branches: [ "main" ]
	  pull_request:
	    branches: [ "main" ]

	  # Allows you to run this workflow manually from the Actions tab
	  # Input para el workflow
	  # workflow_dispatch:

	# A workflow run is made up of one or more jobs that can run sequentially or in parallel
	jobs:
	  # This workflow contains a single job called "build"
	  build:
	    # The type of runner that the job will run on
	    runs-on: ubuntu-latest

	    # Steps represent a sequence of tasks that will be executed as part of the job
	    steps:
	      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
	      - name: Checkout
	        uses: actions/checkout@v3

	      - name: Setup Node.js environment
	        uses: actions/setup-node@v3.7.0
	        with:
	          node-version: "18"
	          
	      - name: Install deps
	        run: npm i
	        
	      - name: Build
	        run: npm run build:prod
	        
	      - name: Deploy
	        uses: crazy-max/ghaction-github-pages@v3.1.0
	        with:
	          build_dir: dist/<NOMBRE_APLICACION>/browser
	        env:
	          GITHUB_TOKEN: {% raw %} ${{secrets.GITHUB_TOKEN}} {% endraw %}
	```

* Reemplace `<NOMBRE_APLICACION>` por la clave `"name"` del `package.json`.

* Sincronice los cambios del repositorio local en el repositorio remoto, con:

	```
	git add .
	git commit -m "my workflow"
	git push origin main
	```

* Verifique el error en la ejecución automática del workflow debido a permisos en la creación de archivos. 

#### Workflow permissions

* Habilite el permiso de sobreescritura de flujo de trabajo (**workflow**) del repositorio remoto, con:

	+ Acceda a la opción `Settings`.
	+ Acceda a la opción `Code and automation` > `Actions` > `General`.
	+ En `Workflow permissions`, seleccione la opción `Read and Write permissions`
	+ Guarde los cambios.

#### Rama gh-pages

* Vuelva a ejecutar el flujo de trabajo, con:

	+ Acceda a la opción `Actions`.
	+ Acceda al flujo de trabajo identificado con el comentario `"my workflow"`.
	+ Haga clic en el botón `Re-run all jobs` y clic el botón `Re-run jobs`.

* Verifique la creación de la rama `gh-pages`, con:
	
	+ Acceda a la opción `Code`.
	+ Liste las ramas disponibles y verifique que exista la rama `gh-pages`. Debe ser el mismo contenido que en el directorio `dist/<NOMBRE_APLICACION>/browser` que en en el repositorio local.

#### Build and deployment

* Habilite el despliegue con GitHub Pages del repositorio remoto, con:

	+ Acceda a la opción `Settings`.
	+ Acceda a la opción `Code and automation` > `Pages`.
	+ En `Build and deployment`, seleccione la rama `gh-pages`.
	+ Guarde los cambios.

* Verifique la ejecución de un nuevo flujo de trabajo: `pages build and deployment`

* Acceda al URL de despliegue `https://<USUARIO>.github.io/<NOMBRE_DEL_REPOSITORIO_REMOTO>/`

### Diseño

* Github Actions en [Keepler.io](https://keepler.io/es/2020/09/crear-workflows-en-base-a-eventos-con-github-actions/)

<img src="https://keepler.io/wp-content/uploads/2020/10/github-actions.png" style="margin: 0 12%;" width="80%">

### Términos

servidor HTTP, continuos integration, yaml

### Referencias

* (2023). Retrieved 24 July 2023, from https://www.youtube.com/watch?v=hnCgPowCu9Y
* Publishing static sites to GitHub Pages using GitHub Actions. (2021). Retrieved 24 July 2023, from https://medium.com/@danieljimgarcia/publishing-static-sites-to-github-pages-using-github-actions-8040f57dfeaf
* Despliegue de tu aplicación en Angular usando Github Actions. (2021). Retrieved 24 July 2023, from https://medium.com/notasdeangular/despliegue-de-tu-aplicaci%C3%B3n-en-angular-usando-github-actions-c0b5bc67ddb0