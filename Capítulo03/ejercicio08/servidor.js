const http = require("http");

const host = 'localhost';
const puerto = 8000;


const libros = [
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
];

const manejadorPeticiones = (req, res) => {
    
    switch (req.url) { 
        /* Bloque de instrucciones 1 */
        case "/texto":
            /* Inicio */
            //Agregue el encabezado a la respuesta con res.setHeader con el nombre "Content-Type" y el valor "text/plain"
            res.setHeader("Content-Type","text/plain")
            
            //Agregue el codigo de estado con res.writeHead con el valor 200
            res.writeHead(2000)
            //Escriba la respuesta con res.end con el texto `Esto es un texto`
            res.end(`Esto es un texto`)        
            break;
            /* Fin */


        /* Bloque de instrucciones 2 */

        case "/json":
            /* Inicio */

            //Agregue las cabeceras "Content-Type" para JSON ("application/json") y con estado 200
            // Convierta el objeto libros a una cadena de texto JSON utilizando JSON.stringify

                 
            // Coloque la cadena de texto JSON en la respuesta con res.end

                
            /* Fin */
            break;


        /* Bloque de instrucciones 3 */

        case "/html":
            /* Inicio */

            //Agregue las cabeceras "Content-Type" para HTML y con estado 200
            //Escriba la respuesta con res.end con el texto  `<html><body><h1>Esta es una cabecera de nivel 1</h1></body></html>`
                 

                
            /* Fin */
            break;


        /* Bloque de instrucciones 4 */
        case "/error404":
            /* Inicio */

            //Agregue las cabeceras "Content-Type" para HTML y con estado 404
            //Escriba la respuesta con res.end con el texto  `<html><body><h1>Error 404</h1></body></html>`

                

            /* Fin */
            break;

    }

    

};


const servidor = http.createServer(manejadorPeticiones);
servidor.listen(puerto, host, () => {
    console.log(`Servidor corriendo en http://${host}:${puerto}`);
});
