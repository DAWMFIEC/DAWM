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

    let selector1 = '.respuesta p'
    let marginleftname = 'margin-left', marginleftvalue = '25%'
    let marginrightname = 'margin-right', marginrightvalue = '25%'
    let textalignname = 'text-align', textalignvalue = 'center'

    let selector2 = '.respuesta p span'
    let textshadowname = 'text-shadow', textshadowvalue = '2px 2px 4px #a59f9f'

    let selector3 = '.respuesta p sub'
    let texttransformname = 'text-transform', texttransformvalue = 'uppercase'

    let selector4 = '.respuesta > p'
    let bordername = 'border', bordervalue = '1pt solid black'
    let paddingname = 'padding', paddingvalue = '3rem 1rem'
    let borderradiusname = 'border-radius',borderradiusvalue = '0.5rem 1.4rem'


    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector1} {
          ${marginleftname}: ${marginleftvalue};
          ${marginrightname}: ${marginrightvalue};
          ${textalignname}: ${textalignvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector1)
            .and.decl( marginleftname, marginleftvalue )
            .and.decl( marginrightname, marginrightvalue)
            .and.decl( textalignname, textalignvalue )
            
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector2} {
          ${textshadowname}: ${textshadowvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector2)
            .and.decl( textshadowname, textshadowvalue )
            
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector3} {
          ${texttransformname}: ${texttransformvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector3)
            .and.decl( texttransformname, texttransformvalue )
            
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector4} {
          ${bordername}: ${bordervalue};
          ${paddingname}: ${paddingvalue};
          ${borderradiusname}: ${borderradiusvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector4)
            .and.decl( bordername, bordervalue )
            .and.decl( paddingname, paddingvalue)
            .and.decl( borderradiusname, borderradiusvalue )
            
        })
    });

});