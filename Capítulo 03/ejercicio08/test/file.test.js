const chai = require('chai');
const fs = require('fs');

describe('Test unitarios para la ruta física', () => {

	it('Respuesta de verificar la existencia de la carpeta servidorHTTP', () => {
		try {
			let dir = 'servidorHTTP';
	  		chai.assert.isOk(fs.existsSync(dir));
	  	} catch (error) {
            chai.expect.fail('Cree la carpeta servidorHTTP');
            return;
        }
	});

	it('Respuesta de verificar la existencia del archivo servidorHTTP/servidor.js', () => {
		try {
			let file = 'servidorHTTP/servidor.js';
	  		chai.assert.isOk(fs.existsSync(file));
	  	} catch (error) {
            chai.expect.fail('Cree el archivo servidorHTTP/servidor.js');
            return;
        }
	});

});