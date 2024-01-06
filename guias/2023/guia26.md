---
theme: jekyll-theme-leap-day
---

## Guía 26

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas



### Actividades

* Clone localmente tu repositorio **hybrid**.
* Abra el proyecto en VSCode y levante el servidor.


* Instale los módulos

  ```command
  npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem
  ```

* Cree el servicio 

  ```command
  ionic g service services/photo
  ```

* Agregue al servicio

  ```typescript
  ...
  import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
  import { Filesystem, Directory } from '@capacitor/filesystem';
  import { Preferences } from '@capacitor/preferences';
  ...


  public async addNewToGallery() {
	// Take a photo
	const capturedPhoto = await Camera.getPhoto({
	  resultType: CameraResultType.Uri,
	  source: CameraSource.Camera,
	  quality: 100
	});
  }
  ```

* Edite el archivo `tab2/tab2.page.ts`, con:

  ```typescript
  ...

  //Importe el servicio
  import { PhotoService } from '../services/photo.service';
  ...
  
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
	<ion-fab vertical="bottom" horizontal="center" slot="fixed">
		<ion-fab-button (click)="addPhotoToGallery()">
		  <ion-icon name="camera"></ion-icon>
		</ion-fab-button>
	</ion-fab>
  </ion-content>
  ```

* Versiona local y remotamente el repositorio **hybrid**.

### Fundamental

### Documentación

* Ionic Icons en la [página oficial](https://ionic.io/ionicons)
* Ionic Components en la [página oficial](https://ionicframework.com/docs/components)

### Términos

### Referencias

* Ionicframework. (n.d.). Your First Ionic App: Angular: Ionic Documentation. Retrieved from https://ionicframework.com/docs/angular/your-first-app