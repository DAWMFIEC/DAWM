---
theme: jekyll-theme-leap-day
---

## Guía 15

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2023/proyecto05)

### Actividades previas

#### Preparación de los datos

Estas instrucciones aplican si su fuente de datos es de formato CSV, caso contrario pase a la siguiente actividad. 

* Descargue su fuente de datos en formato CSV.
* Desde la línea de comando:
	- Instale globalmente [csvtojson](https://www.npmjs.com/package/csvtojson), con:

		```
		npm i -g csvtojson
		```
	- Convierta el archivo CSV a JSON, con:

		```
		csvtojson <NOMBRE DEL ARCHIVO>.csv > <NOMBRE DEL ARCHIVO>.json
		```


#### Firebase (Realtime Database)

* Siga las instrucciones del tutorial [Firebase - Realtime Database](/DAWM/tutoriales/firebase_realtime_database).
	- Realice las pruebas de peticiones mediante la línea de comandos para [Todos](/DAWM/tutoriales/firebase_realtime_database.html#peticin---todos), [Por índice](/DAWM/tutoriales/firebase_realtime_database.html#peticin---por-ndice) y [Filtrado de datos](/DAWM/tutoriales/firebase_realtime_database.html#peticin---filtrado-de-datos).

#### JSON a TypeScript

* De la colección de datos, copie un objeto del arreglo.
* Utilice el servicio de [Transform Tools](https://transform.tools/json-to-typescript), para generar la interfaz en TypeScript a partir del objeto copiado.

### Actividades

* Clona localmente tu repositorio **mpa**.
* Abra el proyecto en VSCode y levante el servidor.

#### Interfaz de Tipo de Datos

* Cree una interfaz de Angular, con:

	```
	ng generate interface interfaces/<NOMBRE_INTERFAZ>
	```

* Coloque la interfaz generada en lugar de la interfaz creada. 

#### Servicio Proveedor de Datos

* Cree el servicio proveedor de datos, con:

	```
	ng generate service providers/<NOMBRE_SERVICIO>
	```

#### Providers/Servicio

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

		...

		//Método con la petición HTTP
		getResponse() {
			return this.http.get(this.URL);
		}

	}
	```

#### Componente.ts - Consumo de Servicio


* Seleccione el módulo que consumirá el proveedor de datos
* Importe el módulo `HttpClientModule`, la interfaz `<NOMBRE_INTERFAZ>` y el servicio `<NOMBRE_SERVICIO>Service`. 

	```typescript
	...

	import { HttpClientModule } from  '@angular/common/http';

	//Importación de la interfaz
	import { <NOMBRE_INTERFAZ> } from '<RUTA>/interfaces/<NOMBRE_INTERFAZ>';

	//Importación del servicio
	import { <NOMBRE_SERVICIO>Service } from '<RUTA>/providers/<NOMBRE_SERVICIO>.service'

	@Component({
	...
	````

* Registre el módulo `HttpClientModule` en la clave _imports_ y el servicio `<NOMBRE_SERVICIO>Service` en la clave _providers_.

	```typescript
	...
	@Component({
	  ...
	  standalone: true,
	  imports: [HttpClientModule],
	  providers: [<NOMBRE_SERVICIO>Service],
	  ...
	})
	...
	````

* Inyecte la dependencia el servicio `<NOMBRE_SERVICIO>Service` en el constructor del componente seleccionado para mostrar los datos.

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


* Agregue un atributo para almacenar la respuesta a la petición.

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
	      let dataArray = (response as <NOMBRE_INTERFAZ>[]); 
	      this.data = dataArray.slice(0,10);
	    })
	  }
	}
	...
	```

#### Componente.ts - Renderización del resultado

* Utilice la directiva `*ngFor` para recorrer el arreglo `data` en la vista (html) del componente seleccionado. Las `CLAVE1`, `CLAVE2` y `CLAVE3` corresponden a las claves en la interfaz.

	```
	...
	<!-- Tabla con datos -->

	<table>
        <tbody>
            @for (datum of data; track datum.id) {
              <tr>
	            <th>{% raw %} {{ {% endraw %} datum[ <CLAVE1> ] {% raw %} }} {% endraw %} </th>
                <td>{% raw %} {{ {% endraw %} datum[ <CLAVE2> ] {% raw %} }} {% endraw %} </td>
                <td>{% raw %} {{ {% endraw %} datum[ <CLAVE3> ] {% raw %} }} {% endraw %}</td>
              </tr>
            } @empty {
              <tr>
                <td colspan="4" class="text-center">Aún no hay datos</td>
              </tr>
            }
        </tbody>
    </table>
    ...
	```

#### Versionamiento

* Versiona local y remotamente el repositorio **mpa**.

### Fundamental

* Duet AI for Firebase en [X](https://twitter.com/Firebase/status/1730632854151762207)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Using AI to improve app development 🚀<br><br>Two AI announcements from Firebase Demo Day:<br>1️⃣ We started building Duet AI for Firebase, a helpful assistant for developers.<br>2️⃣ We&#39;re bringing AI-powered automated testing to App Distribution.<br><br>Get the details → <a href="https://t.co/4TmBtZ1v8o">https://t.co/4TmBtZ1v8o</a> <a href="https://t.co/6tnhfay0Rc">pic.twitter.com/6tnhfay0Rc</a></p>&mdash; Firebase (@Firebase) <a href="https://twitter.com/Firebase/status/1730632854151762207?ref_src=twsrc%5Etfw">December 1, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

csvtojson, firebase, interfaz, servicio, httpclient, inyección de dependencias, proveedor, directivas

### Referencias

* csvtojson. (2019). Retrieved 9 July 2023, from https://www.npmjs.com/package/csvtojson
* DAWM. (2023). Retrieved 9 July 2023, from https://dawmfiec.github.io/DAWM/tutoriales/firebase_realtime_database.html