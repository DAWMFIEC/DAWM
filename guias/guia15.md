---
theme: jekyll-theme-leap-day
---

## Guía 15

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* [Angular Material IO](https://material.angular.io/) es una librería de componente de UI. Los componentes de Angular Material ayudan a construir páginas web y aplicaciones web atractivas, consistentes y funcionales mientras se adhieren a los principios del diseño web moderno como la portabilidad del navegador, la independencia del dispositivo y la degradación elegante. Ayuda a crear sitios web más rápidos, hermosos y receptivos. Está inspirado en el diseño de materiales de Google.
	- [Material design](https://material.io/design) es una guía de diseño enfocado en la visualización del sistema operativo Android, además en la web y en cualquier plataforma. Fue desarrollado por Google y anunciado en la conferencia Google I/O del 2014.


### Actividades

* Genere una aplicación en Angular, siguiendo las instrucciones pertinentes de los tutoriales:
  
  + De [Angular - Local](https://dawfiec.github.io/DAWM/tutoriales/angular_local.html) realice hasta la construcción de un **Sitio base**
  + De [Angular - Bootstrap](https://dawfiec.github.io/DAWM/tutoriales/angular_bootstrap.html) realice la sección **Instalación de Bootstrap (y dependencias)**
  + De [Angular - Material](https://dawfiec.github.io/DAWM/tutoriales/angular_material.html) realice la sección **Instalación de Angular Material**
  + De [Angular - Componentes, Comunicación y Directivas](https://dawfiec.github.io/DAWM/tutoriales/angular_bases.html) realice la sección **Componentes** para los componentes **splash**, **principal** y **album**.
  + De [Angular - Rutas](https://dawfiec.github.io/DAWM/tutoriales/angular_rutas.html) realice la sección **Rutas**.

* Descargue y descomprima los [componentes y assets](archivos/guia15_recursos.zip)
* Copie y reemplace las carpetas **splash**, **principal** y **album** dentro de la carpeta `src/app` del proyecto en Angular. 
* Copie y guarde la carpeta **imagenes** dentro de la carpeta `src/assets` del proyecto en Angular

#### Componentes

* Registre los componentes en la aplicación en `src/app/app.module.ts`
  + Compruebe que exista la referencia a los componentes nuevos **splash**, **principal** y **album**.

    <pre><code>
  	...
  	import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  	<b style="color: red">
  	import { SplashComponent } from './splash/splash.component';
	  import { PrincipalComponent } from './principal/principal.component';
	  import { AlbumComponent } from './album/album.component';
	  </b>

	  @NgModule({
  	  	declarations: [
  	...
    </code></pre>

  + Compruebe que los componentes se encuentren en el arreglo *declarations*

    <pre><code>
  	...
  	@NgModule({
	  declarations: [
	    AppComponent,
	    <b style="color: red">
	    SplashComponent,
	    PrincipalComponent,
	    AlbumComponent
	    </b>
	  ],
	  imports: [
  	...
    </code></pre>

#### Angular Material (Módulos GridList, Icon y Button)

* Registre los módulos en la aplicación en `src/app/app.module.ts`

    + Agregue la referencia a los módulos de Angular Material: `MatGridListModule`, `MatIconModule` y `MatButtonModule`

	<pre><code>
	...
	import { PrincipalComponent } from './principal/principal.component';
	import { AlbumComponent } from './album/album.component';
	...
	<b style="color: red">
	import {MatGridListModule} from '@angular/material/grid-list';
	import {MatIconModule} from '@angular/material/icon';
	import {MatButtonModule} from '@angular/material/button';
	</b>
	...
	@NgModule({
	  declarations: [
	    AppComponent,
	...
	</code></pre>

	+ Agregue los módulos de Angular Material en el arreglo *imports*

    <pre><code>
  	...
  	imports: [
	    BrowserModule,
	    AppRoutingModule,
	    BrowserAnimationsModule,
	    <b style="color: red">
	    MatGridListModule,
	    MatIconModule,  
	    MatButtonModule
	    </b>
	  ],
	providers: [],
	bootstrap: [AppComponent]
  	...
    </code></pre>

#### Rutas

* Para manejar las rutas en el URL, modifique el archivo **src/app/app-routing.module.ts**
  + Agregue la referencia a los componentes **splash**, **principal** y **album**.
  
    <pre><code>
  	import { NgModule } from '@angular/core';
  	import { RouterModule, Routes } from '@angular/router';

  	<b style="color: red">
  	import { SplashComponent } from './splash/splash.component';
  	import { PrincipalComponent } from './principal/principal.component';
  	import { AlbumComponent } from './album/album.component';
  	</b>
  	...
  	</code></pre>

  + Agregue las rutas a sus correspondientes componentes.
  
  	<pre><code>
  	...
  	<b style="color: red">
  	const routes: Routes = [
       { path: "splash", component: SplashComponent },
       { path: "principal", component: PrincipalComponent },
   	   { path: "album", component: AlbumComponent },
   	   { path: "**", redirectTo: "splash" }
    ];
  	</b>
    
  	@NgModule({
  	  imports: [RouterModule.forRoot(routes)],
  	...  
  	</code></pre>

#### Salida de las rutas (<router-outlet>)

* Modifique la vista (**src/app/app.component.html**) del AppComponent
  + La etiqueta `<router-outlet>` le dice al enrutador dónde mostrar las vistas enrutadas.
  + Reemplace TODO el contenido por
    
    ```html
    <router-outlet></router-outlet>
    ```
* Actualice el navegador o (re)inicie el servidor
* Cambie la vista al tamaño de un dispositivo móvil. 
  + Las rutas `http://localhost:4200/splash`, `http://localhost:4200/principal` y `http://localhost:4200/album` deben lucir similares a:

	<p align="center">
	  <img width="30%" src="imagenes/angular_material_splash.png">
	  <img width="30%" src="imagenes/angular_material_principal.png">
	  <img width="30%" src="imagenes/angular_material_album.png">
	</p>

#### Navegación entre rutas (routerlink)

* Modifique la vista (**src/app/splash.component.html**) del SplashComponent
  + Al dar clic sobre el nombre o la imagen debe redirigir a la ruta `/principal`

  ```
  ... 
  <img src="assets/imagenes/pngwing.com.png" class="img-fluid"  routerLink="/principal"  alt="imagen">
  ...
  <h1 class="titulo" routerLink="/principal">Album</h1>
  ...
  ```

* Agregue la navegación entre del componente **PrincipalComponent** al componente **AlbumComponent**
  + Al dar clic en el **button** con el nombre `Ver`.

  ```
  ...
  <button type="button" class="btn btn-success mx-2">Ver</button> 
  ...
  ```

* Agregue la navegación entre del componente **AlbumComponent** al componente **PrincipalComponent**
  + Al dar clic en el **button** con el ícono `arrow_back`.

  ```
  ...
  <button mat-icon-button color="basic" aria-label="back">  
	  <mat-icon>arrow_back</mat-icon> 
  </button>  
  ...
  ```

#### Redirección automática (router)

* Modifique el controlador (**src/app/splash.component.ts**) del SplashComponent
  + Agregue la referencia al módulo `Router`

	<pre><code>
	import { Component, OnInit } from '@angular/core';
	<b style="color: red">
  import { Router } from '@angular/router';
  </b>
  @Component({
	...
	</code></pre>

	+ Agregue la inyección de dependencia al módulo `Router`

	<pre><code>
	...
	export class SplashComponent implements OnInit {
	<b style="color: red">
    constructor(private router: Router) { }
  </b>
    ngOnInit(): void {
	...
	</code></pre>

	+ Luego de la inicialización del componente, agregue el código para activar navegación a la ruta `/principal`

	<pre><code>
	...
	ngOnInit(): void {
	<b style="color: red">
	    setTimeout(() => {
	      this.router.navigate(['principal']);
	    }, 2000);
  </b>
  }
  ...
	</code></pre>


### Términos

Despliegue, material design

### Referencias

* Angular Material Tutorial. (2022). Retrieved 20 July 2022, from https://www.tutorialspoint.com/angular_material/index.htm
* Angular. (2022). Retrieved 26 July 2022, from https://angular.io/tutorial/toh-pt5
* Khan, R. (2022). La función setTimeout() en Angular. Retrieved 26 July 2022, from https://www.delftstack.com/es/howto/angular/settimeout-function-in-angular/