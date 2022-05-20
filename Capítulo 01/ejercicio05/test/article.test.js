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

    it('Modifique el archivo views/index.ejs', function() {
      return request(app)
        .get('/')
        .then((response) => {
          let responseclean = response.text.replace(/(\r\n|\n|\r)/gm, '')

          let article = `
            <article>
              <img
                src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190710102234/download3.png"
                alt="GeeksforGeeks"
              >
              <h2>GeeksforGeeks</h2>
              <p>
                Sandeep Jain(FOUNDER) An IIT Roorkee alumnus and 
                founder of GeeksforGeeks. Apart from GeeksforGeeks, 
                he has worked with DE Shaw and Co. as a software 
                developer and JIIT Noida as an assistant professor.
              </p>
            </article>
          `
          let articleclean = article.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g,'')
          chai.expect(responseclean).to.contain(articleclean);
            
        })
    });

});