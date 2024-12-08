---
theme: jekyll-theme-leap-day
---

## Guía 17

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2024/proyecto04)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">Desarrollar una aplicación híbrida utilizando tecnologías que integren modelos de aprendizaje automático previamente entrenados en un entorno funcional y accesible para resolver problemas específicos mediante el reconocimiento de patrones, objetos o sonidos fomentando habilidades prácticas en el desarrollo de aplicaciones móviles con tecnologías modernas y la implementación de inteligencia artificial.</pre>

### Actividades en clases

#### Hibrida

1. Clona localmente tu repositorio **hibrida**.
2. Instale los módulos **firebase** y **@angular/fire**, con:

	```command
	npm install firebase @angular/fire
	```

3. Levante los servicios, con:

	```command
	ionic serve
	```

#### Formulario

1. Edite el archivo _src/app/tab2/tab2.page.ts_, con:

	+ Importe y registre los componentes visuales mediante el decorador de la clase.

	```typescript
	...
	import {  
		/* Importe los componentes de la UI */
		IonCard, IonCardHeader, IonCardTitle, IonCardContent,
		IonSelect, IonSelectOption, IonTextarea,IonButton,
		IonList, IonItem, IonLabel,
		... 
	} from '@ionic/angular/standalone';
	
	@Component({
		...
		imports: [

			/* Registre los componentes de la UI */
			IonCard, IonCardHeader, IonCardTitle, IonCardContent,
			IonSelect, IonSelectOption, IonTextarea,IonButton,
			IonList, IonItem, IonLabel,
			...
		]
	})
	export class Tab2Page { ... }
	```

2. Edite el archivo _src/app/tab2/tab2.page.html_, reemplace por:

	```html
	<ion-header [translucent]="true">
	  <ion-toolbar>
	    <ion-title>
	      Retroalimentación
	    </ion-title>
	  </ion-toolbar>
	</ion-header>

	<ion-content [fullscreen]="true">

	  <ion-card class="ion-padding-bottom ion-margin-bottom">

	    <ion-card-header>
	      <ion-card-title>Su opinión es importante</ion-card-title>
	    </ion-card-header>

	    <ion-card-content class="ion-text-center">

	      <form>
	        
	        <ion-select label="Calificación" placeholder="Seleccione un valor">
	          <ion-select-option value="bueno">Bueno</ion-select-option>
	          <ion-select-option value="regular">Regular</ion-select-option>
	          <ion-select-option value="malo">Malo</ion-select-option>
	        </ion-select>

	        <ion-textarea label="Opinión" placeholder="Agregue aquí su descripción"></ion-textarea>
	        
	        <ion-button type="submit">Enviar</ion-button>
	        
	      </form>

	    </ion-card-content>
	  </ion-card>

	  <ion-card class="ion-padding-bottom ion-margin-bottom">

			<ion-card-header>
				<ion-card-title>Opiniones</ion-card-title>
			</ion-card-header>

			<ion-card-content>

			<ion-list>

				<!-- CARGA DE DATOS - INICIO -->
				
				<!-- CARGA DE DATOS - FIN -->

			</ion-list>

			</ion-card-content>
		</ion-card>

	</ion-content>
	```

3. (STOP 1) Compruebe el resultado en el navegador.

#### Formulario Reactivo

1. Edite el archivo _src/app/tab2/tab2.page.ts_, con:

	+ Importe y registre ReactiveFormsModule mediante el decorador de la clase.

	```typescript
	...
	/* Importe el módulo para formularios reactivos */
	import { ReactiveFormsModule } from '@angular/forms';
	
	@Component({
		...
		imports: [

			/* Registre el módulo para formularios reactivos */
    		ReactiveFormsModule,
			
			...
		]
	})
	export class Tab2Page { ... }
	```

	+ Importe los módulos FormGroup, FormControl y Validators. Instancie un formulario del tipo _FormGroup_.

	```typescript
	...
	/* Importe los constructores del formulario */
	import { FormGroup, FormControl, Validators } from '@angular/forms';
	
	export class Tab2Page {

		  /* Instancie un formulario */
		  myForm: FormGroup = new FormGroup({
		    score: new FormControl("", Validators.required),
		    opinion: new FormControl("", Validators.required)
		  });

	}
	```

2. Edite el archivo _src/app/tab2/tab2.page.html_, con:

	+ Asocie el modelo con la vista mediante las **directivas** _formGroup_ y _formControlName_.
	+ Condicione la disponibilidad del botón mediante la directiva _disabled_.

	```html
	...
	<form [formGroup]="myForm">

		<ion-select formControlName="score" ... > ... </ion-select>
		<ion-textarea formControlName="opinion" ... > ... </ion-textarea>
		<ion-button type="submit" [disabled]="!myForm.valid"> ... </ion-button>

	</form>
	...
	```

