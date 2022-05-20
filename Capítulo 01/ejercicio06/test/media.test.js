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
          let media = `
            <video width="320" height="240" controls="yes">
              <source src="media/video.mp4" type="video/mp4">
            </video>
            <audio controls="yes">
              <source src="media/audio.mp3" type="audio/mpeg">
            </audio>
          `

          let mediaclean = media.replace(/(\r\n|\n|\r)/gm, '').replace(/ /g,'')
          chai.expect(responseclean).to.contain(mediaclean);
            
        })
    });

});