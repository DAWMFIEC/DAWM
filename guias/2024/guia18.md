---
theme: jekyll-theme-leap-day
---

## Guía 18

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2024/proyecto04)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">Desarrollar una aplicación híbrida utilizando tecnologías que integren modelos de aprendizaje automático previamente entrenados en un entorno funcional y accesible para resolver problemas específicos mediante el reconocimiento de patrones, objetos o sonidos fomentando habilidades prácticas en el desarrollo de aplicaciones móviles con tecnologías modernas y la implementación de inteligencia artificial.</pre>

### Actividades previas

#### Hibrida

1. Clona localmente tu repositorio **hibrida**.
2. Instale los paquetes de su proyecto.
3. Levante los servicios.

### Actividades en clases

#### IonTab

1. Edite el archivo _src/app/tabs/tabs.page.ts_, con:

    + Importe y agregue la referencia al ícono _rocket_ en la función addIcons.

2. Edite el archivo _src/app/tabs/tabs.page.html_, con:

    - En el **tab1** el nombre del ícono "rocket" y el texto del ícono "Teachable Machine"

3. (STOP 1) Compruebe el resultado en el navegador.

#### Interfaz gráfica

1. Edite el archivo _src/app/tab1/tab1.page.ts_, con:

	+ Importe y registre los componentes visuales mediante el decorador de la clase.
	+ Importe la función _addIcons_ y la imagen _cloudUpload_ para llamar en el constructor.

	```typescript
	...
	import {  

		/* Importe los componentes de la UI */
		IonGrid, IonCol, IonRow,
		IonLabel,IonButton, IonInput, IonIcon,

		... 
	} from '@ionic/angular/standalone';

	/* Importe la función y el ícono */
	import { addIcons } from 'ionicons';
	import { cloudUpload } from 'ionicons/icons';
	
	@Component({
		...
		imports: [

			/* Registre los componentes de la UI */
			IonGrid, IonCol, IonRow,
			IonLabel,IonButton, IonInput, IonIcon,

			...
		]
	})
	export class Tab1Page {

		constructor() {
			/* Registre el ícono */
			addIcons({ cloudUpload });
		}
	}
	```

2. Reemplace todo el contenido en el archivo _src/app/tab1/tab1.page.html_, por:

	```html
	<ion-header [translucent]="true">
	  <ion-toolbar>
	    <ion-title>
	      Teachable Machine
	    </ion-title>
	  </ion-toolbar>
	</ion-header>

	<ion-content [fullscreen]="true">

	  <ion-grid [fixed]="true">
	    <ion-row>
	      <ion-col>

	        <ion-button>
	          <ion-label id="label" >Seleccione un archivo</ion-label><ion-icon name="cloud-upload"></ion-icon>
	        </ion-button>
	        <input type="file" accept="image/*" />

	      </ion-col>
	    </ion-row>
	    <ion-row>
	      <ion-col size="12">
	        
	        <!-- CARGA DE IMAGEN - INICIO -->
	        
	        <!-- CARGA DE IMAGEN - FIN -->       

	      </ion-col>
	      <ion-col size="12">
	        
	        <!-- CARGA DE PREDICCIÓN - INICIO -->

	        <!-- CARGA DE PREDICCIÓN - FIN -->

	      </ion-col>
	    </ion-row>
	  </ion-grid> 

	</ion-content>

	```

3. Edite el archivo _src/app/tab1/tab1.page.scss_, con:

	```css
	.image-preview {
	  margin-top: 20px;

	  img {
	    max-width: 100%;
	    height: auto;
	    border-radius: 10px;
	    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	  }
	}

	ion-col {
	  text-align: center;
	}

	#label {
	  padding-right: 0.5rem;
	}

	.file-input {
	  display: none;
	}
	```


4. (STOP 2) Compruebe el resultado en el navegador.

#### Eventos

1. Edite el archivo _src/app/tab1/tab1.page.ts_, con:

	+ Agregue el callback onFileSelected.

	```typescript
	...
	export class Tab1Page {

		...

		/* El método onSubmit para enviar los datos del formulario mediante el servicio */
		onFileSelected(event: Event): void {
			const input = event.target as HTMLInputElement;

			if (input.files && input.files.length > 0) {
				const file = input.files[0];
				console.log(file)
			}
		}

	}
	```

