---
theme: jekyll-theme-leap-day
---

## Guía 10

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* El modelo de comunicación [cliente-servidor](https://blog.infranetworking.com/modelo-cliente-servidor/) se establece entre varios dispositivos en una red. El cliente realiza peticiones al servidor. El servidor atiende a las peticiones de los clientes. Algunos ejemplos de la aplicación del modelo cliente-servidor,son:

	+ **Navegar en la web** _Cliente:_ aplicaciones como el navegador; _Servidor:_ [Apache, Nginx o LiteSpeed](https://blog.infranetworking.com/apache-vs-nginx-vs-litespeed/).
	+ **Transferencia de archivos** _Cliente:_ aplicaciones como FileZilla; _[Servidor:](https://blog.infranetworking.com/servidor-ftp/)_ Pure-FTPD o Proftpd.
	+ **Correo** _Cliente:_ aplicaciones de escritorio o web como Outlook; _[Servidor:](https://blog.infranetworking.com/servidor-de-correo/)_ Outlook o Gmail.

### Actividades

* Utilice un [diagrama de secuencias](https://creately.com/blog/es/diagramas/tutorial-del-diagrama-de-secuencia/) para representar la interacción en el modelo cliente-servidor para los siguientes escenarios:
	+ Sitio estático: 
		- El cliente (un navegador web) realiza una petición a la URL: `http://localhost:8000`
		- El servidor responde exitosamente (código de estado 200) para el archivo *index.html*, en el URL `http://localhost:8000`
		- El cliente realiza la petición del archivo *ejercicio.css*, en el URL `http://localhost:8000/public/stylesheets/ejercicio.css`
		- El servidor responde exitosamente (código de estado 200) para el archivo *ejercicio.css*.
		- El cliente realiza la petición del archivo  *ejercicio.js*, en el URL `http://localhost:8000/public/javascript/ejercicio.js`
		- El servidor responde exitosamente (código de estado 200) para el archivo *ejercicio.js*.
		- El cliente realiza la petición del archivo  *mystyle.css*, en el URL `http://localhost:8000/public/stylesheets/mystyle.css`
		- El servidor responde que no existe (código de estado 404) el archivo *ejercicio.css*.
		
	+ Sitio estático + Peticiones asincrónicas: 
		- El cliente (un navegador web) realiza una petición a la URL: `http://localhost:8000`
		- El servidor responde exitosamente (código de estado 200) para el archivo *index.html*, en el URL `http://localhost:8000`
		- El cliente realiza la petición del archivo  *ejercicio.js*, en el URL `http://localhost:8000/public/javascript/ejercicio.js`
		- El servidor responde exitosamente (código de estado 200) para el archivo *ejercicio.js*.
		- El cliente ejecuta las instrucciones en el archivo *ejercicio.js*.
		- El usuario da clic en el botón *Buscar* y el motor de peticiones asincrónicas (AJAX) realiza una petición al URL `http://localhost:8000/data.json`
		- El servidor eventualmente responde exitosamente (código de estado 200) para el archivo *data.json*.
		- El cliente procesa y muestra el resultado en una tabla.


_Solución:_ [Estático](imagenes/1-estatico.png) y [Asincrónico](imagenes/2-fetch.png)

### Términos

diseño de software, diagrama de secuencias, eventos 

### Referencias

* Schiaffarino, A. (2019). Modelo cliente servidor: ¿Qué es? Características, Ventajas y Desventajas. Retrieved 14 November 2022, from https://blog.infranetworking.com/modelo-cliente-servidor/