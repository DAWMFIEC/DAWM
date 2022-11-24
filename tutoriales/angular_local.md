---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

Angular - Local
===============

![angular cli](https://www.programaenlinea.net/wp-content/uploads/2018/06/angular-cli.jpg)

Para trabajar en un proyecto local, en tu máquina, es necesario instalar el intérprete de línea de comandos (CLI) de Angular.

El CLI sirve para crear el esqueleto, o scaffolding, del proyecto y de la mayoría de los componentes de una aplicación Angular.

Instalar Angular CLI
====================

* * *

Instale Angular-CLI en su máquina local, siguiendo las instrucciones en la sección [Installing Angular CLI](https://angular.io/cli#installing-angular-cli), con:  
  

*   Desde la línea de comandos: 
    ```
    npm install -g @angular/cli
    ```

Sitio base
==========

* * *

Desde la línea de comandos, en la ruta donde desea crear el proyecto:

* Cree un nuevo sitio con: 
  ```
  ng new clienteAngular
  ```

    + Acepte el manejador de rutas por defecto
        - (Would you like to add Angular routing?) **\[y\]**
    + Acepte **CSS** como formato de hoja de estilos 
        - (Which stylesheet format would you like to use?) > CSS
* En cuanto termine la configuración del sitio
    + Ingrese a la carpeta creada: 
      ```
      cd clienteAngular
      ```

    + Inicie el servidor con: 
      ```
      ng serve -o
      ```
      
    + El resultado se encuentra en [http://localhost:4200/](http://localhost:4200/)

![default angular site](https://i.stack.imgur.com/2DZqQ.png)

Estructura
==========

* * *

En el proyecto Angular tiene la siguiente estructura de archivos, con su descripción:  
  

* Archivos de configuración
    + **./angular.json** contiene la descripción de los archivos del proyecto
    + **./package.json** contiene la lista de los paquetes instalados
    + **./tsconfig.json**c on los parámetros de transpilación del código en TypeScript  
          
* Código fuente
    + **src/styles.css** estilo global de la app
    + **src/index.html** página de inicio
    + **src/assets** para los archivos estáticos, p.e. imágenes
    + **src/app** para componentes y servicios
    + **src/app/app.module.ts** punto inicial de la aplicación
    + **src/app/app-routing.module.ts** contiene las rutas que manejará la aplicación
* Componentes:
    + **src/app** ruta donde se guardarán los componentes
    + **src/app/app.component** componente _app_ con los archivos con extensión:
        -  **src/app/app.component.ts** controlador del componente,  
        -  **src/app/app.component.html** vista del componente,
        -  **src/app/app.component.css** estilo del componente, y 
        -  **src/app/app.component.spec** test del componente


    ![Estructura de un componente de Angular](https://contraslash.github.io/todo-list-tutorial-spanish/Angular%20Component.001.jpeg)


Referencias
=======

* Angular. (2022). Retrieved 9 July 2022, from https://angular.io/guide/what-is-angular
* Angular. (2022). Retrieved 9 July 2022, from https://angular.io/start
* Acerca de · GitBook. (2022). Retrieved 9 July 2022, from https://contraslash.github.io/todo-list-tutorial-spanish/