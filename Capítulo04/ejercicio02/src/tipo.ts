let valorStr = "55"
let valorInt = 55

function comparandoCadenas()
{   
	console.log("\nComparación entre cadenas de caracteres")

	/* Inicio */
	//Convierta la variable valorInt a cadena de caracteres con la función toString()
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
	
	return valorStr == valorInt;
	/* Fin */
}

function comparandoEnteros()
{
	console.log("\nComparación entre enteros")
	
	/* Inicio */
	//Convierte (parsea) la cadena de texto a entero con la función parseInt
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt

	return valorStr != valorInt;
	/* Fin */
}

console.log(comparandoCadenas())
console.log(comparandoEnteros())

export {comparandoCadenas,comparandoEnteros}