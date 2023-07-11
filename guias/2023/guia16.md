---
theme: jekyll-theme-leap-day
---

## Guía 16

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.

#### JSON a TypeScript

* Tome una muestra de la respuesta en formato JSON de los datos guardados en el servicio de Realtime Database, de Firebase.
* Utilice los servicios de [Transform Tools](https://transform.tools/json-to-typescript) para generar los tipos de objetos (interfaces en TypeScript).

#### Tabla con datos

En su proyecto, identifique el componente que contendrá los datos que se encuentran en el servicio de Realtime Database, de Firebase.

#### Interfaz (tipo de dato), Servicios, Comunicación y Directivas

Consulte con [ChatGPT](https://chat.openai.com/) o [Bard](https://bard.google.com/) el uso y ejemplos de código de los términos interfaz como tipo de dato, servicios, comunicación unidireccional y la directiva \*ngFor en Angular.

### Actividades

#### Interfaz de Tipo de Datos

* Cree una interfaz de Angular, con:

	```
	ng generate interface interfaces/<NOMBRE_INTERFAZ>
	```

* Coloque el contenido de la interfaz en TypeScript en la interfaz recientemente creada. 

#### Servicio Proveedor de Datos

* Cree el servicio proveedor de datos, con:

	```
	ng generate service proveedor/<NOMBRE_SERVICIO>
	```

#### HttpClientModule

* Importe el módulo `HttpClientModule` en el `app.module.ts` 
	
	```typescript
	import { NgModule } from '@angular/core';
	...
	import { HttpClientModule } from  '@angular/common/http';


	@NgModule({
	declarations: [AppComponent],
		imports: [
			BrowserModule,
    		AppRoutingModule,
			HttpClientModule  //Módulo importado
		],
		providers: [],
		bootstrap: [AppComponent]
	})
	export  class  AppModule { }
	```

* Importe el cliente `HttpClient` en el servicio proveedor de datos.

	```typescript
	import { Injectable } from '@angular/core';
	import { HttpClient } from '@angular/common/http';
	```

* Inyecte el cliente `HttpClient` en el constructor del servicio proveedor de datos.

	```typescript
	...
	export class <NOMBRE_SERVICIO>Service {

		constructor(private http:HttpClient) { }

	}
	```

* Agregue el URL de referencia de los datos en el servicio de Realtime Database, de Firebase. 

	```typescript
	...
	export class <NOMBRE_SERVICIO>Service {

		private URL: string = 'https://<NOMBRE_DEL_PROYECTO>.firebaseio.com/collection.json';

		constructor(private http:HttpClient) { }

	}
	```

* Agregue un método para hacer una petición HTTP GET. 

	```typescript
	...
	export class <NOMBRE_SERVICIO>Service {

		private URL: string = 'https://<NOMBRE_DEL_PROYECTO>.firebaseio.com/collection.json';

		constructor(private http:HttpClient) { }

		getData() {
			return this.http.get(this.URL);
		}

	}
	```


#### Inyección de dependencias en el componente

#### Interfaz

#### \*ngFor



### Términos

interfaz, servicio, httpclient, inyección de dependencias, proveedor, directivas

### Referencias

* Angular. (2023). Retrieved 11 July 2023, from https://angular.io/tutorial/first-app/first-app-lesson-04
* Angular. (2023). Retrieved 11 July 2023, from https://angular.io/guide/creating-injectable-service
* Angular 16 HttpClient & Http Services Example Tutorial - positronX.io. (2019). Retrieved 11 July 2023, from https://www.positronx.io/angular-httpclient-http-service/#tc_1202_06
* Angular. (2023). Retrieved 11 July 2023, from https://angular.io/api/common/NgForOf
* Angular Basics: How To Use HttpClient in Angular. (2021). Retrieved 11 July 2023, from https://www.telerik.com/blogs/angular-basics-how-to-use-httpclient