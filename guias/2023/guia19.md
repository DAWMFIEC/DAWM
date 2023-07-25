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

#### Versionamiento remoto 

* Cree un repositorio remoto en GitHub, de acceso **público**.

#### Versionamiento local

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
* Descargue [deploy.yml](recursos/deploy.yml) y cambie el `<NOMBRE_REPOSITORIO_REMOTO>` por el nombre del repositorio en GitHub.
* Versione el repositorio local y sincronice el repositorio remoto.

#### GitHub Actions - Workflow 

* Habilite los permisos de lectura/escritura en `Workflow permissions`
* Seleccione la rama de despliegue `gh-pages`.

### Actividades

#### Angular Material

* Agregue [Angular Material](https://material.angular.io/) a su proyecto local, con:

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

* Levante el servidor, con:

	```
	ng serve -o
	```

#### Rutas (Routes)

* En `app/app-routing.module.ts` importe los componentes y agregue las rutas: 

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

#### Enlace a las rutas (Router Link)

* En `app/pages/menu.component.html` reemplace todo el contenido por:

	```html
	<ul>
	    <li><a routerLink="/main">Main</a></li>
	    ...
		<!-- Agregue las demás rutas de la aplicación -->
		...
	    <li><a routerLink="/about">About</a></li>
	</ul>
	```

#### Salida del enrutador (Router Outlet)

* En `app/app.component.html` reemplace todo el contenido por:
	
	```html
	<app-menu></app-menu>
	<router-outlet></router-outlet>
	```

* Revise los cambios en el navegador.

#### MatSidenavModule

* Revise la documentación en [MatSidenavModule](https://material.angular.io/components/sidenav/overview)

* En `app.module.ts` importe y registre el módulo `MatSidenavModule`

	```typescript
	import { MatSidenavModule } from '@angular/material/sidenav';
	...

	imports: [
	    ...
	    MatSidenavModule,
	    ...
	  ]

	```

* En `app/app.component.html` reemplace todo el contenido por:

	```html
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

	```css
	.container {
	    width: auto;
	    height: 100%;
	    margin: 0px;
	  }
	```

* Revise los cambios en el navegador.

#### MatListModule

* Revise la documentación en [MatListModule](https://material.angular.io/components/list/overview)

* En `app.module.ts` importe y registre el módulo `MatListModule`

* En `app/pages/menu.component.html` reemplace todo el contenido por:

	```html
	<mat-list role="list">
	    <mat-list-item role="listitem" routerLink="/main">Main</mat-list-item>
	    ...
		<!-- Agregue el resto del rutas de la aplicación -->
		...
	    <mat-list-item role="listitem" routerLink="/about">About</mat-list-item>
	</mat-list>
	```

* Revise los cambios en el navegador.

#### MatIconModule y MatToolbarModule

* Revise la documentación en [MatIconModule](https://material.angular.io/components/icon/overview) y [MatToolbarModule](https://material.angular.io/components/toolbar/overview)

* En `app.module.ts` importe y registre los módulos `MatIconModule` y `MatToolbarModule`

* En `app/app.component.html` reemplace todo el contenido por:

	```html
	<mat-drawer-container class="container">
	  <mat-drawer #drawer mode="side" opened>
	    <app-menu></app-menu>
	  </mat-drawer>
	  <mat-drawer-content>
	    <mat-toolbar>
	      <button mat-icon-button class="example-icon"
	        mat-button (click)="drawer.toggle()">
	        <mat-icon>menu</mat-icon>
	      </button>
	    </mat-toolbar>
	    <router-outlet></router-outlet>
	  </mat-drawer-content>
	</mat-drawer-container>
	```

* Revise los cambios en el navegador.


### Términos

multiple page aplication, angular material 


### Referencias

* Team, A. (2023). Angular Material. Retrieved 24 July 2023, from https://material.angular.io/
* Angular. (2023). Retrieved 24 July 2023, from https://angular.io/guide/router