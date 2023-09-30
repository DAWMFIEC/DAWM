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

    let script1 = [`if( edad >= 18 && estado == 'CA') {`,`mensaje1 = 'Puede manejar'`,`} else {`, `mensaje1 = 'No puede manejar'}`]
    let script2 = `mensaje2 = velocidad >= 120 ? 'Muy rápido' : 'OK';`
    
    let script3 = [`for (i = 1; i < 5; i++) {`,`elementos1.push(i)`,`}`]
    let script4 = [`for(clave in objeto) {`,`elementos2.push(objeto[clave])`,`}`]
    
    let script5 = [`funcionAnonima = function() {`,`resultado1 = 'Función anónima';`,`}`]
    let script6 = [`funcionFlecha = () => {`,`resultado2 = 'Función flecha'`,`}`]

    let respuesta1 = "No puede manejar OK"
    let respuesta2 = "34 13"
    let respuesta3 = "Función anónima - Función flecha"

    it(`En public/scripts/ejercicio.js con el código:

      ${script1.join(' ')}
      ${script2}
      
      y valor de retorno: '${respuesta1}'
      `, function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {



          try {

            let scriptExec = requireFromString(response.text)
            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            
            for(let elemento of script1) {
              chai.expect(responseclean).to.contain(elemento.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,''))
            }

            let script2clean = script2.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')

            chai.expect(responseclean).to.contain(script2clean);
            chai.expect(scriptExec.condicionales()).to.equal(respuesta1)

          } catch (error) {
            chai.expect.fail(`Código esperado: 
              
              ${script1.join(' ')}
              ${script2}
      
              y valor de retorno: '${respuesta1}'`);
            return;
          }
        
        })
    });


    it(`En public/scripts/ejercicio.js con el código:

      ${script3.join(' ')}
      ${script4.join(' ')}
      
      y valor de retorno: '${respuesta2}'
      `, function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {



          try {

            let scriptExec = requireFromString(response.text)
            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            
            for(let elemento of script3) {
              chai.expect(responseclean).to.contain(elemento.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,''))
            }

            for(let elemento of script4) {
              chai.expect(responseclean).to.contain(elemento.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,''))
            }
            
            chai.expect(scriptExec.repeticion()).to.equal(respuesta2)

          } catch (error) {
            chai.expect.fail(`Código esperado: 
              
               ${script3.join(' ')}
               ${script4.join(' ')}
      
              y valor de retorno: '${respuesta2}'`);
            return;
          }
        
        })
    });

    
    it(`En public/scripts/ejercicio.js con el código:

      ${script5.join(' ')}
      ${script6.join(' ')}
      
      y valor de retorno: '${respuesta3}'
      `, function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {



          try {

            let scriptExec = requireFromString(response.text)
            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            
            for(let elemento of script5) {
              chai.expect(responseclean).to.contain(elemento.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,''))
            }

            for(let elemento of script6) {
              chai.expect(responseclean).to.contain(elemento.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,''))
            }
            
            chai.expect(scriptExec.funciones()).to.equal(respuesta3)

          } catch (error) {
            chai.expect.fail(`Código esperado: 
              
               ${script5.join(' ')}
               ${script6.join(' ')}
      
              y valor de retorno: '${respuesta3}'`);
            return;
          }
        
        })
    });
    
 

});