const assert = require('assert');
const chai = require('chai');
const request = require('supertest');
const app = require('../app')

describe('Test unitarios para la ruta `/` con contenedores', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    let paragraph = `<p>Suspendisse potenti. Ut ... consequat eget nunc.</p>`
    let phrase = `
      <span class="fraseimpar">Etiam et mauris sit amet ipsum accumsan mattis.</span>
      <span class="frasepar">Morbi orci est, pellentesque at sodales in, pretium vel eros.</span>
      <span class="fraseimpar">Suspendisse potenti.</span>
      <span class="frasepar">Pellentesque tempus massa at leo tempor sollicitudin.</span>`

    it('En views/index.ejs use la etiqueta: '+paragraph, function() {
      return request(app)
        .get('/')
        .then((response) => {

          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          let paragraphclean = paragraph.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          
          chai.expect(responseclean).to.contain(paragraphclean);
            
        })
    });

    it('En views/index.ejs use la etiqueta: \n'+phrase, function() {
      return request(app)
        .get('/')
        .then((response) => {

          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          let phraseclean = phrase.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          
          chai.expect(responseclean).to.contain(phraseclean);
            
        })
    });

});