2. Edite el archivo _src/app/tab1/tab1.page.html_, con:

	- Agregue al elemento _&lt;input&gt;_:
		- La referencia en plantilla **#fileInput**, 
		- El callback _onFileSelected_ para el evento _change_ con el objeto _event_, y 
		- Oculte el elemento (hidden).
	- Agregue al elemento _&lt;ion-button&gt;_ el disparo del evento click de _fileInput_.

	```html
	...

	<!-- Disparo del evento click de fileInput -->
	<ion-button (click)="fileInput.click()">
      <ion-label id="label" >Seleccione un archivo</ion-label><ion-icon name="cloud-upload"></ion-icon>
    </ion-button>

    <!-- Referencia en plantilla #fileInput, callback para el evento change y oculte el elemento -->
    <input #fileInput type="file" accept="image/*" (change)="onFileSelected($event)" hidden />
    ...
	```

3. (STOP 3) Compruebe el resultado en el navegador.

#### Carga de imagen (Base64)

1. Edite el archivo _src/app/tab1/tab1.page.ts_, con:

	+ Agregue el código asincrónico para leer la imagen en Base64.

	```typescript
	...
	export class Tab1Page {

		...

		/* El método onSubmit para enviar los datos del formulario mediante el servicio */
		onFileSelected(event: Event): void {
			const input = event.target as HTMLInputElement;

			if (input.files && input.files.length > 0) {
				const file = input.files[0];
				
				const reader = new FileReader();

				// Convertir el archivo a una URL base64 para mostrarlo en el html
				reader.onload = () => {
					console.log(reader.result as string)
				};

				reader.readAsDataURL(file); // Leer el archivo como base64
			}
		}

	}
	```

2. (STOP 4) Compruebe el resultado en el navegador.

#### Signals

1. Edite el archivo _src/app/tab1/tab1.page.ts_, con:

	+ Importe la función **signal**.
	+ Declare las señales **imageReady** e **imageURL**

	```typescript
	/* Importe la función signal */
	import { Component, signal } from '@angular/core';
	...
	export class Tab1Page {

		imageReady = signal(false)
		imageUrl = signal("")

		...

		/* El método onSubmit para enviar los datos del formulario mediante el servicio */
		onFileSelected(event: Event): void {
			...

			if ( ... ) {
				
				...

				// Convertir el archivo a una URL base64 para mostrarlo en el html
				reader.onload = () => {
			        this.imageUrl.set(reader.result as string)
			        this.imageReady.set(true)
				};

				...
			}
		}

	}
	```

2. Edite el archivo _src/app/tab1/tab1.page.html_, con:

	```html
	...
	<ion-col size="12">
	        
	        <!-- CARGA DE IMAGEN - INICIO -->
	        @if(imageReady()) {
	          <div class="image-preview">
	            <img [src]="imageUrl()" alt="Imagen seleccionada" />
	          </div>
	        }
	        <!-- CARGA DE IMAGEN - FIN -->       

	</ion-col>
	...
	```

3. (STOP 5) Compruebe el resultado en el navegador.

### Documentación

* Documentación de [signals](https://angular.dev/essentials/signals) en Angular

### Fundamental

* Angular Signals en [X](https://x.com/AngularTrends/status/1824058459781836802)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Signals in Angular: deep dive for busy developers <a href="https://twitter.com/hashtag/angular?src=hash&amp;ref_src=twsrc%5Etfw">#angular</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://twitter.com/hashtag/frontend?src=hash&amp;ref_src=twsrc%5Etfw">#frontend</a> <a href="https://twitter.com/hashtag/webdev?src=hash&amp;ref_src=twsrc%5Etfw">#webdev</a> <a href="https://twitter.com/hashtag/dormosheio?src=hash&amp;ref_src=twsrc%5Etfw">#dormosheio</a> <a href="https://twitter.com/hashtag/frontenddev?src=hash&amp;ref_src=twsrc%5Etfw">#frontenddev</a> <a href="https://t.co/wTz8qybA3W">https://t.co/wTz8qybA3W</a></p>&mdash; AngularTrends (@AngularTrends) <a href="https://twitter.com/AngularTrends/status/1824058459781836802?ref_src=twsrc%5Etfw">August 15, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

signals

### Referencias

* Angular Signals. (n.d.). Retrieved from https://angular.dev/essentials/signals#
* Angular Pipe. (n.d.). Retrieved from https://angular.dev/api/common/PercentPipe