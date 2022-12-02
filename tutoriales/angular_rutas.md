---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

Angular - Rutas 
===============

<p align="center">
  <img src="imagenes/angular_rutas.png">
</p>

En Angular, la mejor práctica es cargar y configurar el enrutador en un módulo separado de nivel superior. El enrutador está dedicado al enrutamiento e importado por el AppModule. Por convención, el nombre de la clase del módulo es AppRoutingModule y pertenece a `app-routing.module.ts` en el directorio **src/app**.

Proyecto en Angular
===================

* * *

Crea un nuevo proyecto, según [Angular - Local](https://dawfiec.github.io/DAWM/tutoriales/angular_local.html), agregue Bootstrap según [Angular - Boostrap](https://dawfiec.github.io/DAWM/tutoriales/angular_bootstrap.html) y cree la aplicación híbrida base según .

* O, Clone el proyecto con las [aplicaciones del curso](https://github.com/DAWFIEC/DAWM-apps) para la aplicación **hibrida/clienteAngular**
    - Para el hito: **`hito2-hibrida`**


Componentes 
-----------

* En la raíz del proyecto en Angular
* Desde la línea de comandos, cree los componentes **splash** y **principal**. De acuerdo con las instrucciones en [Angular - Componentes, Comunicación y Directivas](https://dawfiec.github.io/DAWM/tutoriales/angular_bases.html).

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

* Modifique el archivo **src/app/app.component.html**
  + La etiqueta `<router-outlet>` le dice al enrutador dónde mostrar las vistas enrutadas.
  + Reemplace TODO el contenido por
    
    ```html
    <nav>
      <a href="/splash">Splash</a> |
      <a href="/principal">Principal</a>
    </nav>   
    <router-outlet></router-outlet>
    ```

* Inicie el servidor, con: `ng serve -o`
  + Por defecto, la aplicación se redirige a la ruta **http://localhost:4200/splash** en cualquier caso
  + Acceda al enlace **Splash** con la ruta **http://localhost:4200/splash**

  <p align="center">
    <img src="imagenes/angular_rutas_splash.png">
  </p>

  + Acceda al enlace **Principal** con la ruta **http://localhost:4200/principal**

  <p align="center">
    <img src="imagenes/angular_rutas_principal.png">
  </p>


* Para evitar el refrescamiento completo de la página, utilice la **directiva** `routerLink`
  
  ```html
    <nav>
      <a routerLink="/splash">Splash</a> |
      <a routerLink="/principal">Principal</a>
    </nav>   
    <router-outlet></router-outlet>
    ```

Rutas (desde la barra de navegación)
------------------------------------

Cuando se quiere ir a una URL a otra, desde la barra de navegación, puede resultar un error debido a que el sistema asume que es una ubicación física. [Para resolver este particular](https://dawfiec.github.io/DAWM/tutoriales/angular_rutas.html), debes:

* En **app.module.ts**, agregue los módulos `HashLocationStrategy` y `LocationStrategy`, con:

<pre><code>
  ...
  import { AppComponent } from './app.component';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  ...
  <b style="color:red">
  import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
  </b>
  ...
</code></pre>

* Agregue los módulos en el arreglo con la clave **providers**

<pre><code>
  ...
  providers: [
    <b style="color:red">
    {provide : LocationStrategy , useClass: HashLocationStrategy}
    </b>
  ],
  ...
</code></pre>

Referencias 
===========

* * *

* Navegar entre rutas de Angular utilizando routerLink. (2020). Retrieved 20 July 2022, from https://dev.to/facurodriguez/navegar-entre-rutas-de-angular-utilizando-routerlink-3gon
* Angular. (2022). Retrieved 20 July 2022, from https://angular.io/tutorial/toh-pt5
* Enrutamiento en Angular. (2017). Retrieved 26 July 2022, from https://aristotekean.medium.com/enrutamiento-en-angular-996f14e89293
* Angular 6 : 404 error during refresh after deployment. (2019). Retrieved 8 August 2022, from https://medium.com/tinywave/angular-6-404-error-during-refresh-after-deployed-8cec7140b584