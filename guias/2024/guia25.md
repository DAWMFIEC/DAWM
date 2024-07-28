---
theme: jekyll-theme-leap-day
---

## Guía 25

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2024/proyecto05)

### Actividades previas


### Actividades en clases

* Clone localmente tu repositorio **hybrid**.
* Abra el proyecto en VSCode y levante el servidor.

#### IonTab

* En [Ionicons](https://ionic.io/ionicons), seleccione el ícono para la página, p.e.: `people` de tipo `filled`

* Edite el archivo `tabs/tabs.page.ts`, con:

  ```typescript
  ...

  //Importe la referencia al ícono peopleCircle
  import { ... , peopleCircle } from 'ionicons/icons';

  ...

  export class TabsPage {
    ...

    constructor() {

      //Iconos a utilizar
      addIcons({ ... , peopleCircle });
    }
  }
  ```

* Edite el archivo `tabs/tabs.page.html`, con:

  ```html
  <ion-tabs>
  	<ion-tab-bar slot="bottom">
  		
      ...

      <!-- Ícono y nombre del tab -->
	    <ion-tab-button tab="tab3" href="/tabs/tab3">
	       <ion-icon name="people-circle"></ion-icon>
	       <ion-label>Acerca de</ion-label>
	    </ion-tab-button>

	  </ion-tab-bar>
  </ion-tabs>
  ```

* Revise los cambios en el navegador

#### IonCard

* Revise la documentación del componente [IonCard](https://ionicframework.com/docs/api/card), el [Layout - CSS Utilities](https://ionicframework.com/docs/layout/css-utilities#element-padding) y el [Theming - Colors](https://ionicframework.com/docs/theming/colors#adding-colors).

* Edite el archivo `tab3/tab3.page.ts`, con:
  
  ```typescript
  ...

  
  import { 
  	...  

    //Importe los componentes
    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
    
    ... 
  } from '@ionic/angular/standalone';

  @Component({
	  ...
	  imports: [
	    ... 

	    //Registre los componentes
	    IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
	    
      ...],
  })
  export class Tab3Page {
	  constructor() {}
  }
  ```

* Edite el archivo `tab3/tab3.page.html`, con:

  ```html
  ...

  <!-- Padding en sus cuatro lados -->
  <ion-content [fullscreen]="true" class="ion-padding">

	  <ion-card>
	    <ion-card-header>

        <!-- clase en la hoja de estilo -->
	      <ion-card-title class="titulo">Mi aplicación</ion-card-title>
	    
      </ion-card-header>
	  
	    <ion-card-content>

        <!-- identificador en la hoja de estilo -->
        <p id="descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
	        Sed nesciunt officia est sapiente quidem accusantium, veritatis perferendis 
	        expedita, ad magni temporibus totam eligendi quod nemo sit eveniet, odit 
	        inventore aspernatur!</p>

	    </ion-card-content>
	  </ion-card>

  </ion-content>
  ```

* Edite el archivo `tab3/tab3.page.scss`, con:

  ```css
  .titulo {
  	color: var(--ion-color-primary);
      font-weight: bold;
      text-align: center;
  }

  p#descripcion {
  	text-align: justify;
  }
  ```

* Revise los cambios en el navegador, con:

  ```command
  ionic serve
  ```

* Versiona local y remotamente el repositorio **hybrid**.

### Documentación

* Ionic Icons en la [página oficial](https://ionic.io/ionicons)
* Ionic Components en la [página oficial](https://ionicframework.com/docs/components)

### Fundamental

* Estructura de componentes de Ionic en [X](https://twitter.com/93alan/status/1512587338962116611)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">This is why I love <a href="https://twitter.com/Ionicframework?ref_src=twsrc%5Etfw">@Ionicframework</a>. We can build essentially any UI, sometimes even like this iOS Twitter settings screen with UI Components out of the box. 👨🏼‍🔧<br><br>Everything you see here is from Ionic, <a href="https://twitter.com/ionicons?ref_src=twsrc%5Etfw">@ionicons</a> and styled using Ionic&#39;s theme application colors. <a href="https://t.co/ZocsDvBShH">pic.twitter.com/ZocsDvBShH</a></p>&mdash; Alan Montgomery (@93alan) <a href="https://twitter.com/93alan/status/1512587338962116611?ref_src=twsrc%5Etfw">April 9, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

íconos, componentes

### Referencias

* Ionicframework. (n.d.). Your First Ionic App: Angular: Ionic Documentation. Retrieved from https://ionicframework.com/docs/angular/your-first-app