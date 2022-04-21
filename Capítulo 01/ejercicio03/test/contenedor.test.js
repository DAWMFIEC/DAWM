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

            let responseclean = response.text.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g,'')

            let paragraph = `
              <p>
                Suspendisse potenti. Ut pulvinar placerat pharetra. Curabitur ligula tortor, condimentum nec libero sed, facilisis scelerisque purus. Cras convallis erat nec mauris ullamcorper consectetur. Nullam dictum suscipit velit, quis lobortis leo placerat eu. Maecenas tempor maximus ipsum at lobortis. Aenean interdum velit eu dapibus rutrum. Etiam et ligula egestas, aliquam est nec, pharetra sapien. Sed lacinia, nisi nec feugiat sagittis, ante tortor volutpat sapien, quis auctor ipsum urna non nisl. Aliquam finibus maximus blandit. Sed placerat nisi odio. Sed quis tellus non metus vehicula elementum id et tortor. Nunc commodo felis at nulla condimentum consectetur. Donec elit purus, mattis vel cursus eleifend, consequat eget nunc.
              </p>
            `
            let paragraphclean = paragraph.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g,'')

            chai.expect(responseclean).to.contain(paragraphclean);


            let phrase = `
              <span class="fraseimpar">Etiam et mauris sit amet ipsum accumsan mattis.</span>
              <span class="frasepar">Morbi orci est, pellentesque at sodales in, pretium vel eros.</span>
              <span class="fraseimpar">Suspendisse potenti.</span>
              <span class="frasepar">Pellentesque tempus massa at leo tempor sollicitudin.</span>
            `
            let phraseclean = phrase.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g,'')

            chai.expect(responseclean).to.contain(phraseclean);
        })
    });

});