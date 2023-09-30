const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('Express Endpoints', () => {

  it('GET /', async () => {
      const res = await requestWithSupertest.get('/');
      expect(res.text).toContain('Dashboard');
      expect(res.text).toContain('Last quarter');
      expect(res.text).toContain('illustrative');
      expect(res.text).toContain('tabular');
  });

});