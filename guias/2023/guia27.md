---
theme: jekyll-theme-leap-day
---

## Guía 27

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

* Cree una base de datos no relacional según [Firebase - Realtime Database](https://dawmfiec.github.io/DAWM/tutoriales/firebase_realtime_database)

### Actividades

* Clone localmente tu repositorio **hybrid**.
* Abra el proyecto en VSCode y levante el servidor.

#### Interfaz de Tipo de Datos

* Cree una interfaz de Angular, con:

	```
	ionic g interface interface/<NOMBRE_INTERFAZ>
	```

* Coloque la interfaz generada en lugar de la interfaz creada. 

#### Servicio Proveedor de Datos

* Cree el servicio proveedor de datos, con:

	```
	ionic g service services/<NOMBRE_SERVICIO>
	```

#### Providers/Servicio

* Importe el cliente `HttpClient` en el servicio proveedor de datos.

	```typescript
	import { Injectable } from '@angular/core';

	//Importación del HttpClient
	import { HttpClient } from '@angular/common/http';
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

* Inyecte el cliente `HttpClient` en el constructor del servicio proveedor de datos.

	```typescript
	...
	export class <NOMBRE_SERVICIO>Service {

		//Atributo URL
		private URL: string ...

		//Inyección de dependencia del HttpClient
		constructor(private http:HttpClient) { }

	}
	```

* Agregue un método para hacer una petición HTTP GET y un método para enviar una petición HTTP POST. 

	```typescript
	...
	export class <NOMBRE_SERVICIO>Service {

		//Atributo URL
		private URL: string ...

		//Inyección de dependencia del HttpClient
		constructor( ... ) { }

		//Método con la petición HTTP
		getResponse() {
			return this.http.get(this.URL);
		}

		//Método con la petición HTTP
		postResponse(data: any) {
		    return this.http.post(this.URL, data);
		}

	}
	```

* Versiona local y remotamente el repositorio **hybrid**.

### Fundamental

* Formularios de Angular en [X](https://twitter.com/GoThinkster/status/1301592772999143424) 

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Making good forms in <a href="https://twitter.com/hashtag/angular?src=hash&amp;ref_src=twsrc%5Etfw">#angular</a> can be easier than you think!<br><br>1/5 🧵 <a href="https://t.co/TYlWq00MHV">pic.twitter.com/TYlWq00MHV</a></p>&mdash; Thinkster (@GoThinkster) <a href="https://twitter.com/GoThinkster/status/1301592772999143424?ref_src=twsrc%5Etfw">September 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Documentación

* Ionic Icons en la [página oficial](https://ionic.io/ionicons)
* Ionic Components en la [página oficial](https://ionicframework.com/docs/components)

### Términos

reactform

### Referencias

* Ionicframework. (n.d.). Your First Ionic App: Angular: Ionic Documentation. Retrieved from https://ionicframework.com/docs/angular/your-first-app
* (N.d.). Retrieved from https://angular.io/start/start-forms