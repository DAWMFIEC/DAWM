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

    let media = `
      <video width="320" height="240" controls="yes">
        <source src="media/video.mp4" type="video/mp4">
      </video>
      <audio controls="yes">
        <source src="media/audio.mp3" type="audio/mpeg">
      </audio>
    `
    it('En views/index.ejs use las etiquetas: '+media, function() {
      return request(app)
        .get('/')
        .then((response) => {
          
          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          let typetextclean = media.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          
          chai.expect(responseclean).to.contain(typetextclean);
            
        })
    });

});