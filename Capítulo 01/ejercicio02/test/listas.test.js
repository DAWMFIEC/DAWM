const assert = require('assert');
const chai = require('chai');
const request = require('supertest');
const app = require('../app')

describe('Test unitarios para la ruta `/` con listas', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    let list1 = `
      <ul>
        <li>Manta</li>
        <li>Guayaquil</li>
        <li>Otavalo</li>
        <li>Gualaceo</li>
        <li>Quito</li>
        <li>Machala</li>
        <li>Cuenca</li>
      </ul>
    `
    let list2 = `
      <ol>
        <li>Julio</li>
        <li>Carmen</li>
        <li>Elena</li>
        <li>Ignacio</li>
      </ol>
    `
    let list3 = `
      <ol type="I">
        <li>Capítulo 1</li>
        <li>Capítulo 2</li>
        <li>Capítulo 3</li>
        <li>Conclusiones</li>
        <li>Recomendaciones</li>
      </ol>
    `
    
    let list4 = `
      <ul>
        <li>Colombia</li>
          <ol>
            <li>Bogotá</li>
            <li>Cali</li>
            <li>Cartagena</li>
          </ol>
        <li>Perú</li>
          <ol>
            <li>Chiclayo</li>
            <li>Piura</li>
          </ol>
        <li>Chile</li>
          <ol>
            <li>Iquique</li>
            <li>Valparaíso</li>
            <li>Antofagasta</li>
          </ol>
      </ul>
    `

    it('En views/index.ejs use la etiqueta: '+list1, function() {
      return request(app)
        .get('/')
        .then((response) => {

            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
            let list1clean = list1.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

            chai.expect(responseclean).to.contain(list1clean);
          
        })
    });

    it('En views/index.ejs use la etiqueta: '+list2, function() {
      return request(app)
        .get('/')
        .then((response) => {
            
            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
            let list2clean = list2.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

            chai.expect(responseclean).to.contain(list2clean);
            
        })
    });

    it("En views/index.ejs use la etiqueta: "+list3, function() {
      return request(app)
        .get('/')
        .then((response) => {

            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
            let list3clean = list3.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          
            chai.expect(responseclean).to.contain(list3clean);
            
        })
    });

    it('En views/index.ejs use la etiqueta: '+list4, function() {
      return request(app)
        .get('/')
        .then((response) => {
            
            let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
            let list4clean = list4.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
            
            chai.expect(responseclean).to.contain(list4clean);
            
        })
    });

});