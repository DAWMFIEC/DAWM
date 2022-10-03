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

    let a1 = `<a href="https://developer.mozilla.org/es/" target="_blank">MDN - Mozilla Developer Network</a>`
    let a2 = `<a href="#literal01">Ir a la sección literal 01</a>`

    it('En views/index.ejs use la etiqueta: '+a1, function() {
      return request(app)
        .get('/')
        .then((response) => {

          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          let a1clean = a1.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          
          chai.expect(responseclean).to.contain(a1clean);
            
        })
    });

    it('En views/index.ejs use la etiqueta: '+a2, function() {
      return request(app)
        .get('/')
        .then((response) => {

          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          let a2clean = a2.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          
          chai.expect(responseclean).to.contain(a2clean);
            
        })
    });

});