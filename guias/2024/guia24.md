---
theme: jekyll-theme-leap-day
---

## Guía 24

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

* Diseñe un prototipo con las interfaces de su aplicación móvil, con las siguientes páginas:
  + **Contenido principal** muestra la funcionalidad principal de la aplicación (por ejemplo, feed de noticias, catálogo de productos, etc.). Opcionalmente, puede incluir herramientas de búsqueda y filtros si es necesario.
  + **Detalles de un elemento** en una página individual muestra los detalles un elemento (por ejemplo, detalles de una publicación, detalles de un producto, etc.).
  + **Ingreso de un elemento** contiene las funcionalidades para agregar, ver y gestionar un elemento.
  + **Acerca de** con la información del proyecto y de las personas que intervienen en el proyecto.

* Seleccione un diseño que se ajuste a su prototipo. Puede considerar alguna de las siguientes fuentes: [Mobbin](https://mobbin.com/browse/android/apps) o [Scrnshts](https://scrnshts.club/) 

### Actividades en clases

#### Dependencias Globales

* Instale los módulos Ionic CLI, native-run (para ejecutar binarios nativos en dispositivos y simuladores/emuladores) y cordova-res (para generar íconos de aplicaciones nativas y pantallas de presentación), con: 

  ```command
  npm install -g @ionic/cli native-run cordova-res
  ```

#### Github

* Crea un repositorio en GitHub con el nombre **hybrid**.

#### Ionic Angular - Plantilla inicial

* Cree un proyecto en Ionic:
  + Desde la línea de comandos, utilice el comando **ionic** con: 

    ```command
    ionic start <NOMBRE_DE_LA_APLICACION> tabs --type=angular --capacitor
    ```

  + Seleccione el tipo componente Standalone para construir la aplicación

  	```
  	? Would you like to build your app with NgModules or Standalone Components?
  	...
  	> Standalone
  	```

  + Acceda a la carpeta del proyecto y levante el servidor, con:

	```command
	cd <NOMBRE_DE_LA_APLICACION> 
	ionic serve
	```

* Versiona local y remotamente el repositorio **hybrid**.

### Documentación

* Ionic Framework en la [página oficial](https://ionicframework.com/).

### Fundamental

* Vendor Category Management con Ionic en [X](https://twitter.com/Ionicframework)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">Wow. Achieved more than I expected this morning.<br><br>Vendor Category Management ✨<br><br>✅ CRUD Endpoints<br>✅ Sortable Endpoint (thanks <a href="https://twitter.com/spatie_be?ref_src=twsrc%5Etfw">@spatie_be</a>)<br>✅ Implemented into app 👌<a href="https://twitter.com/hashtag/buildinpublic?src=hash&amp;ref_src=twsrc%5Etfw">#buildinpublic</a> <a href="https://t.co/yYoqqOUNO2">pic.twitter.com/yYoqqOUNO2</a></p>&mdash; Philip Moore (@philmmoore) <a href="https://twitter.com/philmmoore/status/1741406339924943136?ref_src=twsrc%5Etfw">December 31, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

UI framework

### Referencias

* Ionicframework. (n.d.). Your First Ionic App: Angular: Ionic Documentation. Retrieved from https://ionicframework.com/docs/angular/your-first-app