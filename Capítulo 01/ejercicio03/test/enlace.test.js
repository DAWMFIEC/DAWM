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
            chai.expect(response.text).to.contain('<a href="https://developer.mozilla.org/es/" target="_blank">MDN - Mozilla Developer Network</a>');
            chai.expect(response.text).to.contain('<a href="#literal01">Ir a la sección literal 01</a>');
        })
    });

});