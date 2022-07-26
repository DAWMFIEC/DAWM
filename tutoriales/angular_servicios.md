---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM-2022/)

Angular - Servicios
===================

<p align="center">
  <img width="330" height="150" src="imagenes/injector-injects.png">
</p>

Los componentes NO deben obtener o guardar datos directamente y no deben presentar datos falsos. Los componentes deben centrarse en presentar datos y delegar el acceso a los datos a un servicio.

Un servicio es un proveedor de datos, que mantiene lógica de acceso a ellos. Los servicios serán consumidos por los componentes, que delegarán en ellos la responsabilidad de acceder a la información y la realización de operaciones con los datos.

Proyecto en Angular
===================

* * *

Utiliza el proyecto que desarrollaste con los tutoriales de [Angular - Local](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_local.html), [Angular - Boostrap](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_bootstrap.html), [Angular - Componentes, Comunicación y Directivas](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_bases.html) y [Angular - PWA](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_pwa.html)

* Instala las dependencias, con: `npm install`
* Verifica que funcione correctamente al levantar los servicios: `ng serve -o`

Servicio
========

Desde la raíz del proyecto con Angular

* Acceda desde la línea de comandos
* Cree el servicio **recurso**, con: `ng generate service servicios/recurso`
  + Se creará carpeta *servicios*, y 
  + Se crearán los archivos `recurso.service.ts` y `recurso.service.spec.ts`
  + Agregue la interfaz **AlbumInterface**
  	
  <pre><code>
    import { Injectable } from '@angular/core';

  <b style="color:red">export interface AlbumInterface {
	  cabecera: string;
	}</b>

	@Injectable({
	  providedIn: 'root'
	})
	export class RecursoService {

	  constructor() { }
	}
  </code></pre>

  + Agregue la función `obtenerDatosSitio` que retorna un objeto JSON.

	<pre><code>
	  ...
	  constructor() { }

	  <b style="color:red">obtenerDatosSitio() {
	    let objeto = { cabecera: 'Album fotográfico' }
       return objeto
	  }</b>
	}
  </code></pre>


Inyección de dependencias
=========================

Las dependencias son servicios u objetos que una clase necesita para realizar su función. La [inyección de dependencia (DI)](https://docs.angular.lat/guide/architecture-services#inyecci%C3%B3n-de-dependencia-id) es un patrón de diseño en el que una clase solicita dependencias de fuentes externas en lugar de crearlas, para aumentar la flexibilidad y modularidad en sus aplicaciones. Angular proporciona dependencias a una clase en la creación de instancias.

Para inyectar una dependencia en un componente solo debes agregar un argumento (con el tipo de la dependencia) en el método constructor de la clase.

* En **app.component.ts**
	+ Agregue el _import_ al servicio
	+ Agregue el método _constructor_ de la clase
	+ Inyecte la dependencia como argumento en el constructor

  <pre><code>
    import { Component } from '@angular/core';
	<b style="color:red">import { TitularService } from './servicios/titular.service';</b>

	@Component({
	  selector: 'app-root',
	  templateUrl: './app.component.html',
	  styleUrls: ['./app.component.css']
	})
	export class AppComponent {
	  title  = 'testAngular';

	  <b style="color:red">constructor(private titularService: TitularService) {}</b>
	}
  </code></pre>

  + Modifique el constructor para invocar la función `obtenerDatos()` del servicio

  <pre><code>
  	...
	  constructor(private titularService: TitularService) {
	      <b style="color:red">let objeto = titularService.obtenerDatosSitio()
	      this.title = objeto.cabecera</b>
	  }
	}
  </code></pre>

* Interpole el atributo `title` en el **app.component.html** para ver los resultados

  ```
    ...
	    <div class="navbar navbar-dark bg-dark shadow-sm">
	    <div class="container">
	      <a href="#" class="navbar-brand d-flex align-items-center">
	        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
	        <strong>

	        {% raw %}     {{title}}    {% endraw %} 
	        
	        </strong>
	      </a>
	      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="navbar-toggler-icon"></span>
	      </button>
	    </div>
	  </div>
	</header>

	<main>
	...
  ```

