# Ejercicio 06

![ejercicio06](imagenes/ejercicio06.png)


## Requisitos

* Completar las actividades de [Angular - Local](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_local.html), [Angular - Bootstrap](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_bootstrap.html) y [Angular - Componentes, Comunicación y Directivas](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_bases.html).
* Tome como referencia las instrucciones en [Angular - Servicios](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_servicios.html)

## Instrucciones

* Desde la línea de comandos, en la raíz de la carpeta del proyecto 
* Cree el componente: **foto**
* Dentro de la carpeta **interfaz**, cree la interfaz: **fotoInterfaz**
	+ La interfaz **fotoInterfaz** tiene los atributos
		```
		descripcion:string;
		tiempo:string;
		url:string;
		``` 
* Dentro de la carpeta **servicios**, cree el servicio: **foto**.
	+ Cree el método **obtenerFotos**
	+ Dentro del método **obtenerFotos** realice una petición al URL: [`https://dataserverdawm.herokuapp.com/album`](https://dataserverdawm.herokuapp.com/album)

* En **app.component.html**


## Pruebas unitarias

* 

## Referencias 

* DAWM-2022. (2022). Retrieved 27 July 2022, from https://dawfiec.github.io/DAWM-2022/tutoriales/angular_servicios.html
