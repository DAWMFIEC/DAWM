---
theme: jekyll-theme-leap-day
---

## Guía 09

[Regresar](/DAWM-2022/)

### Contenidos

* Revisión de ejercicios previos: dudas y comentarios.
* Heroku es un [PaaS](https://www.ambit-bst.com/blog/definici%C3%B3n-de-iaas-paas-y-saas-en-qu%C3%A9-se-diferencian) enfocado en resolver el despliegue de una aplicación, permite manejar los servidores y sus configuraciones, escalamiento y la administración. Con Heroku solo deben indicar el lenguaje de backend estás utilizando o qué base de datos vas a utilizar, y solo debes ocuparte del desarrollo de tu aplicación.


### Actividades

* Previo a esta actividad, será necesario:
	+ Poseer una cuenta y un repositorio vacío/público en [Github](https://github.com/),
	+ Descargar e instalar [git](https://git-scm.com/downloads) en tu máquina local.
	+ Completar las actividades de la [guía 07](https://dawfiec.github.io/DAWM-2022/guias/guia07.html)  y [guía 08](https://dawfiec.github.io/DAWM-2022/guias/guia08.html).
	+ Tener una cuenta en [Heroku](https://www.heroku.com/).
	+ Descargar e instalar [heroku cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) en tu máquina local.

* Git + Github
	+ En la línea de comandos, desde la ruta donde se encuentra la plantilla de un sitio básico:

		- Inicializa el repositorio localmente, con: ```git init .``` 
		- Agrega el URL de tu repositorio remoto, con:  ```git remote add origin [https://github.com/repositorio-remoto.git](https://github.com/repositorio-remoto.git)```
		- Agrega todos los archivos al repositorio local, con: ```git add .```
		- Versiona todos los archivos con un comentario: ```git commit -m "mi primer comentario"```
		- Agrega la rama main a tu repositorio, con: ```git branch -M main```
		- Envía los cambios locales al repositorio remoto, en la rama main, con: ```git push -u origin main```

* Heroku
	+ Heroku permite manejar las aplicaciones desde la línea de comando o desde la interfaz web.
		- Obtén una cuentan en [Heroku](https://signup.heroku.com/login).
		- Descargar e instalar el [heroku-cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).
		- Desde la línea de comandos en la ruta del sitio web, accede a Heroku, con: ```heroku login```

		Se le pedirá que presione cualquier tecla para ir a su navegador web y completar el inicio de sesión.
		![logindone.jpg](../imagenes/logindone.jpg)

		- Cree un proyecto, con: ```heroku create```

		![created-1](../imagenes/created-1.jpg)

		- Liste las rutas remotas. Verifique si aparece la ruta remota con heroku, use: ```git remote -v```

		![remoteurls](../imagenes/remoteurls.jpg)

* Buildpack
	+ Ahora, vamos a decirle a Heroku el ambiente de ejecución ([buildpacks](https://devcenter.heroku.com/articles/buildpacks)) de la aplicación. Heroku soporta ambientes de ejecución para Ruby, Python, Java, Clojure, Node.js, Scala, Go y PHP. En este caso, el ambiente de ejecución será PHP. En el directorio del proyecto:



### Términos

`Paas`,`despliegue`

### Referencias

* 

