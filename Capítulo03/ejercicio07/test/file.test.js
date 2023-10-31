const chai = require('chai');
const fs = require('fs');

describe('Test unitarios para la ruta física', () => {

	it('Respuesta de verificar la existencia del archivo servidor.js', () => {
		try {
			let file = 'servidor.js';
	  		chai.assert.isOk(fs.existsSync(file));
	  	} catch (error) {
            chai.expect.fail('Cree el archivo servidor.js');
            return;
        }
	});

});