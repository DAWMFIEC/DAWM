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

* Rutas:

  ```
  { path: <rutaN>, component: <referencia-component> },
  ...
  { path: "**", redirectTo: <rutaN> }
  ```

* Etiqueta para reemplazar dinámicamente el contenido en función del estado actual del enrutador.

  ```
  <router-outlet></router-outlet>
  ```

* Crear componente:

  ```
  ng generate component <nombre-de-componente>
  ```

* Crear interfaz:

  ```
  ng generate interface <nombre-de-interfaz>
  ```

* Crear servicios:

  ```
  ng generate service <nombre-de-servicio>
  ```

* Crear clases:

  ```
  ng generate class <nombre-de-clase>
  ```

* Instalación de **Angular Material**:

  ```
  ng add @angular/material
  ```

* Servidor local:

  ```
  ng serve -o --live-reload
  ```

## Express

* Crear un proyecto

  ```
  express --view=ejs <nombre-del-proyecto>
  ```

* Crear un modelo

  ```
  sequelize model:create --name <nombre-modelo> --attributes <atributo>:<tipo>
  ```

* Migración de cambios

  ```
  sequelize db:migrate
  ```

* Creador del generador de datos

  ```
  sequelize seed:generate --name <nombre-modelo>
  ```

* Ejecución del generador de datos

  ```
  sequelize db:seed --seed YYYYMMDDHHMMSS-<nombre>
  ```