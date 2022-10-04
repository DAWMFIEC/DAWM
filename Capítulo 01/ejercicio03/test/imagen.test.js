const assert = require('assert');
const chai = require('chai');
const request = require('supertest');
const app = require('../app')

describe('Test unitarios para la ruta `/` de imágenes', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    let img1 = `<img src="https://picsum.photos/200/300">`
    let img2 = `<img src="images/tablet.jpg" width="250">`
    let img3 = `<img src="images/tablet2.jpg" alt="Imagen de tablet 2">`

    it('En views/index.ejs use la etiqueta: '+img1, function() {
      return request(app)
        .get('/')
        .then((response) => {

          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          let imgclean = img1.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          
          chai.expect(responseclean).to.contain(imgclean);
            
        })
    });

    it('En views/index.ejs use la etiqueta: '+img2, function() {
      return request(app)
        .get('/')
        .then((response) => {

          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          let imgclean = img2.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          
          chai.expect(responseclean).to.contain(imgclean);
            
        })
    });

    it('En views/index.ejs use la etiqueta: '+img3, function() {
      return request(app)
        .get('/')
        .then((response) => {

          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          let imgclean = img3.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          
          chai.expect(responseclean).to.contain(imgclean);
            
        })
    });

    
});