---
theme: jekyll-theme-leap-day
---

## Guía 14

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.

### Actividades

#### Bootstrap

* Incluya bootstrap y sus dependencias siguiendo las instrucciones, hasta el paso 5, de ChatGPT que se encuentran [en línea](https://chat.openai.com/share/0f0a9f90-bbef-439e-9d58-6fe73941a357) o [en la imagen](chatpgt/guia14-angular-bootstrap.png).

#### Plantilla

* Busque una plantilla gratuita de Bootstrap, por ejemplo: [Creative](https://startbootstrap.com/theme/creative).
* [Descargue](https://github.com/startbootstrap/startbootstrap-creative/archive/gh-pages.zip) y decomprima los archivos de la plantilla.
* Cambios básicos:
	+ HTML
		- **De la plantilla:** Del archivo `index.html`, copie todas las etiquetas (con su contenido): `<nav>`, `<header>`, `<section>`, `<div>` y `<footer>`. No copie las etiquetas `<script>`. 
		- **En el proyecto de Angular:** En el `src/app/app.component.html`, reemplace el contenido por las etiquetas html previamente copiadas. 
	+ ASSETS
		- **De la plantilla:** Copie todos los archivos que se encuentran dentro de la carpeta `assets`. 
		- **En el proyecto de Angular:** En la ruta `src/assets`, coloque los archivos previamente copiados.
	+ CSS:
		- **De la plantilla:** Del archivo `css/styles.css`, copie todas las reglas css.
		- **En el proyecto de Angular:** En el `src/styles.css`, pegue las reglas css previamente copiadas.

* Revise los cambios al actualizar la página en el navegador o (re)iniciando el servidor.

* Hojas de estilos externas `Bootstrap Icons`, `Google fonts` y `SimpleLightbox plugin CSS`:
   + CSS
   	   - De la **plantilla:** Del archivo `index.html`, copie el URL del recurso:
		
		  ```
		  ...
		  <!-- Bootstrap Icons-->
		  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />

		  <!-- Google fonts-->
		  <link href="https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700" rel="stylesheet" />
		  <link href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic" rel="stylesheet" type="text/css" />
		
		  <!-- SimpleLightbox plugin CSS-->
 		  <link href="https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css" rel="stylesheet" />
		  ...
		  ```

   	   - En el proyecto de **Angular:** En el `src/styles.css`, importe el recurso al inicio del archivo: 

		  ```
		  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css");
		 
		  @import url("https://fonts.googleapis.com/css?family=Merriweather+Sans:400,700");
		 
		  @import url("https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic");
		 
		  @import url("https://cdnjs.cloudflare.com/ajax/libs/SimpleLightbox/2.1.0/simpleLightbox.min.css");
		  ...
		  ```

* Revise los cambios al actualizar la página en el navegador o (re)iniciando el servidor.

* Archivo javascript de la plantilla `js/scripts.js`:
   + JS
   	  - De la **plantilla:** copie la carpeta `js`.  
   	  - En el proyecto de **Angular:** En la ruta `src`, pegue la carpeta `js`. Agregue la referencia en el archivo `angular.json`:

		 ```
	   	 ...
		 "scripts": [
		   "node_modules/bootstrap/dist/js/bootstrap.min.js",
		   "src/js/scripts.js"
		 ]
       	 ...
   	     ```

* Revise los cambios al actualizar la página en el navegador o (re)iniciando el servidor.

#### Componentes

* Siga las instrucciones de ChatGPT que se encuentran [en línea](https://chat.openai.com/share/04b2d3fe-2083-4c15-ad17-d72b3583ba41) o [en la imagen](chatpgt/guia14-angular-components.png) para crear los componentes: `navigation`, `masthead`, `about`, `services`, `portfolio`, `calltoaction`, `contact` y `footer`.

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

### Documentación
  
* Los [componentes](https://angular.io/guide/component-overview) en Angular son los bloques principales en la arquitectura del framework. Los cuales están constituidos por una plantilla html, una clase en typescript, una hoja de estilo y una clase para el testeo.

### Términos

Librería, marco de trabajo, bootstrapping, spa

### Referencias

* Angular. (2021). Retrieved 1 December 2021, from [https://angular.io/](https://angular.io/)
* Introduction to Angular Components and How to Implement It? (20202) https://www.simplilearn.com/tutorials/angular-tutorial/angular-components
* Guía de iniciación al data binding en Angular Qué es y cómo se utiliza. (2019). Retrieved 13 July 2022, from https://www.acontracorrientech.com/guia-practica-del-databinding-en-angular/