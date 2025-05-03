const assert = require('assert');
const chai = require('chai');
const request = require('supertest');
const app = require('../app')

// Auto
let itPassed = true;

describe('Test unitarios para la ruta `/` con títulos', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)
        })
        .end((err, res) => {
            if (err) itPassed = false;
            done();
        });
    });

    let h1 = `<h1>El título más importante</h1>`
    let h2 = `<h2>Título secundario</h2>`
    let h6 = `<h6>El título menos importante</h6>`

    it('En views/index.ejs use la etiqueta: '+h1, function() {
      return request(app)
        .get('/')
        .then((response) => {
            
            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
            let h1clean = h1.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

            chai.expect(responseclean).to.contain(h1clean);
        })
        .end((err, res) => {
            if (err) itPassed = false;
            done();
        });
    });

    it('En views/index.ejs use la etiqueta: '+h2, function() {
      return request(app)
        .get('/')
        .then((response) => {

            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
            let h2clean = h2.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

            chai.expect(responseclean).to.contain(h2clean);
        })
        .end((err, res) => {
            if (err) itPassed = false;
            done();
        });
    });

    it('En views/index.ejs use la etiqueta: '+h6, function() {
      return request(app)
        .get('/')
        .then((response) => {
            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
            let h6clean = h6.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

            chai.expect(responseclean).to.contain(h6clean);
        })
        .end((err, res) => {
            if (err) itPassed = false;
            done();
        });
    });

    after(async () => {
        if (itPassed) {
              console.log("✅ Todos los tests pasaron. Enviando resultado...");
              // sendResults
        } else {
              console.log("❌ Algunos tests fallaron. No se envía resultado.");
        }
      });

});
