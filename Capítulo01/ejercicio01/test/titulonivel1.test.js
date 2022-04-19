const assert = require('assert');
const chai = require('chai');
const request = require('supertest');
const app = require('../app')

describe('Test unitarios para la ruta `/`', function() {

    it('Debe recibir una respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    it('Debe modificar el views/index.ejs', function() {
      return request(app)
        .get('/')
        .then((response) => {
            chai.expect(response.text).to.contain('<h1>Hola, mundo</h1>');
        })
    });

});