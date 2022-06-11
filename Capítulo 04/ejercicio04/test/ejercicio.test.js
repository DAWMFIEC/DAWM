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


    it('getElementsByClassName', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
         let scriptTexto, scriptEjecutable

         
         /* Revisión textual */
         try {
            scriptTexto = [` arreglo = document.getElementsByClassName('profile-card-loc__txt')`,`elemento = arreglo[0]`, `elemento.textContent = 'Istanbul, Turkey'`]
            for(let elemento of scriptTexto) {
              chai.expect(responseClean).to.contain(elemento.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,''))
            }
            
          } catch (error) {
            chai.expect.fail('Revise la petición por clase y la modificación del contenido del elemento');
            return;
          }

            
        })
    }); 


    it('getElementsByTagName', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
         let scriptTexto, scriptEjecutable

         
         /* Revisión textual */
         try {
            scriptTexto = [`arreglo = document.getElementsByTagName('img')`,`elemento = arreglo[0]`, `elemento.setAttribute('src','https://res.cloudinary.com/muhammederdem/image/upload/v1537638518/Ba%C5%9Fl%C4%B1ks%C4%B1z-1.jpg')`]
            for(let elemento of scriptTexto) {
              chai.expect(responseClean).to.contain(elemento.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,''))
            }
            
          } catch (error) {
            chai.expect.fail('Revise la petición por clase y la modificación del contenido del elemento');
            return;
          }

            
        })
    }); 


    it('querySelector', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
         let scriptTexto, scriptEjecutable

         
         /* Revisión textual */
         try {
            scriptTexto = [`elemento = document.querySelector('div.profile-card-inf')`,` elemento.innerHTML = textoHTML`]
            for(let elemento of scriptTexto) {
              chai.expect(responseClean).to.contain(elemento.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,''))
            }
            
          } catch (error) {
            chai.expect.fail('Revise la petición por clase y la modificación del contenido del elemento');
            return;
          }

            
        })
    }); 


    
 

});