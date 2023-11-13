
let anotacionEntero = () => {
	
	/* Inicio */
	//Agregue el tipo de dato number a la variable numero

	let numero = 1

	//Convierte (parsea) la cadena de texto a entero con la función parseInt
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt

	numero += '45'
	/* Fin */

	return numero + 236;
} 

let anotacionCadena = () => {
	
	
	/* Inicio */
	// Para la variable mensaje, cambie el tipo de dato a string

	let mensaje: number;
	/* Fin */

	mensaje = 'Mensaje de texto';
	return mensaje  
}


let anotacionArray = (valor: number, cadena: string) => {

	let skills: string[];
	
	skills = ['Problem Solving','Software Design','Programming'];

	/* Inicio */
	//Convierta la variable valorInt a cadena de caracteres con la función toString()
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
	
	skills.push(valor)
	/* Fin */
	
	skills.push(cadena)

	return skills

}

//Tomado de https://www.geeksforgeeks.org/what-is-any-type-and-when-to-use-it-in-typescript/
let anotacionAny = () => {

	/* Inicio */
	//Cambie el tipo del arreglo por any[]
	//Nota: use el tipo any solo cuando NO se conoce el tipo de dato
	
	let New_Array: number[] = [1,"data1"];
	/* Fin */
	
	New_Array.push("data2");
	New_Array.push(2)
	New_Array.push("data3");
	New_Array.push(3)
	return New_Array
}

//Tomado de https://www.typescripttutorial.net/typescript-tutorial/typescript-type-annotations/
let anotacionObjeto = () => {

	//Plantilla de objeto person
	let person: {
	   name: string;
	   age: number
	};


	/* Inicio */
	
	//Asigne a la propiedad name el valor 'Jayme'
	//Asigne a la propiedad age el valor 30 
	person = {
	   
	};
	/* Fin */

	return person
}

console.log(anotacionEntero())
console.log(anotacionCadena())
console.log(anotacionArray(2, "Imagination"))
console.log(anotacionAny())
console.log(anotacionObjeto())

export {anotacionEntero,anotacionCadena,anotacionArray,anotacionAny,anotacionObjeto}