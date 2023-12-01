import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { RecursosService } from './recursos.service';

describe('RecursosService', () => {
  let service: RecursosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
       imports: [HttpClientModule],
       providers: [RecursosService]
    });
    service = TestBed.inject(RecursosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('obtenerDatos should return value from observable',
    (done: DoneFn) => {
    service.obtenerDatos().subscribe(respuesta => {
      expect(respuesta).toHaveSize(9);
      done();
    });
  });

});
