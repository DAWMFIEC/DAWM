
window.onload = function () {
  
  //Manejo de errores y CORS
  /*
  	Agregue un callback para el evento click del botón con identificador 'cargar1'
  	Dentro del callback, realice una petición asincrónica al url "https://random-d.uk/api/random" cuya respuesta es un JSON. 
  	En cualquier caso, sea error o éxito, muestre la respuesta en la etiqueta con el identificador "respuesta1".
  	Puede mostrar el JSON como cadena de texto con JSON.stringify (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
	*/

	/* Inicio */

  document.getElementById('cargar1').addEventListener('click', () => {
    fetch("https://random-d.uk/api/random")
      .then(response => response.json())
      .then(data => {
        document.getElementById('respuesta1').innerHTML = JSON.stringify(data)
      })
      .catch((error) => {
        document.getElementById('respuesta1').innerHTML = error
        console.log(error)
      });
  })

  /* Fin */

}