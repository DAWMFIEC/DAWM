---
theme: jekyll-theme-leap-day
---

## Guía 20

[Regresar](/DAWM/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* [REST](https://openwebinars.net/blog/que-es-rest-conoce-su-potencia/) es una interfaz para conectar varios sistemas basados en el protocolo HTTP (uno de los protocolos más antiguos) y nos sirve para obtener y generar datos y operaciones, devolviendo esos datos en formatos muy específicos, como XML y JSON. 

REST se apoya en los verbos del protocolo HTTP: **GET**, **POST**, **PUT** y **DELETE** para realizar las operaciones sobre un recurso provisto por un servicio. 


### Aplicación

* Desde la línea de comandos:
  
  + Clone el proyecto con las [aplicaciones del curso](https://github.com/DAWFIEC/DAWM-apps)
  ```
  git clone https://github.com/DAWFIEC/DAWM-apps.git 
  ```
  + Acceda a la carpeta del proyecto
  ```
  cd DAWM-apps
  ```
  + Ubique el proyecto en la rama _hito7-api_
  ```
  git checkout hito7-api
  ```
  + Una la rama _hito4-admin_
  ```
  git merge origin/hito4-admin
  ```

* Verifique que aparezcan los tres proyectos: `album/api` y `album/admin`

<p align="center">
  <img src="imagenes/proyectos20.png">
</p>

### Actividades

#### API

#### Admin

### Términos

API REST

### Referencias

* ¿Qué es REST? Conoce su potencia. (2018). Retrieved 9 August 2022, from https://openwebinars.net/blog/que-es-rest-conoce-su-potencia/
* Using Default values with Interfaces in TypeScript. (2022) Retrieved 9 August 2022, from https://bobbyhadz.com/blog/typescript-interface-default-values
* What is the activated route?. (2022). Retrieved 9 August 2022, from https://blog.briebug.com/blog/what-is-the-activated-route
* Singhal, G., & AcitivatedRouteSnapshot, A. (2022). Accessing Route Parameters with ActivatedRoute vs. AcitivatedRouteSnapshot Pluralsight. Retrieved 9 August 2022, from https://www.pluralsight.com/guides/accessing-route-parameters-with-activatedroute-vs.-acitivatedroutesnapshot