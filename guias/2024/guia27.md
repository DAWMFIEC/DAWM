---
theme: jekyll-theme-leap-day
---

## Guía 27

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2024/proyecto05)

### Actividades previas

Revise [Angular y Signals: Transformando el desarrollo web](https://www.viewnext.com/angular-y-signals-transformando-el-desarrollo-web/) con la explicación de la implementación de Signals (arquitectura **suscripción** y **eventos**) para detectar y actualizar solo los cambios relevantes de un componente. 

### Actividades en clases

1. Clone localmente tu repositorio **hybrid**.
2. Abra el proyecto en VSCode y levante el servidor.
	
	```command
	ionic serve
	```

#### Ionic Page

1. Genere una página nueva, con:

	```command
	ionic generate page tab4
	```

2. Modifique _hybrid/src/app/tabs/page.ts_, con:

	```typescript
	import { ..., albums  } from 'ionicons/icons';
	...

	export class TabsPage {
	  ...

	  constructor() {
	    addIcons({ ..., albums });
	  }
	}
	```

2. Modifique _hybrid/src/app/tabs/page.hml_, con:

	```html
	<ion-tabs>
		<ion-tab-bar slot="bottom">
			
			...

			<ion-tab-button tab="tab4" href="/tabs/tab4">
		      <ion-icon aria-hidden="true" name="albums"></ion-icon>
		      <ion-label>Tab 4</ion-label>
		    </ion-tab-button>

	  	</ion-tab-bar>
	</ion-tabs>
	```

3. Modifique _hybrid/src/app/tabs/tabs.routes.ts_, con:

	```typescript
	...
	export const routes: Routes = [
		{
			...
			children: [
				...
				{
					path: 'tab4',
					loadComponent: () =>
					import('../tab4/tab4.page').then((m) => m.Tab4Page),
				},
				...
			],
		},
		...
	];
	```

4. (STOP 1) Revise los cambios en el navegador

    <div align="center">
      <img src="imagenes/ionic_tab4.jpg">
    </div>


#### Ionic Componente y Modal

1. Genere el componente **main** y **modal**, con:

	```command
	ionic generate component tab4/main 
	ionic generate component tab4/modal
	```

#### Tab4 - MainComponent

2. Modifique _hybrid/src/app/tab4/tab4.page.ts_, con:

	```typescript
	...
	import { ... , IonNav } from '@ionic/angular/standalone';
	import { MainComponent } from './main/main.component';
	
	@Component({
		...
		imports: [ ... , IonNav] 
	})
	export class Tab4Page implements OnInit {

	  component = MainComponent

	  ...
	
	}
	```

3. Reemplace todo el contenido de _hybrid/src/app/tab4/tab4.page.html_, con:

	```html
	<ion-nav [root]="component"></ion-nav>
	```

4. (STOP 2) Revise los cambios en el navegador

    <div align="center">
      <img src="imagenes/ionic_maincomponent.jpg">
    </div>


#### MainComponent - ModalComponent

1. Modifique _hybrid/src/app/tab4/main/main.page.ts_, con:

	```typescript
	...
	import { IonNav, IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
	import { ModalComponent } from '../modal/modal.component';
	
	@Component({
		...
		standalone: true,
		imports: [IonNav, IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton, IonButtons, IonBackButton]
	})
	export class MainComponent  implements OnInit {

	  modal = ModalComponent

	  ...
	
	}
	```

2. Reemplace todo el contenido de _hybrid/src/app/tab4/main/main.page.html_, con:

	```html
	<ion-header>
	  <ion-toolbar>
	    <ion-title>Tab4</ion-title>
	  </ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">
	  <h1>Tab4</h1>
	  @for (item of [1,2,3,4]; track $index) {
		  <ion-nav-link router-direction="forward" [component]="modal"
		    [componentProps]="{data: item}">
		    <ion-button>Modal {% raw %} {{ {% endraw %} item {% raw %} }} {% endraw %}</ion-button>
		  </ion-nav-link>
	  }
	</ion-content>
	```

3. (STOP 3) Revise los cambios en el navegador

    <div align="center">
      <img src="imagenes/ionic_buttons.jpg">
    </div>

#### ModalComponent

1. Modifique _hybrid/src/app/tab4/modal/modal.page.ts_, con:

	```typescript
	...
	import { ... , input } from '@angular/core';
	import { IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
	
	@Component({
		...
		standalone: true,
		imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonNavLink, IonButton, IonButtons, IonBackButton],
	})
	export class MainComponent  implements OnInit {

	  data = input(0)

	  ...
	
	}
	```

2. Reemplace todo el contenido de _hybrid/src/app/tab4/modal/modal.page.html_, con:

	```html
	<ion-header>
	  <ion-toolbar>
	    <ion-buttons slot="start">
	      <ion-back-button></ion-back-button>
	    </ion-buttons>
	    <ion-title>Modal</ion-title>
	  </ion-toolbar>
	</ion-header>
	<ion-content class="ion-padding">
	  <h1>Value</h1>
	  {% raw %} {{ {% endraw %} data() {% raw %} }} {% endraw %}
	</ion-content>
	```

3. Modifique _hybrid/src/main.ts_, con:

	```typescript
	...

	bootstrapApplication(AppComponent, {
	  providers: [
	    ...
	    provideIonicAngular({ useSetInputAPI: true }),
	    ...
	  ],
	});
	```

4. (STOP 4) Revise los cambios en el navegador

    <div align="center">
      <img src="imagenes/ionic_modal.jpg">
    </div>

### Documentación

[Ion-nav throws error when using input signals](https://github.com/ionic-team/ionic-framework/issues/29555)

### Fundamental

* Angular Signals en [X](https://x.com/AngularTrends/status/1824058459781836802)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Signals in Angular: deep dive for busy developers <a href="https://twitter.com/hashtag/angular?src=hash&amp;ref_src=twsrc%5Etfw">#angular</a> <a href="https://twitter.com/hashtag/javascript?src=hash&amp;ref_src=twsrc%5Etfw">#javascript</a> <a href="https://twitter.com/hashtag/frontend?src=hash&amp;ref_src=twsrc%5Etfw">#frontend</a> <a href="https://twitter.com/hashtag/webdev?src=hash&amp;ref_src=twsrc%5Etfw">#webdev</a> <a href="https://twitter.com/hashtag/dormosheio?src=hash&amp;ref_src=twsrc%5Etfw">#dormosheio</a> <a href="https://twitter.com/hashtag/frontenddev?src=hash&amp;ref_src=twsrc%5Etfw">#frontenddev</a> <a href="https://t.co/wTz8qybA3W">https://t.co/wTz8qybA3W</a></p>&mdash; AngularTrends (@AngularTrends) <a href="https://twitter.com/AngularTrends/status/1824058459781836802?ref_src=twsrc%5Etfw">August 15, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

suscripción, eventos, signals

### Referencias

* Angular University. (2024). Angular Signal Inputs: Complete Guide to input(). Retrieved from https://blog.angular-university.io/angular-signal-inputs/
* Angular University. (2024). Angular Signal Components: input, output (Complete Guide). Retrieved from https://blog.angular-university.io/angular-signal-components/
* Ionic-Team. (n.d.). bug: Ion-nav throws error when using input signals · Issue #29555 · ionic-team/ionic-framework. Retrieved from https://github.com/ionic-team/ionic-framework/issues/29555