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

    let selector1 = 'article'
    let displaygridname = 'display', displaygridvalue = 'grid'
    let gridtemplatecolumnsname = 'grid-template-columns', gridtemplatecolumnsvalue = '25% 75%'

    let selector2 = 'div.respuesta article'
    let displaygridname2 = 'display', displaygridvalue2 = 'grid'
    let gridtemplatecolumnsname2 = 'grid-template-columns', gridtemplatecolumnsvalue2 = '100%'

    let selector3 = 'div.right img'
    let displayname = 'display', displayvalue = 'none'


    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector1} {
          ${displaygridname}: ${displaygridvalue};
          ${gridtemplatecolumnsname}: ${gridtemplatecolumnsvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector1)
            .and.decl( displaygridname, displaygridvalue )
            .and.decl( gridtemplatecolumnsname, gridtemplatecolumnsvalue )
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
      @media screen and (max-width: 640px) {
        ${selector2} {
          ${displaygridname2}: ${displaygridvalue2};
          ${gridtemplatecolumnsname2}: ${gridtemplatecolumnsvalue2};
        }
      }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector2)
            .and.decl( displaygridname2, displaygridvalue2 )
            .and.decl( gridtemplatecolumnsname2, gridtemplatecolumnsvalue2 )
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
      @media screen and (max-width: 640px) {
        ${selector3} {
          ${displayname}: ${displayvalue};
        }
      }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector3)
            .and.decl( displayname, displayvalue )
        })
    });
   

});