* Actualice el navegador o (re)inicie el servidor
* La cabecera del sitio debe mostrar el mensaje `Album fotográfico`. El resultado en el navegador debe  lucir así.

<p align="center">
  <img src="imagenes/angular_servicios_output.png">
</p>


Peticiones HTTP
===============

Las aplicaciones en el front-end necesitan comunicarse con un servidor a través del protocolo HTTP, para descargar o cargar datos y acceder a otros servicios back-end. Angular proporciona una API HTTP de cliente para aplicaciones Angular, la clase de servicio `HttpClient` en `@angular/common/http`.

Para este caso, Angular usa los `observables` en lugar de promesas para entregar valores de [forma asíncrona](https://docs.angular.lat/guide/comparing-observables).

* En **app.module.ts**,
	+ Importe el módulo `HttpClientModule`
	+ Registre el servicio en la lista de módulos de la clave **import**, para que todos los componentes puedan acceder a este servicio.

	<pre><code>
		...
		import { CabeceraComponent } from './cabecera/cabecera.component';
		import { RedesComponent } from './redes/redes.component';
		...
		<b style="color:red">import { HttpClientModule } from '@angular/common/http';</b>

		@NgModule({
		  declarations: [
		    AppComponent,
		    CabeceraComponent,
		    RedesComponent
		  ],
		  imports: [
		    BrowserModule,
		    AppRoutingModule,
		    
		    <b style="color:red">HttpClientModule,</b>

		    ...
		})
		export class AppModule { }

	</code></pre>

* En **servicios/titular.component.ts**, 
  + Importe el módulo `HttpClient`
	+ Agregue el servicio `HttpClient` como inyección de dependencia en el método constructor.
	
	<pre><code>
	import { Injectable } from '@angular/core';
	<b style="color:red">import { HttpClient } from '@angular/common/http';</b>
	
  	
	@Injectable({
	  providedIn: 'root'
	})
	export class TitularService {

	  <b style="color:red">constructor(private http: HttpClient) { }</b>

	  ...
	}
	</code></pre>

	+ Modifique la función *obtenerDatosSitio* para que mediante el objeto `http` haga una petición `get`  al URL <a href="https://dataserverdawm.herokuapp.com/album">Album</a>

	<pre><code>
		...
		obtenerDatosSitio() {
    	<b style="color:red">return this.http.get('https://dataserverdawm.herokuapp.com/album')</b>
	  }
	  ...
	</code></pre>
* En **app.component.ts** 
	+ Modifique el constructor para suscribirse a la respuesta del servicio

  <pre><code>
  	...
	  constructor(private titularService: TitularService) {
	      <b style="color:red">
	      titularService.obtenerDatosSitio().subscribe(objeto => {
		      let data = objeto as any
		      this.title = data.cabecera
		    })</b>
	  }
	}
  </code></pre>

* Actualice el navegador o (re)inicie el servidor
* La cabecera del sitio debe mostrar el mensaje `Album fotográfico`. El resultado en el navegador debe  lucir así.

<p align="center">
  <img src="imagenes/angular_servicios_output.png">
</p>

Referencias 
===========

* * *

* Angular. (2022). Retrieved 18 July 2022, from https://angular.io/tutorial/toh-pt4
* Servicios en Angular. (2022). Retrieved 18 July 2022, from https://desarrolloweb.com/articulos/servicios-angular.html
* Angular. (2022). Retrieved 19 July 2022, from https://angular.io/guide/dependency-injection
* Inyección de dependencias. (2022). Retrieved 19 July 2022, from https://desarrolloweb.com/articulos/patron-diseno-contenedor-dependencias.html
* Angular. (2022). Retrieved 19 July 2022, from https://angular.io/guide/http
* Angular. (2022). Retrieved 19 July 2022, from https://docs.angular.lat/guide/comparing-observables