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

    let meta = '<meta name="viewport" content="width=device-width, initial-scale=1">'

    it('En views/index.ejs use las etiquetas: ' + meta, function () {
        return request(app)
            .get('/')
            .then((response) => {

                let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
                let typetextclean = meta.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

                chai.expect(responseclean).to.contain(typetextclean);

            })
    });

    let styletag = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">`
    let scripttag = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`
    let bootc1 = `<div id="div-1" class="container py-3">`
    let bootc2 = `<div id="div-2" class="row row-cols-sm-1 row-cols-md-3 mb-3 text-center">`
    let bootc31 = `<div id="div-3-1" class="col">`
    let bootc32 = `<div id="div-3-2" class="col">`
    let bootc33 = `<div id="div-3-3" class="col">`
    let bootc41 = `<div id="div-4-1" class="card mb-4 rounded-3 shadow`
    let bootc42 = `<div id="div-4-2" class="card mb-4 rounded-3 shadow`
    let bootc43 = `<div id="div-4-3" class="card mb-4 rounded-3 shadow`
    let bootbtn = `<button type="button" class="w-100 btn btn-lg`

    it('En views/index.ejs use la etiqueta: ' + styletag, function () {
        return request(app)
            .get('/')
            .then((response) => {

                let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
                let styletagclean = styletag.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

                chai.expect(responseclean).to.contain(styletagclean);

            })
    });

    it('En views/index.ejs use la etiqueta: ' + scripttag, function () {
        return request(app)
            .get('/')
            .then((response) => {

                let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
                let scripttagclean = scripttag.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

                chai.expect(responseclean).to.contain(scripttagclean);

            })
    });

    it('En views/index.ejs use la etiqueta: ' + bootc1, function () {
        return request(app)
            .get('/')
            .then((response) => {

                let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
                let bootc1clean = bootc1.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

                chai.expect(responseclean).to.contain(bootc1clean);

            })
    });

    it('En views/index.ejs use la etiqueta: ' + bootc2, function () {
        return request(app)
            .get('/')
            .then((response) => {

                let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
                let bootc2clean = bootc2.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

                chai.expect(responseclean).to.contain(bootc2clean);

            })
    });

    it('En views/index.ejs use la etiqueta: ' + bootc31, function () {
        return request(app)
            .get('/')
            .then((response) => {

                let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
                let bootc31clean = bootc31.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

                chai.expect(responseclean).to.contain(bootc31clean);

            })
    });

    it('En views/index.ejs use la etiqueta: ' + bootc32, function () {
        return request(app)
            .get('/')
            .then((response) => {

                let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
                let bootc32clean = bootc32.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

                chai.expect(responseclean).to.contain(bootc32clean);

            })
    });

    it('En views/index.ejs use la etiqueta: ' + bootc33, function () {
        return request(app)
            .get('/')
            .then((response) => {

                let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
                let bootc33clean = bootc33.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

                chai.expect(responseclean).to.contain(bootc33clean);

            })
    });

    it('En views/index.ejs use la etiqueta: ' + bootc41, function () {
        return request(app)
            .get('/')
            .then((response) => {

                let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
                let bootc41clean = bootc41.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

                chai.expect(responseclean).to.contain(bootc41clean);

            })
    });

    it('En views/index.ejs use la etiqueta: ' + bootc42, function () {
        return request(app)
            .get('/')
            .then((response) => {

                let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
                let bootc42clean = bootc42.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

                chai.expect(responseclean).to.contain(bootc42clean);

            })
    });

    it('En views/index.ejs use la etiqueta: ' + bootc43, function () {
        return request(app)
            .get('/')
            .then((response) => {

                let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
                let bootc43clean = bootc43.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

                chai.expect(responseclean).to.contain(bootc43clean);

            })
    });

    it('En views/index.ejs use la etiqueta: ' + bootbtn, function () {
        return request(app)
            .get('/')
            .then((response) => {

                let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')
                let bootbtnclean = bootbtn.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '')

                chai.expect(responseclean).to.contain(bootbtnclean);

                let re = new RegExp(bootbtnclean, 'g');
                let countclean = (responseclean.match(re) || []).length

                chai.expect(countclean).to.equal(3)
            })
    });
});