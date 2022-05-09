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

    it('Modifique el archivo public/stylesheets/fixed.css Whatsapp color de texto', function() {

      return request(app)
        .get('/stylesheets/fixed.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('div#whatsapp')
           .and.decl('color','transparent')
        })
    });

    it('Modifique el archivo public/stylesheets/fixed.css Whatsapp caja contenedora', function() {

      return request(app)
        .get('/stylesheets/fixed.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('div#whatsapp')
           .and.decl('display','block')
           .and.decl('width','5rem')
           .and.decl('height','5rem')
        })
    });

    it('Modifique el archivo public/stylesheets/fixed.css Whatsapp imagen de fondo', function() {

      return request(app)
        .get('/stylesheets/fixed.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('div#whatsapp')
           .and.decl('background-image','url("../images/whatsapp-logo.png")')
           .and.decl('background-size','cover')
           .and.decl('background-repeat','no-repeat')
        })
    });

    it('Modifique el archivo public/stylesheets/fixed.css Whatsapp ubicación de la caja', function() {

      return request(app)
        .get('/stylesheets/fixed.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('div#whatsapp')
           .and.decl('position','fixed')
           .and.decl('bottom','1rem')
           .and.decl('right','1rem')
        })
    });
   

});