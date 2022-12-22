const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('Express Endpoints', () => {

  it('GET /fotos/findAll/json', async () => {
      const res = await requestWithSupertest.get('/fotos/findAll/json');

      let elemento0 = res.body[0]
      let etiquetas = elemento0["etiqueta"]
      
      expect(etiquetas.length).toEqual(2);
  });

  it('GET /fotos/findAll/json', async () => {
      const res = await requestWithSupertest.get('/fotos/findAll/json');

      let elemento0 = res.body[1]
      let etiquetas = elemento0["etiqueta"]
      
      expect(etiquetas.length).toEqual(1);
  });


});