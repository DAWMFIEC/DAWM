const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('Express Endpoints', () => {

  it('GET /photo/album', async () => {
      const res = await requestWithSupertest.get('/photo/album');
      expect(res.header['content-type']).toBe('application/json; charset=utf-8')
      expect(res.statusCode).toBe(200);
  });

  it('GET /photo/album', async () => {
      const res = await requestWithSupertest.get('/photo/album');
      expect(res.body.length).toEqual(6);
  });

  it('GET /photo/album/1', async () => {
      const res = await requestWithSupertest.get('/photo/album/1');
      expect(res.body['tiempo']).toEqual('19 mins');
  });

});