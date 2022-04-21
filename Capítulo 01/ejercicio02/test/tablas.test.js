const assert = require('assert');
const chai = require('chai');
const request = require('supertest');
const app = require('../app')

describe('Test unitarios para la ruta `/` con tablas', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    it('Modifique el archivo views/index.ejs', function() {
      return request(app)
        .get('/')
        .then((response) => {
            let responseclean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g,'')

            let table1 = `
              <table>
                <caption>Datos de descarga por Sistema Operativo</caption>
                <tr>
                  <th>Windows</th>
                  <td>325</td>
                </tr>
                <tr>
                  <th>MacOS</th>
                  <td>102</td>
                </tr>
                <tr>
                  <th>Linux</th>
                  <td>50</td>
                </tr>
              </table>
            `
            let table1clean = table1.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g,'');
            chai.expect(responseclean).to.contain(table1clean);


            
            
        })
    });

});