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

	```typescript
	...
	import { HttpClientModule } from '@angular/common/http';
	import { <NOMBRE_SERVICIO>Service } from './<nombre_servicio>.service';
	import { <NOMBRE_INTERFAZ> } from '../interfaces/<nombre_interfaz>';


	describe('<NOMBRE_SERVICIO>Service', () => {

	  //Cree un objeto del tipo del servicio
	  let service: <NOMBRE_SERVICIO>Service;
	  
	  beforeEach(() => {
	    TestBed.configureTestingModule({

	      //Registre el módulo de petición asíncrona
	      imports: [ HttpClientModule ],

	      //Registre el servicio como proveedor de datos
	      providers: [ <NOMBRE_SERVICIO>Service ]
	    });


	    //Instancie el servicio
	    service = TestBed.inject(<NOMBRE_SERVICIO>Service);
	  });

	  ...

	  it('<NOMBRE_METODO> should return value from observable',
	    (done: DoneFn) => {
	    service.getResponse().subscribe(data => {
	      expect((data as <NOMBRE_INTERFAZ>[]).length).toBeGreaterThan(0)
	      done();
	    });
	  });


	});
	```

* Agregue el código en el archivo de pruebas del componente que usa el servicio (`<COMPONENTE_SELECCIONADO>.spec.ts`) creado previamente.
* Agregue el código en el archivo de pruebas de **todos** los componentes de su aplicación.

	```typescript
	describe('SoloHTMLComponent', () => {
		...

		//Valida la existencia de un elemento <nav> en la plantilla html del elemento

		it('nav element', ()=> {
		    const headerElement: HTMLElement = fixture.nativeElement;
		    const nav = headerElement.querySelector('nav')!;
		    expect(nav).toBeTruthy();
		  })

		//Valida la NO existencia de un elemento <p> en la plantilla html del elemento

		it('No p element', ()=> {
			const headerElement: HTMLElement = fixture.nativeElement;
			const nav = headerElement.querySelector('p')!;
			expect(nav).toBeFalsy();
		})

	});	
	```

	
* Agregue el código en el archivo de pruebas del componente principal (**app.component.spec.ts**) de la aplicación

	```typescript
	...
	//Importe el módulo para realizar peticiones asincrónicas
	import { HttpClientModule } from '@angular/common/http';

	//Importe TODOS los componentes que son instanciados en la aplicación mediante un selector
	import { UnComponent } from './components/main/un/un.component';
	...
	import { OtroComponent } from './components/main/otro/otro.component';

	describe('AppComponent', () => {
	  beforeEach(async () => {
	    await TestBed.configureTestingModule({
	      imports: [
	        RouterTestingModule,

	        //Registre el módulo para realizar peticiones asincrónicas
	        HttpClientModule
	      ],
	      declarations: [

	      	//Registre TODOS los componentes que son instanciados en la aplicación mediante un selector
	        UnComponent,
	        ...
	        OtroComponent,
	      ],
	    }).compileComponents();
	  });


	  //Valida por la existencia de TODOS los componentes que son instanciados en la aplicación mediante un selector
	  it('should have the Header component', () => {
	    const fixture = TestBed.createComponent(AppComponent);
	    fixture.detectChanges();
	    const compiled = fixture.debugElement.nativeElement;
	    expect(compiled.querySelector('app-un')).not.toBe(null);
	  });

	  ...

	  it('should have the Header component', () => {
	    const fixture = TestBed.createComponent(AppComponent);
	    fixture.detectChanges();
	    const compiled = fixture.debugElement.nativeElement;
	    expect(compiled.querySelector('app-otro')).not.toBe(null);
	  });

	});
	```
	

### Términos

testing

### Referencias

*  Angular. (2023). Retrieved 17 July 2023, from https://angular.io/guide/testing