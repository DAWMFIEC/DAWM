const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('Express Endpoints', () => {

  it('GET /etiquetas/findAllById/:idmin/:idmax/json', async () => {
      const res = await requestWithSupertest.get('/etiquetas/findAllById/1/8/json');
      expect(res.header['content-type']).toBe('application/json; charset=utf-8')
      expect(res.statusCode).toBe(200);
  });

  it('GET /etiquetas/findByTexto/json', async () => {
      const res = await requestWithSupertest.get('/etiquetas/findByTexto/json?texto=techo');
      expect(res.header['content-type']).toBe('application/json; charset=utf-8')
      expect(res.statusCode).toBe(200);
  });

  it('GET /etiquetas/findAllById/:idmin/:idmax/json', async () => {
      const res = await requestWithSupertest.get('/etiquetas/findAllById/1/8/json');
      expect(res.header['content-type']).toBe('application/json; charset=utf-8')
      expect(res.body.length).toEqual(8);
  });

  it('GET /etiquetas/findByTexto/json', async () => {
      const res = await requestWithSupertest.get('/etiquetas/findByTexto/json?texto=azul');
      expect(res.header['content-type']).toBe('application/json; charset=utf-8')
      expect(res.body.length).toEqual(1);
  });

  it('GET /etiquetas/findAllById/:idmin/:idmax/json', async () => {
      const res = await requestWithSupertest.get('/etiquetas/findByTexto/json?texto=libro');
      expect(res.header['content-type']).toBe('application/json; charset=utf-8')
      expect(res.body.length).toEqual(0);
  });



});