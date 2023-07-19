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
	//Importe el módulo cliente para requerimientos http
	import { HttpClientModule } from '@angular/common/http';

	//Importe el servicio
	import { <NOMBRE_SERVICIO>Service } from './<nombre_servicio>.service';

	//Importe la interfaz
	import { <NOMBRE_INTERFAZ> } from '../interfaces/<nombre_interfaz>';


	describe('<NOMBRE_SERVICIO>Service', () => {

	  //Cree un objeto del tipo del servicio
	  let service: <NOMBRE_SERVICIO>Service;
	  
	  beforeEach(() => {
	    TestBed.configureTestingModule({

	      //Registre el módulo de petición http
	      imports: [ HttpClientModule ],

	      //Registre el servicio como proveedor de datos
	      providers: [ <NOMBRE_SERVICIO>Service ]
	    });


	    //Instancie el servicio
	    service = TestBed.inject(<NOMBRE_SERVICIO>Service);
	  });

	  ...

	  // La función done se encarga de esperar por completar el requerimiento
	  it('<NOMBRE_METODO> should return value from observable', (done: DoneFn) => {
	  	//Invoque el método con la petición asincrónica
	    service.getResponse().subscribe(data => {
	      
	      // Valide que la respuesta sea mayor que 0
	      expect((data as <NOMBRE_INTERFAZ>[]).length).toBeGreaterThan(0)
	      
	      // Que espere hasta que llegue la respuesta 
	      done();
	    });
	  });


	});
	```

* Agregue el código en el archivo de pruebas del componente que usa el servicio (`<COMPONENTE_SELECCIONADO>.spec.ts`) creado previamente.

	```typescript

	...
	//Importe el módulo cliente para requerimientos http
	import { HttpClientModule } from '@angular/common/http';

	//Importe el servicio
	import { <NOMBRE_SERVICIO>Service } from '../<nombre_servicio>.service';


	describe('<COMPONENTE_SELECCIONADO>Component', () => {

	  ...	 

	  beforeEach(() => {
	    TestBed.configureTestingModule({

	      //Registre el módulo de petición http
	      imports: [ HttpClientModule ],

	      //Registre el servicio como proveedor de datos
	      providers: [ <NOMBRE_SERVICIO>Service ]

	      ...
	    });

	    ...
	   
	  });

	  ...


	  it('should request service user after Angular calls ngOnInit', (done: DoneFn) => {

	  	// Llame a ngOnInit para simular el ciclo de vida del componente
	    component.ngOnInit();


	    // Utilice fixture.whenStable para esperar a que se resuelva el observable del servicio
	    fixture.whenStable().then(() => {
	      

	      // Valide que la respuesta sea mayor que 0
	      expect(component.data.length).toBeGreaterThan(0)

	      // Que espere hasta que llegue la respuesta
	      done();

	    });
	  });
	});
	````

* Agregue el código en el archivo de pruebas de **todos** los componentes de su aplicación.

	```typescript
	describe('SoloHTMLComponent', () => {
		...

		//Valide la existencia de un elemento <nav> en la plantilla html del elemento

		it('nav element', ()=> {
		    const headerElement: HTMLElement = fixture.nativeElement;
		    const nav = headerElement.querySelector('nav')!;
		    expect(nav).toBeTruthy();
		  })

		//Valide la NO existencia de un elemento <p> en la plantilla html del elemento

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


	  //Valide por la existencia de TODOS los componentes que son instanciados en la aplicación mediante un selector
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
	
* Ejecute las pruebas unitarias con: `ng test`

### Términos

testing

### Referencias

*  Angular. (2023). Retrieved 17 July 2023, from https://angular.io/guide/testing