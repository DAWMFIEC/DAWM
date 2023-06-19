---
theme: jekyll-theme-leap-day
---

## Guía 

[DAWM](/DAWM/) / [Proyecto05](/DAWM/proyectos/2023/proyecto05)

### Actividades previas

* Revise la información de las [Tabla de mareas puertos del Ecuador del INOCAR](https://www.inocar.mil.ec/web/index.php/productos/tabla-mareas).

	- Use el inspector del navegador (en la pestaña **Network** y filtre con la opción **Doc**) para identificar los requerimientos de cada uno de los documentos PHP externos. 

  		![doc_php](imagenes/doc_php.png)

 	- Identifique la estructura de la respuesta al recurso **consultan.php**:
  	
  		![consultan](imagenes/consultan.png)

* Analice el código para realizar requerimientos asincrónicos cuya respuesta se encuentra en formato [XML](https://codetogo.io/how-to-fetch-xml-in-javascript/).
	- Identifique los diferentes tipos de MimeType para el método [parseFromString](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString) de acuerdo con el tipo de respuesta.

* Examine la implementación de [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS) en los navegadores web.

* Analice el uso de un [CORS - Proxy](https://httptoolkit.com/blog/cors-proxies/) para resolver la implementación de las política de CORS. En particular, revise la implementación de un CORS - Proxy que se encuentra en [CORS-anywhere](https://github.com/Rob--W/cors-anywhere).

 
### Actividades

#### Dashboard

##### HTML

* Levante el proyecto _dashboard_.
* En el `index.html`, agregue una etiqueta HTML que contendrá la _Tabla de mareas puertos del Ecuador_. Asegúrese de colocar las clases adecuadas y un identificador único, por ejemplo: `table-container`. 

##### JavaScript

Dentro del archivo javascript creado en las guías anteriores.

* Agregue la función flecha **loadInocar**, antes con la función autoejecutable. Y llame a la función loadInocar dentro de la función anónima.

  ```
  let plot = (data) => { ... }

  let load = (data) => { ... }
  
  let loadInocar = () => { ... }

  (
    function () { 
    	... 

    	loadInocar();
    }

  )();
  ```

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


  - Utilice el método [getElementsByClassName](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByClassName) o el método [getElementsByTagName](https://developer.mozilla.org/es/docs/Web/API/Document/getElementsByTagName) para extraer la referencia al elemento contenedor.

  		Por ejemplo:

	  ```
	  let contenedorMareas = xml.getElementsByClassName('container-fluid')[0];
	  ```

  - Obtenga la referencia al elemento HTML mediante el documento API, por ejemplo:
  	  
	  ```
	  let contenedorHTML = document.getElementById('table-container');
	  ```

  - Coloque el contenido de la respuesta asincrónica en el elemento HTML, por ejemplo:

	  ```
	  contenedorHTML.innerHTML = contenedorMareas.innerHTML;
	  ```

#### CORS

 Use el inspector del navegador para identificar el error en la respuesta al requerimiento de los documentos PHP externos. Acceda a la pestaña **Console**.

![cors](imagenes/cors.png)

#### CORS - Proxy

* Clone el repositorio [Rob--W/cors-anywhere](https://github.com/Rob--W/cors-anywhere) 
* Instale los paquetes, con: `npm install`
* Levante el servidor, con: `npm start`

#### Dashboard

##### JavaScript

* En de la función **loadInocar**, modifique el _endpoint_ a `'http://localhost:8080/https://www.inocar.mil.ec/mareas/consultan.php'`.

* Revise los resultados en el navegador y modifique el estilo del resultado.

### Documentación

* Requerimientos asincrónicos de archivos en formato [XML](https://codetogo.io/how-to-fetch-xml-in-javascript/).
* El significado, uso y consideraciones de los [CORS - Proxies](https://httptoolkit.com/blog/cors-proxies/).
* Mecanismo de [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS) implementado por el navegador.

### Términos

XML, CORS, proxy

### Referencias

* Joubran, J., & Joubran, J. (2023). How to fetch XML in JavaScript  Code to go. Retrieved 18 June 2023, from https://codetogo.io/how-to-fetch-xml-in-javascript/
* Intercambio de recursos de origen cruzado (CORS) - HTTP MDN. (2023). Retrieved 18 June 2023, from https://developer.mozilla.org/es/docs/Web/HTTP/CORS
* What are CORS proxies, and when are they safe?. (2023). Retrieved 18 June 2023, from https://httptoolkit.com/blog/cors-proxies/