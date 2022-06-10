const assert = require('assert');
const chai = require('chai');
const chaiDom = require('chai-dom');
const requireFromString = require('require-from-string');
const request = require('supertest');
const app = require('../app');

chai.use(chaiDom);


describe('Test unitarios para la ruta `/`', function() {

    var dom

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)

        })
    });

    it('getElementById', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
         let scriptTexto, scriptEjecutable

         
         /* Revisión textual */
         try {
            scriptTexto = [`elemento = document.getElementById("nombre");`,`elemento.textContent = 'Muhammed Erdem'`]
            for(let elemento of scriptTexto) {
              chai.expect(responseClean).to.contain(elemento.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,''))
            }
            
          } catch (error) {
            chai.expect.fail('Revise la petición por identificador y la modificación del contenido del elemento');
            return;
          }

            
        })
          
    });  


    
 

});