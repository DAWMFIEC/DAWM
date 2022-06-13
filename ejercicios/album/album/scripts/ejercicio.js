let ejecutarCodigo = () => {
	
	let elemento = document.getElementById('titulo1')
	elemento.textContent = 'Album de fotos'

	let arreglo = document.getElementsByClassName('text-muted')
	elemento = arreglo[1]
	elemento.innerHTML = `<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>`


	arreglo = document.getElementsByTagName('p')
	elemento = arreglo[2]
	elemento.setAttribute('class','d-none')

}

ejecutarCodigo();