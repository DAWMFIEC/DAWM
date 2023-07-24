---
theme: jekyll-theme-leap-day
---

## Guía 19

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

#### Proyecto con Rutas y CSS

* Crea un proyecto con Angular, con:
	
	```
	ng new <NOMBRE_PROYECTO>
	```

* Acepte el routeo de Angular y seleccione CSS como formato de estilo

	```html
	? Would you like to add Angular routing? (y/N) y
	? Which stylesheet format would you like to use? (Use arrow keys)
	> CSS
	```

### Versionamiento remoto 

* Cree un repositorio remoto en GitHub, de acceso **público**.

### Versionamiento local

* Agregue al `package.json` el script:

	```
	"build:prod": "ng build --configuration production --base-href /<NOMBRE_REPOSITORIO_REMOTO>/",
	```

* Acceda a la carpeta del proyecto y versione el proyecto, con:

	```
	git init .
	git checkout -b main	
	git remote add origin https://github.com/<USUARIO>/<NOMBRE_REPOSITORIO_REMOTO>.git
	```
* Versione el repositorio local y sincronice el repositorio remoto, con:

	```
	git add .
	git commit -m "init"
	git push origin main
	```

#### Despliegue automático con GitHub Actions

* Cree el directorio `.github/workflows` 
* Descargue y modifique el archivo [`deploy.yml`](recursos/deploy.yml)
* Versione el repositorio local y sincronice el repositorio remoto.

#### GitHub Actions - Workflow 

* Habilite los permisos de lectura/escritura en `Workflow permissions`
* Seleccione la rama de despliegue `gh-pages`.

### Actividades

#### Angular Material

* Agregue [Angular Material](https://material.angular.io/), con:

	```
	ng add @angular/material
	```

* Seleccione el tema de su aplicación, agregue el estilo de tipografía y habilite el módulo de animación.

#### Componentes

* Agregue los componentes `Main`, `Report`, `Form`, `Menu` y `About`

	```
	ng g c pages/main
	ng g c pages/report
	ng g c pages/form
	ng g c pages/menu
	ng g c pages/about
	```

#### Rutas

* Agregue las rutas en 

	```typescript
	...
	import { MainComponent } from './pages/main/main.component';
	...
	import { AboutComponent } from './pages/about/about.component';

	const routes: Routes = [
	    { path: "main", component: MainComponent },
	    ...
	    { path: "about", component: AboutComponent },
	    { path: "**", redirectTo: "main" }
	  ];

	...
	```

#### Router Outlet

* En `app/app.componente.html` reemplace todo el contenido por:
	
	```
	<app-menu></app-menu>
	<router-outlet></router-outlet>
	```
* Levante el servidor, con:

	```
	ng serve -o
	```

#### Páginas Múltiples

* En `app.module.ts` importe y registre los módulos `MatSidenavModule` y `MatListModule`

	```
	import { MatSidenavModule } from '@angular/material/sidenav';
	import { MatListModule } from '@angular/material/list';
	...

	imports: [
	    ...
	    MatSidenavModule,
	    MatListModule
	    ...
	  ]

	```

* En `app/app.componente.html` reemplace todo el contenido por:

	```
	<mat-drawer-container class="container">
	  <mat-drawer mode="side" opened>
	  	<app-menu></app-menu>
	  </mat-drawer>
	  <mat-drawer-content>
	  	<router-outlet></router-outlet>
	  </mat-drawer-content>
	</mat-drawer-container>
	```

* En `app/app.component.css` agregue la regla:

	```
	.container {
	    width: auto;
	    height: 100%;
	    margin: 0px;
	  }
	```

* En `app/pages/menu.component.html` reemplace todo el contenido por:

	```
	<mat-list role="list">
	    <mat-list-item role="listitem"><a routerLink="/main">Main</a></mat-list-item>
	    ...
		<!-- Agregue el resto del rutas de la aplicación -->
		...
	    <mat-list-item role="listitem"><a routerLink="/about">About</a></mat-list-item>
	</mat-list>
	```

* Levante el servidor y acceda a las rutas disponibles en los enlaces de la aplicación.

### Términos

multiple page aplication, angular material 


### Referencias

* Team, A. (2023). Angular Material. Retrieved 24 July 2023, from https://material.angular.io/
* Angular. (2023). Retrieved 24 July 2023, from https://angular.io/guide/router