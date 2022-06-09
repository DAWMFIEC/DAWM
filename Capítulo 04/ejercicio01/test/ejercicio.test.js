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
        .get('/scripts/ejercicio.js')
        .then((response) => {
            assert.equal(response.status, 200)

        })
    });

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {
            let script = requireFromString(response.text)
            console.log(response.text)
            console.log(script.myfunc())
            console.log(script.myfunc2())
        })
    });
    
   

});