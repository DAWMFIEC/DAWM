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
          let responseclean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g,'')
          let answerclean = `
            <p>
              <span>Estudia no para saber una cosa más, sino para saberla mejor.</span>
              <sub>Séneca.</sub>
            </p>
          `.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g,'')
          
          chai.expect(responseclean).to.contain(answerclean);
            
        })
    });

});