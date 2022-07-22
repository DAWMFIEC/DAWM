const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('User Endpoints', () => {

  it('GET /', async () => {
      const res = await requestWithSupertest.get('/users');
      expect(res.status).toEqual(200);
  });

});