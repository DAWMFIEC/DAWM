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

    let script1 = [`elemento = document.getElementById("nombre");`,`elemento.textContent = 'Muhammed Erdem'`]
    let script2 = [`arreglo = document.getElementsByClassName('profile-card-loc__txt')`,`elemento = arreglo[0]`, `elemento.textContent = 'Istanbul, Turkey'`]
    let script3 = [`arreglo = document.getElementsByTagName('img')`,`elemento = arreglo[0]`, `elemento.setAttribute('src','https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg')`]
    let script4 = [`elemento = document.querySelector('div.profile-card-inf')`,` elemento.innerHTML = textoHTML`]

    it(`En public/scripts/ejercicio.js con el código:

      ${script1.join(' ')}
      
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
              
              ${script1.join(' ')}
              
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


    it(`En public/scripts/ejercicio.js con el código:

      ${script4.join('\n')}
      
      `, function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

          try {

            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            
            for(let elemento of script4) {
              chai.expect(responseclean).to.contain(elemento.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,''))
            }
            
          } catch (error) {
            chai.expect.fail(`Código esperado: 
              
              ${script4.join('\n')}
              
              `);
            return;
          }
        
        })
    });
    
 

});