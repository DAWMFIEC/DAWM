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
  
  + De los tutoriales:
  	- De [Angular - Local](https://dawfiec.github.io/DAWM/tutoriales/angular_local.html) realice hasta la construcción de un **Sitio base**
  	- De [Angular - Bootstrap](https://dawfiec.github.io/DAWM/tutoriales/angular_bootstrap.html) realice la sección **Instalación de Bootstrap (y dependencias)**
  	- De [Angular - Material](https://dawfiec.github.io/DAWM/tutoriales/angular_material.html) realice la sección **Instalación de Angular Material**
  	- De [Angular - Rutas](https://dawfiec.github.io/DAWM/tutoriales/angular_rutas.html) realice la sección **Rutas**.
  + Clone el proyecto con las [aplicaciones del curso](https://github.com/DAWFIEC/DAWM-apps) para la aplicación **hibrida/clienteAngular**
    - Para el hito: **`hito4-hibrida`**


### Angular Material (Módulos GridList)

* Registre los módulos en la aplicación en `src/app/app.module.ts`

    + Agregue la referencia a los módulos de Angular Material: `MatGridListModule`

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