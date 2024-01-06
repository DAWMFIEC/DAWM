---
theme: jekyll-theme-leap-day
---

## Guía 25

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

* Diseñe un prototipo con las interfaces de su aplicación móvil, con las siguientes páginas:
  + **Contenido principal** muestra la funcionalidad principal de la aplicación (por ejemplo, feed de noticias, catálogo de productos, etc.). Opcionalmente, puede incluir herramientas de búsqueda y filtros si es necesario.
  + **Detalles de un elemento** en una página individual muestra los detalles un elemento (por ejemplo, detalles de una publicación, detalles de un producto, etc.).
  + **Ingreso de un elemento** contiene las funcionalidades para agregar, ver y gestionar un elemento.
  + **Acerca de** con la información del proyecto y de las personas que intervienen en el proyecto.

* Seleccione un diseño que se ajuste a su prototipo. Puede considerar alguna de las siguientes fuentes: [Mobbin](https://mobbin.com/browse/android/apps) o [Scrnshts](https://scrnshts.club/) 

### Actividades

* Clone localmente tu repositorio **hybrid**.
* Abra el proyecto en VSCode y levante el servidor.

#### Acerca de

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
      addIcons({ ... , peopleCircle });
    }
  }
  ```

* Edite el archivo `tabs/tabs.page.html`, con:

  ```html
  <ion-tabs>
  	<ion-tab-bar slot="bottom">
  		...

	    <ion-tab-button tab="tab3" href="/tabs/tab3">
	      <ion-icon name="people-circle"></ion-icon>
	      <ion-label>Acerca de</ion-label>
	    </ion-tab-button>

	</ion-tab-bar>
  </ion-tabs>
  ```

* Versiona local y remotamente el repositorio **hybrid**.

### Fundamental

### Documentación

* Ionic Icons en la [página oficial](https://ionic.io/ionicons)
* Ionic Components en la [página oficial](https://ionicframework.com/docs/components)

### Términos

íconos, componentes

### Referencias

* Ionicframework. (n.d.). Your First Ionic App: Angular: Ionic Documentation. Retrieved from https://ionicframework.com/docs/angular/your-first-app