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

#### Toma de fotos

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
  import { Preferences } from '@capacitor/preferences';

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

#### Guardar fotos

#### Carga de fotos

* Versiona local y remotamente el repositorio **hybrid**.

### Fundamental

### Documentación

* Ionic Icons en la [página oficial](https://ionic.io/ionicons)
* Ionic Components en la [página oficial](https://ionicframework.com/docs/components)

### Términos

### Referencias

* Ionicframework. (n.d.). Your First Ionic App: Angular: Ionic Documentation. Retrieved from https://ionicframework.com/docs/angular/your-first-app
* Ionicframework. (n.d.). Taking Photos with the Camera: Ionic Documentation. Retrieved from https://ionicframework.com/docs/angular/your-first-app/taking-photos