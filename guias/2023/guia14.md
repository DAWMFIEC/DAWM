---
theme: jekyll-theme-leap-day
---

## Guía 14

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2023/proyecto05)

### Actividades previas

* Clona localmente tu repositorio **mpa**.
* Abra el proyecto en VSCode y levante el servidor.

### Actividades

#### Componentes

* Siga las instrucciones de ChatGPT que se encuentran [en línea](https://chat.openai.com/share/04b2d3fe-2083-4c15-ad17-d72b3583ba41) o [en la imagen](chatgpt/guia14-angular-components.png) para crear los componentes:
  - En la carpeta _shared_: `shared/navbar` y `shared/footer`
  - En la carpeta _index_: `index/content` y `index/navigation`.

* Para cada componente creado previamente:
	+ HTML
		- En **app.component.html** mueva la etiqueta `<nav>`:

		  ```
		  <!-- Navigation-->
		  <nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
		  ...
		  </nav>
		  ```

		- En **navigation.component.html** reemplace el contenido por la etiqueta html previamente copiada.
		
		- En **app.component.html** haga la llamada al selector del componente:

		  ```
		  <!-- Navigation-->
		  <app-navigation></app-navigation>
		  ```

* Revise los cambios al actualizar la página en el navegador o (re)iniciando el servidor.
* Inspeccione el sitio html.

#### Ruteo

#### Versionamiento

* Versiona local y remotamente el repositorio **mpa**.

### Fundamental

* Server-Side Rendering (SSR) y Static Site Generation (SSG/Prerendering) en [X](https://twitter.com/mgechev/status/1336298729347932161)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">A tiny demo with hybrid rendering in Angular Universal (SSR &amp; SSG) <a href="https://t.co/mgLY9yeVN1">https://t.co/mgLY9yeVN1</a><br><br>At build time:<br>- Universal prerenders routes without params<br><br>At runtime:<br>- Server tries to render prerendered page<br>- Server fallbacks to SSR<br><br>&lt;5 lines of diff to enable from default setup <a href="https://t.co/pvdIp0eYrB">pic.twitter.com/pvdIp0eYrB</a></p>&mdash; Minko Gechev (@mgechev) <a href="https://twitter.com/mgechev/status/1336298729347932161?ref_src=twsrc%5Etfw">December 8, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Documentación
  
* Los [componentes](https://angular.dev/guide/components) en Angular son los bloques principales en la arquitectura del framework. Los cuales están constituidos por una plantilla html, una clase en typescript, una hoja de estilo y una clase para las pruebas unitarias.

### Términos

Componentes, ruteo

### Referencias

* Angular. (2021). Retrieved 1 December 2021, from [https://angular.io/](https://angular.io/)
* Introduction to Angular Components and How to Implement It? (20202) https://www.simplilearn.com/tutorials/angular-tutorial/angular-components
* Guía de iniciación al data binding en Angular Qué es y cómo se utiliza. (2019). Retrieved 13 July 2022, from https://www.acontracorrientech.com/guia-practica-del-databinding-en-angular/