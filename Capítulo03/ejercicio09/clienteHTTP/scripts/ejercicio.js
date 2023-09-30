let callback = async (event) => {

	let respuesta = await fetch("http://localhost:8000/json")
	let json = await respuesta.json()

	json.forEach( (book) => {
		let plantilla = `
			<div class="col">
				<div class="card">
					<img src="${book.image}" class="card-img-top" alt="${book.title}">
					<div class="card-body">
						<h5 class="card-title">${book.title}</h5>
						<h6 class="card-subtitle mb-2 text-muted">${book.author} - ${book.year}</h6>
					</div>
				</div>
			</div>
		`
		document.getElementById("libros").innerHTML += plantilla;

	})

	

} 


window.addEventListener("load", callback);