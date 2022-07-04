const assert = require('assert');
const chai = require('chai');
const chaiDom = require('chai-dom');
const requireFromString = require('require-from-string');
const request = require('supertest');
const app = require('../app');

chai.use(chaiDom);


describe('Test unitarios para la ruta `/`', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)

        })
    });

    it('Etiqueta script', function() {
      return request(app)
        .get('/')
        .then((response) => {

          try {
            let responseclean = response.text.replace(/(\r\n|\n|\r)/gm, '')
            let script = `<script src="/scripts/ejercicio.js"></script>`
            chai.expect(responseclean).to.contain(script)
          } catch (error) {
            chai.expect.fail('Utilice la etiqueta script con el atributo src y la ruta "/scripts/ejercicio.js"');
            return;
          }

            
        })
    });
    
   

});