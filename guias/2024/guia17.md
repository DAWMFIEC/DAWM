---
theme: jekyll-theme-leap-day
---

## Guía 17

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2024/proyecto04)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">Desarrollar una aplicación híbrida utilizando tecnologías que integren modelos de aprendizaje automático previamente entrenados en un entorno funcional y accesible para resolver problemas específicos mediante el reconocimiento de patrones, objetos o sonidos fomentando habilidades prácticas en el desarrollo de aplicaciones móviles con tecnologías modernas y la implementación de inteligencia artificial.</pre>

### Actividades previas

1. En Firebase, cree el proyecto **hibrido** 
2. Agregue el servicio [Realtime Database](https://dawmfiec.github.io/DAWM/tutoriales/firebase_realtime_database)
3. Modifique las reglas de acceso para el acceso permanente.
4. Verifique el _endpoint_ de la colección.

### Actividades en clases

1. Clone localmente tu repositorio **hibrido**.
2. Abra el proyecto en VSCode y levante el servidor.
	
	```command
	ionic serve
	```

#### Interfaz de Tipo de Datos

1. Cree una interfaz de Angular, con:

	```command
	ionic g interface interfaces/data
	```

2. Modifique _hybrid/src/app/interfaces/data.ts_, con:

	```typescript
	export interface Data {
	    texto: string;
	}
	```

#### Servicio Proveedor de Datos

1. Cree el servicio proveedor de datos, con:

	```command
	ionic g service services/provider
	```

2. Edite el servicio _hybrid/src/app/services/provider.service.ts_, con:

	```typescript
	import { Injectable } from '@angular/core';

	/* 1. Importe el módulo del HttpClient */
	import { HttpClient } from '@angular/common/http';
	
	...
	export class ProviderService {

		/* 2.Atributo URL */
		private URL: string = 'https://<NOMBRE_DEL_PROYECTO>.firebaseio.com/collection.json';

		/* 3. Inyección de dependencia del HttpClient */
		constructor(private http:HttpClient) { }

		/* 4. Método con la petición HTTP */
		getResponse() {
			return this.http.get(this.URL);
		}

		/* 5. Método con la petición HTTP */ 
		postResponse(data: any) {
		    return this.http.post(this.URL, data);
		}

	}
	```

#### Consumo de Servicio

* Modifique el archivo _hybrid/src/app/tab1/tab1.page.ts_, con:

	+ Importe los módulos

	```typescript
	...

	/* 1. Importe el módulo con la directiva @ngFor */
	import { CommonModule } from '@angular/common'

	/* 2. Importe los componentes de la UI */
	import {
	  ...
	  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
	  IonInput, IonButton,
	  IonLabel, IonList, IonItem
	} from '@ionic/angular/standalone';

	/* 3. Importe del método http */
	import { HttpClientModule } from  '@angular/common/http';

	/* 4. Importe de la interfaz */
	import { Data } from '../interfaces/data';

	/* 5. Importe del servicio */
	import { ProviderService } from '../services/provider.service';

	/* 6. Importe lo constructores de formulario */
	import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

	@Component({ ... })
	...
	```

	+ Registre los módulos importados y el proveedor de servicios.

	```typescript
	...
	@Component({
	  ...
	  standalone: true,
	  imports: [
	  	...
	  	

		/* 7. Registre todos los componentes importados */
	    HttpClientModule, ReactiveFormsModule,
	    CommonModule, 
	    IonLabel, IonList, IonItem,
	    IonInput, IonButton,
	    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent
	  ],

	  /* 8. Proveedor de servicios */
	  providers: [ProviderService],
	  ...
	})
	export class Tab1Page { ... }
	```

	+ Defina el atributo **data** y el formulario **checkoutForm**.

	```typescript
	...
	export class Tab1Page {

	  /* 9. Atributo con el tipo de dato de la interfaz */
	  public data : Data[] = [];

	  /* 10. Formulario reactivo */
	  checkoutForm = this.formBuilder.group({
	    texto: ''
	  });
	  
	  ...
	}
	...
	```

	+ Inyecte la dependencia al servicio y al constructor del formulario en el constructor del componente seleccionado para mostrar los datos.

	```typescript
	...
	export class Tab1Page {

	   ...
	  
		/* 11. Inyección de dependencia del servicio */
		constructor(private dataProvider: ProviderService , private formBuilder: FormBuilder) { }
	}
	...
	```

	+ Agregue el método **ngOnInit** para que realice la petición y que se suscriba a la respuesta de la petición. Extraiga una muestra de los datos en el atributo a renderizar en la vista.

	```typescript
	...
	export class Tab1Page {

	  ...

	  constructor( ... ) { }

	  /* 12. Ejecución de la petición y suscripción de la respuesta */
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

	+ Agregue el callback **onSubmit** que envía los datos del formulario


	```typescript
	...
	@Component({
	  ...
	})
	export class Tab1Page {

	  ...

	  loadData() { ... }

	  /* 13. Callback para el envío de datos */
	  onSubmit(): void {
	  	this.dataProvider.postResponse(this.checkoutForm.value).subscribe( (response) => {
				this.checkoutForm.reset();
				this.loadData()
		})
	  }

	}
	...
	```

#### Componente.ts - Formulario y Renderización del resultado

1. Modifique el archivo _hybrid/src/app/tab1/tab1.page.html_, con:

	+ Utilice la directiva `*ngFor` para recorrer el arreglo `data` en la vista (html) del componente seleccionado. 

	```html
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
	          <ion-label>{% raw %} {{ {% endraw %}datum?.texto{% raw %} }} {% endraw %}</ion-label>
	        </ion-item>
	      </ion-list>

	    </ion-card-content>
	  </ion-card>

	  
	</ion-content>
	```


* Versiona local y remotamente el repositorio **hybrid**.

### Documentación

* Ionic Icons en la [página oficial](https://ionic.io/ionicons)
* Ionic Components en la [página oficial](https://ionicframework.com/docs/components)

### Fundamental

* Formularios de Angular en [X](https://twitter.com/GoThinkster/status/1301592772999143424) 

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Making good forms in <a href="https://twitter.com/hashtag/angular?src=hash&amp;ref_src=twsrc%5Etfw">#angular</a> can be easier than you think!<br><br>1/5 🧵 <a href="https://t.co/TYlWq00MHV">pic.twitter.com/TYlWq00MHV</a></p>&mdash; Thinkster (@GoThinkster) <a href="https://twitter.com/GoThinkster/status/1301592772999143424?ref_src=twsrc%5Etfw">September 3, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

reactform

### Referencias

* Ionicframework. (n.d.). Your First Ionic App: Angular: Ionic Documentation. Retrieved from https://ionicframework.com/docs/angular/your-first-app
* (N.d.). Retrieved from https://angular.io/start/start-forms