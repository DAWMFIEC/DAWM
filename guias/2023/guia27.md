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

#### Componente.ts - Consumo de Servicio

* Modifique el archivo `tab1/tab1.page.ts`
* Importe el módulo `HttpClientModule`, la interfaz `<NOMBRE_INTERFAZ>` y el servicio `<NOMBRE_SERVICIO>Service`. 

	```typescript
	...

	// Importe el módulo con la directiva @ngFor
	import { CommonModule } from '@angular/common'

	import {
	  ...
	  //Importe los componentes
	  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
	  IonInput, IonButton,
	  IonLabel, IonList, IonItem
	} from '@ionic/angular/standalone';

	//Importación del método http
	import { HttpClientModule } from  '@angular/common/http';

	//Importación de la interfaz
	import { <NOMBRE_INTERFAZ> } from '<RUTA>/interfaces/<NOMBRE_INTERFAZ>';

	//Importación del servicio
	import { <NOMBRE_SERVICIO>Service } from '<RUTA>/providers/<NOMBRE_SERVICIO>.service'

	//Importación de los constructores del formulario
	import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


	@Component({
	...
	````

* Registre los módulos en la clave _imports_ y el servicio `<NOMBRE_SERVICIO>Service` en la clave _providers_.

	```typescript
	...
	@Component({
	  ...
	  standalone: true,
	  imports: [
	  	...
	  	
	  	//Registre los componentes
	    HttpClientModule, ReactiveFormsModule,

	    CommonModule, 
	    IonLabel, IonList,IonItem,
	    IonInput, IonButton,

	    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent
	  ],
	  providers: [<NOMBRE_SERVICIO>Service],
	  ...
	})
	...
	````

* Agregue un atributo para almacenar la respuesta a la petición y el constructor del formulario.

	```typescript
	...
	@Component({
	  ...
	})
	export class <COMPONENTE_SELECCIONADO>Component {

	  //Atributo con el tipo de dato de la interfaz
	  public data : <NOMBRE_INTERFAZ>[] = [];

	  checkoutForm = this.formBuilder.group({
	    texto: ''
	  });
	  
	  ...
	}
	...
	```

* Inyecte la dependencia al servicio y al constructor del formulario en el constructor del componente seleccionado para mostrar los datos.

	```typescript
	...
	@Component({
	  ...
	})
	export class <COMPONENTE_SELECCIONADO>Component {

	   public data : <NOMBRE_INTERFAZ>[] ...

	   checkoutForm = ...
	  
	  //Inyección de dependencia del servicio
	  constructor(private dataProvider: <NOMBRE_SERVICIO>Service , private formBuilder: FormBuilder) { }
	}
	...
	```

* Agregue un método que realice la petición y que se suscriba a la respuesta de la petición. Extraiga una muestra de los datos en el atributo a renderizar en la vista.

	```typescript
	...
	@Component({
	  ...
	})
	export class <COMPONENTE_SELECCIONADO>Component {

	  ...

	  constructor( ... ) { }

	  //Ejecución de la petición y suscripción de la respuesta

	  ngOnInit() {
	    this.loadData()
	  }

	  loadData() {
	    this.dataProvider.getResponse().subscribe( response => {
	      if( response != null) {
	        this.data = Object.values(response) as Data[]
	      }
	        
	    })
	  }
	}
	...
	```

* Agregue un método que envíe la petición con los datos del formulario


	```typescript
	...
	@Component({
	  ...
	})
	export class <COMPONENTE_SELECCIONADO>Component {

	  ...

	  onSubmit(): void {
	  	// Proceso para enviar los datos
		this.dataProvider.postResponse(this.checkoutForm.value).subscribe( (response) => {
				this.checkoutForm.reset();
				this.loadData()
			})
		}

	}
	...
	```

#### Componente.ts - Formulario y Renderización del resultado

* Utilice la directiva `*ngFor` para recorrer el arreglo `data` en la vista (html) del componente seleccionado. 

	```
	...
	<ion-content [fullscreen]="true">

	  <ion-card class="ion-padding-bottom ion-margin-bottom">
	    
	    <ion-card-header>
	      <ion-card-title>Memorias</ion-card-title>
	    </ion-card-header>

	    <ion-card-content class="ion-text-center">
	      <form [formGroup]="checkoutForm" (ngSubmit)="onSubmit()">
	        <ion-input formControlName="texto"
	          placeholder="Ingresa tu memoria"></ion-input>
	        <ion-button type="submit">Enviar</ion-button>
	      </form>
	    </ion-card-content>
	  </ion-card>
	  

	  <ion-card>
	    <ion-card-header>
	      <ion-card-title>Lista de Memorias</ion-card-title>
	    </ion-card-header>

	    <ion-card-content>

	      <!-- Muestra los elementos -->
	      <ion-list>
	        <ion-item *ngFor="let datum of data">
	          <ion-label>{{datum.texto}}</ion-label>
	        </ion-item>
	      </ion-list>

	    </ion-card-content>
	  </ion-card>

	  
	</ion-content>
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