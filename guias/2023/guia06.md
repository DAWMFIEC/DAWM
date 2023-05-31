---
theme: jekyll-theme-leap-day
---

## Guía 06

[DAWM](/DAWM/) / [Proyecto03](/DAWM/proyectos/2023/proyecto03)

### Actividades previas

#### Diseño

* Tomaremos como referencia el tweet de [Responsive Coffee Shop Website Using HTML, CSS & JavaScript Step by Step](https://twitter.com/html5css3_dv/status/1653790577736163332).
	* Todos los recursos están disponibles en [Morioh](https://morioh.com/p/9adc575f5540?f=5c21fb01c16e2556b555ab32).
	* Los archivos fuentes están disponibles en [Google Drive](https://drive.google.com/drive/folders/1Soldgrkfgo6eSX7FnNRGQud1ytIQF5Dc) (o como recursos locales [coffee shop (frontend)](recursos/coffeeshop(frontend).zip) y [coffee shop (backend)](recursos/coffeeshop(backend).zip)).

#### Ejercicio de coffee shop - SPA

* Descargue el [coffee shop - SPA](ejercicios/coffeeshop-SPA.zip).
* Utilice **Visual Studio Code** para abrir el ejercicio de coffee shop - SPA.
* Levante el Live Server de Visual Studio Code.

#### Responsive Web Design (RWD)

* Considere las sugerencias de [Bard](bard/guia06-bard01.pdf) para crear sitios web responsivos.
* Visite el sitio de [ESPOL](http://www.espol.edu.ec/) y revise la vista del sitio para dispositivos móviles, con:
	- El inspector (en la opción **Toggle device toolbar**), 
	- En los sitios [Responsinator](http://www.responsinator.com/), [Website planet](https://www.websiteplanet.com/es/webtools/responsive-checker/) o [Browserstack](https://www.browserstack.com/responsive).


### Actividades

#### Puesta a punto

* Modifique el archivo `css/style.css`. Aplique y compruebe en el navegador el efecto de cada una de las propiedades CSS
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
* **Flexbox** 
	* Busque `Sección Flexbox`, 
	* Elimine el comentario de las propiedades en los selectores `.about`, `.about .image` y `.about .content`.

* **Grid**
	* Busque `Sección Grid`, 
	* Elimine el comentario de las propiedades el selector `.gallery .box-container`

#### RWD

* Modifique el archivo `css/style.css`

	* **Tamaño de caja**
		* Busque `RWD: Box-Sizing` 
		* Agregue al selector `*` la propiedad `box-sizing: border-box;`

	* **Diseño fluído**
		* Busque `RWD: Autofit`
		* En el selector `.gallery .box-container`, cambie el valor de la propiedad `grid-template-columns` por `repeat(auto-fit, 20rem);`
		* Agregue al selector `.gallery .box-container img` las propiedades `width: 100%;`, `height: 100%;` y `object-fit: cover;`

	* **Tamaño de fuentes adaptables**
		* Busque `RWD: Tamaño de fuentes adaptables`
		* En el selector `.about .content p`, cambie el valor de la propiedad `font-size` por `1.2rem;`

	* **Media queries**
		* Busque `RWD: media queries`
		* Dentro del media query `@media only screen and (max-width: 620px) ` agregue las reglas `.about .image { width: 0%; }`, `.about .content { width: 100%; } ` y `.about .image img { display: none; }`


* Modifique el archivo `index.html`
  
	* **Viewport**
		* Agregue el elemento `<meta name="viewport" content="width=device-width, initial-scale=1.0">` dentro del elemento `<head>`

#### Efectos CSS

* Modifique el archivo `css/style.css`
* **Sticky navbar**
	* Busque `Sticky navbar`
	* Elimine el comentario de las propiedades `.header` 

* **Shadow**
	* Busque `Shadow`
	* Elimine el comentario de las propiedades `.header` 

#### Bootstrap

* Clone el repositorio [HomePage-Bootstrap](https://github.com/iGioRojas/HomePage-Bootstrap).
	* En caso de ocurrir un error en la clonación, consulte la página de [errores](/DAWM/paginas/errores).
* Levante un servidor HTTP.
* Consulte la documentación [Boostrap](https://getbootstrap.com/) y la [guía](recursos/bootstrap.pdf).

### Documentación

* Algunos sitios para la inspiración en [Page Collective - landing page design inspiration](https://pagecollective.com/)
* La documentación de [Boostrap](https://getbootstrap.com/), un _frontend toolkit_ para crear sitios web responsivos.

### Términos

`Responsive`, renderizar, `media query`

### Referencias

* The building blocks of responsive design - Progressive web apps (PWAs)  MDN. (2022). Retrieved 6 June 2022, from https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks
* Mejora Progresiva - Glosario MDN. (2020). Retrieved 6 June 2022, from https://developer.mozilla.org/es/docs/Glossary/Progressive_Enhancement
* @tamapugsley, @. (2022). Responsinator . Retrieved 6 June 2022, from http://www.responsinator.com/