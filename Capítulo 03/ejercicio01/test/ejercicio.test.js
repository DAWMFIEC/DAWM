const assert = require('assert');
const chai = require('chai');
const chaiStyle = require('chai-style');
const request = require('supertest');
const app = require('../app');

chai.use(chaiStyle);

describe('Test unitarios para la ruta `/`', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    
   

});