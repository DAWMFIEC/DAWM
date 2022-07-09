# Ejercicio 03

![Ejecución del archivo build/buildclassjs.js](images/buildclassjs.png)


## Requisitos

* Instale Nodejs, desde el [sitio oficial](https://nodejs.org/es/download/).
	- Mediante la línea de comandos, verifique la versión de Nodejs, con: `node -v`
* Instale Typescript globalmente, con: `npm install -g typescript`

## Instrucciones

* Desde la línea de comandos
	+ Ingrese a la carpeta con el ejercicio
	+ Instale los paquetes necesarios, con: `npm install`
* Para transpilar de Typescript a Javascript:
	+  Un archivo, en modo estricto y especificando el directorio de salida:
	```
  	npx tsc src/interfaz.ts --strict --outDir build 
  	```
	+ Todos los archivos, en modo estricto:
	```
  	npx tsc --strict
  	```
* Para ejecutar código de Javascript:
	+ Un archivo: 
  	```
  	node build/interfaz.js
  	``` 


## Pruebas unitarias

* Desde la línea de comandos ejecute: `npm test`
* Los resultados posibles a las pruebas unitarias pueden ser: 
	+ Todos fueron exitosas, o
	+ Existen pruebas unitarias fallidas.
* En caso de ser necesario, modifique el/los archivo(s) y vuelva a ejecutar las pruebas unitarias. 

## Referencias 

* TypeScript Interface. (2022). Retrieved 9 July 2022, from https://www.typescripttutorial.net/typescript-tutorial/typescript-interface/
* TypeScript Class. (2022). Retrieved 9 July 2022, from https://www.typescripttutorial.net/typescript-tutorial/typescript-class/