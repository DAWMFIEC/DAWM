# Ejercicio 10

## Respuesta a la ruta "http://localhost:8001/"
![Respuesta a la ruta "http://localhost:8001/"](images/ejercicio10.png)


## Instrucciones
	
* Servidor
	+ Desde la línea de comandos en la carpeta del proyecto `servidor`
	+ Instale los paquetes necesarios, con: `npm install`
	+ Inicie el servidor HTTP, con: `npm start`
* Cliente
	+ Desde la línea de comandos en la carpeta del proyecto `cliente`
	+ Inicie el cliente HTTP, con: `python -m http.server 8001`
	+ Desde el navegador, abra una pestaña en el navegador para el URL `http://localhost:8001`
* Desde el editor de texto, modifica el archivo el archivo `cliente/scripts/ejercicio.js`,
	+ Identifique las instrucciones a realizar que se encuentran en los bloques de comentarios.
	+ Agrega los cambios solicitadas dentro de las secciones marcadas, con:  
	`/* Inicio */` - `/* Fin */`
	+ Desde el navegador, actualice la pestaña en el navegador para el URL `http://localhost:8001`

## Reto

* Identifique el protocolo de comunicación para otros escenarios, como los que aparecen en [¿Qué son los datos de streaming? Amazon Web Services (AWS)](https://aws.amazon.com/es/streaming-data/). Revise la [documentación de Socket.io](https://socket.io/docs/v4/) para entender los eventos `emit` y `on` del Servidor y del Cliente.


## Referencias 

* How to generate a random number between a range in JavaScript. (2022). Retrieved 5 July 2022, from https://www.educative.io/answers/how-to-generate-a-random-number-between-a-range-in-javascript
* ¿Qué son los datos de streaming? Amazon Web Services (AWS). (2022). Retrieved 6 July 2022, from https://aws.amazon.com/es/streaming-data/
* Socket.IO. (2022). Retrieved 6 July 2022, from https://socket.io/