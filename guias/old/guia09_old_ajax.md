---
theme: jekyll-theme-leap-day
---

## Guía 09

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* [Fetch](https://dmitripavlutin.com/javascript-fetch-async-await/)
	+ [Manejo de errores](https://jasonwatmore.com/post/2021/10/09/fetch-error-handling-for-failed-http-responses-and-network-errors). No todas las peticiones asincrónicas son exitosas por lo que es necesario proveer de mecanismo de contención de los resultados para el usuario.
	+ [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin) existe como política de comunicación para evitar que cualquiera, sin autorización y desde cualquier lugar, pueda hacer requerimientos asincrónicos. 


### Actividades

* Descargue y descomprima el archivo [fetch](../ejercicios/fetch.zip)
* Servidor HTTP
	+ Abra una línea de comando en la carpeta **fetch**
	+ Levante un servidor HTTP
	```
	python -m http.server 8080
	``` 
* Abra en su navegador el URL `http://localhost:8080/`
* Deshabilite el uso de caché
* Manejo de errores y CORS
	+ Modifique el archivo *fetch/cors/scripts/application.js*
	+ Agregue un callback para el evento *click* del botón con identificador **cargar1**
	+ Dentro del callback, realice una petición asincrónica al URL `https://random-d.uk/api/random` cuya respuesta es un [JSON](https://codetogo.io/how-to-fetch-json-in-javascript/).
	+ En cualquier caso, sea error o éxito, muestre la respuesta en la etiqueta con el identificador **respuesta1**. 
		- Puede mostrar el JSON como cadena de texto con [JSON.stringify](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
	+ Recargue la página en el navegador. Verifique los errores en la consola del navegador y en el contenido de la etiqueta **respuesta1**.
	+ Problema:  
		- [CORS](https://javascript.info/fetch-crossorigin) Un usuario de un sitio A no puede acceder fácilmente a los recursos del sitio B
		- Mensaje: **`TypeError: NetworkError when attempting to fetch resource.`**
	+ Solución:
		- Use un intermediario como un [reverse proxy](https://httptoolkit.tech/blog/cors-proxies/). 
		- Cambie el URL anterior por **`https://damp-beach-17296.herokuapp.com/https://random-d.uk/api/random`** para realizar la petición asincrónica. 
		- Recargue la página en el navegador y verifique el resultado.

* Demora en la respuesta
	
	+ Modifique el archivo *fetch/demora/scripts/application.js*
	+ Dentro de la función *peticion*, agregue una llamada a la función *esperar* 
	```
	await esperar(5000);
	```

	+ Problema: Gran tamaño del archivo, restraso en la red

	![Stream](./imagenes/fuentes.jpg)

	+ Solución:

		- Implementar la [carga lenta](https://javascript.info/fetch-progress) bajo el esquema
		
	```
		// en lugar de convertir directamente response.json() u otros métodos
		const reader = response.body.getReader();

		// un loop-infinto mientra el cuerpo de la respuesta se descarga
		while(true) {

		  // done es VERDADERO con el último fragmento (chunk) de la respuesta
		  // value es un Uint8Array con las fragmentos (chunks) en bytes
		  
		  const {done, value} = await reader.read();

		  if (done) {
		    break;
		  }

		  console.log(`Bytes ${value.length} recibidos`)
		}
	```

	- Cambie la función **petición**


	```
	 let respuesta = await fetch(URL);

	 const reader = respuesta.body.getReader();

	 document.getElementById('estado2').innerHTML = 'Empezando la transmisión'

	 // Paso 2: obtener el total de la respuesta
	 const contentLength = +respuesta.headers.get('Content-Length');

	 // Paso 3: leer la data
	 let receivedLength = 0; // bytes recibidos en este momento
	 let chunks = []; // arreglo de fragmentos binarios recibidos (conforman el cuerpo) 
	 while(true) {
		 const {done, value} = await reader.read();

		 if (done) {
		   break;
		 }

		 chunks.push(value);
		 receivedLength += value.length;

		 await esperar(3000);

		 document.getElementById('estado2').innerHTML += '.'

	 }

	 // Paso 4: concatenar los framgento en un único Uint8Array
	 let chunksAll = new Uint8Array(receivedLength); // (4.1)
	 let position = 0;
	 for(let chunk of chunks) {
		 chunksAll.set(chunk, position); // (4.2)
		 position += chunk.length;
	 }

	 // Paso 5: decodificar en una cadena
	 let result = new TextDecoder("utf-8").decode(chunksAll);

	 // Listo!
	 let data = JSON.parse(result);
	 document.getElementById("respuesta2").innerHTML = data.length + ' registros';

	 document.getElementById('estado2').innerHTML = 'Listo!'
	``` 


* Restricciones en el servidor

	+ Modifique el archivo *fetch/restricciones/cliente/scripts/application.js*
	+ Modifique la función **sobrecargar**
		- Agregue la llamada a la función *peticion*
	+ De click en el botón **Cargar (500 veces)**
	+ Problema: Límite de peticiones
	+ Solución: Carga local
		- Descargue una copia [commits_ilya.json](./archivos/commits_ilya.json)
		- Guarde el archivo en la carpeta *fetch/restricciones/servidor*, con el nombre **commits_ilya.json**.
		- Verifique que funciona el recurso `http://localhost:8080/restricciones/servidor/commits_ilya.json`
		- En *restricciones/cliente/scripts/application.js* modifique la constante **URL** para que apunte a 
		```
				http://localhost:8080/restricciones/servidor/commits_ilya.json
		```
	

### Términos

dominio, `CORS`, proxy, reverse proxy

### Referencias

* Joubran, J., & Joubran, J. (2022). How to fetch json in JavaScript Code to go. Retrieved 26 June 2022, from https://codetogo.io/how-to-fetch-json-in-javascript/
* Joubran, J., & Joubran, J. (2022). How to fetch XML in JavaScript Code to go. Retrieved 26 June 2022, from https://codetogo.io/how-to-fetch-xml-in-javascript/
* Random-d.uk. (2022). Retrieved 26 June 2022, from https://random-d.uk/api
* Fetch - Error Handling for Failed HTTP Responses and Network Errors Jason Watmore's Blog. (2022). Retrieved 26 June 2022, from https://jasonwatmore.com/post/2021/10/09/fetch-error-handling-for-failed-http-responses-and-network-errors#:~:text=The%20fetch()%20function%20will,ourselves%20by%20calling%20return%20Promise.
* Reason: CORS header 'Access-Control-Allow-Origin' missing - HTTP MDN. (2020). Retrieved 26 June 2022, from https://developer.mozilla.org/es/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
* Delay, Sleep, Pause, & Wait in JavaScript. (2022, June 27). Delay, Sleep, Pause, & Wait in JavaScript - SitePoint. Retrieved June 27, 2022, from https://www.sitepoint.com/delay-sleep-pause-wait/
* progress, F. (2022). Fetch: Download progress. Retrieved 27 June 2022, from https://javascript.info/fetch-progress
* El manejo de streams en NodeJS. (2017). Retrieved 27 June 2022, from https://elabismodenull.wordpress.com/2017/03/28/el-manejo-de-streams-en-nodejs/