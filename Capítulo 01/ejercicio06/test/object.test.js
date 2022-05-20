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

    it('Modifique el archivo views/index.ejs', function() {
      return request(app)
        .get('/')
        .then((response) => {
          let responseclean = response.text.replace(/(\r\n|\n|\r)/gm, '')
          let objects = `
            <object data="images/contact-calling-phone-svgrepo-com.svg" width="80"></object>
            <object data="images/man-talking-avatar-svgrepo-com.svg" width="60"></object>
          `

          let objectsclean = objects.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g,'')
          chai.expect(responseclean).to.contain(objectsclean);
            
        })
    });

});