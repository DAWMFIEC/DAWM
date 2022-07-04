// zindex como variable global

var zindex = 10;

let animarCartas = (carta) => {


  carta.addEventListener("click",(e) => {

        e.preventDefault();

        var isShowing = false;


        if (carta.classList.contains("show")) {
          isShowing = true
        }

        if (carta.parentNode.classList.contains("showing")) {
          // a card is already in view
          document.querySelector("div.card.show").classList.remove("show");

          if (isShowing) {
            // this card was showing - reset the grid
            document.querySelector("div.cards").classList.remove("showing");
          } else {
            // this card isn't showing - get in with it
            carta.classList.add("show");
            carta.style.zIndex = zindex;

          }

          zindex++;

        } else {
          // no cards in view
          document.querySelector("div.cards").classList.add("showing");
          carta.classList.add("show");
          carta.style.zIndex = zindex;
            

          zindex++;
        }
        
  });
  
    
}

/*
    Revisar 
        https://www.javascripttutorial.net/javascript-fetch-api/
        https://developer.mozilla.org/es/docs/Web/API/Document/querySelectorAll
        https://www.geeksforgeeks.org/htmlcollection-for-loop/
        https://codetogo.io/how-to-fetch-xml-in-javascript/
        
*/
let cargarLibros = () => {

    let plantilla, arreglo, contenedor;

    /*
        Realice una petición asincrónica fetch al URL "https://dataserverdaw.herokuapp.com/libros/xml"
        Asigne a la variable arreglo la colección de elementos HTML (HTMLCollection) de las etiquetas 'book' que se encuentren en el XML de respuesta, utilice querySelectorAll con 'bookstore > book'
        Asigne a la variable contenedor la referencia al div con la clase "cards", use querySelector con 'div.cards'

        Itere sobre el arreglo de libros y por cada libro, extraiga:

            title,isbn, thumbnailUrl y shortDescription de cada libro, se recomienda utilizar querySelector
            Para el caso de shortDescription, no todos los libros tienen texto. Utilice un texto vacío de manera predeterminada.

        Al terminar de iterar y dentro de la función, agrega este código para animar las cartas
            //animación de las cartas
            document.querySelectorAll("div.card").forEach(carta => {
                animarCartas(carta)
            }) 
    */

    plantilla = `
                <div class="card">
                  <div class="card__image-holder">
                    <img class="card__image" src="${thumbnailUrl}" alt="wave" />
                  </div>
                  <div class="card-title">
                    <a href="#" class="toggle-info btn">
                      <span class="left"></span>
                      <span class="right"></span>
                    </a>
                    <h2>
                    ${title}
                    <small>${isbn}</small>
                    </h2>
                  </div>
                  <div class="card-flap flap1">
                    <div class="card-description">
                      ${shortDescription}
                    </div>
                    <div class="card-flap flap2">
                      <div class="card-actions">
                        <a href="#" class="btn">Read more</a>
                      </div>
                    </div>
                  </div>
                </div>
            `

    /*Inicio*/
    
    /*Fin*/


    
}

document.addEventListener("DOMContentLoaded", () => {
    cargarLibros()   
})


module.exports = {
    cargarLibros: cargarLibros
};
