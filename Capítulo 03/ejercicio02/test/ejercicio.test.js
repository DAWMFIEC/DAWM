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

    it('Variables y constantes', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
         let scriptTexto, scriptEjecutable

         /* Revisión textual */
         try {
            scriptTexto = `let mensaje = "Este es un mensaje desde "`.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
            chai.expect(responseClean).to.contain(scriptTexto)
          } catch (error) {
            chai.expect.fail('La variable mensaje debe tener el valor "Este es un mensaje desde "');
            return;
          }

          try {
            scriptTexto = `const LENGUAJE = "Javascript"`.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
            chai.expect(responseClean).to.contain(scriptTexto)
          } catch (error)
          {
            chai.expect.fail('La constante LENGUAJE debe tener el valor "Javascript"');
            return;
          }

          /* Revisión con ejecución */
          try {
            scriptEjecutable = requireFromString(response.text)
            let respuesta = "Este es un mensaje desde Javascript"
            chai.expect(scriptEjecutable.definicionVariablesConstantes()).to.equal(respuesta)
          } catch (error)
          {
            chai.expect.fail('La función debe retornar el valor "Este es un mensaje desde Javascript"');
            return;
          }
            
        })
          
    });  

    it('Objetos', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
         let scriptTexto, scriptEjecutable

         
         /* Revisión textual */
         try {
            scriptTexto = `
            let contacto = {
                nombre: 'Juana',
                apellido: 'Perez',
                edad: 46,
                casado: false,
                sueldo: 1289.36,
                direccion: {
                    pais: 'Ecuador',
                    provincia: 'Guayas',
                    ciudad: 'Guayaquil'
                }
            }`.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')

            chai.expect(responseClean).to.contain(scriptTexto)
          } catch (error) {
            chai.expect.fail('Revise la estructura del objeto contacto en los comentarios');
            return;
          }


          /* Revisión con ejecución */
          try {
            scriptEjecutable = requireFromString(response.text)
            let respuesta = "Juana Perez de Ecuador, con 46 años."
            chai.expect(scriptEjecutable.definicionObjeto()).to.equal(respuesta)
          } catch (error)
          {
            chai.expect.fail('La función debe retornar los valores solicitados en el objeto contacto');
            return;
          }
            
        })
          
    });   

    it('Arreglos', function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

         let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
         let scriptTexto, scriptEjecutable

         
         /* Revisión textual */
         try {
            scriptTexto = `let colores = ['rojo', 'verde', 'azul']`.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
            chai.expect(responseClean).to.contain(scriptTexto)
          } catch (error) {
            chai.expect.fail('Revise la definición del arreglo colores');
            return;
          }

          try {
            scriptTexto = `colores[1] = 'amarillo'`.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
            chai.expect(responseClean).to.contain(scriptTexto)
          } catch (error) {
            chai.expect.fail("Revise cambiar el elemento en el índice 1 por 'amarillo'");
            return;
          }

          try {
            scriptTexto = `colores.push('rosado')`.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
            chai.expect(responseClean).to.contain(scriptTexto)
          } catch (error) {
            chai.expect.fail("Revise agregar el elemento 'rosado' al final del arreglo");
            return;
          }

          try {
            scriptTexto = `let resultado = colores.toString()`.replace(/(\r\n|\n|\r)/gm, '').replace(/ /gm,'')
            chai.expect(responseClean).to.contain(scriptTexto)
          } catch (error) {
            chai.expect.fail("Revise asignar a la variable resultado el valor del método toString");
            return;
          }


          /* Revisión con ejecución */
          try {
            scriptEjecutable = requireFromString(response.text)
            let respuesta = "rojo,amarillo,azul,rosado"
            chai.expect(scriptEjecutable.definicionArreglos()).to.equal(respuesta)
          } catch (error)
          {
            chai.expect.fail('La función debe retornar los valores solicitados del arreglo');
            return;
          }
            
        })
          
    });   

});