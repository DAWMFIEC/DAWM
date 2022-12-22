const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('Express Endpoints', () => {

  it('GET /etiquetas/findAll/json', async () => {
      const res = await requestWithSupertest.get('/etiquetas/findAll/json');
      expect(res.header['content-type']).toBe('application/json; charset=utf-8')
      expect(res.statusCode).toBe(200);
  });

  it('GET /etiquetas/findAll/json', async () => {
      const res = await requestWithSupertest.get('/etiquetas/findAll/json');
      expect(res.body.length).toEqual(8);
  });


});