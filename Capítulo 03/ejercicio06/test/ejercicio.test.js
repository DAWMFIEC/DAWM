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

    it('cargarLibros', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
         let scriptTexto, scriptEjecutable

         
         /* Revisión textual */
         try {
            scriptTexto = [`fetch("https://dataserverdaw.herokuapp.com/libros/xml")`, `.then(response => response.text())`, `then(data => {`, `= new DOMParser();`, `.parseFromString(`, `"application/xml");`,
            `.querySelectorAll('bookstore > book')`, `querySelector('div.cards')`, `.querySelector('title').textContent`, `.querySelector('isbn').textContent`, `.querySelector('shortDescription')`,`.innerHTML += `,
            `document.querySelectorAll("div.card").forEach(carta => {
                animarCartas(carta)
            }) `]
            for(let elemento of scriptTexto) {
              chai.expect(responseClean).to.contain(elemento.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,''))
            }
            
          } catch (error) {
            chai.expect.fail('Revise las instrucciones de la función cargarLibros');
            return;
          }

            
        })
    }); 


    


    
 

});