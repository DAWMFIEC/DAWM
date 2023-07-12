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

En su proyecto, seleccione un componente en el que se mostrará una tabla con datos (del Realtime Database de Firebase).

#### Términos

Consulte con [ChatGPT](https://chat.openai.com/) o [Bard](https://bard.google.com/) el uso y ejemplos de código de los términos interfaz como tipo de dato, inyección de dependencias, servicios, observador y la directiva \*ngFor en Angular.

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
	ng generate service providers/<NOMBRE_SERVICIO>
	```

#### HttpClientModule

* Importe el módulo `HttpClientModule` en el `app.module.ts` 
	
	```typescript
	import { NgModule } from '@angular/core';
	...
	//Importación del módulo 
	import { HttpClientModule } from  '@angular/common/http';


	@NgModule({
	declarations: [AppComponent],
		imports: [
			BrowserModule,
    		AppRoutingModule,
			HttpClientModule  //Registro de módulo importado
		],
		providers: [],
		bootstrap: [AppComponent]
	})
	export  class  AppModule { }
	```

* Importe el cliente `HttpClient` en el servicio proveedor de datos.

	```typescript
	import { Injectable } from '@angular/core';

	//Importación del HttpClient
	import { HttpClient } from '@angular/common/http';
	```

* Inyecte el cliente `HttpClient` en el constructor del servicio proveedor de datos.

	```typescript
	...
	export class <NOMBRE_SERVICIO>Service {

		//Inyección de dependencia del HttpClient
		constructor(private http:HttpClient) { }

	}
	```

* Agregue un atributo con el URL de referencia al servicio.

	```typescript
	...
	export class <NOMBRE_SERVICIO>Service {

		//Atributo URL
		private URL: string = 'https://<NOMBRE_DEL_PROYECTO>.firebaseio.com/collection.json';

		...

	}
	```

* Agregue un método para hacer una petición HTTP GET. 

	```typescript
	...
	export class <NOMBRE_SERVICIO>Service {

		private URL: string = 'https://<NOMBRE_DEL_PROYECTO>.firebaseio.com/collection.json';

		...

		//Método con la petición HTTP
		getResponse() {
			return this.http.get(this.URL);
		}

	}
	```


#### Inyección de dependencias

* Importe el servicio `<NOMBRE_SERVICIO>Service` y la interfaz en el componente seleccionado para mostrar los datos.

	```typescript
	import { Component } from '@angular/core';

	//Importación de la interfaz
	import { <NOMBRE_INTERFAZ> } from '../interfaces/<NOMBRE_INTERFAZ>';

	//Importación del servicio
	import { <NOMBRE_SERVICIO>Service } from '../providers/<NOMBRE_SERVICIO>.service';
	```

* Inyecte el servicio `<NOMBRE_SERVICIO>Service` en el constructor del componente seleccionado para mostrar los datos.

	```typescript
	...
	@Component({
	  ...
	})
	export class <COMPONENTE_SELECCIONADO>Component {
	  
	  //Inyección de dependencia del servicio
	  constructor(private dataProvider: <NOMBRE_SERVICIO>Service) { }
	}
	...
	```

* Agregue un atributo que almacenará el arreglo resultante de la petición.


	```typescript
	...
	@Component({
	  ...
	})
	export class <COMPONENTE_SELECCIONADO>Component {

	  //Atributo con el tipo de dato de la interfaz
	  public data : <NOMBRE_INTERFAZ>[] = [];
	  
	  ...
	}
	...
	```

* Agregue un método que realice la petición y que se suscriba a la respuesta de la petición.

	```typescript
	...
	@Component({
	  ...
	})
	export class <COMPONENTE_SELECCIONADO>Component {

	  ...

	  //Ejecución de la petición y suscripción de la respuesta
	  ngOnInit() {
	    this.dataProvider.getResponse().subscribe((response) => { 
	      this.data = (response as <NOMBRE_INTERFAZ>[]); 
	    })
	  }
	}
	...
	```

#### Renderización con la directiva \*ngFor

* Recorra el arreglo `data` en la vista (html) del componente seleccionado.

	```html
	...
	<!-- Tabla con datos -->

	<table>
        <tbody>
            <tr *ngFor="let datum of data">
                <th>\{\{ datum[ <CLAVE1> ] \}\}</th><td>\{\{ datum[ <CLAVE2> ] \}\}</td>
            </tr>
        </tbody>
    </table>
    ...
	```

**NOTA:** Ubique la tabla en el lugar adecuado y coloque el estilo adecuado.

### Términos

interfaz, servicio, httpclient, inyección de dependencias, proveedor, directivas

### Referencias

* Angular. (2023). Retrieved 11 July 2023, from https://angular.io/tutorial/first-app/first-app-lesson-04
* Angular. (2023). Retrieved 11 July 2023, from https://angular.io/guide/creating-injectable-service
* Angular 16 HttpClient & Http Services Example Tutorial - positronX.io. (2019). Retrieved 11 July 2023, from https://www.positronx.io/angular-httpclient-http-service/#tc_1202_06
* Angular. (2023). Retrieved 11 July 2023, from https://angular.io/api/common/NgForOf
* Angular Basics: How To Use HttpClient in Angular. (2021). Retrieved 11 July 2023, from https://www.telerik.com/blogs/angular-basics-how-to-use-httpclient