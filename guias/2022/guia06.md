---
theme: jekyll-theme-leap-day
---

## Guía 06

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* [Bootstrap](https://getbootstrap.com/) es un kit de herramientas para front-end potente, ampliable y repleto de funciones. Con el cual puedes crear y personalizar con Sass, utilizar el sistema de grillas y los componentes prediseñados.
	- Algunas características distintivas de la versión 5 se encuentran en la [documentación oficial](https://getbootstrap.com/docs/5.0/migration/) y en [Web3canvas](https://web3canvas.com/convert-bootstrap-4-to-5-migration-guide/).


### Actividades

* Revisar la documentación de [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
* [¿Cómo crear un sitio web con bootstrap?](https://azmind.com/convert-website-bootstrap-4/) explica el proceso de creación de una plantilla con Bootstrap; sin embargo, llevaremos a cabo el proceso desde cero, con:
	
	- Descargue y descomprima el archivo [bootstrap_partes.zip](../ejercicios/bootstrap_partes.zip)
	- Levante un servidor http.
	- Cree un archivo con extension `index.html` en la ruta que apunta el servidor http. 
		+ Utilice la plantilla base que ofrece Bootstrap que se encuentra en `plantilla_base.txt`. 
		+ Coloque la plantilla base en el `index.html`.
		+ Verifique en el navegador. 

	- [Componentes](https://getbootstrap.com/docs/5.2/components/). Bootstrap ofrece un conjunto de componentes (estructura - HTML, estilo - CSS y comportamiento - Javascript). Utilizaremos un `NAVBAR` de acuerdo con la [documentación](https://getbootstrap.com/docs/5.2/components/navbar/).
		+ Elimine la etiqueta `<h1>` de la etiqueta `<body>`.
		+ Utilice la barra de navegación que ofrece Bootstrap que se encuentra en `navbar.txt`. 
		+ Coloque la etiqueta `<nav>` dentro del `<body>`.
		+ Verifique en el navegador. 

	- [Contenedor](https://getbootstrap.com/docs/5.2/layout/containers/) son un bloque de construcción fundamental de Bootstrap que contienen, rellenan y alinean su contenido dentro de un dispositivo o ventana gráfica determinada.
		+ Luego de la etiqueta `<nav>`, agregue una etiqueta `<main>` con la clase `container-fluid`
			> <main class="container-fluid">
		+ Verifique en el navegador. 

	- [Sistema de rejillas](https://getbootstrap.com/docs/5.2/layout/grid/). Bootstrap utiliza una cuadrícula flexbox para dispositivos móviles para crear diseños de todas las formas y tamaños gracias a un sistema de doce columnas, seis niveles de respuesta predeterminados, variables Sass y mixins, y docenas de clases predefinidas.
		+ Utilice el carousel que ofrece Bootstrap que se encuentra en `carousel.txt`. 
		+ Coloque las etiquetas dentro del `<main>`
		+ Verifique en el navegador. 

		+ Utilice el layout de tarjetas que ofrece Bootstrap que se encuentra en `cards.txt`. 
		+ Coloque las etiquetas dentro del `<main>`
		+ Verifique en el navegador. 


	- Utilice la [documentación de Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/) como referencia para cambiar las clases en las etiquetas y experimentar los diferentes diseños y estilos. 

### Términos

`Front-end`, `CDN` ,`toolkit`, componentes

### Referencias

* Mark Otto, a. (2022). Bootstrap. Retrieved 8 June 2022, from https://getbootstrap.com/
* How To Convert a Website to Bootstrap 4 (Case Study) AZMIND. (2018). Retrieved 8 June 2022, from https://azmind.com/convert-website-bootstrap-4/
