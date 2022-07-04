/* Módulo HTTP para crear el servidor */

const http = require("http");


/* Defina las constantes para vincular el servidor con el nombre y el puerto */

const host = 'localhost';
const puerto = 8000;


/* Función que responderá a la peticiones del servidor */

const manejadorPeticiones = (req, res) => {
   
};


/* Creación del objeto servidor a través de la función createServer() del módulo http. Este servidor acepta solicitudes HTTP y pasa a la función manejadorPeticiones() */

/* El servidor se vincula con la dirección de red */

const servidor = http.createServer(manejadorPeticiones);
servidor.listen(puerto, host, () => {
    console.log(`Servidor corriendo en http://${host}:${puerto}`);
});
