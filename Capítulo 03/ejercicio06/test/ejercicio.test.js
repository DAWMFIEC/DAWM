const assert = require('assert');
const chai = require('chai');
const chaiDom = require('chai-dom');
const requireFromString = require('require-from-string');
const request = require('supertest');
const app = require('../app');

chai.use(chaiDom);


describe('Test unitarios para la ruta `/`', function() {


    it('Respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)

        })
    });

    let script1 = [
      `let cargarLibros = async () => {`,
      `let resultado = await fetch("https://dataserverdawm.herokuapp.com/libros/xml")`,
      `let data = await resultado.text()`
    ]

    let script2 = [
      `let books = xml.querySelectorAll('libros > libro')`
    ]

    let script3 = [
      `let title = book.querySelector('title')?book.querySelector('title').textContent:''`,
      `let isbn = book.querySelector('isbn')?book.querySelector('isbn').textContent:''`,
      `let shortDescription = book.querySelector('shortDescription')?book.querySelector('shortDescription').textContent:''`
    ]

    it(`En public/scripts/ejercicio.js con el código:

      ${script1.join('\n')}
      
      `, function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

          try {

            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            
            for(let elemento of script1) {
              chai.expect(responseclean).to.contain(elemento.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,''))
            }
            
          } catch (error) {
            chai.expect.fail(`Código esperado: 
              
              ${script1.join('\n')}
              
              `);
            return;
          }
        
        })
    });

    it(`En public/scripts/ejercicio.js con el código:

      ${script2.join('\n')}
      
      `, function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

          try {

            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            
            for(let elemento of script2) {
              chai.expect(responseclean).to.contain(elemento.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,''))
            }
            
          } catch (error) {
            chai.expect.fail(`Código esperado: 
              
              ${script2.join('\n')}
              
              `);
            return;
          }
        
        })
    });

    it(`En public/scripts/ejercicio.js con el código:

      ${script3.join('\n')}
      
      `, function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

          try {

            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            
            for(let elemento of script3) {
              chai.expect(responseclean).to.contain(elemento.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,''))
            }
            
          } catch (error) {
            chai.expect.fail(`Código esperado: 
              
              ${script3.join('\n')}
              
              `);
            return;
          }
        
        })
    });

});