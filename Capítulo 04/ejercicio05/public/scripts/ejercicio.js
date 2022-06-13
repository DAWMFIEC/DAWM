/*
    Revisar 
        https://www.javascripttutorial.net/javascript-dom/javascript-events/
        https://www.javascripttutorial.net/javascript-dom/javascript-domcontentloaded/
*/

/*
    Utilice el objeto document del navegador 
    Agregue un listener (use el método addEventListener) para el evento DOMContentLoaded
    Utilice una función flecha en la que invoque a los métodos 
        - cargarDocumento

*/

/* Inicio */
document.addEventListener('DOMContentLoaded', () => {
    cargarDocumento()
    mouseClick()
});
/* Fin */

function cargarDocumento() {

    let snippet = `
        <main class="page-content">
          <div class="card">
            <div class="content">
              <h2 class="title">Mountain View</h2>
              <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
              <button class="btn">View Trips</button>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <h2 class="title">To The Beach</h2>
              <p class="copy">Plan your next beach trip with these fabulous destinations</p>
              <button class="btn">View Trips</button>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <h2 class="title">Desert Destinations</h2>
              <p class="copy">It's the desert you've always dreamed of</p>
              <button class="btn">Book Now</button>
            </div>
          </div>
          <div class="card">
            <div class="content">
              <h2 class="title">Explore The Galaxy</h2>
              <p class="copy">Seriously, straight up, just blast off into outer space today</p>
              <button class="btn">Book Now</button>
            </div>
          </div>
        </main>
    `
    let elemento, arreglo;

    /*
       Obtenga los elementos por la clase 'respuesta' y asigne el resultado a la variable arreglo
       Asigne el primer valor del arreglo a la variable elemento
       Asigne el HTML interno (innerHTML) del elemento con el valor de la variable snippet
    */

    /* Inicio */
    arreglo = document.getElementsByClassName('respuesta')
    elemento = arreglo[0]
    elemento.innerHTML = snippet
    /* Fin */

}


/*
    Revisar
        https://www.w3schools.com/jsref/met_document_queryselectorall.asp
        https://www.w3schools.com/jsref/jsref_foreach.asp
    
*/

function mouseClick() {

    

    

}



module.exports = {
    cargarDocumento: cargarDocumento
};