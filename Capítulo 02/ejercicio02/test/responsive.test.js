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
    let displayflexname = 'display', displayflexvalue = 'flex'
    let widthname = 'width', widthvalue = '100%'
    let columngapname = 'column-gap', columngapvalue = '2%';

    let selector2 = 'article > img'
    let flexgrowname = 'flex-grow', flexgrowvalue = '1'
    let flexshrinkname = 'flex-shrink', flexshrinkvalue = '1'
    let flexbasisname = 'flex-basis', flexbasisvalue = '0%'

    let selector3 = 'article > div.right'
    let flexgrowname2 = 'flex-grow', flexgrowvalue2 = '2'

    let selector4 = 'img.hero-image'
    let maxwidthname = 'max-width', maxwidthvalue = '30%'
    let heightname = 'height', heightvalue = '10%'



    let selector5 = 'div.respuesta article'
    let flexdirectionname = 'flex-direction', flexdirectionvalue = 'column'

    let selector6 = 'div.right img'
    let displayname = 'display', displayvalue = 'none'

    let selector7 = 'div.respuesta article img.hero-image'
    let maxwidthname2 = 'max-width', maxwidthvalue2 = '100%'
    let heightname2 = 'height', heightvalue2 = 'auto'

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector1} {
          ${displayflexname}: ${displayflexvalue};
          ${widthname}: ${widthvalue};
          ${columngapname}: ${columngapvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector1)
            .and.decl( displayflexname, displayflexvalue )
            .and.decl( widthname, widthvalue )
            .and.decl( columngapname, columngapvalue )
        })
    });

   
    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector2} {
          ${flexgrowname}: ${flexgrowvalue};
          ${flexshrinkname}: ${flexshrinkvalue};
          ${flexbasisname}: ${flexbasisvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector2)
            .and.decl( flexgrowname, flexgrowvalue )
            .and.decl( flexshrinkname, flexshrinkvalue )
            .and.decl( flexbasisname, flexbasisvalue )
        })
    });


    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector3} {
          ${flexgrowname2}: ${flexgrowvalue2};
          ${flexshrinkname}: ${flexshrinkvalue};
          ${flexbasisname}: ${flexbasisvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector3)
            .and.decl( flexgrowname2, flexgrowvalue2 )
            .and.decl( flexshrinkname, flexshrinkvalue )
            .and.decl( flexbasisname, flexbasisvalue )
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selector4} {
          ${maxwidthname}: ${maxwidthvalue};
          ${heightname}: ${heightvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector4)
            .and.decl( maxwidthname, maxwidthvalue )
            .and.decl( heightname, heightvalue )
        })
    });


    //Responsiveness


    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
      @media screen and (max-width: 640px) {
        ${selector5} {
         ${displayflexname}: ${displayflexvalue};
         ${widthname}: ${widthvalue};
         ${flexdirectionname}: ${flexdirectionvalue};
        }
      }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector5)
            .and.decl( displayflexname, displayflexvalue )
            .and.decl( widthname, widthvalue )
            .and.decl( flexdirectionname, flexdirectionvalue)
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
      @media screen and (max-width: 640px) {
        ${selector6} {
          ${displayname}: ${displayvalue};
        }
      }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector6)
            .and.decl( displayname, displayvalue )
        })
    });


    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
      @media screen and (max-width: 640px) {
        ${selector7} {
          ${maxwidthname2}: ${maxwidthvalue2};
          ${heightname2}: ${heightvalue2};
        }
      }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selector7)
            .and.decl( maxwidthname2, maxwidthvalue2 )
            .and.decl( heightname2, heightvalue2 )
        })
    });

    

});