---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM-2022/)

Angular - Servicios
===================

Los componentes NO deben obtener o guardar datos directamente y no deben presentar datos falsos. Los componentes deben centrarse en presentar datos y delegar el acceso a los datos a un servicio.

Un servicio es un proveedor de datos, que mantiene lógica de acceso a ellos. Los servicios serán consumidos por los componentes, que delegarán en ellos la responsabilidad de acceder a la información y la realización de operaciones con los datos.

Servicio
========

Desde la raíz del proyecto con Angular

* Acceda desde la línea de comandos
* Cree el servicio **fotos**, con: `ng generate service servicios/fotos`
  + Se creará carpeta *servicios*, y 
  + Se crearán los archivos `fotos.service.ts` y `fotos.service.spec.ts`
  	
  <pre><code>
    import { Injectable } from '@angular/core';

	@Injectable({
	  providedIn: 'root'
	})
	export class FotosService {

	  constructor() { }
	}
  </code></pre>

* Agregue la función `obtenerDatos` que retorna un objeto JSON.

	<pre><code>
	  ...
	  constructor() { }

	  <b>obtenerDatos() {
	    let objeto = { mensaje: 'Este es un mensaje desde el servicio' }
	    return objeto
	  }</b>
	}
  </code></pre>

Inyección de dependencias
=========================

Las dependencias son servicios u objetos que una clase necesita para realizar su función. La [inyección de dependencia (DI)](https://angular.io/guide/dependency-injection) es un patrón de diseño en el que una clase solicita dependencias de fuentes externas en lugar de crearlas, para aumentar la flexibilidad y modularidad en sus aplicaciones. Angular proporciona dependencias a una clase en la creación de instancias.

Para inyectar una dependencia en un componente solo debes agregar un argumento (con el tipo de la dependencia) en el método constructor de la clase.

* En **app.component.ts**
	+ Agregue el _import_ al servicio
	+ Agregue el método _constructor_ de la clase
	+ Inyecte la dependencia como argumento del método constructor

  <pre><code>
    import { Component } from '@angular/core';
	<b>import { FotosService } from './servicios/fotos.service';</b>

	@Component({
	  selector: 'app-root',
	  templateUrl: './app.component.html',
	  styleUrls: ['./app.component.css']
	})
	export class AppComponent {
	  title  = 'testAngular';

	  <b>constructor(private fotosService: FotosService) {}</b>
	}
  </code></pre>

  + Modifique el constructor para invocar la función `obtenerDatos()` del servicio

  <pre><code>
  	...
	  <b>constructor(private fotosService: FotosService) {
	      let objeto = fotosService.obtenerDatos()
	      this.title = objeto.mensaje
	  }</b>
	}
  </code></pre>

* Interpole la variable en el **html** para ver los resultados

  ```
    <div>
    {% raw %} {{title}} {% endraw %} 
    </div>
  ```

* Actualice el navegador o (re)inicie el servidor

Peticiones HTTP
===============

* Agregue el servicio `HttpClient` como inyección de dependencia del servicio **fotos**.
	
	<pre><code>
	import { Injectable } from '@angular/core';
	<b>import { HttpClient } from '@angular/common/http';</b>
	
  	
	@Injectable({
	  providedIn: 'root'
	})
	export class FotosService {

	  <b>constructor(private http: HttpClient) { }</b>
	}
	</code></pre>



Referencias 
===========

* * *

* Angular. (2022). Retrieved 18 July 2022, from https://angular.io/tutorial/toh-pt4
* Servicios en Angular. (2022). Retrieved 18 July 2022, from https://desarrolloweb.com/articulos/servicios-angular.html
* Angular. (2022). Retrieved 19 July 2022, from https://angular.io/guide/dependency-injection
* Inyección de dependencias. (2022). Retrieved 19 July 2022, from https://desarrolloweb.com/articulos/patron-diseno-contenedor-dependencias.html