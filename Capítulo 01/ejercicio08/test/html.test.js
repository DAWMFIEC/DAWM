const assert = require('assert');
const chai = require('chai');
const request = require('supertest');
const app = require('../app')

describe('Test unitarios para la ruta `/`', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    let pspansub = `
            <p>
              <span>Estudia no para saber una cosa más, sino para saberla mejor.</span>
              <sub>Séneca.</sub>
            </p>
          `

    it('En views/index.ejs use las etiquetas: '+pspansub, function() {
      return request(app)
        .get('/')
        .then((response) => {
          
          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          let typetextclean = pspansub.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          
          chai.expect(responseclean).to.contain(typetextclean);
            
        })
    });

});