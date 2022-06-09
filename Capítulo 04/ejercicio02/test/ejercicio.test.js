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

    it('Asignación de variables', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         try {

            /* Revisión textual */
            let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '')
            let scriptTexto = `let mensaje = "Este es un mensaje desde Javascript"`
            chai.expect(responseClean).to.contain(scriptTexto)

            /* Revisión al ejecutar */
            let scriptEjecutable = requireFromString(response.text)
            let mensaje = "Este es un mensaje desde Javascript"
            chai.expect(scriptEjecutable.definicionVariables()).to.equal(mensaje)

          } catch (error) {
            chai.expect.fail('La variable mensaje debe tener el valor "Este es un mensaje desde Javascript"');
            return;
          }
            
        })
    });
    
   

});