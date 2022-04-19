const assert = require('assert');
const chai = require('chai');
const request = require('supertest');
const app = require('../app')

describe('Test unitarios para la ruta `/`', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    it('Modifique el archivo views/index.ejs', function() {
      return request(app)
        .get('/')
        .then((response) => {
            chai.expect(response.text).to.contain('<h1>El título más importante</h1>');
            chai.expect(response.text).to.contain('<h2>Título secundario</h2>');
            chai.expect(response.text).to.contain('<h6>El título menos importante</h6>');
        })
    });

});