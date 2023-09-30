const server = require('../app.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);

const Foto = require('../models').foto;  

describe('Express Models', () => {

  it('Testing model: Foto - findAll', async () => {
      let fotos = await Foto.findAll()
      await expect(fotos.length).toEqual(10);
  });

});