const http = require("http");

const host = 'localhost';
const puerto = 8000;


const libros = [
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988, image: "https://pictures.abebooks.com/isbn/9780008144227-es.jpg" },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923, image: "https://pictures.abebooks.com/inventory/md/md31150392022.jpg" },
    { title: "The Subtle Art Of Not Giving A Fxck: A Counterintuitive Approach to Living a Good Life", author: "Mark Manson", year: 2016, image: "https://pictures.abebooks.com/isbn/9780062457714-es.jpg"},
    { title: "Cien Sonetos de Amor", author: "Pablo Neruda", year: 1959, image: "https://pictures.abebooks.com/inventory/md/md31179418383.jpg" },
    { tile: "The 48 Laws Of Power", author: "Robert Greene", year:2000 , image: "https://pictures.abebooks.com/isbn/9781861972781-es.jpg" },
    { tile: "El Coronel No Tiene Quien Le Escriba", author: "Gabriel García Márquez", year:1995 , image: "https://pictures.abebooks.com/inventory/md/md31202076412.jpg" },
    { tile: "Bestiario", author: "Julio Cortázar", year:2016 , image: "https://pictures.abebooks.com/isbn/9788466331845-es.jpg" }
];

const manejadorPeticiones = (req, res) => {
    
    switch (req.url) { 
        case "/json":
            res.setHeader("Content-Type","application/json")
            
            //Agregue a la respuesta la cabecera 'Access-Control-Allow-Origin' para 'http://localhost:8001'
            /* Inicio */
            
            /* Fin */

            res.writeHead(200)
            res.end(JSON.stringify(libros))
            break;
    }
};


const servidor = http.createServer(manejadorPeticiones);
servidor.listen(puerto, host, () => {
    console.log(`Servidor corriendo en http://${host}:${puerto}`);
});
