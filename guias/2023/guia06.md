---
theme: jekyll-theme-leap-day
---

## Guía 06

[DAWM](/DAWM/) / [Proyecto03](/DAWM/proyectos/2023/proyecto03)

### Actividades previas

#### Diseño

* Tomaremos como referencia el tweet de [Responsive Coffee Shop Website Using HTML, CSS & JavaScript Step by Step](https://twitter.com/html5css3_dv/status/1653790577736163332).
	* Todos los recursos están disponibles en [Morioh](https://morioh.com/p/9adc575f5540?f=5c21fb01c16e2556b555ab32).
	* Los archivos fuentes están disponibles en [Google Drive](https://drive.google.com/drive/folders/1Soldgrkfgo6eSX7FnNRGQud1ytIQF5Dc) (se encuentran descargados como recursos locales [coffee shop (frontend)](recursos/coffeeshop(frontend).zip) y [coffee shop (backend)](recursos/coffeeshop(backend).zip)).

#### Ejercicio de coffee shop - SPA

* Descargue el [coffee shop - SPA](ejercicios/coffeeshop-SPA.zip).
* Utilice **Visual Studio Code** para abrir el ejercicio de coffee shop - SPA.
* Levante el Live Server de Visual Studio Code.

#### Responsive Web Design (RWD)

Considere las sugerencias de [Bard](bard/guia06-bard01.pdf) para crear sitios web responsivos.

### Actividades

#### Puesta a punto

* Modifique el archivo `css/style.css`
* **Variables CSS**: identifique el comentario `/* Variables */` identifique las variables y su uso.
  
  ```
  :root {
    ...
    --black: #333;
    ...
    --border: .2rem solid var(--black);
    ...
  }
  ```
* **Flexbox**: identifique el comentario `/* Flexbox  */`, aplique y compruebe en el navegador el efecto de cada una de las propiedades CSS para:
	
	* Selector `.about`
	* Selector `.about .image`
	* Selector `.about .content`.

* **Grid**: identifique el comentario `/* Grid */`, aplique y compruebe en el navegador el efecto de cada una de las propiedades CSS para:
	
	* Selector `.gallery .box-container`

#### RWD

**Nota:** Cambie la vista del sitio para dispositivos móviles desde el inspector, en la opción **Toggle device toolbar**.

* Modifique el archivo `css/style.css`

	* **Tamaño de caja**: identifique el comentario `/* RWD: Box-Sizing */` aplique y compruebe en el navegador el efecto la propiedad CSS para:

		* Selector `*` agregue `box-sizing: border-box;`

	* **Diseño fluído**: identifique el comentario `/* RWD:  Autofit */`  aplique y compruebe en el navegador el efecto las propiedades CSS para:

		* Selector `*` cambie por `grid-template-columns: repeat(auto-fit, 20rem);`
		* Selector `.gallery .box-container img` agregue `width: 100%;`, `height: 100%;` y `object-fit: cover;`

	* **Tamaño de fuentes adaptables**: identifique el comentario `/* RWD: Tamaño de fuentes adaptables */`  aplique y compruebe en el navegador el efecto la propiedad CSS para:

		* Selector `.about .content p` cambie por `font-size: 1.2rem;`

	* **Media queries**: identifique el comentario `/* RWD: media queries */` aplique y compruebe en el navegador el efecto la propiedad CSS para:

		```
		@media only screen and (max-width: 620px) {
		    .about .image {
		        width: 0%;
		    }

		    .about .content {
		        width: 100%;
		    }
		}
		```


* Modifique el archivo `index.html`
  
	* **Viewport**: Agregue el elemento `<meta name="viewport" content="width=device-width, initial-scale=1.0">` dentro del elemento `<head>`

### Documentación

* Algunos sitios para la inspiración en [Page Collective - landing page design inspiration](https://pagecollective.com/)

### Términos

`Responsive`, renderizar, `media query`

### Referencias

* The building blocks of responsive design - Progressive web apps (PWAs)  MDN. (2022). Retrieved 6 June 2022, from https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks
* Mejora Progresiva - Glosario MDN. (2020). Retrieved 6 June 2022, from https://developer.mozilla.org/es/docs/Glossary/Progressive_Enhancement
* @tamapugsley, @. (2022). Responsinator . Retrieved 6 June 2022, from http://www.responsinator.com/