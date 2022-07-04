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

    it('Modifique el archivo public/stylesheets/sticky.css Centrando la imagen', function() {

      return request(app)
        .get('/stylesheets/relative.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('picture img')
           .and.decl('max-width','50%')
           .and.decl('display','block')
           .and.decl('margin','0 auto')
        })
    });

    it('Modifique el archivo public/stylesheets/sticky.css Estilo de la imagen', function() {

      return request(app)
        .get('/stylesheets/relative.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('picture img')
           .and.decl('border-radius','0.4rem')
        })
    });

    it('Modifique el archivo public/stylesheets/sticky.css Centrando el texto', function() {

      return request(app)
        .get('/stylesheets/relative.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('picture span')
           .and.decl('max-width','30%')
           .and.decl('display','block')
           .and.decl('margin','0 auto')
        })
    });

    it('Modifique el archivo public/stylesheets/sticky.css Estilo del texto', function() {

      return request(app)
        .get('/stylesheets/relative.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('picture span')
           .and.decl('background','white')
           .and.decl('padding','1.4rem 2rem')
           .and.decl('margin','0 auto')

           .and.decl('font-size','1.5vw')
           .and.decl('font-style','italic')
           
           .and.decl('border-color','#1F516B')
           .and.decl('border-width','1.2pt 0pt 1.2pt 1.2pt')
           .and.decl('border-style','solid')
        })
    });

    it('Modifique el archivo public/stylesheets/sticky.css Reposicionando el texto', function() {

      return request(app)
        .get('/stylesheets/relative.css')
        .then((response) => {

          chai.expect(response.text).to.have.rule('picture span')
           .and.decl('position','relative')
           .and.decl('top','-5.7rem')
           .and.decl('left','8.7rem')
        })
    });
   

});