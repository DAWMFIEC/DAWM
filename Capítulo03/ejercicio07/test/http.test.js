const chai = require('chai');
const request = require('supertest');

const URL = 'http://localhost:8000'

describe('Test unitarios para la ruta `/`', function() {

    it('Respuesta del proceso de servidor', function() {
      return request(URL)
        .get('/')
        .then((response) => {
            try {
              chai.assert.equal(response.status, 200)
            } catch (error) {
              chai.expect.fail('Levante el proceso del servidor');
              return;
            }

        })
    });

    it('Respuesta del mensaje del servidor', function() {
      return request(URL)
        .get('/')
        .then((response) => {
            try {
              let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '')
              let responseCorrect = "Mi primer servidor"
              chai.expect(responseClean).to.contain(responseCorrect)
            } catch (error) {
              chai.expect.fail('El mensaje de respuesta debe ser `Mi primer servidor`');
              return;
            }

        })
    });

});