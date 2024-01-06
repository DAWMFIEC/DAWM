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

* Cree la interfaz

  ```command
  ionic g interface interface/UserPhoto
  ```

* Modifique el archivo `interface/UserPhoto`

  ```typescript
  export interface UserPhoto {
	filepath: string;
	webviewPath?: string;
  }
  ```

* Modifique el archivo `service/photo.service.ts`

  ```typescript

  ...
  //Importe la interfaz
  import { UserPhoto } from '../interface/user-photo';
  
  export class PhotoService {

  	//Atributo para almacenar las fotos
  	public photos: UserPhoto[] = [];

  	...
  	public async addNewToGallery() {
	    // Take a photo
	    const capturedPhoto = await Camera.getPhoto({
	      resultType: CameraResultType.Uri,
	      source: CameraSource.Camera,
	      quality: 100
	    });

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
  import { CommonModule } from '@angular/common'
  import { ... IonImg, IonCol, IonRow, IonGrid } from '@ionic/angular/standalone';

  @Component({
  	...
	imports: [ CommonModule, ... , IonImg, IonCol, IonRow, IonGrid]
  })
  export class Tab2Page {
  
  ...

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
* Ionicframework. (n.d.). Taking Photos with the Camera: Ionic Documentation. Retrieved from https://ionicframework.com/docs/angular/your-first-app/taking-photos