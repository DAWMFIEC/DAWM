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

    it('Modifique el archivo public/stylesheets/ejercicio.css Flexbox', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('#bloque1')
           .and.decl('display','flex')
           .and.decl('flex-direction','row-reverse')
           .and.decl('justify-content','space-evenly')


          chai.expect(response.text).to.have.rule('#bloque1 img:nth-child(4)')
           .and.decl('order','-1')
        })
    });

    it('Modifique el archivo public/stylesheets/ejercicio.css Flexbox', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('#bloque2')
           .and.decl('display','grid')
           .and.decl('grid-template-columns','1fr 1fr')
           .and.decl('justify-items','center')
           .and.decl('grid-row-gap','10px')
        })
    });
   

});