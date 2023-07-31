---
theme: jekyll-theme-leap-day
---

## Guía 19

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

#### Repositorio remoto

* Cree un repositorio remoto en GitHub, de acceso **público**.

#### Repositorio local

* Clone el repositorio remoto [core-app](https://github.com/aavendan/core-app)
* Muestre el valor de la clave **origin**

	```
	git remote -v
	```

* Cambie la clave **origin** con el URL de su repositorio remoto, con:

	```
	git remote remove origin 
	git remote add origin https://github.com/<USUARIO>/<REPOSITORIO_REMOTO>.git
	```

### Actividades

#### Configuración

* Cámbiese a la rama **desktop**, con:

	```
	git switch desktop
	```

* Instale las dependencias del proyecto de Angular, con:

	```
	npm i
	```

#### Componentes

* Cree los componentes básicos `Main`, `Report`, `About` y `Menu`

	```
	ng g c pages/main
	ng g c pages/report
	ng g c pages/about
	ng g c shared/menu
	```

* Levante el servidor, con:

	```
	ng serve -o
	```

#### Rutas (Routes)

* En `app/app-routing.module.ts` importe los componentes `Main`, `Report` y `About`. Agregue las rutas correspondientes. 

	```typescript
	...
	import { MainComponent } from './pages/main/main.component';
	import { AboutComponent } from './pages/about/about.component';
	import { ReportComponent } from './pages/report/report.component';

	const routes: Routes = [
	    { path: "main", component: MainComponent },
		{ path: "about", component: AboutComponent },
		{ path: "report", component: ReportComponent },
		{ path: " ", redirectTo: '/main', pathMatch: 'full' },
		{ path: "**", redirectTo: "main" }
	  ];

	...
	```

#### Enlace a las rutas (Router Link)

* En la vista del componente **Menu** (`app/shared/menu.component.html`) coloque las rutas de acceso a los componentes `Main`, `Report`, `Form` y `About`:

	```html
	<ul>
	    <li><a routerLink="/main">Main</a></li>
	    <li><a routerLink="/report">Report</a></li>
	    <li><a routerLink="/about">About</a></li>
	</ul>
	```

#### Salida del enrutador (Router Outlet)

* En la vista del componente **App** `app/app.component.html` reemplace todo el contenido por:
	
	```html
	<app-menu></app-menu>
	<router-outlet></router-outlet>
	```

* Revise los cambios en el navegador.

#### Angular Material

* Agregue [Angular Material](https://material.angular.io/) a su proyecto, con:

	```
	ng add @angular/material
	```

* Seleccione el **tema** de su aplicación, agregue el **estilo de tipográfico** y habilite el **módulo de animación**.

#### MatSidenavModule

* Revise la documentación en [MatSidenavModule](https://material.angular.io/components/sidenav/overview)

* En `app.module.ts` importe y registre el módulo `MatSidenavModule`

	```typescript
	import { MatSidenavModule } from '@angular/material/sidenav';
	...

	imports: [
	    ...
	    MatSidenavModule,
	  ]

	```

* En `app/app.component.html` reemplace todo el contenido por:

	```html
	<mat-drawer-container class="container">
	  <mat-drawer mode="over" opened>
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
	    min-height: 91vh;
	    height: auto;
	    margin: 0;
	  }
	```

* Revise los cambios en el navegador.

#### MatListModule

* Revise la documentación en [MatListModule](https://material.angular.io/components/list/overview)

* En `app.module.ts` importe y registre el módulo `MatListModule`

* En `app/shared/menu.component.html` reemplace todo el contenido por:

	```html
	<mat-list role="list">
	    <mat-list-item role="listitem" routerLink="/main">Main</mat-list-item>
	    <mat-list-item role="listitem" routerLink="/report">Report</mat-list-item>
	    <mat-list-item role="listitem" routerLink="/about">About</mat-list-item>
	</mat-list>
	```

* Revise los cambios en el navegador.

#### MatIconModule y MatToolbarModule

* Revise la documentación en [MatIconModule](https://material.angular.io/components/icon/overview) y [MatToolbarModule](https://material.angular.io/components/toolbar/overview)

* En `app.module.ts` importe y registre los módulos `MatIconModule` y `MatToolbarModule`

* En `app/app.component.html` agregue la etiqueta `<mat-toolbar>`:

	```html
	<mat-toolbar color="primary">
	  <button mat-icon-button class="example-icon" mat-button>
	    <mat-icon>menu</mat-icon>
	  </button>
	</mat-toolbar>
	<mat-drawer-container class="container">
	  ...
	</mat-drawer-container>
	```

* Revise los cambios en el navegador.

#### Variables de plantilla

* Agregue la [variable de plantilla](https://angular.io/guide/template-reference-variables) `drawer` en la etiqueta `<mat-drawer>`

	```html
	...
	  <mat-drawer #drawer mode="over" opened>
	    <app-menu></app-menu>
	  </mat-drawer>
	...
	```

* Habilite el evento **click** para que reaccione con la variable de plantilla `drawer` 

	```html
	...
	  <button mat-icon-button class="example-icon" mat-button (click)="drawer.toggle()">
	    <mat-icon>menu</mat-icon>
	  </button>
	...
	  <mat-drawer #drawer mode="over" opened>
	    <app-menu></app-menu>
	  </mat-drawer>
	...
	``` 

* Revise los cambios en el navegador.

#### MatCardModule

* Revise la documentación en [MatCardModule](https://material.angular.io/components/card/overview)

* En `app.module.ts` importe y registre los módulos `MatCardModule` 

* En `app/pages/about.component.html` reemplace todo el contenido por:

	```html
	<mat-card class="about-card">
	    <mat-card-header>
	      <mat-card-title>About</mat-card-title>
	      <mat-card-subtitle>Proyecto 07</mat-card-subtitle>
	    </mat-card-header>
	    <mat-card-content>
	      <p class="about-text"> ... </p>
	    </mat-card-content>
	</mat-card>
	```

* Revise los cambios en el navegador.

#### Interpolación

* En `app/pages/about.component.ts` agregue el atributo `description`:

	```typescript
	...
	export class AboutComponent {
 		description: string = 'Descripción ... '; /* Cambie el texto con la descripción de su proyecto */
	}
	```

* En `app/pages/about.component.html` agregue la [interpolación](https://angular.io/guide/interpolation) del atributo **description**:

	```html
	...
	  <p class="about-text">{% raw %}{{description}}{% endraw %}</p>
	...
	```

* Revise los cambios en el navegador.

#### Angular Flex-Layout

* Revise la documentación en [Angular Flex-Layout](https://github.com/angular/flex-layout/wiki/API-Documentation) y el [Layout Demos](https://tburleson-layouts-demos.firebaseapp.com/#/docs)

* Agregue [Angular Flex-Layout](https://github.com/angular/flex-layout) a su proyecto, con:

	```
	npm i -s @angular/flex-layout
	```

* En `app.module.ts` importe y registre el módulo `FlexLayoutModule`

	```typescript
	import { FlexLayoutModule } from "@angular/flex-layout";
	...

	imports: [
	    ...
	    FlexLayoutModule,
	  ]

	```

* En `app/pages/about.component.html` reemplace todo el contenido por:

	```html
	<div class="container" fxLayout="row" fxLayoutAlign="center start">
	    <div fxFlex="25%" fxFlex.xs="100%" fxFlex.sm="33%" >
	        <mat-card class="about-card">
	        ...
			</mat-card>
	    </div>
	</div>
	```


* En `app/pages/about.component.css` agregue la regla:

	```css
	.container {
	    min-height: 91vh;
	    height: auto;
	    margin: 0;
	}
	
	.container {
	    padding-top: 2vh;
	    padding-left: 2vw;
	    padding-right: 2vw;
	}
	```


* Revise los cambios en el navegador. Compruebe la vista responsiva del sitio.

### Términos

multiple page aplication, angular material, variables de plantilla, eventos, atributo de clase, interpolación, 

### Referencias

* Team, A. (2023). Angular Material. Retrieved 24 July 2023, from https://material.angular.io/
* Angular. (2023). Retrieved 24 July 2023, from https://angular.io/guide/router
* Create a responsive card grid in Angular using Flex Layout Zoaib Khan. (2021). Retrieved 30 July 2023, from https://zoaibkhan.com/blog/create-a-responsive-card-grid-in-angular-using-flex-layout-part-1/