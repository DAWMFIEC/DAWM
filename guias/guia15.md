---
theme: jekyll-theme-leap-day
---

## Guía 15

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* [Angular Material IO](https://material.angular.io/) es una librería de componente de UI. Los componentes de Angular Material ayudan a construir páginas web y aplicaciones web atractivas, consistentes y funcionales mientras se adhieren a los principios del diseño web moderno como la portabilidad del navegador, la independencia del dispositivo y la degradación elegante. Ayuda a crear sitios web más rápidos, hermosos y receptivos. Está inspirado en el diseño de materiales de Google.
	- [Material design](https://material.io/design) es una guía de diseño enfocado en la visualización del sistema operativo Android, además en la web y en cualquier plataforma. Fue desarrollado por Google y anunciado en la conferencia Google I/O del 2014.


### Prerrequisito

* Genere una aplicación en Angular, siguiendo las instrucciones pertinentes de los tutoriales:
  
  + De los tutoriales:
  	- De [Angular - Local](https://dawfiec.github.io/DAWM/tutoriales/angular_local.html) realice hasta la construcción de un **Sitio base**
  	- De [Angular - Bootstrap](https://dawfiec.github.io/DAWM/tutoriales/angular_bootstrap.html) realice la sección **Instalación de Bootstrap (y dependencias)**
  	- De [Angular - Material](https://dawfiec.github.io/DAWM/tutoriales/angular_material.html) realice la sección **Instalación de Angular Material**
  	- De [Angular - Rutas](https://dawfiec.github.io/DAWM/tutoriales/angular_rutas.html) realice la sección **Rutas**.
  + O, clone el proyecto con las [aplicaciones del curso](https://github.com/DAWFIEC/DAWM-apps) para la aplicación **hibrida/clienteAngular**
    - Para el hito: **`hito4-hibrida`**

### Actividades

#### Servicio

* Cree y consuma el servicio **servicios/album**, de acuerdo con las instrucciones en [Angular - Servicios](https://dawfiec.github.io/DAWM/tutoriales/angular_servicios.html)
	+ Agregue el método `obtenerAlbum` que realice peticiones al [URL](https://dawm-fiec-espol-default-rtdb.firebaseio.com/photos.json)

#### Interfaces

* Cree la interfaz **interfaz/foto** con los atributos: 

	```
	descripcion: string;
	id: string;
	url: string;
	```


#### Angular Material - Componente: MatTableModule 

* Incluya el módulo [MatTableModule](https://material.angular.io/components/table/api) en el `src/app/app.module.ts` de acuerdo con las instrucciones en [Angular - Material](https://dawfiec.github.io/DAWM/tutoriales/angular_material.html)


#### Componente: Album 

* Modifique `src/album/album.component.ts`
	+ Importe la referencia a las interfaces y al servicio.
	
		```
		import { Foto } from '../interfaz/foto';
		import { AlbumService } from '../servicios/album.service';
		```

	+ Cree el atributo `album` (arreglo de elementos de tipo **Foto**).
	
		```
		album!: Foto[];
		```

	+ Agregue el atributo `columnas` con los atributos a mostrar en la tabla.
	
		```
		columnas: string[] = ['descripcion', 'url'] 
		```

	+ Inyecte la dependencia al servicio.

		```
		constructor(private albumService: AlbumService) {}
		```

	+ En el constructor, realice la petición al método `obtenerAlbum` y almacene el resultado en el atributo `album`.


* Modifique `src/album/album.component.html`

	+ Reemplace el contenido, por:

		```
		<table mat-table [dataSource]="album">


		  <!-- Columna descripcion -->
		  <ng-container matColumnDef="descripcion">
		    <th mat-header-cell *matHeaderCellDef> Descripcion </th>
		    <td mat-cell *matCellDef="let element"> {{element.descripcion}} </td>
		  </ng-container>

		  <!-- Columna url -->
		  <ng-container matColumnDef="url">
		    <th mat-header-cell *matHeaderCellDef> Enlace </th>
		    <td mat-cell *matCellDef="let element"> <a routerLink="/foto/{{element.url}}">Abrir</a> </td>
		  </ng-container>



		  <tr mat-header-row *matHeaderRowDef="columnas"></tr>
		  <tr mat-row *matRowDef="let row; columns: columnas;"></tr>
		</table>
		```
	+ Actualice el navegador o (re)inicie el servidor

<p align="center">
  <img width="30%" src="imagenes/angular_material_output1.png">
</p>

### Componente: Vista Previa

#### Rutas (`app-routing.module`)

* Agregue la ruta `/vista/:id` al *app-routing.module*.

### Términos

material design, componentes, servicios, it's a wrap

### Referencias

* Angular Material Tutorial. (2022). Retrieved 20 July 2022, from https://www.tutorialspoint.com/angular_material/index.htm
* Angular. (2022). Retrieved 26 July 2022, from https://angular.io/tutorial/toh-pt5
* Khan, R. (2022). La función setTimeout() en Angular. Retrieved 26 July 2022, from https://www.delftstack.com/es/howto/angular/settimeout-function-in-angular/