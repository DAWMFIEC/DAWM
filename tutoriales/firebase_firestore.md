---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

Firebase - Firestore
====================

* * *

* Obtenga una cuenta en la [consola de Firebase](https://console.firebase.google.com/)

<p align="center">
  <img width="550" src ="imagenes/firebase_index.png">
</p>

* Cree un proyecto para Firebase

<p align="center">
  <img width="550" src ="imagenes/firebase_step1.png">
  <img width="550" src ="imagenes/firebase_step2.png">
  <img width="550" src ="imagenes/firebase_step3.png">
</p>

* Acceda a la opción **Realtime Database** a través de la opción **`Build > Realtime Database`** para **Create Database**

<p align="center">
  <img width="550" src ="imagenes/firebase_realtime_init.png">
</p>

  + Durante el proceso de creación de la base de datos no relacional, habilite el _test mode_ para la edición por 30 días. 

<p align="center">
  <img width="550" src ="imagenes/firebase_setup1.png">
  <img width="550" src ="imagenes/firebase_setup2.png">
</p> 

* En la interfaz de **Realtime Database**

<p align="center">
  <img width="550" src ="imagenes/firebase_realtime_index.png">
</p> 

  + Agregue una clave llamada **collection**, sin valor

<p align="center">
  <img width="49%" src ="imagenes/firebase_collection1.png">
  <img width="49%" src ="imagenes/firebase_collection2.png">
</p> 

* Acceda a la clave **collection**

<p align="center">
  <img width="550" src ="imagenes/firebase_collection_init.png">
</p> 
   
  + Importe los datos en formato JSON.

<p align="center">
  <img width="550" src ="imagenes/firebase_collection_import.png">
</p> 

<p align="center">
  <img width="550" src ="imagenes/firebase_collection_data.png">
</p> 

  + Cambie las reglas de acceso para que los datos puedan ser leídos y modificados desde una aplicación de terceros

<p align="center">
  <img width="550" src ="imagenes/firebase_collection_rules.png">
</p>



Referencias 
===========

* * *

* Mahata, A. (2024). Connect “Contact form” to firebase. Retrieved from https://akashdeepmahata.medium.com/connect-contact-form-to-firebase-7bb8ad6097d7