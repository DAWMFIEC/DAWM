---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM-2022/)

Angular - Material 
==================

[Angular Material](https://material.angular.io/) es una librería de componente de UI. Los componentes de Angular Material ayudan a construir páginas web y aplicaciones web atractivas, consistentes y funcionales mientras se adhieren a los principios del diseño web moderno como la portabilidad del navegador, la independencia del dispositivo y la degradación elegante. Ayuda a crear sitios web más rápidos, hermosos y receptivos. Está inspirado en el diseño de materiales de Google.

Proyecto en Angular
===================

* * *

Utiliza el proyecto que desarrollaste con los tutoriales de [Angular - Local](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_local.html) y [Angular - Boostrap](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_bootstrap.html).

* Instala las dependencias, con: `npm install`
* Verifica que funcione correctamente al levantar los servicios: `ng serve -o`


Angular Material
================

* * *

Desde la línea de comando, del proyecto de Angular:

* Instale Angular Material, con: `ng add @angular/material`
  + Seleccione el tema prediseñado
  + Acepte el estilo de tipografía
  + Acepte las animaciones para el navegador (browser animations)
* Note los cambios en los archivos en

<p align="center">
  <img src="imagenes/angular_material_instalacion.png">
</p>

* Actualice el navegador o (re)inicie el servidor

Interfaz
========

* * *

Para el diseño de la interfaz, vamos a colocar algunos componentes, como: toolbar, button, card, etc.

**Componente de Angular Material:** Toolbar
-------------------------------------------

* En **src/app/app.module.ts**
  + Agregue la referencia al [API del componente Toolbar](https://material.angular.io/components/toolbar/api) 
  + Agregue el módulo **MatToolbarModule** en el arreglo `import`.
 
  <pre><code>
  ...  
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
  <b style="color: red">import { MatToolbarModule } from '@angular/material/toolbar';</b>
  ...  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    BrowserAnimationsModule,  
    <b style="color: red">MatToolbarModule,</b>
  ],  
  ...
  </code></pre>

* En **src/app/app.component.html**

  ```
    <mat-toolbar color="primary">
      <span>Mi aplicación</span>
    </mat-toolbar>
  ```  

* Actualice el navegador o (re)inicie el servidor

**Componente de Angular Material:** Button + Icon
-------------------------------------------------

* En **src/app/app.module.ts**
  + Agregue la referencia al [API del componente Button](https://material.angular.io/components/button/overview) y [API del componente Icon](https://material.angular.io/components/icon/api)
  + Agregue los módulos **MatIconModule** y **MatButtonModule** en el arreglo `import`.


  <pre><code>
  import { MatToolbarModule } from '@angular/material/toolbar';  
  <b style="color: red">import {MatIconModule} from '@angular/material/icon';  
  import {MatButtonModule} from '@angular/material/button';</b>

  ...  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    BrowserAnimationsModule,  
    MatToolbarModule,  
    <b style="color: red">MatIconModule,  
    MatButtonModule</b>
  ],  
  ...
  </code></pre>

* En **src/app/app.component.html**

  ```
    <mat-toolbar color="primary">  
      <button mat-icon-button color="accent" aria-label="Example icon button with a menu icon">  
         <mat-icon>menu</mat-icon>  
      </button>  
      <span>Mi aplicación</span>  
    </mat-toolbar>
  ```

* Actualice el navegador o (re)inicie el servidor


**Componente de Angular Material:** Card
-------------------------------------------------

* En **src/app/app.module.ts**
  + Agregue la referencia al [API del componente Card](https://material.angular.io/components/card/api)
  + Agregue el módulo **MatCardModule** en el arreglo `import`.


  <pre><code>
  import { MatToolbarModule } from '@angular/material/toolbar';
  import {MatIconModule} from '@angular/material/icon';  
  import {MatButtonModule} from '@angular/material/button';
  <b style="color: red">import {MatCardModule} from '@angular/material/card';</b>

  ...  
  imports: [  
    BrowserModule,  
    AppRoutingModule,  
    BrowserAnimationsModule,  
    MatToolbarModule,
    MatIconModule,  
    MatButtonModule,  
    <b style="color: red">MatCardModule</b>
  ],  
  ...
  </code></pre>

* En **src/app/app.component.html**

  ```
    <mat-toolbar color="primary">  
      <button mat-icon-button color="accent" aria-label="Example icon button with a menu icon">  
         <mat-icon>menu</mat-icon>  
      </button>  
      <span>Mi aplicación</span>  
    </mat-toolbar>
    <mat-card class="example-card">
      <mat-card-header>
        <div mat-card-avatar class="example-header-image"></div>
        <mat-card-title>Shiba Inu</mat-card-title>
        <mat-card-subtitle>Dog Breed</mat-card-subtitle>
      </mat-card-header>
      <img mat-card-image src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="Photo of a Shiba Inu">
      <mat-card-content>
        <p>
          The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
          A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
          bred for hunting.
        </p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>LIKE</button>
        <button mat-button>SHARE</button>
      </mat-card-actions>
    </mat-card>
  ```

* Actualice el navegador o (re)inicie el servidor


Referencias 
===========

* * *

* Angular Material Tutorial. (2022). Retrieved 20 July 2022, from https://www.tutorialspoint.com/angular_material/index.htm