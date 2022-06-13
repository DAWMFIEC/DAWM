let ejecutarCodigo = () => {

	//alert('Hola, mundo!')
	let titulo = document.getElementById('titulo1')
	titulo.textContent = 'Album de fotos'

	let arreglo = document.getElementsByClassName('text-muted')
	arreglo[1].innerHTML = '<span>En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>'

	arreglo = document.getElementsByTagName('p')
	arreglo[2].setAttribute('class','d-none')


}


ejecutarCodigo();