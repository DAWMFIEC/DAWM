---
theme: jekyll-theme-leap-day
---

## Guía 26

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

### Actividades

* Clone localmente tu repositorio **hybrid**.
* Abra el proyecto en VSCode y levante el servidor.
* Instale los módulos con la funcionalidad nativa

  ```command
  npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
  ```

#### Camera API

* Cree la interfaz `interface/UserPhoto`

  ```command
  ionic g interface interface/UserPhoto
  ```

* Modifique el archivo `interface/user-photo.ts`

  ```typescript
  export interface UserPhoto {
	filepath: string;
	webviewPath?: string;
  }
  ```

* Cree el servicio `services/photo`

  ```command
  ionic g service services/photo
  ```

* Modifique el archivo `services/photo.service.ts`

  ```typescript
  ...

  //Importe los módulos con la funcionalidad nativa
  import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
  import { Filesystem, Directory } from '@capacitor/filesystem';
  

  //Importe la interfaz
  import { UserPhoto } from '../interface/user-photo';


  export class PhotoService {

  	//Atributo para almacenar las fotos
  	public photos: UserPhoto[] = [];

  	constructor() { }

  	public async addNewToGallery() {

  		// Tome una foto
  		const capturedPhoto = await Camera.getPhoto({
  			resultType: CameraResultType.Uri,
  			source: CameraSource.Camera,
  			quality: 100
  		});

  		// Agregue el archivo al inicio del arreglo
  		this.photos.unshift({
  			filepath: "soon...",
  			webviewPath: capturedPhoto.webPath!
  		});
  	}
  }
  ```

* Edite el archivo `tab2/tab2.page.ts`, con:

  ```typescript
  ...
  // Importe el módulo con la directiva @ngFor
  import { CommonModule } from '@angular/common'

  // Importe los componentes de la UI
  import { ... , IonFab, IonFabButton, IonIcon, IonImg, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';

  //Importe el servicio
  import { PhotoService } from '../services/photo.service';
  ...
  
  @Component({
  	...
  	// Registre los módulos
	imports: [ ... , CommonModule, IonFab, IonFabButton, IonIcon, IonImg, IonCol, IonRow, IonGrid]
  })
  export class Tab2Page {

  	//Inyecte la dependencia del servicio
  	constructor(public photoService: PhotoService) {}

  	//Método a invocar
  	addPhotoToGallery() {
  		this.photoService.addNewToGallery();
  	}

  }
  ```

* Edite el archivo `tab2/tab2.page.html`, con:

  ```html
  ...
  <ion-content>
  	<!-- Muestra los elementos -->
  	<ion-grid>
  		<ion-row>
  			<ion-col size="6" *ngFor="let photo of photoService.photos; index as position">
  				<ion-img [src]="photo.webviewPath"></ion-img>
  			</ion-col>
  		</ion-row>
  	</ion-grid>


  	<!-- Muestra el obtón y habilita el servicio de la cámara --> 
  	<ion-fab vertical="bottom" horizontal="center" slot="fixed">
  		<ion-fab-button (click)="addPhotoToGallery()">
  			<ion-icon name="camera"></ion-icon>
		</ion-fab-button>
	</ion-fab>
  </ion-content>
  ```

* Revise los cambios en el navegador, con:

  ```command
  ionic serve
  ```

#### Filesystem API

* Modifique el método **addNewToGallery**, en el archivo `services/photo.service.ts`

  ```typescript
  ...
  // Importa el módulo Platform y Capacitor
  import { Platform } from '@ionic/angular';
  import { Capacitor } from '@capacitor/core';

  ...
  export class PhotoService {


  	//Referencia local a la plataforma utilizada 'hybrid' o 'web'
  	private platform: Platform;
  	

  	//Referencia en la inyección de dependencias
  	constructor(platform: Platform) {
	    this.platform = platform;
	}

  	public async addNewToGallery() {
  		...

  		// Agregue el archivo al inicio del arreglo
  		const savedImageFile = await this.savePicture(capturedPhoto);
  		this.photos.unshift(savedImageFile);

  		/*
	    this.photos.unshift({
	      filepath: "soon...",
	      webviewPath: capturedPhoto.webPath!
	    });
	    */
  	}

  }
  ```

* Agregue los métodos **savePicture**, **readAsBase64** y **convertBlobToBase64**, en el archivo `services/photo.service.ts`

  ```typescript
  ...
  export class PhotoService {
  	...

  	private async savePicture(photo: Photo) {
	    // Convierta la foto al formato base64, requerido por el API para guardar en el sistema de archivos
	    const base64Data = await this.readAsBase64(photo);
	  
	    // Escriba el archivo en el directorio de datos.
	    const fileName = Date.now() + '.jpeg';
	    const savedFile = await Filesystem.writeFile({
	      path: fileName,
	      data: base64Data,
	      directory: Directory.Data
	    });


	    if (this.platform.is('hybrid')) {
	      // Muestre la nueva imagen reescribiendo la ruta 'file://' a HTTP
	      // Detalles: https://ionicframework.com/docs/building/webview#file-protocol
	      return {
	        filepath: savedFile.uri,
	        webviewPath: Capacitor.convertFileSrc(savedFile.uri),
	      };
	    }
	    else {
	  
		    // Utilice webPath para mostrar la nueva imagen en lugar de base64 ya que 
		    // ya está cargada en la memoria
		    return {
		      filepath: fileName,
		      webviewPath: photo.webPath
		    };

		}
	}

	private async readAsBase64(photo: Photo) {

		// "hybrid" detecta si es Cordova o Capacitor
		if (this.platform.is('hybrid')) {
			// Lee el archivo en formato base64
			const file = await Filesystem.readFile({
			  path: photo.path!
			});

			return file.data;
		}
		else {
			// Obtenga la foto, léala como un blob y luego conviértala al formato base64.
			const response = await fetch(photo.webPath!);
			const blob = await response.blob();

			return await this.convertBlobToBase64(blob) as string;
		}
	}

	private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onerror = reject;
		reader.onload = () => {
		    resolve(reader.result);
		};
		reader.readAsDataURL(blob);
	});
  }
  ```

* Revise los cambios en el navegador, con:

  ```command
  ionic serve
  ```

* Versiona local y remotamente el repositorio **hybrid**.

### Fundamental

### Documentación

* Ionic Icons en la [página oficial](https://ionic.io/ionicons)
* Ionic Components en la [página oficial](https://ionicframework.com/docs/components)

### Términos

### Referencias

* Ionicframework. (n.d.). Your First Ionic App: Angular: Ionic Documentation. Retrieved from https://ionicframework.com/docs/angular/your-first-app
* Ionicframework. (n.d.). Taking Photos with the Camera: Ionic Documentation. Retrieved from https://ionicframework.com/docs/angular/your-first-app/taking-photos