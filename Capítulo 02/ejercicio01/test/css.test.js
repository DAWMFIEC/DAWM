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

    it('Modifique el archivo public/stylesheets/ejercicio.css selector universal', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('*')
            .and.decl('font-family','-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"')
            
        })
    });

    it('Modifique el archivo public/stylesheets/ejercicio.css selector por identificador 1', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('#section-one')
            .and.decl('color','white')
            .and.decl('background-color', 'var(--color-1)')

          
        })
    });

    it('Modifique el archivo public/stylesheets/ejercicio.css selector por identificador 2', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('#section-two')
            .and.decl('background', 'linear-gradient(170deg, var(--color-1) 0%, var(--color-1) 50%, var(--color-2) 50%, var(--color-2) 100%)')

          
        })
    });

    it('Modifique el archivo public/stylesheets/ejercicio.css selector por identificador 3', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('#section-three')
            .and.decl('background-color', 'var(--color-2)')

          
        })
    });



    it('Modifique el archivo public/stylesheets/ejercicio.css selector por elemento 1', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('h1')
            .and.decl('font-size', '2rem')
            .and.decl('font-size', 'clamp(2rem, 1.2rem + 2.66vw, 4rem)')
            .and.decl('margin', '0.3em 0 0.1em 0')
          
        })
    });


    it('Modifique el archivo public/stylesheets/ejercicio.css selector por elemento 2', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('h2')
            .and.decl('font-size', '1.5rem')
            .and.decl('font-size', 'clamp(1.5rem, 1.1rem + 1.33vw, 2.5rem)')
            .and.decl('margin', '0.3em 0 0.1em 0')

          
        })
    });

    it('Modifique el archivo public/stylesheets/ejercicio.css selector por elemento 3', function() {

      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('section')
            .and.decl('padding', '30px')

          
        })
    });
});