const assert = require('assert');
const chai = require('chai');
const chaiCSS = require('chai-css');
const request = require('supertest');
const app = require('../app');

chai.use(chaiCSS);

describe('Test unitarios para la ruta `/`', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    let selector1 = 'img'
    let maxwidth = 'max-width', maxwidthvalue = '100%'
    let height = 'height', heightvalue = 'auto'

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector1} {
          ${maxwidth}: ${maxwidthvalue};
          ${height}: ${heightvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector1)
            .and.decl( maxwidth, maxwidthvalue )
            .and.decl( height, heightvalue )
        })
    });

    
    

});