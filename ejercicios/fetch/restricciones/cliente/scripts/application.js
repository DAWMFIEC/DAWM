const URL = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100'

const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms))

let peticion = async (event) => {
	let respuesta = await fetch(URL);
	let data = await respuesta.json()

	document.getElementById("respuesta2").innerHTML = data.length + ' registros';
	
}

let sobrecargar = async (event) => {
	let elementos = [...Array(2).keys()]

	for (let vez = 1; vez <= elementos.length; vez++) {

		//Llame a la función peticion
		/*Inicio*/

		/*Fin*/
		
		document.getElementById("respuesta3").innerHTML = 'Peticion '+ vez
		await esperar(10)
	}
	
}

window.onload = function () {
  
    //Restricciones en el servidor
  document.getElementById('cargar2').addEventListener('click', peticion )
  document.getElementById('cargar3').addEventListener('click', sobrecargar )


}