---
theme: jekyll-theme-leap-day
---

## Guía 05

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* [¿Por qué aplicar "Mejora Progresiva"?](https://developer.mozilla.org/es/docs/Web/Progressive_web_apps/Ventajas). Para ser reconocibles por los buscadores, las aplicaciones web deben proveer de los mecanismos para que el contenido sea indexable, indistintamente del navegador sobre el que se realice el requerimiento como cliente.
* [Media Queries](https://developer.mozilla.org/es/docs/CSS/Media_queries). Los media queries te permiten modificar el aspecto visual de tu página web de acuerdo a ciertas condiciones del navegador del cliente.
* [Puntos de interrrupción](https://responsivedesign.is/develop/browser-feature-support/media-queries-for-common-device-breakpoints/). Un aspecto importante del uso de Media Queries consiste en aplicar las reglas CSS de acuerdo al dispositivo en el que se muestra la página web, ahí la importancia de reconocer las dimensiones de los dispositivos, su disposición y el medio en el que se muestra la página web. 


### Actividades

* Utilice el diseño de su sitio web para dispositivo móvil para comparar con el sitio web que está desarrollando.
	- Use el Chrome Developer Tool, [Responsinator](http://www.responsinator.com/), [Website planet](https://www.websiteplanet.com/es/webtools/responsive-checker/), [Browserstack](https://www.browserstack.com/responsive) u otra herramienta.

* Aplique los componentes básicos para el diseño responsivo y verifique los resultados
	
	- [Viewport](https://www.w3schools.com/css/css_rwd_viewport.asp), agrega el meta en la etiqueta head 

	>
	> `<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">`
	>

	- [Rejillas fluídas y box-sizing](https://www.w3schools.com/css/css_rwd_grid.asp), agrega en la hoja de estilos general la colocación de elementos con CSS Grid y/o Flexbox

	>
	> \* , \*:before, \*:after {<br>
    >     -webkit-box-sizing: border-box;<br>
    >     -moz-box-sizing: border-box;<br>
    >     box-sizing: border-box;<br>
    > }<br>
	>


	- [Media queries](https://www.w3schools.com/css/css_rwd_mediaqueries.asp), [Media types](https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries) y [Breakpoints](https://ui.dev/rwd/develop/browser-feature-support/media-queries-for-common-device-breakpoints). Agrega las reglas CSS dentro del media query, incluso la nueva colocación de los elementos para dispositivos móviles.

	>
	> /\* Smartphones (portrait and landscape) ----------- \*/<br>
	> @media only screen and (min-device-width: 320px) and (max-device-width: 480px) { <br>
	> 	/\* Styles \*/ <br>
	> }<br>
	>

	- [Imágenes](https://www.w3schools.com/css/css_rwd_images.asp) y [videos](https://www.w3schools.com/css/css_rwd_videos.asp). Agrega la regla CSS en la hoja de estilos general.

	>
	> img, video { <br>
	>   width: 100%; <br>
    >   height: auto; <br>
    > } <br>
	>

	- [Tipografía](https://www.browserstack.com/guide/how-to-create-responsive-website#toc6)

	>
	> @media (min-width: 640px) { body {font-size:1rem;} }<br>
	> @media (min-width:960px) { body {font-size:1.2rem;} }<br>
	> @media (min-width:1100px) { body {font-size:1.5rem;} }<br>
	>

	- Uso de frameworks y plantillas, como [Bootstrap](https://getbootstrap.com/)


### Términos

`Responsive`, renderizar, `media query`

### Referencias

* The building blocks of responsive design - Progressive web apps (PWAs)  MDN. (2022). Retrieved 6 June 2022, from https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks
* Mejora Progresiva - Glosario MDN. (2020). Retrieved 6 June 2022, from https://developer.mozilla.org/es/docs/Glossary/Progressive_Enhancement
* @tamapugsley, @. (2022). Responsinator . Retrieved 6 June 2022, from http://www.responsinator.com/
