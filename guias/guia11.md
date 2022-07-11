---
theme: jekyll-theme-leap-day
---

## Guía 11

[Regresar](/DAWM-2022/)

### Contenidos

* *Web Sockets* es una tecnología avanzada que hace posible abrir una sesión de comunicación bidireccional entre el navegador del usuario y un servidor. Con esta [API](https://developer.mozilla.org/es/docs/Web/API/WebSockets_API), puede enviar mensajes a un servidor y  recibir respuestas controladas por eventos sin tener que consultar al servidor para una respuesta. En [Cliente-Servidor](https://levelup.gitconnected.com/getting-started-with-node-js-and-websockets-f22dd0452105) se ilustra la arquitectura de conexión entre un cliente y un servidor mediante sockets de comunicación para un marco de trabajo de la web.


* [*Socket.IO*](https://socket.io/docs/v4/) es una librer[ia] que permite la comunicación de baja latencia, bidireccional y basada en eventos entre un cliente y un servidor. Se basa en el protocolo WebSocket y proporciona garantías adicionales, como el respaldo al sondeo largo HTTP o la reconexión automática.
	
	
	- El socket de comunicación consiste en emitir y escuchar eventos del cliente y del servidor.
	![comunicación bidireccional](https://socket.io/images/bidirectional-communication-socket.png)

	- El [cliente](https://socket.io/docs/v4/client-installation/) es una instancia a ejecutarse desde el navegador o desde cualquier otro software
	![Diagrama del servidor](https://socket.io/images/server-class-diagram-server.png)

	- El [servidor](https://socket.io/docs/v4/server-installation/) es una instancia de software que espera por conexiones 
	- Una [lista de eventos](https://socket.io/docs/v4/emit-cheatsheet/) entre el cliente y el servidor



### Actividades

* Diseñe el protocolo de comunicación entre el cliente y el servidor para una aplicación asíncrona meidnate sockets de comunicación. 

### Términos

`sockets`

### Referencias

* WebSockets - Referencia de la API Web MDN. (2022). Retrieved 11 July 2022, from https://developer.mozilla.org/es/docs/Web/API/WebSockets_API
* Getting Started With Node.js and WebSockets. (2020). Retrieved 11 July 2022, from https://levelup.gitconnected.com/getting-started-with-node-js-and-websockets-f22dd0452105
