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
	
	- Descargue y descomprima el archivo [bootstrap_partes.zip](ejercicios/bootstrap_partes.zip)
	- Cree un archivo con extension `html`. 
		+ Utilice la plantilla base que ofrece Bootstrap que se encuentra en `plantilla_base.txt`. 
		+ Verifique en el navegador. 

	- [Contenedor](https://getbootstrap.com/docs/5.2/layout/containers/) son un bloque de construcción fundamental de Bootstrap que contienen, rellenan y alinean su contenido dentro de un dispositivo o ventana gráfica determinada.
		+ Elimine la etiqueta `<h1>` de la etiqueta `<body>`.
		+ Agregue un `<div>` con la clase `container-fluid`
			> <div class="container-fluid">

	- [Componentes](https://getbootstrap.com/docs/5.2/components/). Bootstrap ofrece un conjunto de componentes (estructura - HTML, estilo - CSS y comportamiento - Javascript). 

		+ `NAVBAR` Agregue la etiqueta `<navbar>` y modifique de acuerdo con la [documentación](https://getbootstrap.com/docs/5.2/components/navbar/).

			+ Utilice la barra de navegación que ofrece Bootstrap que se encuentra en `navbar.txt`. 
			+ Coloque las etiquetas dentro del `<div>` con la clase `container-fluid`.
			+ Verifique en el navegador. 

			



### Términos

`Front-end`, `toolkit`

### Referencias

* Mark Otto, a. (2022). Bootstrap. Retrieved 8 June 2022, from https://getbootstrap.com/
* How To Convert a Website to Bootstrap 4 (Case Study) | AZMIND. (2018). Retrieved 8 June 2022, from https://azmind.com/convert-website-bootstrap-4/
