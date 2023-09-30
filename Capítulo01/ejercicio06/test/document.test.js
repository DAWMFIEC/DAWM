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
    
    let objects = `
      <object data="documentos/manual.pdf" height="500px" width="100%"></object>
    `

    it('En views/index.ejs use las etiquetas: '+objects, function() {
      return request(app)
        .get('/')
        .then((response) => {
          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          let typetextclean = objects.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          
          chai.expect(responseclean).to.contain(typetextclean);
            
        })
    });

});