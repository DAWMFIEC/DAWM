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
      <object data="images/contact-calling-phone-svgrepo-com.svg" width="80"></object>
      <object data="images/man-talking-avatar-svgrepo-com.svg" width="60"></object>
    `

    it('En views/index.ejs use las etiquetas: '+objects, function() {
      return request(app)
        .get('/')
        .then((response) => {
          
          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          let typetextclean = objects.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          
          chai.expect(responseclean).to.contain(typetextclean);
            
        })
    });

});