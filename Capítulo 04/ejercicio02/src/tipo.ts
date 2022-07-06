let valorStr = "55"
let valorInt = 55

function comparandoCadenas()
{   
	console.log("\nComparación entre cadenas de caracteres")
	//Convierta la variable valorInt a cadena de caracteres con la función toString()
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
	/* Inicio */
	return valorStr == valorInt.toString();
	/* Fin */
}

function comparandoEnteros()
{
	console.log("\nComparación entre enteros")
	//Convierte (parsea) la cadena de texto a entero con la función parseInt
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt
	/* Inicio */
	return parseInt(valorStr) != valorInt;
	/* Fin */
}

console.log(comparandoCadenas())
console.log(comparandoEnteros())

export {comparandoCadenas,comparandoEnteros}