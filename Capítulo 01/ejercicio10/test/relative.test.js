const assert = require('assert');
const chai = require('chai');
const chaiCSS = require('chai-css');
const request = require('supertest');
const app = require('../app');

chai.use(chaiCSS);

describe('Test unitarios para la ruta `/`', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/stylesheets/relative.css')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    let selector1 = 'picture img'
    let maxwidthname = 'max-width', maxwidthvalue = '50%'
    let displayname = 'display', displayvalue = 'block'
    let marginname = 'margin', marginvalue = '0 auto'
    let borderradiusname = 'border-radius', borderradiusvalue = '0.4rem'

    let selector2 = 'picture span'
    let maxwidthname2 = 'max-width', maxwidthvalue2 = '50%'
    let displayname2 = 'display', displayvalue2 = 'block'
    let marginname2 = 'margin', marginvalue2 = '0 auto'
    
    let backgroundname = 'background', backgroundvalue = 'white'
    let paddingname = 'padding', paddingvalue = '1.4rem 2rem'
    let marginname3 = 'margin', marginvalue3 = '0 auto'
    let fontsizename = 'font-size', fontsizevalue = '1.5vw'
    let fontstylename = 'font-style', fontstylevalue = 'italic'           
    let bordercolorname = 'border-color', bordercolorvalue = '#1F516B'
    let borderwidthname = 'border-width', borderwidthvalue = '1.2pt 0pt 1.2pt 1.2pt'
    let borderstylename = 'border-style', borderstylevalue = 'solid'
    
    let positionname = 'position', positionvalue = 'relative'
    let topname = 'top', topvalue = '-5.7rem'
    let leftname = 'left', leftvalue = '8.7rem'

    it(`En public/stylesheets/fixed.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector1} {
          ${maxwidthname}: ${maxwidthvalue};
          ${displayname}: ${displayvalue};
          ${marginname}: ${marginvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/relative.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector1)
            .and.decl( maxwidthname, maxwidthvalue )
            .and.decl( displayname, displayvalue )
            .and.decl( marginname, marginvalue )
        })
    });

    it(`En public/stylesheets/fixed.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector1} {
          ${borderradiusname}: ${borderradiusvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/relative.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector1)
            .and.decl( borderradiusname, borderradiusvalue )
        })
    });

    it(`En public/stylesheets/fixed.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector2} {
          ${maxwidthname2}: ${maxwidthvalue2};
          ${displayname2}: ${displayvalue2};
          ${marginname2}: ${marginvalue2};
        }`, function() {
      return request(app)
        .get('/stylesheets/relative.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector2)
            .and.decl( maxwidthname2, maxwidthvalue2 )
            .and.decl( displayname2, displayvalue2 )
            .and.decl( marginname2, marginvalue2 )
        })
    });
    
    it(`En public/stylesheets/fixed.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector2} {
          ${backgroundname}: ${backgroundvalue};
          ${paddingname}: ${paddingvalue};
          ${marginname3}: ${marginvalue3};
          ${fontsizename}: ${fontsizevalue};
          ${fontstylename}: ${fontstylevalue};
          ${bordercolorname}: ${bordercolorvalue};
          ${borderwidthname}: ${borderwidthvalue};
          ${borderstylename}: ${borderstylevalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/relative.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector2)
            .and.decl( backgroundname, backgroundvalue )
            .and.decl( paddingname, paddingvalue )
            .and.decl( marginname3, marginvalue3 )
            .and.decl( fontsizename, fontsizevalue )
            .and.decl( fontstylename, fontstylevalue )
            .and.decl( bordercolorname, bordercolorvalue )
            .and.decl( borderwidthname, borderwidthvalue )
            .and.decl( borderstylename, borderstylevalue )
        })
    });

    it(`En public/stylesheets/fixed.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector2} {
          ${positionname}: ${positionvalue};
          ${topname}: ${topvalue};
          ${leftname}: ${leftvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/relative.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector2)
            .and.decl( positionname, positionvalue )
            .and.decl( topname, topvalue )
            .and.decl( leftname, leftvalue )
        })
    });

});