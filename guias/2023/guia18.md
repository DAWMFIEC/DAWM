---
theme: jekyll-theme-leap-day
---

## Guía 18

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.

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

#### Compilado remoto

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

* Verifique que su repositorio local se encuentre en la rama `main`, con:

	```
	git branch -v
	```

* Verifique el URL del repositorio remoto, con:

	```
	git remote -v
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

	```
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
	git commit -m "deploy"
	git push origin main
	```

#### Configuración de GitHub Pages

* Habilite el permiso de sobreescritura de flujo de trabajo (**workflow**) del repositorio remoto, con:

	+ Acceda a la opción `Settings`.
	+ Acceda a la opción `Actions > General`.
	+ En `Workflow permissions`, seleccione la opción `Read and Write permissions`
	+ Guarde los cambios.

* Habilite el despliegue con GitHub Pages del repositorio remoto, con:

	+ Acceda a la opción `Settings`.
	+ Acceda a la opción `Pages`.
	+ En `Build and deployment`, seleccione la rama `gh-pages`

### Términos

servidor HTTP, 

### Referencias

* 