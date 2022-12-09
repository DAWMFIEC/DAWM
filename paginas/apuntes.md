---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

# Apuntes

## Angular

Comandos básicos

* Creación de un proyecto:

  ```
  ng new <nombre-del-proyecto>
  ```

* Instalación de **Bootstrap**:

  ```
  npm install bootstrap @popperjs/core
  ```
  
  + En `angular.json`, en la clave **architect > build > options > styles**

    ```
    "styles": [  
      "node_modules/bootstrap/dist/css/bootstrap.min.css", 
      "src/styles.css" 
    ]
    ```

  + En `angular.json`, en la clave **architect > build > options > scripts**

    ```
    "scripts": [
	  "node_modules/@popperjs/core/dist/umd/popper.min.js",
	  "node_modules/bootstrap/dist/js/bootstrap.min.js"
	]
    ```

* Instalación de **Angular Material**:

  ```
  ng add @angular/material
  ```

* Crear componente:

  ```
  ng generate component <componente>
  ```

* Crear componente:

  ```
  ng generate interface <interfaz>
  ```

* Crear servicios:

  ```
  ng generate service <servicio>
  ```

* Servidor local:

  ```
  ng serve -o --live-reload
  ```