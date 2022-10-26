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

    let script1 = `let mensaje = "Este es un mensaje desde "`
    let script2 = `const LENGUAJE = "Javascript"`
    let script3 = `
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
      }`
    let script4 = `let colores = ['rojo', 'verde', 'azul']`
    let script5 = `colores[1] = 'amarillo'`
    let script6 = `colores.push('rosado')`
    let script7 = `let resultado = colores.toString()`

    let script8 = `let doubled = numeros.map( num => num * 2)`
    let script9 = `let sum = doubled.reduce( (acumulador, numero ) => acumulador + numero)`
    let script10 = `let exists = numeros.some( num => num >= 2 && num < 4)`
    let script11 = `let filtered = doubled.filter( num => num > 5)`

    let respuesta1 = "Este es un mensaje desde Javascript"
    let respuesta2 = "Juana Perez de Ecuador, con 46 años."
    let respuesta3 = "rojo,amarillo,azul,rosado"
    let respuesta4 = `Map: 2,4,6,8 - Reduce:20 - Some: true - Filtered: 6,8`
    
    it(`En public/scripts/ejercicio.js con el código:

      ${script1}
      ${script2}
      
      y valor de retorno: '${respuesta1}'
      `, function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {



          try {

            let scriptExec = requireFromString(response.text)
            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            let script1clean = script1.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            let script2clean = script2.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')

            
            chai.expect(responseclean).to.contain(script1clean);
            chai.expect(responseclean).to.contain(script2clean);
            chai.expect(scriptExec.definicionVariablesConstantes()).to.equal(respuesta1)

          } catch (error) {
            chai.expect.fail(`Código esperado: 
              
              ${script1}
              ${script2}
      
              y valor de retorno: '${respuesta1}'`);
            return;
          }
        
        })
    });

    it(`En public/scripts/ejercicio.js con el código:

      ${script3}
      
      y valor de retorno: '${respuesta2}'
      `, function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {



          try {

            let scriptExec = requireFromString(response.text)
            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            let script3clean = script3.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')

            
            chai.expect(responseclean).to.contain(script3clean);
            chai.expect(scriptExec.definicionObjeto()).to.equal(respuesta2)

          } catch (error) {
            chai.expect.fail(`Código esperado: 
             
              ${script3}
            
              y valor de retorno: '${respuesta2}'`);
            return;
          }
        
        })
    });
            
    it(`En public/scripts/ejercicio.js con el código:

      ${script4}
      ${script5}
      ${script6}
      ${script7}
      
      y valor de retorno: '${respuesta3}'
      `, function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {



          try {

            let scriptExec = requireFromString(response.text)
            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            let script4clean = script4.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            let script5clean = script5.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            let script6clean = script6.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            let script7clean = script7.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')

            
            chai.expect(responseclean).to.contain(script4clean);
            chai.expect(responseclean).to.contain(script5clean);
            chai.expect(responseclean).to.contain(script6clean);
            chai.expect(responseclean).to.contain(script7clean);
            chai.expect(scriptExec.definicionArreglos()).to.equal(respuesta3)

          } catch (error) {
            chai.expect.fail(`Código esperado: 
              
              ${script4}
              ${script5}
              ${script6}
              ${script7}
      
              y valor de retorno: '${respuesta3}'`);
            return;
          }
        
        })
    });

    it(`En public/scripts/ejercicio.js con el código:

      ${script8}
      ${script9}
      ${script10}
      ${script11}
      
      y valor de retorno: '${respuesta4}'
      `, function() {
      return request(app)
        .get('/scripts/ejercicio.js')
        .then((response) => {

          try {

            let scriptExec = requireFromString(response.text)
            
            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            let script8clean = script8.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            let script9clean = script8.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            let script10clean = script8.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            let script11clean = script8.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
            
            chai.expect(responseclean).to.contain(script8clean);
            chai.expect(responseclean).to.contain(script9clean);
            chai.expect(responseclean).to.contain(script10clean);
            chai.expect(responseclean).to.contain(script11clean);
            chai.expect(scriptExec.metodosArreglos()).to.equal(respuesta4)

          } catch (error) {
            chai.expect.fail(`Código esperado: 
              
              ${script8}
              ${script9}
              ${script10}
              ${script11}
      
              y valor de retorno: '${respuesta4}'`);
            return;
          }
        
        })
    });
      

});