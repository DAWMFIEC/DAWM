# Ejercicio 05

![ejercicio05](images/ejercicio05.png)


## Requisitos

* Completar las actividades de [Angular - Local](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_local.html) y [Angular - Bootstrap](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_bootstrap.html)
* Tome como referencia las instrucciones en [Angular - Componentes, Comunicación y Directivas](https://dawfiec.github.io/DAWM-2022/tutoriales/angular_bases.html)

## Instrucciones

* Desde la línea de comandos, en la raíz de la carpeta del proyecto 
* Cree los componentes: **cabecera** y **redes**.
* Para el componente **cabecera**:
	+ En **cabecera.component.ts**:
		- Agregue los atributos _strAcerca_ y _strInfo_
		```
		strAcerca:string = "Album fotográfico"
        strInfo:string = "A través de mis ojos"
		```
	+ En **cabecera.component.html**
		- Utilice la siguiente plantilla y renderice los atributos del componente
		```
		<h1 class="fw-light"><!-- Renderice el atributo strAcerca --></h1>
        <p class="lead text-muted"><!-- Renderice el atributo strInfo --></p>
		```
* Para el componente **redes**:
	+ En **redes.component.ts**:
		- Agregue el atributo _redes_
		```
		redes:any[] = [
			{
				'enlace': 'https://twitter.com/home',
				'texto': 'Sígueme en Twitter',
			},
			{
				'enlace': 'https://www.facebook.com/',
				'texto': 'Likes en Facebook',
			},
			{
				'enlace': 'mailto:correo@gmail.com',
				'texto': 'Envíame un correo',
			}
		]
		```
	+ En **redes.component.html**
		- Utilice la siguiente plantilla y renderice el atributo del componente
		```html
		<ul class="list-group list-group-horizontal justify-content-center mb-5">
			
			<!-- Utilice la directiva *ngFor para iterar el arreglo redes -->
			<li class="list-group-item border-0" >
				<a href=" <!-- Renderice el href del elemento --> " class="text-primary">
					<img width="25" src=" <!-- Renderice el src del elemento --> " alt=" <!-- Renderice el alt del elemento --> ">
				</a>
			</li>

		</ul>
		```
* En **app.component.html**
	+ Identifique las secciones de etiquetas html que serán reemplazadas con el selector del componente, por ejemplo:

	```html
	<main>
	  <section class="py-5 text-center container">
	    <div class="row py-lg-5">
	      <div class="col-lg-6 col-md-8 mx-auto">
	        <h1 class="fw-light">Album example</h1>
	        <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
	        ...
	      </div>
	    </div>
	  </section>
	</main>
	```
	por

	```html
    <main>
	  <section class="py-5 text-center container">
	    <div class="row py-lg-5">
	      <div class="col-lg-6 col-md-8 mx-auto">
	        <app-cabecera></app-cabecera>
	        ...
	      </div>
	    </div>
	  </section>
	</main>
	```

	y agregue la referencia al selector `<app-redes>`

	```html
    <main>
	  <section class="py-5 text-center container">
	    <div class="row py-lg-5">
	      <div class="col-lg-6 col-md-8 mx-auto">
	        <app-cabecera></app-cabecera>
	        <app-redes></app-redes>
	        ...
	      </div>
	    </div>
	  </section>
	</main>
	```



## Pruebas unitarias

* Reemplace los archivos **.spec.ts** que se encuentran en la carpeta `spec` con los archivos que se encuentran en los componentes correspondientes.

## Referencias 

* DAWM-2022. (2022). Retrieved 15 July 2022, from https://dawfiec.github.io/DAWM-2022/tutoriales/angular_bases.html