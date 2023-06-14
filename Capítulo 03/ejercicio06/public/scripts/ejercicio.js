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

/*Inicio*/

// Petición async/await
// Convierta la función flecha como async

let cargarLibros = () => {

    let plantilla, arreglo, contenedor;

    
   
    // Petición async/await
    // Anteponga await a la petición fetch   
    let resultado = fetch("https://raw.githubusercontent.com/DAWMFIEC/DAWM-apps/datos/libros.xml")

    // Anteponga await a la conversión de la variable resultado a texto
    let data = resultado.text()

    const parser = new DOMParser();
    const xml = parser.parseFromString(data, "application/xml");
  
    // Utilice el selector 'libros > libro'
    let books = xml.querySelectorAll('')

    books.forEach( book => {

      // Extraiga el contenido del texto para las etiquetas: title, isbn y shortDescription.
      // Utilice el operador condicional ternario para validar la existencia de las etiquetas previo a extraer el contenido del texto
      let thumbnailUrl = book.querySelector('thumbnailUrl')?book.querySelector('thumbnailUrl').textContent:''
      let title = ''
      let isbn = ''
      let shortDescription = ''
      

      plantilla = `
                <div class="card">
                  <div class="card__image-holder">
                    <img class="card__image" src="${thumbnailUrl}" alt="${isbn}" />
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
                  </div>
                </div>
            `

      document.getElementsByClassName('cards')[0].innerHTML += plantilla

    })

    document.querySelectorAll("div.card").forEach(carta => {
        animarCartas(carta)
    }) 
    
}

/*Fin*/

document.addEventListener("DOMContentLoaded", () => {
    cargarLibros()   
})


module.exports = {
    cargarLibros: cargarLibros
};
