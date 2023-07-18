---
theme: jekyll-theme-leap-day
---

## Guía 17

[DAWM](/DAWM/) / [Proyecto06](/DAWM/proyectos/2023/proyecto06)

### Actividades previas

* Clone su proyecto e instale las dependencias.
* Levante el servidor y compruebe el resultado en el navegador.

#### Testing

* Consulte la documentación la [guía](recursos/TestAngularV2.pdf) con los test en Angular, la documentación de [Angular - Testing](https://angular.io/guide/testing) o consulte alguno de los sistemas de IA ([ChatGPT](https://chat.openai.com/) o [Bard](https://bard.google.com/)).

### Actividades

* Agregue el código en el archivo de pruebas del servicio (`<NOMBRE_SERVICIO>.service.spec.ts`) creado previamente.
* Agregue el código en el archivo de pruebas del componente que usa el servicio (`<COMPONENTE_SELECCIONADO>.spec.ts`) creado previamente.
* Agregue el código en el archivo de pruebas de **todos** los componentes de su aplicación.

	<details>
	  <summary><b>Pista:</b> Tests para componentes solo con HTML</summary>
	  
	  <br>
	  A continuación, un ejemplo de dos test que podrían incluir en el archivos de testing.  
	  
	  <pre>
	  	<code>
			describe('SoloHTMLComponent', () => {
				...

				//Por la existencia de un elemento <nav>

				it('nav element', ()=> {
				    const headerElement: HTMLElement = fixture.nativeElement;
				    const nav = headerElement.querySelector('nav')!;
				    expect(nav).toBeTruthy();
				  })

				//Por la NO existencia de un elemento <p>

				it('p element', ()=> {
					const headerElement: HTMLElement = fixture.nativeElement;
					const nav = headerElement.querySelector('p')!;
					expect(nav).toBeFalsy();
				})

			});	
	  	</code>
	  </pre>
	  
	</details>

	

	

### Términos

testing

### Referencias

*  Angular. (2023). Retrieved 17 July 2023, from https://angular.io/guide/testing