3. (STOP 2) Compruebe el resultado en el navegador.

#### Eventos

1. Edite el archivo _src/app/tab2/tab2.page.ts_, con:

	+ Agregue el callback onSubmit.

	```typescript
	...
	export class Tab2Page {

		...

		/* El método onSubmit para enviar los datos del formulario mediante el servicio */
		onSubmit() {
			console.log(this.myForm.value);
			alert(this.myForm.controls["score"].value)
			this.myForm.reset()
		}

	}
	```

2. Edite el archivo _src/app/tab2/tab2.page.html_, con:

	+ Agregue la directiva _ngSubmit_ con el nombre del callback a ejecutar.

	```html
	...
	<form ... (ngSubmit)="onSubmit()">
		...
	</form>
	```

3. (STOP 3) Compruebe el resultado en el navegador.

#### Firebase SDK

1. En Firebase, cree el proyecto **hibrida** 
2. Agregue el servicio [Firebase - Firestore](https://dawmfiec.github.io/DAWM/tutoriales/firebase_firestore)
3. Edite el archivo _src/environments/environment.ts_, con:

	+ Agregue la entrada _firebase_ con el JSON de configuración:

	```typescript
	export const environment = {
	  firebase:
	  {
	    apiKey: ...,
	    ...
	    appId: ...
	  },
	  production: false
	};
	```

4. Edite _main.ts_, con:

	- Importe las variables de ambiente con las credenciales de Firebase
	- Importe e inyecte los módulos de _AngularFire_ 

	```typescript
	...

	/* Importe las variables de ambiente */
	import { environment } from './environments/environment';

	/* Importe los módulos de AngularFire */
	import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
	import { provideFirestore, getFirestore } from '@angular/fire/firestore';

	bootstrapApplication(AppComponent, {
	  providers: [
	    ...

	    /* Inyecte los módulos de AngularFire */
	    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
	    provideFirestore(() => getFirestore()),

	  ],
	});
	```

5. (STOP 4) Compruebe la importación de los paquetes en el _package.json_.

#### Servicio Proveedor de Datos / Escritura

1. Desde la línea de comandos, cree el servicio proveedor de datos, con:

	```command
	ionic g service services/provider
	```

2. Edite el servicio _src/app/services/provider.service.ts_, con:

	- Importe el módulo _Firestore_ e inyecte la dependencia en el constructor.

	```typescript
	import { Injectable } from '@angular/core';

	/* Importe los módulos de AngularFire */
	import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
	import { Observable } from 'rxjs';
	
	...
	export class ProviderService { 

		/* Inyecte de dependencia AngularFire */
		constructor(private firestoreService: Firestore) { }
	}
	```

	- Agregue el método para escribir (**createDocument**) un documento en una colección de Firestore.

	```typescript
	...
	export class ProviderService { 

		constructor(...) { }

		/* Método para crear un documento en la colección */
		createDocument(collectionName: string, data: any): Promise<any> {
			const colRef = collection(this.firestoreService, collectionName);
			return addDoc(colRef, data);
		}

	}
	```

3. Edite _src/app/tab2/tab2.page.ts_, con:

	- Importe e inyecte el servicio _ProviderService_ en el constructor.
	- Defina una variable con el nombre de la colección.
	- Modifique el método _onSubmit_ para enviar los datos del formulario mediante el servicio.

	```typescript
	...

	/* Importe el servicio */
	import { ProviderService } from '../services/provider.service';

	@Component({ ... })
	export class Tab2Page {

		...
		
		/* Nombre de la colección */
		collectionName = 'reviews';

		/* Inyecte la dependencia a Firestore */
		constructor(private providerService: ProviderService) { }

		/* El método onSubmit para enviar los datos del formulario mediante el servicio */
		onSubmit() {
			this.providerService.createDocument(this.collectionName, this.myForm.value).then(() => {
				this.myForm.reset()
			});
		}

	}
	```

4. (STOP 5) Compruebe el funcionamiento en el navegador y el resultado en Firestore.

#### Servicio Proveedor de Datos / Lectura

1. Edite _src/app/services/provider.service.ts_, con:

	- Agregue el método para leer (**readCollection**) una colección de Firestore.

	```typescript
	...
	export class ProviderService { 

		constructor(...) { }

		createDocument(...): Promise<any> { ... }

		/* Método para leer una colección */
		readCollection(collectionName: string): Observable<any[]> {
			const colRef = collection(this.firestoreService, collectionName);
			return collectionData(colRef, { idField: 'id' });
		}

	}
	```

2. Edite _src/app/tab2/tab2.page.ts_, con:

	- Arreglo para cargar los datos en el componente.
	- Agregue los métodos _ngOnInit_ y _loadData_ para cargar la colección de documentos mediante el servicio.

	```typescript
	...
	export class Tab2Page {
		
		/* Arreglo con datos locales */
		dataList: any[] = [];

		constructor( ... ) { }

		onSubmit() { ... }

		/* Al inicializar, carga los datos  */
		ngOnInit() {
			this.loadData();
		}

		loadData() {
			this.providerService.readCollection(this.collectionName).subscribe((data) => {
				this.dataList = data;
			});
		}

	}
	```

3. Edite _src/app/tab2/tab2.page.html_, con:

	- Agregue la tarjeta **CARGA DE DATOS**.

	```html
	<ion-header [translucent]="true">
		...
	</ion-header>

	<ion-content [fullscreen]="true">

	  	<ion-card class="ion-padding-bottom ion-margin-bottom">
	  		...
	  	</ion-card>
	  	
		<ion-card class="ion-padding-bottom ion-margin-bottom">

			<ion-card-header>
				<ion-card-title>Opiniones</ion-card-title>
			</ion-card-header>

			<ion-card-content>

			<ion-list>

				<!-- CARGA DE DATOS - INICIO -->
				@for (datum of dataList; track $index) {
					<ion-item>
					  <ion-label> {% raw %} {{ {% endraw %} datum?.score {% raw %} }} {% endraw %} </ion-label>
					  <ion-label> {% raw %} {{ {% endraw %} datum?.opinion {% raw %} }} {% endraw %} </ion-label>
					</ion-item>
				}
				<!-- CARGA DE DATOS - FIN -->

			</ion-list>

			</ion-card-content>
		</ion-card>
		
	</ion-content>
	```

4. (STOP 6) Compruebe el funcionamiento en el navegador.


### Documentación

* Ionic Icons en la [página oficial](https://ionic.io/ionicons)
* Ionic Components en la [página oficial](https://ionicframework.com/docs/components)

### Fundamental

* Patrones de diseño en Angular, via [X](https://x.com/brolag/status/1392120744365207559)

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">🧵<a href="https://twitter.com/hashtag/HowToAngular?src=hash&amp;ref_src=twsrc%5Etfw">#HowToAngular</a><br><br>¿Cuáles son los patrones de diseño que te van a ayudar a entender <a href="https://twitter.com/hashtag/Angular?src=hash&amp;ref_src=twsrc%5Etfw">#Angular</a> a profundidad?<br><br>- Module <br>- Observer <br>- Dependency Injection <br>- Singleton <br>- Decorator <br>- Factory<br>- Adapter <br>- Facade<br><br>Exacto. Está no es una guía &quot;Convierte en Angular Dev en 30 min&quot; 😉 <a href="https://t.co/pZh1wJiI5t">pic.twitter.com/pZh1wJiI5t</a></p>&mdash; Alfredo (@brolag) <a href="https://twitter.com/brolag/status/1392120744365207559?ref_src=twsrc%5Etfw">May 11, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

* Formularios de Angular, via [X](https://twitter.com/GoThinkster/status/1301592772999143424) 

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Making good forms in <a href="https://twitter.com/hashtag/angular?src=hash&amp;ref_src=twsrc%5Etfw">#angular</a> can be easier than you think!<br><br>1/5 🧵 <a href="https://t.co/TYlWq00MHV">pic.twitter.com/TYlWq00MHV</a></p>&mdash; Thinkster (@GoThinkster) <a href="https://twitter.com/GoThinkster/status/1301592772999143424?ref_src=twsrc%5Etfw">September 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

formularios reactivos, directivas, servicios

### Referencias

* Reactive forms Angular. (n.d.). Retrieved from https://angular.dev/guide/forms/reactive-forms
* Bastidas, W. (2023). Most Common Design Patterns in Angular: What They Are and How to Apply Them. Retrieved from https://medium.com/williambastidasblog/most-common-design-patterns-in-angular-what-they-are-and-how-to-apply-them-f0193b85e500
* GeeksforGeeks. (2024). Reactive Forms vs Template Driven Forms. Retrieved from https://www.geeksforgeeks.org/reactive-forms-vs-template-driven-forms/