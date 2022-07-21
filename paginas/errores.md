---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM-2022/)

## NPM

### Descarga de módulos

* Al ejecutar desde la línea de comandos `npm install @angular/cli`
	+ **Problema:** no descarga o descarga detenida de módulos vía npm 
	  ![comandos](imagenes/comandos.png)
	+ **Solución:**
		- Agregue un proxy para la petición de módulos
		```
		npm config set proxy <URL-PROXY>
		npm config set https-proxy <URL-PROXY>
		```

### ng (Comando executable)
* Al ejecutar desde la línea de comandos `ng`
	+ **Problema:** no se reconoce el comando ng luego de instalar `npm install @angular/cli`
	![ng not found](imagenes/ngnotfound.png)
	+ **Solución:**
		- Liste la ubicación por defecto que npm reconoce los comandos instalados
		```
		npm config get prefix
		```
		- Agregue la ruta a la variable de entorno `PATH`
		- Reinice el cmd, de ser necesario.

## Angular

### No resuelve la ruta de archivos estáticos

* Al ejecutar desde la línea de comandos `ng serve`
	+ **Problema:**   
		```
		Can't resolve '../yyy/zzz/image.jpg' in file ...
		``` 
	+ **Solución:**
		- Mueva la estructura de archivos con la imagen a la ruta `src/assets`
		- Cambie la referencia por `'assets/yyy/zzz/image.jpg'` en el archivo


### Error de dependencias

* Por línea de comandos, al instalar: `ng add @angular/pwa`
	+ **Problema:** error al resolver las dependencias de ciertos módulos
	![dependencias](imagenes/dependencias.jpg)
	+ **Solución:** 

	```
	npm uninstall -g angular-cli
	npm cache clean
	npm install -g angular-cli@latest
	```

	Referencias: [How to upgrade Angular CLI project?](https://stackoverflow.com/questions/41403810/how-to-upgrade-angular-cli-project)
