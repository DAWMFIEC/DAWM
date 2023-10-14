const assert = require('assert');
const chai = require('chai');
const request = require('supertest');
const app = require('../app');


describe('Test unitarios para la ruta `/`', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    let meta = '<meta name="viewport" content="width=device-width, initial-scale=1.0">'

    it('En views/index.ejs use las etiquetas: '+meta, function() {
      return request(app)
        .get('/')
        .then((response) => {
          
          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          let typetextclean = meta.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          
          chai.expect(responseclean).to.contain(typetextclean);
            
        })
    });

    
    

});