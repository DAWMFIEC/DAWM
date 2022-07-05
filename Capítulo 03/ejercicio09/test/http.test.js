const chai = require('chai');
const chaiHttp = require('chai-http');
const request = require('supertest');

chai.use(chaiHttp);

const URL = 'http://localhost:8000'
const libros = [
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988, image: "https://pictures.abebooks.com/isbn/9780008144227-es.jpg" },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923, image: "https://pictures.abebooks.com/inventory/md/md31150392022.jpg" },
    { title: "The Subtle Art Of Not Giving A Fxck: A Counterintuitive Approach to Living a Good Life", author: "Mark Manson", year: 2016, image: "https://pictures.abebooks.com/isbn/9780062457714-es.jpg"},
    { title: "Cien Sonetos de Amor", author: "Pablo Neruda", year: 1959, image: "https://pictures.abebooks.com/inventory/md/md31179418383.jpg" },
    { tile: "The 48 Laws Of Power", author: "Robert Greene", year:2000 , image: "https://pictures.abebooks.com/isbn/9781861972781-es.jpg" },
    { tile: "El Coronel No Tiene Quien Le Escriba", author: "Gabriel García Márquez", year:1995 , image: "https://pictures.abebooks.com/inventory/md/md31202076412.jpg" },
    { tile: "Bestiario", author: "Julio Cortázar", year:2016 , image: "https://pictures.abebooks.com/isbn/9788466331845-es.jpg" }
];

describe('Test unitarios a las rutas del servidor ' + URL, function() {

    
    it('Respuesta del mensaje del servidor de la ruta `http://localhost:8000/json`', function() {
      return request(URL)
        .get('/json')
        .then((response) => {
            try {
              let responseClean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /, '')
              let responseCorrect = JSON.stringify(libros).replace(/ /, '')
              chai.expect(responseClean).to.contain(responseCorrect)
            } catch (error) {
              chai.expect.fail('El mensaje de respuesta debe ser el objeto libro en formato JSON');
              return;
            }

        })
    });


    it('Cabecera de la respuesta del mensaje del servidor de la ruta `http://localhost:8000/json`', function() {
      return request(URL)
        .get('/json')
        .then((response) => {
            try {
              chai.expect(response).to.have.header('access-control-allow-origin', 'http://localhost:8001');
            } catch (error) {
              chai.expect.fail('El mensaje de respuesta debe contener la cabecera `access-control-allow-origin` con valor `http://localhost:8001`');
              return;
            }

        })
    });

});