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

    it('Modifique el archivo public/stylesheets/sticky.css diseño del menu sticky', function() {

      return request(app)
        .get('/stylesheets/sticky.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('nav')
           .and.decl('background-color','white')
           .and.decl('padding-top','1%')
           .and.decl('padding-top','1%')
           .and.decl('z-index','999')
        })
    });

    it('Modifique el archivo public/stylesheets/sticky.css menu sticky', function() {

      return request(app)
        .get('/stylesheets/sticky.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('nav')
           .and.decl('position','sticky')
           .and.decl('top','0px')
        })
    });

   
   

});