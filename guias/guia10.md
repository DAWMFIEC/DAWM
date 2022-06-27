---
theme: jekyll-theme-leap-day
---

## Guía 10

[Regresar](/DAWM-2022/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* [Fetch](https://dmitripavlutin.com/javascript-fetch-async-await/)
	+ [Manejo de errores](https://jasonwatmore.com/post/2021/10/09/fetch-error-handling-for-failed-http-responses-and-network-errors). No todas las peticiones asincrónicas son exitosas por lo que es necesario proveer de mecanismo de contención de los resultados para el usuario.
	+ [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin) existe como política de comunicación para evitar que cualquiera, sin autorización y desde cualquier lugar, pueda hacer requerimientos asincrónicos. 


### Actividades

* Descargue y descomprima el archivo [fetch](ejercicios/fetch.zip)
* Manejo de errores y CORS
	+ Agregue un callback para el evento *click* del botón con identificador **cargar1**
	+ Dentro del callback, realice una petición asincrónica al URL `https://random-d.uk/api/random` cuya respuesta es un [JSON](https://codetogo.io/how-to-fetch-json-in-javascript/).
	+ En cualquier caso, sea error o éxito, muestre la respuesta en la etiqueta con el identificador **respuesta1**. 
		- Puede mostrar el JSON como cadena de texto con [JSON.stringify](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify).
	+ Recargue la página en el navegador. Verifique los errores en la consola del navegador y en el contenido de la etiqueta **respuesta1**.
	+ Error:  **`TypeError: NetworkError when attempting to fetch resource.`**
		- [CORS](https://javascript.info/fetch-crossorigin)
	+ Solución:
		- Use un intermediario como un [reverse proxy](https://httptoolkit.tech/blog/cors-proxies/). 
		- Cambie el URL anterior por **`https://damp-beach-17296.herokuapp.com/https://random-d.uk/api/random`** para realizar la petición asincrónica. 
		- Recargue la página en el navegador y verifique el resultado.

* Carga lenta
* Límite de peticiones
* Carga local
* Auth

### Términos


### Referencias

* Joubran, J., & Joubran, J. (2022). How to fetch json in JavaScript Code to go. Retrieved 26 June 2022, from https://codetogo.io/how-to-fetch-json-in-javascript/
* Joubran, J., & Joubran, J. (2022). How to fetch XML in JavaScript Code to go. Retrieved 26 June 2022, from https://codetogo.io/how-to-fetch-xml-in-javascript/
* Random-d.uk. (2022). Retrieved 26 June 2022, from https://random-d.uk/api
* Fetch - Error Handling for Failed HTTP Responses and Network Errors Jason Watmore's Blog. (2022). Retrieved 26 June 2022, from https://jasonwatmore.com/post/2021/10/09/fetch-error-handling-for-failed-http-responses-and-network-errors#:~:text=The%20fetch()%20function%20will,ourselves%20by%20calling%20return%20Promise.
* Reason: CORS header 'Access-Control-Allow-Origin' missing - HTTP MDN. (2020). Retrieved 26 June 2022, from https://developer.mozilla.org/es/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
