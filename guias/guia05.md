---
theme: jekyll-theme-leap-day
---

## Guía 05

[Regresar](/DAWM-2022/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* [¿Por qué aplicar "Mejora Progresiva"?](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps/Ventajas). Para ser reconocibles por los buscadores, las aplicaciones web deben proveer de los mecanismos para que el contenido sea indexable, indistintamente del navegador sobre el que se realice el requerimiento como cliente.
* [Media Queries](https://developer.mozilla.org/es/docs/CSS/Media_queries). Los media queries te permiten modificar el aspecto visual de tu página web de acuerdo a ciertas condiciones del navegador del cliente.
* [Puntos de interrrupción](https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/). Un aspecto importante del uso de Media Queries consiste en aplicar las reglas CSS de acuerdo al dispositivo en el que se muestra la página web, ahí la importancia de reconocer las dimensiones de los dispositivos, su disposición y el medio en el que se muestra la página web. 


### Actividades

* Utilice el diseño de su sitio web para dispositivo móvil para comparar con el sitio web que está desarrollando.
	- Use el Chrome Developer Tool, [Responsinator](http://www.responsinator.com/), [Website planet](https://www.websiteplanet.com/es/webtools/responsive-checker/), [Browserstack](https://www.browserstack.com/responsive) u otra herramienta.

* Aplique los componentes básicos para el diseño responsivo y verifique los resultados
	
	- [Viewport](https://www.w3schools.com/css/css_rwd_viewport.asp)

	>
	> <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	>

	- [Rejillas fluías y box-sizing](https://www.w3schools.com/css/css_rwd_grid.asp)

	>
	> `*, *:before, *:after {`
    > `    -webkit-box-sizing: border-box;`
    > `    -moz-box-sizing: border-box;`
    > `    box-sizing: border-box;`
    > `}`
	>

	- [Media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp), [Media types](https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries) y [Breakpoints](https://ui.dev/rwd/develop/browser-feature-support/media-queries-for-common-device-breakpoints)

	- [Imágenes](https://www.w3schools.com/css/css_rwd_images.asp) y [videos](https://www.w3schools.com/css/css_rwd_videos.asp)

	>
	> `img, video {`
  	> `  width: 100%;`
    > `  height: auto;`
    > `}`
	>

	- [Tipografía](https://www.browserstack.com/guide/how-to-create-responsive-website#toc6)

	>
	> `@media (min-width: 640px) { body {font-size:1rem;} }`
	> `@media (min-width:960px) { body {font-size:1.2rem;} }`
	> `@media (min-width:1100px) { body {font-size:1.5rem;} }`
	>

	- Uso de frameworks y plantillas, como [Bootstrap](https://getbootstrap.com/)


### Términos

`Responsive`

### Referencias

* The building blocks of responsive design - Progressive web apps (PWAs)  MDN. (2022). Retrieved 6 June 2022, from https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks
* Mejora Progresiva - Glosario MDN. (2020). Retrieved 6 June 2022, from https://developer.mozilla.org/es/docs/Glossary/Progressive_Enhancement
* @tamapugsley, @. (2022). Responsinator . Retrieved 6 June 2022, from http://www.responsinator.com/