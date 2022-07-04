const http = require("http");

const host = 'localhost';
const puerto = 8000;


const libros = [
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
];

const manejadorPeticiones = (req, res) => {
    
    switch (req.url) { 
        case "/json":

            /* Bloque de instrucciones 1 */

            /* Inicio */
            //Agregue el encabezado a la respuesta con res.setHeader con el nombre "Content-Type" y el valor "application/json"
            res.setHeader("Content-Type", "application/json");
            //Agregue el codigo de estado con res.writeHead con el valor 200
            res.writeHead(200);
            //Escriba la respuesta con res.end con el texto `[{"id" : 07,"name" : "darshan"},{"id" : 08,"name" : "DARSHAN"}]`
            res.end(`[{"id" : 07,"name" : "darshan"},{"id" : 08,"name" : "DARSHAN"}]`);
            //Agregue un break;
            break;
            /* Fin */


        /* Bloque de instrucciones 2 */

        /* Inicio */
        //Agregue una opción del switch para la ruta '/libros'
            //Agregue las cabeceras "Content-Type" para JSON y con estado 200
            //Escriba en la respuesta el objeto libros como string. Utilice la función JSON.stringify
        case "/libros":
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            //
            res.end(JSON.stringify(libros));
            break;
            /* Fin */

        /* Fin */

    }

    

};


const servidor = http.createServer(manejadorPeticiones);
servidor.listen(puerto, host, () => {
    console.log(`Servidor corriendo en http://${host}:${puerto}`);
});
