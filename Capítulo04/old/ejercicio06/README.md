# Ejercicio 06

![ejercicio06](imagenes/ejercicio06.png)


## Requisitos

* Complete las actividades de [Angular - Local](https://dawmfiec.github.io/DAWM/tutoriales/angular_local.html), [Angular - Bootstrap](https://dawmfiec.github.io/DAWM/tutoriales/angular_bootstrap.html), [Angular - Componentes, Comunicación y Directivas](https://dawmfiec.github.io/DAWM/tutoriales/angular_bases.html), [Angular - PWA](https://dawmfiec.github.io/DAWM/tutoriales/angular_pwa.html) y [Angular - Servicios](https://dawmfiec.github.io/DAWM/tutoriales/angular_servicios.html).

## Instrucciones

* Desde la línea de comandos, en la raíz de la carpeta del proyecto 
* Ejecute su aplicación, con: `ng serve`


## Pruebas unitarias

* Copie cada archivo **.spec.ts** de la carpeta `specs` y reemplace el archivo **.spec.ts** correspondiente en su proyecto de Angular.
	+ `specs/app.component.spec.ts` -> `src/app/app.component.spec.ts`
	+ `specs/recursos.component.spec.ts` -> `src/app/servicios/recursos.component.spec.ts`
* En la ruta de su proyecto en Angular, desde la línea de comandos ejecute: `npm test`
* Los resultados posibles a las pruebas unitarias pueden ser: 
	![karma](imagenes/karma.png)
	+ Todos fueron exitosas, o
	+ Existen pruebas unitarias fallidas.
* En caso de ser necesario, modifique el/los archivo(s) y vuelva a ejecutar las pruebas unitarias.


## Prueba PWA

* Genere el proyecto en modo de producción
* Levante un servidor HTTP local que apunte a la ruta del proyecto en modo de producción: `dist/cliente-angular`
* En Chrome o Firefox, verifique el registro del service worker

![serviceworkers](imagenes/serviceworkers.png)

## Referencias 

* DAWM. (2022). Retrieved 29 November 2022, from https://dawmfiec.github.io/DAWM/tutoriales/angular_local.html
* DAWM. (2022). Retrieved 29 November 2022, from https://dawmfiec.github.io/DAWM/tutoriales/angular_bootstrap.html
* DAWM. (2022). Retrieved 29 November 2022, from https://dawmfiec.github.io/DAWM/tutoriales/angular_bases.html
* DAWM. (2022). Retrieved 29 November 2022, from https://dawmfiec.github.io/DAWM/tutoriales/angular_pwa.html
* DAWM. (2022). Retrieved 29 November 2022, from https://dawmfiec.github.io/DAWM/tutoriales/angular_servicios.html
