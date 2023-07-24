---
theme: jekyll-theme-leap-day
---

## Guía 18

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.

#### Nombre del proyecto y nombre del repositorio remoto

* El `<NOMBRE_APLICACION>` lo encuentra la clave `"name"` del `package.json`.

* El `<NOMBRE_DEL_REPOSITORIO_REMOTO>` lo encuentra en el GitHub. Este, puede ser igual, o diferente, al `<NOMBRE_APLICACION>`.

#### Compilación

* Compile la aplicación en Angular en el directorio de salida `dist/`, con el comando [build](https://angular.io/cli/build): 

	```
	ng build
	```

	o 

	```
	npm run build
	```

**NOTA:** Este comando crea la carpeta `dist/<NOMBRE_APLICACION>` con los archivos que pueden ejecutarse en un [servidor HTTP](https://www.hostinger.es/tutoriales/que-es-un-servidor-web). Revise el contenido de la carpeta.


#### Servidor HTTP

* Desde la línea de comandos, en la raíz del proyecto, levante el servidor HTTP de Python:

	```
	python -m http.server --dir dist/<NOMBRE_APLICACION>
	```

* En el navegador, acceda al URL `http://localhost:8000/` y verifique el funcionamiento correcto de su aplicación.

### Actividades

#### Compilación del repositorio remoto

* En el archivo `package.json`, agregue en la clave `scripts`:


	```
	...
	"scripts": {
		...
		"build:prod": "ng build --configuration production --base-href /<NOMBRE_DEL_REPOSITORIO_REMOTO>/",
		...
	}
	...
	```

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
	          build_dir: dist/<NOMBRE_APLICACION>
	        env:
	          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
	```

* Sincronice los cambios del repositorio local en el repositorio remoto, con:

	```
	git add .
	git commit -m "my workflow"
	git push origin main
	```

* En el repositorio remoto, en la opción `Actions`, verifique la ejecución automática del workflow. 

**NOTA:** El error que aparece se debe a que no ha habilitado el uso de un flujo de trabajo propio.

#### Configuración de GitHub Pages

* Habilite el permiso de sobreescritura de flujo de trabajo (**workflow**) del repositorio remoto, con:

	+ Acceda a la opción `Settings`.
	+ Acceda a la opción `Code and automation` > `Actions` > `General`.
	+ En `Workflow permissions`, seleccione la opción `Read and Write permissions`
	+ Guarde los cambios.

* Vuelva a ejecutar el flujo de trabajo, con:

	+ Acceda a la opción `Actions`.
	+ Acceda al flujo `"my workflow"`.
	+ Haga clic en el botón `Re-run all jobs` y clic el botón `Re-run jobs`.

* Verifique la creación de la rama `gh-pages`, con:
	
	+ Acceda a la opción `Code`.
	+ Liste las ramas disponibles y verifique el contenido de la rama `gh-pages`.

* Habilite el despliegue con GitHub Pages del repositorio remoto, con:

	+ Acceda a la opción `Settings`.
	+ Acceda a la opción `Code and automation` > `Pages`.
	+ En `Build and deployment`, seleccione la rama `gh-pages`.
	+ Guarde los cambios.


* Verifique la ejecución de un nuevo flujo de trabajo: `pages build and deployment`

* Acceda al URL de despliegue `https://<USUARIO>.github.io/<NOMBRE_DEL_REPOSITORIO_REMOTO>/`

### Términos

servidor HTTP, 

### Referencias

* (2023). Retrieved 24 July 2023, from https://www.youtube.com/watch?v=hnCgPowCu9Y
* Publishing static sites to GitHub Pages using GitHub Actions. (2021). Retrieved 24 July 2023, from https://medium.com/@danieljimgarcia/publishing-static-sites-to-github-pages-using-github-actions-8040f57dfeaf
* Despliegue de tu aplicación en Angular usando Github Actions. (2021). Retrieved 24 July 2023, from https://medium.com/notasdeangular/despliegue-de-tu-aplicaci%C3%B3n-en-angular-usando-github-actions-c0b5bc67ddb0