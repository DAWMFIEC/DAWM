---
theme: jekyll-theme-leap-day
---

## Guía 02

[Regresar](/DAWM-2022/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* [Bootstrap](https://getbootstrap.com/) es un kit de herramientas para front-end potente, ampliable y repleto de funciones. Con el cual puedes crear y personalizar con Sass, utilizar el sistema de grillas y los componentes prediseñados.
	- Algunas características distintivas de la versión 5 se encuentran en la [documentación oficial](https://getbootstrap.com/docs/5.0/migration/) y en [Web3canvas](https://web3canvas.com/convert-bootstrap-4-to-5-migration-guide/).


### Actividades

* Revisar la documentación de [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
* [¿Cómo crear un sitio web con bootsrap?](https://azmind.com/convert-website-bootstrap-4/) explica el proceso de creación de una plantilla con Bootstrap; sin embargo, llevaremos a cabo el proceso desde cero, con:
	- Utiliza la plantilla base que ofrece Bootstrap

	> <!doctype html><br>
	> <html lang="en"><br>
	>   <head><br>
	>     <meta charset="utf-8"><br>
	>     <meta name="viewport" content="width=device-width, initial-scale=1"><br>
	>     <title>Mi sitio</title><br>
	>     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"><br>
	>   </head><br>
	>   <body><br>
	>     <h1>Hello, world!</h1><br>
	>     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity=" sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script><br>
	>   </body><br>
	> </html><br>

	- [Componentes](https://getbootstrap.com/docs/5.2/components/). Bootstrap ofrece un conjunto de componentes (estructura - HTML, estilo - CSS y comportamiento - Javascript). 

		+ Elimine la etiqueta `<h1>` de la etiqueta `<body>`
		+ Agregue la etiqueta `<navbar>` y modifique de acuerdo con la documentación

			> <!-- Top menu --><br>
		    > <nav class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg"><br>
		    >   <div class="container-fluid"><br>
		    >     <a class="navbar-brand" href="#">Mi sitio</a><br>
		    >     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><br>
		    >       <span class="navbar-toggler-icon"></span><br>
		    >     </button><br>
		    >     <div class="collapse navbar-collapse" id="navbarNav"><br>
		    >       <ul class="navbar-nav"><br>
		    >         <li class="nav-item"><br>
		    >           <a class="nav-link active" aria-current="page" href="#">Inicio</a><br>
		    >         </li><br>
		    >         <li class="nav-item"><br>
		    >           <a class="nav-link" href="#">Servicios</a><br>
		    >         </li><br>
		    >         <li class="nav-item"><br>
		    >           <a class="nav-link" href="#">Trabajos</a><br>
		    >         </li><br>
		    >         <li class="nav-item"><br>
		    >           <a class="nav-link disabled">Admin</a><br>
		    >         </li><br>
		    >       </ul><br>
		    >     </div><br>
		    >   </div><br>
		    > </nav><br>



### Términos

`Front-end`, `toolkit`

### Referencias

* Mark Otto, a. (2022). Bootstrap. Retrieved 8 June 2022, from https://getbootstrap.com/
* How To Convert a Website to Bootstrap 4 (Case Study) | AZMIND. (2018). Retrieved 8 June 2022, from https://azmind.com/convert-website-bootstrap-4/
