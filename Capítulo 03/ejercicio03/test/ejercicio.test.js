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

    it('Condicionales', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
         let scriptTexto, scriptEjecutable

         /* Revisión textual */
         try {
            scriptTexto = [`if( edad >= 18 && estado == 'CA') {`,`mensaje1 = 'Puede manejar'`,`} else {`, `mensaje1 = 'No puede manejar'}`]
            for(let elemento of scriptTexto) {
              chai.expect(responseClean).to.contain(elemento.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,''))
            }
            
          } catch (error) {
            chai.expect.fail('Revise la estructura del if en la función condicionales');
            return;
          }

          try {
            scriptTexto = `mensaje2 = velocidad >= 120 ? 'Muy rápido' : 'OK';`.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
            chai.expect(responseClean).to.contain(scriptTexto)
          } catch (error) {
            chai.expect.fail('Revise la estructura del operador ternario ? en la función condicionales');
            return;
          }

          /* Revisión con ejecución */
           try {
             scriptEjecutable = requireFromString(response.text)
             let respuesta = "No puede manejar OK"
             chai.expect(scriptEjecutable.condicionales()).to.equal(respuesta)
           } catch (error)
           {
             chai.expect.fail('La función debe retornar el valor "No puede manejar OK"');
             return;
           }
            
        })
          
    });  

    it('Repetición', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
         let scriptTexto, scriptEjecutable

         /* Revisión textual */
         try {
            scriptTexto = [`for (i = 1; i < 5; i++) {`,`elementos1.push(i)`,`}`]
            for(let elemento of scriptTexto) {
              chai.expect(responseClean).to.contain(elemento.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,''))
            }
            
          } catch (error) {
            chai.expect.fail('Revise la estructura del for en la función repeticion');
            return;
          }

          try {
            scriptTexto = [`for(clave in objeto) {`,`elementos2.push(objeto[clave])`,`}`]
            for(let elemento of scriptTexto) {
              chai.expect(responseClean).to.contain(elemento.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,''))
            }
            
          } catch (error) {
            chai.expect.fail('Revise la estructura del for en la función repeticion');
            return;
          }

          /* Revisión con ejecución */
           try {
             scriptEjecutable = requireFromString(response.text)
             let respuesta = "34 13"
             chai.expect(scriptEjecutable.repeticion()).to.equal(respuesta)
           } catch (error)
           {
             chai.expect.fail('La función debe retornar el valor "34 13"');
             return;
           }

            
        })
          
    });  

    it('Funciones anónimas y flecha', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
         let scriptTexto, scriptEjecutable

         /* Revisión textual */
         try {
            scriptTexto = [`funcionAnonima = function() {`,`resultado1 = 'Función anónima';`,`}`]
            for(let elemento of scriptTexto) {
              chai.expect(responseClean).to.contain(elemento.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,''))
            }
            
          } catch (error) {
            chai.expect.fail('Revise la estructura de la función anónima');
            return;
          }

          try {
            scriptTexto = [`funcionFlecha = () => {`,`resultado2 = 'Función flecha'`,`}`]
            for(let elemento of scriptTexto) {
              chai.expect(responseClean).to.contain(elemento.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,''))
            }
            
          } catch (error) {
            chai.expect.fail('Revise la estructura de la función flecha');
            return;
          }

          /* Revisión con ejecución */
           try {
             scriptEjecutable = requireFromString(response.text)
             let respuesta = "Función anónima - Función flecha"
             chai.expect(scriptEjecutable.funciones()).to.equal(respuesta)
           } catch (error)
           {
             chai.expect.fail('La función debe retornar el valor "Función anónima - Función flecha"');
             return;
           }

            
        })
          
    });

    
 

});