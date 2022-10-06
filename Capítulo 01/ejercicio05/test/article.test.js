const assert = require('assert');
const chai = require('chai');
const request = require('supertest');
const app = require('../app')

describe('Test unitarios para la ruta `/`', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });
    
    let article = `
      <article>
        <!-- <img
          src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
          alt="GeeksforGeeks"
        > -->
        <figure>
          <img src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png" alt="GeeksforGeeks">
          <figcaption>Geeks for Geeks</figcaption>
        </figure>
        <h2>GeeksforGeeks</h2>
        <p>
          Sandeep Jain(FOUNDER) An IIT Roorkee alumnus and 
          founder of GeeksforGeeks. Apart from GeeksforGeeks, 
          he has worked with DE Shaw and Co. as a software 
          developer and JIIT Noida as an assistant professor.
        </p>
      </article>
    `

    it('En views/index.ejs use las etiquetas: '+article, function() {
      return request(app)
        .get('/')
        .then((response) => {
          
          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          let typetextclean = article.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          
          chai.expect(responseclean).to.contain(typetextclean);
            
        })
    });

});