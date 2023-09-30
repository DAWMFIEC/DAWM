const assert = require('assert');
const chai = require('chai');
const chaiCSS = require('chai-css');
const request = require('supertest');
const app = require('../app');

chai.use(chaiCSS);

describe('Test unitarios para la ruta `/`', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/stylesheets/fixed.css')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    let divwhatsapp = 'div#whatsapp'
    let colorname = 'color', colorvalue = 'transparent'
    let displayname = 'display', displayvalue = 'block'
    let widthname = 'width', widthvalue = '5rem'
    let heightname = 'height', heightvalue = '5rem'
    let backgroundimagename = 'background-image', backgroundimagevalue = 'url("../images/whatsapp-logo.png")'
    let backgroundsizename = 'background-size', backgroundsizevalue = 'cover'
    let backgroundrepeatname = 'background-repeat', backgroundrepeatvalue = 'no-repeat'
    let positionname = 'position', positionvalue = 'fixed'
    let bottomname = 'bottom', bottomvalue = '1rem'
    let rightname = 'right', rightvalue = '1rem'


    it(`En public/stylesheets/fixed.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${divwhatsapp} {
          ${colorname}: ${colorvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/fixed.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(divwhatsapp)
            .and.decl( colorname, colorvalue )
            
        })
    });

    it(`En public/stylesheets/fixed.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${divwhatsapp} {
          ${displayname}: ${displayvalue};
          ${widthname}: ${widthvalue};
          ${heightname}: ${heightvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/fixed.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(divwhatsapp)
            .and.decl( displayname, displayvalue )
            .and.decl( widthname, widthvalue )
            .and.decl( heightname, heightvalue )
        })
    });

    it(`En public/stylesheets/fixed.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${divwhatsapp} {
          ${backgroundimagename}: ${backgroundimagevalue};
          ${backgroundsizename}: ${backgroundsizevalue};
          ${backgroundrepeatname}: ${backgroundrepeatvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/fixed.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(divwhatsapp)
            .and.decl( backgroundimagename, backgroundimagevalue )
            .and.decl( backgroundsizename, backgroundsizevalue )
            .and.decl( backgroundrepeatname, backgroundrepeatvalue )
        })
    });

    it(`En public/stylesheets/fixed.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${divwhatsapp} {
          ${backgroundimagename}: ${backgroundimagevalue};
          ${backgroundsizename}: ${backgroundsizevalue};
          ${backgroundrepeatname}: ${backgroundrepeatvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/fixed.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(divwhatsapp)
            .and.decl( backgroundimagename, backgroundimagevalue )
            .and.decl( backgroundsizename, backgroundsizevalue )
            .and.decl( backgroundrepeatname, backgroundrepeatvalue )
        })
    });

    it(`En public/stylesheets/fixed.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${divwhatsapp} {
          ${positionname}: ${positionvalue};
          ${bottomname}: ${bottomvalue};
          ${rightname}: ${rightvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/fixed.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(divwhatsapp)
            .and.decl( positionname, positionvalue )
            .and.decl( bottomname, bottomvalue )
            .and.decl( rightname, rightvalue )
        })
    });
   

});