---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

## GIT

### Clonación de proyectos

* Al ejecutar desde la línea de comandos `git clone https://github.com/<user>/<project>.git`
	+ **Problema:** 
		![proxy](imagenes/proxygit.png)
	+ **Solución:**
		- Liste las variables de configuración de Git.
		```
		git config -l
		```
		- De ser necesario, borre el registro anterior de la variable global `http.proxy`, con:
		```
		git config --global --unset http.proxy
		``` 
		- Registre la variable global `http.proxy` con el proxy `http://david.espol.edu.ec:8080`, con:
		```
		git config --global --add http.proxy http://david.espol.edu.ec:8080
		```
## Nodejs

### Heap Out of Memory Error

* Al ejecutar desde la línea de comandos: `npm i` o `npm start`
	+ **Problema:** no descarga o descarga detenida de módulos vía npm con el mensaje `“JavaScript heap out of memory”`
	+ **Solución:**
		- Abra el menú Inicio, busque **Configuración avanzada del sistema** y seleccione la mejor coincidencia (de preferencia por usuario).
		- En el cuadro de diálogo, haga clic en **Variables de entorno** y, a continuación, haga clic en **Nuevo** desde _Variables del sistema_ o _Variables de usuario_. El primero se aplica a todos los usuarios de su computadora, mientras que el segundo afecta solo a su cuenta actual.
		- En el campo _Nombre de la variable_, ingrese **NODE_OPTIONS**. En el campo _Valor_ de la variable, ingrese **--max-old-space-size=4096**. Este valor asignará 4 GB de memoria virtual a Node.js. Para establecer un valor diferente, multiplique la cantidad que necesita en GB por 1024 (el valor variable debe estar en MB).
		- Haga clic en Aceptar para guardar sus cambios, luego haga clic en Aplicar y finalmente haga clic en Aceptar una vez más. Reinicie su proyecto para que los cambios surtan efecto y ya no enfrentará el "JavaScript heap out of memory".

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

### No se reconoce como comando
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
		- Cambie la ruta inicial (`'../assets/yyy/zzz/image.jpg'`) por la ruta dentro del proyecto (`'assets/yyy/zzz/image.jpg'`)

### Property has no initializer and is not definitely assigned in the constructor

* Al ejecutar desde la línea de comandos `ng serve`
	+ **Problema:**  

		```
		"Property has no initializer and is not definitely assigned in the constructor"
		```

	+ **Solución:**

		- Asigne un valor por defecto a la propiedad
		- O, use una aserción no nula: Al final del identificador agregue el operador **`!`**

		```
		navbar!: Navbar;
		```


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

# Referencias: 

* project?, H., Dagger, T., B, J., & Dagger, T. (2016). How to upgrade Angular CLI project?. Retrieved 29 November 2022, from https://stackoverflow.com/questions/41403810/how-to-upgrade-angular-cli-project
* Property has no initializer and is not definitely assigned in the constructor. Retrieved 29 November 2022, from https://bobbyhadz.com/blog/typescript-property-has-no-initializer
* How to Fix JavaScript Heap Out of Memory Error. (2022). Retrieved 9 July 2023, from https://www.makeuseof.com/javascript-heap-out-of-memory-error-fix/