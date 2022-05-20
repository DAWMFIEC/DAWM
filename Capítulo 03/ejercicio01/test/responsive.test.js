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

    it('Modifique el archivo public/stylesheets/ejercicio.css responsive 1', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('article')
           .and.decl('display','grid')
           .and.decl('grid-template-columns','25% 75%')
        })
    });

    it('Modifique el archivo public/stylesheets/ejercicio.css responsive 2', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('div.respuesta article')
           .and.decl('display','grid')
           .and.decl('grid-template-columns','100%')
        })
    });


    it('Modifique el archivo public/stylesheets/ejercicio.css responsive 3', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('div.right img')
           .and.decl('display','none')
        })
    });
   
   

});