const chai = require('chai');
const request = require('supertest');

const URL = 'http://localhost:8000'

describe('Test unitarios a las rutas del servidor ' + URL, function() {

    
    it('Respuesta del mensaje del servidor de la ruta `/texto`', function() {
      return request(URL)
        .get('/texto')
        .then((response) => {
            try {
              let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /, '')
              let responseCorrect = `Esto es un texto`.replace(/ /, '')
              chai.expect(responseClean).to.contain(responseCorrect)
            } catch (error) {
              chai.expect.fail('El mensaje de respuesta debe ser `Esto es un texto`');
              return;
            }

        })
    });

    it('Respuesta del mensaje del servidor de la ruta `/json`', function() {
      return request(URL)
        .get('/json')
        .then((response) => {
            try {
              let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /, '')
              let responseCorrect = `[{"title":"The Alchemist","author":"Paulo Coelho","year":1988},{"title":"The Prophet","author":"Kahlil Gibran","year":1923}]`.replace(/ /, '')
              chai.expect(responseClean).to.contain(responseCorrect)
            } catch (error) {
              chai.expect.fail('El mensaje de respuesta debe ser `[{"title":"The Alchemist","author":"Paulo Coelho","year":1988},{"title":"The Prophet","author":"Kahlil Gibran","year":1923}]`');
              return;
            }

        })
    });


    it('Respuesta del mensaje del servidor de la ruta `/html`', function() {
      return request(URL)
        .get('/html')
        .then((response) => {
            try {
              let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /, '')
              let responseCorrect = `<html><body><h1>Esta es una cabecera de nivel 1</h1></body></html>`.replace(/ /, '')
              chai.expect(responseClean).to.contain(responseCorrect)
            } catch (error) {
              chai.expect.fail('El mensaje de respuesta debe ser `<html><body><h1>Esta es una cabecera de nivel 1</h1></body></html>`');
              return;
            }

        })
    });

});