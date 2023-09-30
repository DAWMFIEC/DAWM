const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('Express Endpoints', () => {

  it('GET /fotos/findAll/json', async () => {
      const res = await requestWithSupertest.get('/fotos/findAll/json');
      expect(res.header['content-type']).toBe('application/json; charset=utf-8')
      expect(res.statusCode).toBe(200);
  });

  it('GET /fotos/findAll/json', async () => {
      const res = await requestWithSupertest.get('/fotos/findAll/json');
      expect(res.body.length).toEqual(10);
  });


});