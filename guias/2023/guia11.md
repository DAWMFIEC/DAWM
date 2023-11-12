---
theme: jekyll-theme-leap-day
---

## Guía 11

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2023/proyecto04)

### Actividades previas

* Revise la información de las [Tabla de mareas puertos del Ecuador del INOCAR](https://www.inocar.mil.ec/web/index.php/productos/tabla-mareas).

	- Use el inspector del navegador (en la pestaña **Network** y filtre con la opción **Doc**) para identificar los requerimientos de cada uno de los documentos PHP externos. 
  	![docs](imagenes/docs.png)

  - Identifique la estructura de la respuesta al recurso **consultan.php**:

  	![consultan](imagenes/consultan.png)

 
### Actividades

* Clona localmente tu repositorio **dashboard**.
* Abra el proyecto en VSCode y levante el live server.

#### HTML

Edite el archivo `index.html`

* Agregue las etiquetas contenedoras de la tabla de mareas.

```html
...

  <!-- Tabla de mareas -->
  <section class="p-4 text-right bg-light">
      <h4 class="mb-3">
          Tabla de mareas
      </h4>
      <div class="container">
          <div class="row row-cols-1 row-cols-md-1 g-3 mt-2">
              <div class="col">
                  <div class="card">
                      <div id="tablademareas" class="card-body">
                          
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!-- Tabla de mareas -->
...
```

#### Javascript

Edite el archivo `public/javascript/load_data.js`

* Agregue e invoque la función flecha _loadInocar_.

```typescript
... 
let loadInocar = () => {
  
 //Requerimiento asíncrono

}

loadInocar()
```

#### Petición asíncrona

* Dentro de loadInocar, realice una petición asíncrona y procese la respuesta del tipo `"application/xml"`. 


* Dentro de la función **loadInocar**, agregue:

  - Una petición asíncrona al _endpoint_ de `'https://www.inocar.mil.ec/mareas/consultan.php'`. Utilice la documentación del método [fetch](https://www.javascripttutorial.net/javascript-fetch-api/) para el procesamiento de una respuesta [XML](https://codetogo.io/how-to-fetch-xml-in-javascript/)

	  ```
	  let URL = 'https://www.inocar.mil.ec/mareas/consultan.php';

	  fetch(URL)
		 	.then(response => response.text())
			.then(data => {
			   const parser = new DOMParser();
			   const xml = parser.parseFromString(data, "application/xml");
			   console.log(xml);
			})
			.catch(console.error);
	  ```

	**Nota:** En el método **parseFromString**, cambie el MimeType de `"application/xml"` a `"text/html"`.


#### CORS

Use el inspector del navegador (en la pestaña **Console**) para reconocer el error en el requerimiento a un dominio cruzado. 

![cors](imagenes/cors.png)

#### CORS - Proxy

* **OPCIÓN 1:** Proxy local

	+ Clone el repositorio [Rob--W/cors-anywhere](https://github.com/Rob--W/cors-anywhere) 
	+ Instale los paquetes, con: `npm install`
	+ Levante el servidor, con: `npm start`
	+ El **URL_proxy** es `'http://localhost:8080/'`

* **OPCIÓN 2:** Proxy remoto
	
	+ En el repositorio [Rob--W/cors-anywhere](https://github.com/Rob--W/cors-anywhere)
	+ Solicite acceso al [proxy demo](https://cors-anywhere.herokuapp.com/corsdemo)
	+ El **URL_proxy** es `'https://cors-anywhere.herokuapp.com/'`

##### JavaScript

Dentro del archivo javascript creado en las guías anteriores.

* Dentro de la función **loadInocar**:

	- Modifique el _endpoint_ para que pase por el CORS - Proxy.

		```
		let URL_proxy = ' ' // Coloque el URL de acuerdo con la opción de proxy
	  let URL = URL_proxy + 'https://www.inocar.mil.ec/mareas/consultan.php';
	  ```

		**Nota:** Consulte la nueva respuesta al requerimiento asincrónico.

		![proxyconsultan](imagenes/proxyconsultan.png)


* Dentro de la función **loadInocar**, en el callback con el procesamiento de la respuesta:

	- Utilice el API del objeto **xml** ([getElementsByClassName](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByClassName) o [getElementsByTagName](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByTagName)) para obtener la referencia al elemento `div.container-fluid`.

  	Por ejemplo:

	  ```
	  let contenedorMareas = xml.getElementsByClassName('container-fluid')[0];
	  ```

	  o 

	  ```
	  let contenedorMareas = xml.getElementsByTagName('div')[0];
	  ```

  - Utilice el API del objeto **xml** para obtener la referencia al elemento HTML mediante el documento API, por ejemplo:
  	  
	  ```
	  let contenedorHTML = document.getElementById('table-container');
	  ```

  - Coloque el contenido de la respuesta asincrónica como contenido del elemento HTML, por ejemplo:

	  ```
	  contenedorHTML.innerHTML = contenedorMareas.innerHTML;
	  ```

* Realice los cambios necesarios en el estilo y revise los resultados en el navegador.

* Versiona local y remotamente el repositorio **dashboard**.


### Fundamental

* CORS en [X](https://twitter.com/midudev/status/1721516493995716680)

<blockquote class="twitter-tweet"><p lang="es" dir="ltr">¡Soluciona el Error de CORS de tu API de una vez!<br>Con estos diagramas entenderás por qué pasa:<a href="https://t.co/8rCqeRKSNX">https://t.co/8rCqeRKSNX</a> <a href="https://t.co/x58yEkwTvf">pic.twitter.com/x58yEkwTvf</a></p>&mdash; Miguel Ángel Durán (@midudev) <a href="https://twitter.com/midudev/status/1721516493995716680?ref_src=twsrc%5Etfw">November 6, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Documentación

* Mecanismo de [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS) implementado por el navegador. El significado, uso y consideraciones de los [CORS - Proxies](https://httptoolkit.com/blog/cors-proxies/).

### Términos

XML, CORS, proxy

### Referencias

* Joubran, J., & Joubran, J. (2023). How to fetch XML in JavaScript  Code to go. Retrieved 18 June 2023, from https://codetogo.io/how-to-fetch-xml-in-javascript/
* Intercambio de recursos de origen cruzado (CORS) - HTTP MDN. (2023). Retrieved 18 June 2023, from https://developer.mozilla.org/es/docs/Web/HTTP/CORS
* What are CORS proxies, and when are they safe?. (2023). Retrieved 18 June 2023, from https://httptoolkit.com/blog/cors-proxies/