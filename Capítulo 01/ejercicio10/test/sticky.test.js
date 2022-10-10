const assert = require('assert');
const chai = require('chai');
const chaiCSS = require('chai-css');
const request = require('supertest');
const app = require('../app');

chai.use(chaiCSS);

describe('Test unitarios para la ruta `/`', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/stylesheets/sticky.css')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    let selector = 'nav'

    let backgroundcolorname = 'background-color', backgroundcolorvalue = 'white'
    let paddingtopname = 'padding-top', paddingtopvalue = '1%'
    let paddingbottomname = 'padding-bottom', paddingbottomvalue = '1%'
    let zindezname = 'z-index', zindezvalue = '999'

    let positionname = 'position', positionvalue =  'sticky'
    let topname = 'top', topvalue = '0px'

    it(`En public/stylesheets/fixed.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector} {
          ${backgroundcolorname}: ${backgroundcolorvalue};
          ${paddingtopname}: ${paddingtopvalue};
          ${paddingbottomname}: ${paddingbottomname};
          ${zindezname}: ${zindezvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/sticky.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector)
            .and.decl( backgroundcolorname, backgroundcolorvalue )
            .and.decl( paddingtopname, paddingtopvalue )
            .and.decl( paddingbottomname, paddingbottomname )
            .and.decl( zindezname, zindezvalue )
        })
    });

    it(`En public/stylesheets/fixed.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector} {
          ${positionname}: ${positionvalue};
          ${topname}: ${topvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/sticky.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector)
            .and.decl( positionname, positionvalue )
            .and.decl( topname, topvalue )

        })
    });
   
   

});