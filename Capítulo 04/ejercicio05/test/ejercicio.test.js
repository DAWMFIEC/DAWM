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

    it('cargarDocumento', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
         let scriptTexto, scriptEjecutable

         /* Revisión textual */
         try {
            scriptTexto = [`arreglo = document.getElementsByClassName('respuesta')`,`elemento = arreglo[0]`,`elemento.innerHTML = snippet`]
            for(let elemento of scriptTexto) {
              chai.expect(responseClean).to.contain(elemento.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,''))
            }
            
          } catch (error) {
            chai.expect.fail('Revise las instrucciones de la función cargarDocumento');
            return;
          }

            
        })
          
    });  

    
    it('mouseClick', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
         let scriptTexto, scriptEjecutable

         /* Revisión textual */
         try {
            scriptTexto = [
            `audio = document.getElementById('audio1')`,
            `arreglo = document.getElementsByClassName('plItem')`,
            `let id = elemento.getAttribute("id")-1`,
            `let name = elemento.getAttribute("name")`,
            `elemento.addEventListener('click'`,
            `) => {`,
            `audio.setAttribute("src","https://archive.org/download/mythium/"+name+".mp3")`,
            `audio.play()`
            ]
            for(let elemento of scriptTexto) {
              chai.expect(responseClean).to.contain(elemento.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,''))
            }
            
          } catch (error) {
            chai.expect.fail('Revise las instrucciones de la función mouseClick');
            return;
          }

            
        })
          
    });
    
 

});