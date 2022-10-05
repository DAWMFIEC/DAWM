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

    let form1 = `<form id="formulario">`
    let typetext = `<label for="nombrescompletos">Nombres completos:</label> <input type="text" id="nombrescompletos" name="nombrescompletos" required="required" />`
    let typeemail = `<label for="correoelectronico">Correo electrónico:</label> <input type="email" id="correoelectronico" name="correoelectronico" required="required" />`
    let typegenre = `
        <input type="radio" id="femenino" name="genero" value="femenino">
        <label for="femenino">Femenino</label>
        <input type="radio" id="masculino" name="genero" value="masculino">
        <label for="masculino">Masculino</label>
        <input type="radio" id="noresponder" name="genero" value="noresponder" checked="checked">
        <label for="noresponder">Prefiero no responder</label>`

    let typedate = `<label for="fechanacimiento">Fecha de nacimiento:</label> <input type="date" id="fechanacimiento" name="fechanacimiento" required="required" />`

    // let typedate = `type="date"`
    // let typenumber = `type="number"`
    // let typecheckbox = `type="checkbox"`
    // let typeselect = `<select`
    // let typetextarea = `<textarea`
    // let typebutton1 = `<button`
    // let typebutton2 = `</button>`
    let form2 = `</form>`

    it('En views/index.ejs use las etiquetas: '+form1+' y '+ form2, function() {
      return request(app)
        .get('/')
        .then((response) => {

          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')

          let form1clean = form1.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          let form2clean = form2.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          
          chai.expect(responseclean).to.contain(form1clean);
          chai.expect(responseclean).to.contain(form2clean);
            
        })
    });

    it('En views/index.ejs use las etiquetas: '+typetext, function() {
      return request(app)
        .get('/')
        .then((response) => {

          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          let typetextclean = typetext.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          
          chai.expect(responseclean).to.contain(typetextclean);
            
        })
    });

    it('En views/index.ejs use las etiquetas: '+typeemail, function() {
      return request(app)
        .get('/')
        .then((response) => {

          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          let typetextclean = typeemail.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          
          chai.expect(responseclean).to.contain(typetextclean);
            
        })
    });

    it('En views/index.ejs use las etiquetas: '+typegenre, function() {
      return request(app)
        .get('/')
        .then((response) => {

          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          let typetextclean = typegenre.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          

          chai.expect(responseclean).to.contain(typetextclean);
            
        })
    });

    it('En views/index.ejs use las etiquetas: '+typedate, function() {
      return request(app)
        .get('/')
        .then((response) => {

          let responseclean = response.text.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          let typetextclean = typedate.replace(/\s/g, '').replace(/(?:\r\n|\r|\n)/g, '').replace(/<br\s*[\/]?>/gi,'').replace(/<\/br\s*[\/]?>/gi,'')
          
          chai.expect(responseclean).to.contain(typetextclean);
            
        })
    });

});