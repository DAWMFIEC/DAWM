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

    let selector1 = '#bloque1'
    let displayname = 'display', displayvalue = 'flex'
    let flexdirectionname = 'flex-direction', flexdirectionvalue = 'row-reverse'
    let justifycontentname = 'justify-content', justifycontentvalue = 'space-evenly'

    let selector2 = '#bloque1 img:nth-child(4)'
    let ordername = 'order', ordervalue = '-1'


    let selector3 = '#bloque2'
    let displayname2 = 'display', displayvalue2 = 'grid'
    let gridtemplatecolumnsname = 'grid-template-columns', gridtemplatecolumnsvalue = '1fr 1fr'
    let justifyitemsname = 'justify-items', justifyitemsvalue = 'center'
    let gridrowgapname = 'grid-row-gap', gridrowgapvalue = '10px'


    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector1} {
          ${displayname}: ${displayvalue};
          ${flexdirectionname}: ${flexdirectionvalue};
          ${justifycontentname}: ${justifycontentvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector1)
            .and.decl( displayname, displayvalue )
            .and.decl( flexdirectionname, flexdirectionvalue)
            .and.decl( justifycontentname, justifycontentvalue )
            
        })
    });

     it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector2} {
          ${ordername}: ${ordervalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector2)
            .and.decl( ordername, ordervalue )
            
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector3} {
          ${displayname2}: ${displayvalue2};
          ${gridtemplatecolumnsname}: ${gridtemplatecolumnsvalue};
          ${justifyitemsname}: ${justifyitemsvalue};
          ${gridrowgapname}: ${gridrowgapvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector3)
            .and.decl( displayname2, displayvalue2 )
            .and.decl( gridtemplatecolumnsname, gridtemplatecolumnsvalue)
            .and.decl( justifyitemsname, justifyitemsvalue )
            .and.decl( gridrowgapname, gridrowgapvalue )
            
        })
    });


});