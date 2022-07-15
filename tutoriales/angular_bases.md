---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM-2022/)

Angular - Componentes, Comunicación y Directivas 
================================================


Componentes
===========

* * *

Los componentes son las unidades básicas de una interfaz de usuario en una aplicación Angular. Estos componentes están asociados con una plantilla y un subconjunto de directivas.

![Componentes](https://www.simplilearn.com/ice9/free_resources_article_thumb/Components_Heirarchy-Angular_Components.PNG)

* Para crear un componente:

    + Desde la línea de comandos, en la ruta raíz del proyecto de Angular:
      ```
      ng g c <nombre-del-componente>
      ```
    + El mensaje de `update` indica que el componente creado está incluido en el arreglo de declaraciones del componente principal (`src/app.module.ts`).

    <p align="center">
      <img width="790" height="100" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Component_Message.PNG">
    </p>

    + Se creará una carpeta con el nombre del componente, con los elementos: **.html**, **.css**, **.ts** (luego, Angular se encargará de transpilar a **.js**) y **.spec.ts** (pruebas unitarias sobre el componente).

    <p align="center">
      <img width="331" height="142" src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Create_component.PNG">
    </p>

    
    

* Para modificar (la vista) un componente:

    + Modifique las etiquetas html, en el archivo **.html** del componente.
    + Modifique los selectores y propiedades css de las etiquetas html del componente, en el archivo **.css** del componente.
    + Actualice el navegador o (re)inicie el servidor

* Para usar (renderizar) un componente dentro de otro componente:
    
    + Identifique el `selector` del componente hijo en el decorador de la clase:
      ```
        ...
      @Component({
          selector: 'app-cabecera',
          templateUrl: './cabecera.component.html',
          styleUrls: ['./cabecera.component.css']
      })
      export class CabeceraComponent {
        ...
      ```

    + Use el `selector` en el **.html** de cualquier otro componente
      ```
      <app-cabecera></app-cabecera>
      ``` 

    + Actualice el navegador o (re)inicie el servidor



Comunicación 
============

* * *

Hay [más de un mecanismo de comunicación](https://www.acontracorrientech.com/guia-practica-del-databinding-en-angular/) entre el **.html** y el **.ts**: string interpolation, property binding, event binding y two way databinding.

<p align="center">
  <img width="500" height="241" src="https://www.sneppets.com/wp-content/uploads/2020/08/data_binding_angular_9.png">
</p>

De una vía (one-way binding) - string interpolation
---------------------------------------------------

La interpolación se refiere a incrustar expresiones en texto marcado. De forma predeterminada, la interpolación utiliza llaves dobles {{ y }} como delimitadores.

* En el **.ts** del componente

  + Agregue el atributo y su tipo dentro de la clase

    ```
      ...
    export class CabeceraComponent {
        mensaje:string = "Este es un mensaje"
    }
      ...
    ```
* En el **.html** del componente
  
  + Agregue las etiquetas HTML que sean necesarias y coloque como texto el atributo `mensaje` dentro de llaves dobles.
  
    ```
      <div>
      {% raw %} {{mensaje}} {% endraw %} 
      </div>
    ```

* Actualice el navegador o (re)inicie el servidor
    
Directivas 
==========

Las directivas sirven para extender la vista y usar lógica que será ejecutada en el DOM (Document Object Model). Existen [tres tipos de directivas](https://ngchallenges.gitbook.io/project/directivas): directivas de atributo, directivas estructurales y componentes.

Directivas estructurales - (\*ngFor)
------------------------------------

Con esta directiva estructural podemos repetir n veces un bloque de etiquetas.

* En el **.ts** del componente

  + Agregue el atributo y su tipo dentro de la clase

    ```
      ...
    export class CabeceraComponent {
        terminos:any[] = [
          {
          "palabra":"fork",
          "significado":"Copia de un proyecto en una dirección distinta en el repositorio",
          "enlace":"https://es.wikipedia.org/wiki/Bifurcación_(desarrollo_de_software)",
          "autor":"Autor 1"
          },
          {
          "palabra":"saas",
          "significado":"'Software as a Service', mediante un navegador web se accede a un software el cual se enceuntra alojado en servidores del proveedor",
          "enlace":" http://www.portalsaas.com/que-es-saas-software-as-a-service.php",
          "autor":"Autor 2"
          },
        ]
      ...
    ```

* En el **.html** del componente
  
  + Agregue la plantilla de etiquetas HTML

    ```html
    <div class="card-columns">
      <div class="card" *ngFor="let termino of terminos">
        <div class="card-body">
           <!-- Enlace -->
           <a href="#" class="card-link"  href="{{termino.enlace}}" target="_blank">
            <h5 class="card-title">
              <!-- Palabra -->
              {{termino.palabra}}
            </h5>
          </a>
          <p class="card-text">    
            <!-- Significado -->
            {{termino.significado}}
          </p>
          <h6 class="card-subtitle mb-2 text-muted text-right">  
            <!-- Autor -->
             {{termino.autor}}
          </h6>
        </div>
      </div>
    </div>
    ```
* Actualice el navegador o (re)inicie el servidor

Referencias 
===========

* * *

* Angular. (2021). Retrieved 1 December 2021, from [https://angular.io/](https://angular.io/)
* Introduction to Angular Components and How to Implement It? (20202) https://www.simplilearn.com/tutorials/angular-tutorial/angular-components
* Guía de iniciación al data binding en Angular Qué es y cómo se utiliza. (2019). Retrieved 13 July 2022, from https://www.acontracorrientech.com/guia-practica-del-databinding-en-angular/
* 🧑‍🎨Directivas🧑‍🎨 - Aprendiendo Angular. (2022). Retrieved 15 July 2022, from https://ngchallenges.gitbook.io/project/directivas