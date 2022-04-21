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
            chai.expect(response.text).to.contain('<img src="https://picsum.photos/200/300">');
            chai.expect(response.text).to.contain('<img src="images/tablet.jpg" width="250">');
            chai.expect(response.text).to.contain('<img src="images/tablet2.jpg" alt="Imagen de tablet 2">');
        })
    });

});