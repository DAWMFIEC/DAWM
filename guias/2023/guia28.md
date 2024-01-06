---
theme: jekyll-theme-leap-day
---

## Guía 28

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

* Instale Android Studio desde su [página oficial](https://developer.android.com/studio).

### Actividades

* Clone localmente tu repositorio **hybrid**.
* Abra el proyecto en VSCode y levante el servidor.


* Primero, creemos nuestra aplicación desde la línea de comandos para asegurarnos de que tenemos los recursos web más recientes en su proyecto nativo:

  ```command
  ionic cap build android --prod
  ```

* En **Android Studio**, genere el APK al hacer clic en la ruta `Build > Build Bundle(s) / APK(s) > Build APK`

* Si la generación del APK resulta exitosa, transfiera el archivo generado `android/app/build/outputs/apk/debug/app-debug.apk` a su dispositivo móvil


### Fundamental

### Documentación

* Ionic Icons en la [página oficial](https://ionic.io/ionicons)
* Ionic Components en la [página oficial](https://ionicframework.com/docs/components)

### Términos

APK

### Referencias

* Ionicframework. (n.d.). Your First Ionic App: Angular: Ionic Documentation. Retrieved from https://ionicframework.com/docs/angular/your-first-app