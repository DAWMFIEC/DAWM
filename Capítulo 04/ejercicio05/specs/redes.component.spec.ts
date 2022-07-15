import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesComponent } from './redes.component';

describe('RedesComponent', () => {
  let component: RedesComponent;
  let fixture: ComponentFixture<RedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   it("should has attribute redes",()=>{
    let redesTmp: any[] = [
      {
        'href': 'https://twitter.com/home',
        'alt': 'Sígueme en Twitter',
        'src': 'https://cdn-icons-png.flaticon.com/512/733/733579.png'
      },
      {
        'href': 'https://www.facebook.com/',
        'alt': 'Likes en Facebook',
        'src': 'https://cdn-icons-png.flaticon.com/512/174/174848.png'
      },
      {
        'href': 'mailto:correo@gmail.com',
        'alt': 'Envíame un correo',
        'src': 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png'
      }
    ];
    let redes: any[] = component.redes;
    expect(redes).toEqual(redesTmp);
  });

  it('should render redes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('ul.list-group.list-group-horizontal.justify-content-center li')?.length).toEqual(3);
  });

});
