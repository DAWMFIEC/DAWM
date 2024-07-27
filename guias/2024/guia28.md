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

* Desde la línea de comandos, construimos nuestra aplicación a partir de los recursos web más recientes en el proyecto nativo:

  ```command
  ionic cap build android --prod
  ```

* En **Android Studio**, genere el APK al hacer clic en la ruta `Build` **>** `Build Bundle(s) / APK(s)` **>** `Build APK`

* Si la generación del APK resulta exitosa, transfiera y compruebe el funcionamiento del archivo generado en `android/app/build/outputs/apk/debug/app-debug.apk` en su dispositivo móvil

### Documentación

* De una aplicación en Ionic a liberar una aplicación de Android en [Building And Releasing Your Capacitor Android App](https://ionic.io/blog/building-and-releasing-your-capacitor-android-app)

### Fundamental

* Android Studio Giraffe UI en [x](https://twitter.com/androidstudio/status/1707774273543102821)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">The new Android Studio Giraffe UI is now fully supported with the Intelli.J 2022.3 platform update!<br><br>Some design changes include:<br>⚙️ Simplified main toolbar<br>❇️ Redesigned tool windows<br>⚡️ And more! <a href="https://t.co/rJoaHlGL5B">pic.twitter.com/rJoaHlGL5B</a></p>&mdash; Android Studio (@androidstudio) <a href="https://twitter.com/androidstudio/status/1707774273543102821?ref_src=twsrc%5Etfw">September 29, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

APK

### Referencias

* Grimm, S. (2023). Building And Releasing Your Capacitor Android App. Retrieved from https://ionic.io/blog/building-and-releasing-your-capacitor-android-app