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
        
            //Agregue el codigo de estado con res.writeHead con el valor 200
        
            //Escriba la respuesta con res.end con el texto `Esto es un texto`
        
            //Agregue un break;
        
            /* Fin */


        /* Bloque de instrucciones 2 */

        /* Inicio */
        //Agregue una opción del switch para la ruta '/json'
            //Agregue las cabeceras "Content-Type" para JSON ("application/json") y con estado 200
            //Convierta el objeto libros como string y coloque el string en la respuesta. Utilice la función JSON.stringify
        
        /* Fin */


        /* Bloque de instrucciones 3 */
        /* Inicio */
        //Agregue una opción del switch para la ruta '/html'
            //Agregue las cabeceras "Content-Type" para HTML y con estado 200
            //Escriba la respuesta con res.end con el texto  `<html><body><h1>Esta es una cabecera de nivel 1</h1></body></html>
        


        /* Fin */

    }

    

};


const servidor = http.createServer(manejadorPeticiones);
servidor.listen(puerto, host, () => {
    console.log(`Servidor corriendo en http://${host}:${puerto}`);
});
