---
theme: jekyll-theme-leap-day
---

## Guía 23

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

#### Middleware: CORS

El módulo [cors](https://expressjs.com/en/resources/middleware/cors.html) es un middleware que permite habilitar requerimientos de origen cruzado.

#### Angular

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador, en: `http://localhost:4200/`.

#### Express

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.
* Escoja un modelo del proyecto y compruebe el acceso a los datos en el navegador con: `http://localhost:3000/rest/<NOMBRE_CLASE>/findAll/json`

### Actividades

#### Express

* Instale el módulo `cors`, con:
	
	```
	npm i cors
	```
* En el archivo del servidor `app.js`:
	1. Agregue la referencia al módulo `cors`
		```text
		...
		var logger = require('morgan');

		/* MÓDULO CORS */
		var cors = require('cors')

		var indexRouter = require('./routes/index');
		...
		```
	2. Agregue el middleware `cors` al servidor a nivel de la aplicación completa
		```text
		...
		var app = express();

		/* AGREGUE EL MIDDLEWARE CORS */
		app.use(cors());

		// view engine setup
		app.set('views', path.join(__dirname, 'views'));
		...
		```

#### Angular

##### Interfaz, Servicio e Inyección de dependencias

* Aplique las actividades de la [Guía 16](/DAWM/guias/2023/guia16):
	1. Cree la **Interfaz de Tipo de Datos** con el nombre del modelo seleccionado.
	2. Cree un **Servicio Proveedor de Datos**.
	3. Importe el **HttpClientModule** en el `app.module.ts`.
	4. En el servicio proveedor de datos:
		+ Importe e inyecte el **HttpClient**. 
		+ Agregue un atributo cuyo valor sea el URL (REST Api - GetAll) del proyecto en Express: `http://localhost:3000/rest/<NOMBRE_CLASE>/findAll/json`.
		+ Agregue un método para realizar la petición GET.
	5. En el componente `main`
		+ Importe la interfaz y el servicio proveedor de datos.
		+ Inyecte el servicio en el constructor 
		+ Cree un atributo con el tipo de dato de la interfaz.
		+ Agregue un método para la petición y suscripción de los resultados.

##### Componente Table

* Aplique las actividades de la [Guía 19](/DAWM/guias/2023/guia19):
	1. Importe y registre el módulo `MatTableModule` en `app.module.ts`.
	2. En el componente `main`
		+ Agregue el atributo `displayedColumns`:
			```typescript
			export class MainComponent {

				displayedColumns: string[] = ['idautor', 'nombre'];

				...
			}
			```
		+ En `app/app.component.html` reemplace todo el contenido por:
			```text
			<div class="container" fxLayout="row" fxLayoutAlign="left start">
			    <div fxFlex="25%" fxFlex.xs="100%" fxFlex.sm="33%">
			        <table mat-table [dataSource]="data" class="mat-elevation-z8">

			            <!-- idautor Column -->
			            <ng-container matColumnDef="idautor">
			                <th mat-header-cell *matHeaderCellDef> No. </th>
			                <td mat-cell *matCellDef="let element"> {{element.idautor}}
			                </td>
			            </ng-container>

			            <!-- nombre Column -->
			            <ng-container matColumnDef="nombre">
			                <th mat-header-cell *matHeaderCellDef> Nombre </th>
			                <td mat-cell *matCellDef="let element"> {{element.nombre}} </td>
			            </ng-container>

			            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
			            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
			        </table>

			    </div>
			</div>
			```
		+ En `app/app.component.css` reemplace todo el contenido por: 
			```txt
			.container {
			    min-height: 91vh;
			    height: auto;
			    margin: 0;
			}

			.container {
			    padding-top: 2vh;
			    padding-left: 2vw;
			    padding-right: 2vw;
			}
			``` 

* Revise los cambios en el navegador.


### Términos

middleware

### Referencias

* Express cors middleware. (2023). Retrieved 16 August 2023, from https://expressjs.com/en/resources/middleware/cors.html
* How to use CORS in Node.js with Express. (2023). Retrieved 16 August 2023, from https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/