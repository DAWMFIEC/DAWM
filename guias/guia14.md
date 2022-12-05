---
theme: jekyll-theme-leap-day
---

## Guía 14

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* [PWA](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps/Introduction) es una abreviatura utilizada inicialmente por Google para el concepto de crear una aplicación flexible y adaptable utilizando solo tecnologías web, permitiéndo que las aplicaciones funcionen sin conexión, sean instalables, sincronizables, que envíen notificaciones automáticas, etc.
* [Servicios](https://desarrolloweb.com/articulos/servicios-angular.html) son proveedores de datos que serán consumidos por los componentes.


### Prerrequisito

* Genere una aplicación en Angular, siguiendo las instrucciones:
  
  + De la [Guía 13](https://dawfiec.github.io/DAWM/guias/guia13.html), o 
  + Clone el proyecto con las [aplicaciones del curso](https://github.com/DAWFIEC/DAWM-apps) para la aplicación **spa/clienteAngular**
    - Para el hito: **`hito1-spa`**

### Actividades

* Convierta la aplicación a **PWA** y compruebe el funcionamiento offline, de acuerdo con las instrucciones de [Angular - PWA](https://dawfiec.github.io/DAWM/tutoriales/angular_pwa.html).
* Cree y consuma el servicio **servicios/navbar**, de acuerdo con las instrucciones de [Angular - Servicios](https://dawfiec.github.io/DAWM/tutoriales/angular_servicios.html)
  + Realice peticiones al [URL](https://dawm-fiec-espol-default-rtdb.firebaseio.com/navbar.json)
  + Cree y utilice la interfaz **interfaz/Navbar** de acuerdo con la estructura del [URL](https://dawm-fiec-espol-default-rtdb.firebaseio.com/navbar.json)
* Modifique el componente **NavbarComponent**
  + Inyecte la dependencia del servicio en el constructor
  + Cree los atributos necesarios y renderícelos donde considere conveniente en la vista del componente. 
* Revise la página de [errores](https://dawfiec.github.io/DAWM/paginas/errores.html) de ser necesario.

### Términos

`PWA`, offline, service worker

### Referencias

* Introducción a aplicaciones web progresivas - Aplicaciones Web Progresivas MDN. (2022). Retrieved 17 July 2022, from https://developer.mozilla.org/es/docs/Web/Progressive_web_apps/Introduction