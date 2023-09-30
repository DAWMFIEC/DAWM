const assert = require('assert');
const chai = require('chai');
const chaiCSS = require('chai-css');
const request = require('supertest');
const app = require('../app');

chai.use(chaiCSS);

describe('Test unitarios para la ruta `/`', function() {

    it('Respuesta del servidor', function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
            assert.equal(response.status, 200)
        })
    });

    let selectorall = '*'
    let fontfamilyname = 'font-family';
    let fontfamilyvalue = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    
    let selectorone = '#section-one'
    let colorname = 'color'
    let colorvalue = 'white'
    let backgroundcolorname = 'background-color'
    let backgroundcolorvalue = 'var(--color-1)'

    let selectortwo = '#section-two'
    let backgroundname = 'background'
    let backgroundvalue = 'linear-gradient(170deg, var(--color-1) 0%, var(--color-1) 50%, var(--color-2) 50%, var(--color-2) 100%)'

    let selectorthree = '#section-three'
    let backgroundcolorname3 = 'background-color'
    let backgroundcolorvalue3 = 'var(--color-2)'

    let selectorh1 = 'h1'
    let fontsizename = 'font-size', fontsizevalue ='2rem'
    let fontsizename2 = 'font-size', fontsizevalue2 = 'clamp(2rem, 1.2rem + 2.66vw, 4rem)'
    let marginname = 'margin', marginsize = '0.3em 0 0.1em 0'


    let selectorh2 = 'h2'
    let fontsizename3 = 'font-size', fontsizevalue3 = '1.5rem'
    let fontsizename4 = 'font-size', fontsizevalue4 = 'clamp(1.5rem, 1.1rem + 1.33vw, 2.5rem)'
    let marginname2 = 'margin', marginsize2 = '0.3em 0 0.1em 0'

    let selectorsection = 'section'
    let paddingname = 'padding'
    let paddingvalue = '30px'


    let selectorcontainer = '.container'
    let widthname = 'width'
    let widthvalue = '90%'
    let maxwidthname = 'max-width'
    let maxwidthvalue = '1440px'
    let marginname3 = 'margin'
    let marginvalue3 = 'auto'

    let selectorcardwrapper = '.card-wrapper'
    let displayname = 'display'
    let displayvalue = 'grid'
    let gridtemplatecolumnsname = 'grid-template-columns'
    let gridtemplatecolumnsvalue = 'repeat(auto-fit, minmax(200px, 1fr))'
    let gapname = 'gap'
    let gapvalue = '30px'

    let selectorinside = 'div.container div.card'
    let backgroundname2 = 'background', backgroundvalue2 = 'white'
    let paddingname2 = 'padding', paddingvalue2 = '20px'
    let borderradiusname = 'border-radius', borderradiusvalue = '10px'
    let boxshadowname = 'box-shadow', boxshadowvalue = '0px 30px 50px -25px #ad3500'
    let positionname = 'position', positionvalue = 'relative'
    let transitionname = 'transition', transitionvalue = 'all 0.3s ease'
    let topname = 'top', topvalue = '0'

    let selectorchild = '.card > p'
    let opacityname = 'opacity', opacityvalue = '0.4'
    let transitionname2 = 'transition', transitionvalue2 = 'all 0.3s ease'

    let selectoradyacent = 'h2 + p'
    let textalignname = 'text-align', textalignvalue = 'justify'

    let selectorsibling = 'h1 ~ p'
    let textalignname2 = 'text-align', textalignvalue2 = 'center'

    let selectorhover = '.card:hover'
    let boxshadowname2 = 'box-shadow', boxshadowvalue2 = '0px 50px 75px -25px #ad3500'
    let topname2 = 'top', topvalue2 = '-20px'

    
    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectorall} {
          ${fontfamilyname}: ${fontfamilyvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectorall)
            .and.decl( fontfamilyname, fontfamilyvalue )
            
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectorone} {
          ${backgroundcolorname}: ${backgroundcolorvalue};
          ${colorname}: ${colorvalue}
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectorone)
            .and.decl( backgroundcolorname, backgroundcolorvalue )
            .and.decl( colorname, colorvalue )
            
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectortwo} {
          ${backgroundname}: ${backgroundvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectortwo)
            .and.decl( backgroundname, backgroundvalue )
            
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectorthree} {
          ${backgroundcolorname3}: ${backgroundcolorvalue3};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectorthree)
            .and.decl( backgroundcolorname3, backgroundcolorvalue3 )
            
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectorh1} {
          ${fontsizename}: ${fontsizevalue};
          ${fontsizename2}: ${fontsizevalue2};
          ${marginname}: ${marginsize};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectorh1)
            .and.decl( fontsizename, fontsizevalue )
            .and.decl( fontsizename2, fontsizevalue2 )
            .and.decl( marginname, marginsize )
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectorh2} {
          ${fontsizename3}: ${fontsizevalue3};
          ${fontsizename4}: ${fontsizevalue4};
          ${marginname2}: ${marginsize2};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectorh2)
            .and.decl( fontsizename3, fontsizevalue3 )
            .and.decl( fontsizename4, fontsizevalue4 )
            .and.decl( marginname2, marginsize2 )
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectorsection} {
          ${paddingname}: ${paddingvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectorsection)
            .and.decl( paddingname, paddingvalue )
            
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectorcontainer} {
          ${widthname}: ${widthvalue};
          ${maxwidthname}: ${maxwidthvalue};
          ${marginname3}: ${marginvalue3};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectorcontainer)
            .and.decl( widthname, widthvalue )
            .and.decl( maxwidthname, maxwidthvalue )
            .and.decl( marginname3, marginvalue3 )
        })
    });
    
    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectorcardwrapper} {
          ${displayname}: ${displayvalue};
          ${gridtemplatecolumnsname}: ${gridtemplatecolumnsvalue};
          ${gapname}: ${gapvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectorcardwrapper)
            .and.decl( displayname, displayvalue )
            .and.decl( gridtemplatecolumnsname, gridtemplatecolumnsvalue )
            .and.decl( gapname, gapvalue )
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectorinside} {
          ${backgroundname2}: ${backgroundvalue2};
          ${paddingname2}: ${paddingvalue2};
          ${borderradiusname}: ${borderradiusvalue};
          ${boxshadowname}: ${boxshadowvalue};
          ${positionname}: ${positionvalue};
          ${transitionname}: ${transitionvalue};
          ${topname}: ${topvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectorinside)
            .and.decl( backgroundname2, backgroundvalue2 )
            .and.decl( paddingname2, paddingvalue2 )
            .and.decl( borderradiusname, borderradiusvalue )
            .and.decl( boxshadowname, boxshadowvalue )
            .and.decl( positionname, positionvalue )
            .and.decl( transitionname, transitionvalue )
            .and.decl( topname, topvalue )
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectorchild} {
          ${opacityname}: ${opacityvalue};
          ${transitionname2}: ${transitionvalue2}
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectorchild)
            .and.decl( opacityname, opacityvalue )
            .and.decl( transitionname2, transitionvalue2 )
            
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectoradyacent} {
          ${textalignname}: ${textalignvalue};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectoradyacent)
            .and.decl( textalignname, textalignvalue )
            
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectorsibling} {
          ${textalignname2}: ${textalignvalue2};
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectorsibling)
            .and.decl( textalignname2, textalignvalue2 )
            
        })
    });

    it(`En public/stylesheets/ejercicio.css utilice el/los selectores con la(s) propiedades y valor(es):
        ${selectorhover} {
          ${boxshadowname2}: ${boxshadowvalue2};
          ${topname2}: ${topvalue2}
        }`, function() {
      return request(app)
        .get('/stylesheets/ejercicio.css')
        .then((response) => {
          
          chai.expect(response.text).to.have.rule(selectorhover)
            .and.decl( boxshadowname2, boxshadowvalue2 )
            .and.decl( topname2, topvalue2 )
            
        })
    });
   

});