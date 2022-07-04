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

    it('Modifique el archivo public/stylesheets/ejercicio.css centrar respecto con el exterior', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('.respuesta p')
           .and.decl('margin-left','25%')
           .and.decl('margin-right','25%')
        })
    });

    it('Modifique el archivo public/stylesheets/ejercicio.css centrar el texto respecto con el contenido', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('.respuesta p')
           .and.decl('text-align','center')
        })
    });

    it('Modifique el archivo public/stylesheets/ejercicio.css sombra en el texto', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('.respuesta p span')
           .and.decl('text-shadow','2px 2px 4px #a59f9f')
        })
    });


    it('Modifique el archivo public/stylesheets/ejercicio.css transformar el texto', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('.respuesta p sub')
           .and.decl('text-transform','uppercase')
        })
    });


    it('Modifique el archivo public/stylesheets/ejercicio.css modificar las propiedades de la caja', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('.respuesta > p')
           .and.decl('border','1pt solid black')
           .and.decl('padding','3rem 1rem')
           .and.decl('border-radius','0.5rem 1.4rem')
        })
    });

});