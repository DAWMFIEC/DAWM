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
        - mouseClick
*/

/* Inicio */
document.addEventListener('DOMContentLoaded', () => {
    
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
    
    /* Fin */

}


/*
    Revisar
        
    
*/

function mouseClick() {

    let audio, arreglo, elemento;

    // Lista de tracks
    let tracks = [{
                "trackNumber": 1,
                "name": "All This Is - Joe L.'s Studio",
                "duration": "2:46",
                "file": "JLS_ATI"
            }, {
                "trackNumber": 2,
                "name": "The Forsaken - Broadwing Studio (Final Mix)",
                "duration": "8:30",
                "file": "BS_TF"
            }, {
                "trackNumber": 3,
                "name": "All The King's Men - Broadwing Studio (Final Mix)",
                "duration": "5:01",
                "file": "BS_ATKM"
            }, {
                "trackNumber": 4,
                "name": "The Forsaken - Broadwing Studio (First Mix)",
                "duration": "8:31",
                "file": "BSFM_TF"
            }, {
                "trackNumber": 5,
                "name": "All The King's Men - Broadwing Studio (First Mix)",
                "duration": "5:05",
                "file": "BSFM_ATKM"
            }]

    // Etiqueta UL contenedora
    let ul = document.getElementById('plList');

    // Recorremos la lista de tracks para inyectar en la etiqueta UL
    for(let track of tracks) {

        // Numeración de las etiquetas
        let trackNumber = track.trackNumber
        if (track.trackNumber.toString().length === 1) {
            trackNumber = '0' + trackNumber;
        }

        // Plantilla de items
        let liTemplate = `
          <li>                     
            <div class="plItem" id="${track.trackNumber}" name="${track.file}">
              <span class="plNum">${trackNumber}. </span>
              <span class="plTitle">${track.name}</span> 
              <span class="plLength">${track.duration}</span> 
            </div>
          </li>
        `
        ul.innerHTML += liTemplate
    }

    /*
        Obtenga la referencia a la etiqueta con el identificador 'audio1' y asigne el resultado en la variable audio
        Obtenga los elementos con la clase 'plItem' y asigne el resultado en la variable arreglo

        Recorra la variable arreglo
            Del elemento, obtenga el valor del atributo id y reste 1 al valor. Asigne el valor a una variable con el nombre id
            Del elemento, obtenga el valor atributo name. Asigne el valor a una variable con el nombre name

            Al elemento, agregue un listener (use el método addEventListener) para el evento 'click' mediante una función flecha
            Para el elemento audio, coloque el atributo 'src' con el valor "https://archive.org/download/mythium/"+name+".mp3"
            Para el elemento audio, invoque el método play
    */


    /*Inicio*/
    
    /*Fin*/

}





module.exports = {
    cargarDocumento: cargarDocumento,
    mouseClick: mouseClick
};