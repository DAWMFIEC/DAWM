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
          let responseclean = response.text.replace(/(\r\n|\n|\r)/gm, '')
          
          chai.expect(responseclean).to.contain('<form id="formulario"');
          chai.expect(responseclean).to.contain('type="text"');
          chai.expect(responseclean).to.contain('type="email"');
          chai.expect(responseclean).to.contain('type="date"');
          chai.expect(responseclean).to.contain('type="number"');
          chai.expect(responseclean).to.contain('type="checkbox"');
          chai.expect(responseclean).to.contain('<select');
          chai.expect(responseclean).to.contain('<textarea');
          chai.expect(responseclean).to.contain('<button');
          chai.expect(responseclean).to.contain('</button>');
          chai.expect(responseclean).to.contain('</form>');
            
        })
    });

});