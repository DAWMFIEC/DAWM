import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoComponent } from './contacto.component';

describe('ContactoComponent', () => {
  let component: ContactoComponent;
  let fixture: ComponentFixture<ContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should has attribute titulo",()=>{
    let titulo: string = component.titulo;
    expect(titulo).toEqual("Contáctame");
  })

  it('should render titulo', () => {
    const fixture = TestBed.createComponent(ContactoComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h4.text-white')?.textContent).toContain("Contáctame");
  });

  it("should has attribute medios",()=>{
    let mediosTemp:any[] = [
          { "texto":"En Twitter"},
          {"texto":"En Facebook"},
          {"texto":"Por correo electrónico"}
        ];
    let medios: any[] = component.medios;
    expect(medios).toEqual(mediosTemp);
  });

  it('should render medios', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('ul.list-unstyled li')?.length).toEqual(3);
  });
});
