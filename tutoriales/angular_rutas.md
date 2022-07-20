---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM-2022/)

Angular - Rutas 
===============

En Angular, la mejor práctica es cargar y configurar el enrutador en un módulo separado de nivel superior. El enrutador está dedicado al enrutamiento e importado por el AppModule. Por convención, el nombre de la clase del módulo es AppRoutingModule y pertenece a `app-routing.module.ts` en el directorio **src/app**.

Proyecto en Angular
===================

* * *

Utiliza el proyecto que desarrollaste con los tutoriales de [Angular - Local](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_local.html) y [Angular - Boostrap](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_bootstrap.html).

* Instala las dependencias, con: `npm install`
* Verifica que funcione correctamente al levantar los servicios: `ng serve -o`


Componentes 
-----------

* En la raíz del proyecto en Angular
* Desde la línea de comandos, cree los componentes **splash** y **principal**. De acuerdo con las instrucciones en [Angular - Componentes, Comunicación y Directivas](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_bases.html).

Rutas 
-----

* Modifique el archivo **app/app-routing.module.ts**
  + Agregue la referencia a los componentes **splash** y **principal**.
  + Agregue las rutas a sus correspondientes componentes.
  
  <pre><code>
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';

  <b style="color: red">
  import { SplashComponent } from './splash/splash.component';
  import { PrincipalComponent } from './principal/principal.component';
  </b>

  <b style="color: red">
  const routes: Routes = [
      { path: "splash", component: SplashComponent },
      { path: "principal", component: PrincipalComponent },
      { path: "**", redirectTo: "splash" }
    ];
  </b>
    
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  </code></pre>

* Modifique el archivo **app.component.html**
  + Reemplace TODO el contenido por
    
    ```html
    <router-outlet></router-outlet>
    ```

* Inicie el servidor, con: `ng serve -o`
  + Por defecto, la aplicación se redirige a la ruta **http://localhost:4200/splash**

  <p align="center">
    <img src="imagenes/angular_rutas_splash.png">
  </p>

  + Acceda a la ruta **http://localhost:4200/principal**

  <p align="center">
    <img src="imagenes/angular_rutas_principal.png">
  </p>

Referencias 
===========

* * *

* Navegar entre rutas de Angular utilizando routerLink. (2020). Retrieved 20 July 2022, from https://dev.to/facurodriguez/navegar-entre-rutas-de-angular-utilizando-routerlink-3gon
* Angular. (2022). Retrieved 20 July 2022, from https://angular.io/tutorial/toh-pt5