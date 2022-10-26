---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

Firebase - Hosting / Sitio Estático
===================================

* * *

* Obtenga una cuenta en la [consola de Firebase](https://console.firebase.google.com/)

<p align="center">
  <img width="550" src ="imagenes/firebase_index.png">
</p>


* En la carpeta del proyecto estático

<p align="center">
  <img width="550" src ="imagenes/firebase_estatico.png">
</p>

* Desde la línea de comandos, en la carpeta del proyecto estático

  + Instale el `CLI` de Firebase, con: `npm install -g firebase-tools`
  + Inicie la sesión con su cuenta, con el comando: `firebase login`

<p align="center">
  <img width="550" src ="imagenes/firebase_login.png">
</p>

* En el navegador, acepte los permisos de acceso.

<p align="center">
  <img width="49%" src ="imagenes/firebase_permisos.png">
  <img width="49%" src ="imagenes/firebase_logged.png">
</p> 

* Desde la línea de comandos, en la carpeta del proyecto estático

  + Cree un proyecto nuevo, con el comando: `firebase projects:create`. Utilice un **Project ID** y un **Project name** únicos.

<p align="center">
  <img width="550" src ="imagenes/firebase_projectscreate1.png">
</p>


* En el navegador, puede reconocer el proyecto creado

<p align="center">
  <img width="550" src ="imagenes/firebase_projectscreate2.png">
</p>

* Desde la línea de comandos, en la carpeta del proyecto estático

  + Inicialice el proyecto, con el comando: `firebase init`

<p align="center">
  <img width="550" src ="imagenes/firebase_init1.png">
</p>

  + Escoja la opción de hosting: 

```
  >(*) Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys.
```

<p align="center">
  <img width="550" src ="imagenes/firebase_init2.png">
</p>

  + Seleccione el proyecto recientemente creado.

<p align="center">
  <img width="49%" src ="imagenes/firebase_init3.png">
  <img width="49%" src ="imagenes/firebase_init4.png">
</p> 

  + Para la configuración del host, escoja:

    - El directorio actual como punto de despliegue, con: **`.`**
    - El archivo principal es el _index.html_, con: **`Yes`**
    - No existe despliegue automático desde Github, con: **`No`**

<p align="center">
  <img width="550" src ="imagenes/firebase_init5.png">
</p>


  + Despliegue la aplicación, con: `firebase deploy`

    - Acceda a la URL de consola del proyecto que aparece en: `Project Console: https://console.firebase.google.com/project/<nombre_proyecto>/overview`
    - Acceda a la URL del sitio del proyecto que aparece en: `Hosting URL: https://<nombre_proyecto>.web.app`

<p align="center">
  <img width="550" src ="imagenes/firebase_deploy.png">
</p>


Referencias 
===========

* * *

* Deploy Firebase Hosting. (2022). Retrieved 18 October 2022, from https://codigofacilito.com/articulos/firebase-hosting