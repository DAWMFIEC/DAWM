const assert = require('assert');
const chai = require('chai');
const request = require('supertest');
const app = require('../app');


describe('Test unitarios para la ruta `/`', function () {

  it('Respuesta del servidor', function () {
    return request(app)
      .get('/')
      .then((response) => {
        assert.equal(response.status, 200)
      })
  });

  let tovalidate = [
    '<meta charset="utf-8">',
    '<meta http-equiv="X-UA-Compatible" content="IE=edge">',
    "<meta content='width=device-width, initial-scale=1.0, user-scalable=0' name='viewport' >",
    '<meta name="viewport" content="width=device-width" >',
    '<link href="assets/css/bootstrap.min.css" rel="stylesheet" >',
    '<link href="assets/css/gsdk-bootstrap-wizard.css" rel="stylesheet" >',
    '<link href="assets/css/demo.css" rel="stylesheet" >',
    '<img src="assets/img/new_logo.png" alt="new_logo">',
    '<form action="/" method="post">',
    '<img src="assets/img/default-avatar.png" class="picture-src" id="wizardPicturePreview" title="" alt="default-avatar">',
    "<input type='button' class='btn btn-next btn-fill btn-warning btn-wd btn-sm' name='next' value='Next' >",
    "<input type='button' class='btn btn-finish btn-fill btn-warning btn-wd btn-sm' name='finish' value='Finish' >",
    "<input type='button' class='btn btn-previous btn-fill btn-default btn-wd btn-sm' name='previous' value='Previous' >",
    '<script src="assets/js/jquery-2.2.4.min.js"></script>',
    '<script src="assets/js/bootstrap.min.js"></script>',
    '<script src="assets/js/jquery.bootstrap.wizard.js"></script>',
    '</body></html>']

  for (let index = 0; index < tovalidate.length; index++) {
    const element = tovalidate[index];

    it('En views/index.ejs use las etiquetas: ' + element, function () {
      return request(app)
        .get('/')
        .then((response) => {

          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
          let elementclean = element.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

          chai.expect(responseclean).to.contain(elementclean);

        })
    });
  }






});