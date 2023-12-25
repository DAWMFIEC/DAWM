---
theme: jekyll-theme-leap-day
---

## Guía 14

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2023/proyecto05)

### Actividades previas

* En las diferentes páginas HTML que conforman la plantilla de su sitio, identifique:

  - El conjunto de etiquetas repetidas entre páginas, p.e.: barra de navegación, pie de página, Cabecera, etc.
  - El conjunto de etiquetas HTML con contenido único, en comparación con el resto de páginas de la plantilla.

### Actividades

* Clona localmente tu repositorio **mpa**.
* Abra el proyecto en VSCode y levante el servidor.

#### Componentes

* Siga las instrucciones de ChatGPT que se encuentran [en línea](https://chat.openai.com/share/04b2d3fe-2083-4c15-ad17-d72b3583ba41) o [en la imagen](chatgpt/guia14-angular-components.png) para crear:
 + Componentes compartidos, como: `shared/navbar` y `shared/footer`
 + Páginas, como: `pages/index` y `pages/about`.

 por ejemplo:

 ```prompt
 ng g c carpeta/nombre-componente
 ```

#### Componentes compartidos

* En el componente principal `app.component.ts` importe el componente **Navbar**
  
  ```typescript
  ...
  import { NavbarComponent } from './shared/navbar/navbar.component'

  @Component({
  	...
  	imports: [CommonModule, RouterOutlet, NavbarComponent],
  	...
  })
  ...
  ````

* En el componente principal `app.component.html`

  - Extraiga las etiquetas HTML que se encuentran entre `<!-- Navbar Start -->` y `<!-- Navbar End -->`

	```html
	<!-- Navbar Start -->
	<div class="container-fluid sticky-top">
	  	...
	</div>
	<!-- Navbar End -->
	```

  - Reemplace por el selector del componente **Navbar**

    ```html
    <!-- Navbar Start -->
    <app-navbar></app-navbar>
    <!-- Navbar End -->
    ```

* En el componente Navbar `navbar.component.html` reemplace el contenido por las etiquetas HTML extraídas.
* Reinicie el servidor y revise los cambios en el navegador.

**NOTA:** Repita el proceso con el componente **Footer**.

#### Componente/Página - Index

* En el componente principal `app.component.ts` importe el componente **Index**
  
  ```typescript
  ...
  import { IndexComponent } from './pages/index/index.component';

  @Component({
  	...
  	imports: [CommonModule, RouterOutlet, ... , IndexComponent],
  	...
  })
  ...
  ````

* En el componente principal `app.component.html`

  - Extraiga todas las etiquetas HTML; excepto las etiquetas de los componentes previamente agregados.

  - Reemplace por el selector del componente **Index**

    ```html
    <!-- Navbar Start -->
	<app-navbar></app-navbar>
	<!-- Navbar End -->

	<!-- Page Start -->
	<app-index></app-index>
	<!-- Page End -->

	<!-- Footer Start -->
	<app-footer></app-footer>
	<!-- Footer End -->
    ```

* En la componente/página Index `index.component.html` reemplace el contenido por las etiquetas HTML extraídas.
* Reinicie el servidor y revise los cambios en el navegador.

#### Ruteo

* En el archivo de rutas de la aplicación `app.routes.ts`, importe los componentes/páginas y registre las rutas

	```typescript
	import { Routes } from '@angular/router';
	import { IndexComponent } from './pages/index/index.component';
	import { AboutComponent } from './pages/about/about.component';

	export const routes: Routes = [
		  { path: '', redirectTo: 'home', pathMatch: 'full' },
	    { path: 'home', component: IndexComponent },
	    { path: 'about', component: AboutComponent },
	    { path: '**', component: IndexComponent }
	];
	```

* En el componente principal `app.component.html`
  
  - Reemplace la etiqueta `<app-index></app-index>` por `<router-outlet></router-outlet>` 

    ```html
    <!-- Navbar Start -->
		<app-navbar></app-navbar>
		<!-- Navbar End -->

		<!-- Page Start -->
		<router-outlet></router-outlet>
		<!-- Page End -->

		<!-- Footer Start -->
		<app-footer></app-footer>
		<!-- Footer End -->
    ```

* En el componente compartido **Navbar**

  - En el `navbar.component.ts` importe los módulos `RouterLinkActive` y `RouterLink`.

    ```typescript
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    
    import { RouterLinkActive, RouterLink } from '@angular/router';
    
    @Component({
	  ...
	  imports: [CommonModule, RouterLinkActive, RouterLink],
	  ...
	})
    ```

  - En el `navbar.component.html` agregue el atributo `routerLink` con la ruta al componente/página correspondiente.

    ```html
    ...
	 <a routerLink="/home" class="nav-item nav-link">Home</a>
	 <a routerLink="/about" class="nav-item nav-link">About</a>
	...
    ```

* Reinicie el servidor y revise los cambios en el navegador.

#### De la plantilla a las Componente/Página

* Identifique las etiquetas HTML con contenido único para cada página. No incluya las etiquetas en los componentes compartidos.
* Coloque las etiquetas en el `Componente/Página` correspondiente.
* Reinicie el servidor y revise los cambios en el navegador.

#### Versionamiento

* Versiona local y remotamente el repositorio **mpa**.

### Fundamental

* Server-Side Rendering (SSR) y Static Site Generation (SSG/Prerendering) en [X](https://twitter.com/mgechev/status/1336298729347932161)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A tiny demo with hybrid rendering in Angular Universal (SSR &amp; SSG) <a href="https://t.co/mgLY9yeVN1">https://t.co/mgLY9yeVN1</a><br><br>At build time:<br>- Universal prerenders routes without params<br><br>At runtime:<br>- Server tries to render prerendered page<br>- Server fallbacks to SSR<br><br>&lt;5 lines of diff to enable from default setup <a href="https://t.co/pvdIp0eYrB">pic.twitter.com/pvdIp0eYrB</a></p>&mdash; Minko Gechev (@mgechev) <a href="https://twitter.com/mgechev/status/1336298729347932161?ref_src=twsrc%5Etfw">December 8, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Documentación
  
* Los [componentes](https://angular.dev/guide/components) en Angular son los bloques principales en la arquitectura del framework. Los cuales están constituidos por una plantilla html, una clase en typescript, una hoja de estilo y una clase para las pruebas unitarias.

### Términos

Componentes, ruteo

### Referencias

* Angular. (2021). Retrieved 1 December 2021, from [https://angular.io/](https://angular.io/)
* Introduction to Angular Components and How to Implement It? (20202) https://www.simplilearn.com/tutorials/angular-tutorial/angular-components
* Guía de iniciación al data binding en Angular Qué es y cómo se utiliza. (2019). Retrieved 13 July 2022, from https://www.acontracorrientech.com/guia-practica-del-databinding-en-angular/
* Angular. (n.d.). Retrieved from https://angular.dev/guide/routing/common-router-tasks#lazy-loading
* Hooda, P. (2023). Wildcard Routes in Angular. Retrieved from https://medium.com/@parikshithooda/wildcard-routes-in-angular-15947e0668e7