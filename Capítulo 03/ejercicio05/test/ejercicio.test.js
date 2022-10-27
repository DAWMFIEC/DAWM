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

    let script1 = [`arreglo = document.getElementsByClassName('respuesta')`,`elemento = arreglo[0]`,`elemento.innerHTML = snippet`]
    let script2 = [
            `audio = document.getElementById('audio1')`,
            `arreglo = document.getElementsByClassName('plItem')`,
            `let id = elemento.getAttribute("id")-1`,
            `let name = elemento.getAttribute("name")`,
            `elemento.addEventListener('click'`,
            `) => {`,
            `audio.setAttribute("src","https://archive.org/download/mythium/"+name+".mp3")`,
            `audio.play()`
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
    
    
 

});