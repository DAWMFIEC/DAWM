---
theme: jekyll-theme-leap-day
---

## Guía 23

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

#### Angular

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador, en: `http://localhost:4200/`.

#### Express

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.
* Escoja un modelo del proyecto y compruebe el acceso a los datos en el navegador con: `http://localhost:3000/rest/<NOMBRE_CLASE>/findAll/json`

### Actividades

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
	2. En `app/app.component.html` reemplace todo el contenido por:

		```html

		```

* Revise los cambios en el navegador.


### Términos



### Referencias

* 