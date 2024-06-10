import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraComponent } from './cabecera.component';

describe('CabeceraComponent', () => {
  let component: CabeceraComponent;
  let fixture: ComponentFixture<CabeceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should has attribute strAcerca",()=>{
    let strAcerca: string = component.strAcerca;
    expect(strAcerca).toEqual("Album fotográfico");
  })

  it('should render strAcerca', () => {
    const fixture = TestBed.createComponent(CabeceraComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1.fw-light')?.textContent).toContain("Album fotográfico");
  });

  it("should has attribute strInfo",()=>{
    let strInfo: string = component.strInfo;
    expect(strInfo).toEqual("A través de mis ojos");
  })

  it('should render strInfo', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p.lead.text-muted')?.textContent).toContain("A través de mis ojos");
  });
});
