
let anotacionEntero = () => {
	
	//Agregue el tipo de dato number a la variable numero
	/* Inicio */
	let numero = 1

	//comente esta línea
	numero += '45'
	/* Fin */

	return numero + 236;
} 

let anotacionCadena = () => {
	
	//Cambie el tipo de dato a string, de la variable mensaje 
	/* Inicio */
	let mensaje: number;
	/* Fin */

	mensaje = 'Mensaje de texto';
	return mensaje  
}


let anotacionArray = (valor: number, cadena: string) => {

	let skills: string[];
	skills = ['Problem Solving','Software Design','Programming'];

	//Comente las líneas que producen error
	/* Inicio */
	skills.push(valor)
	skills.push(cadena)
	/* Fin */

	return skills

}

//Tomado de https://www.geeksforgeeks.org/what-is-any-type-and-when-to-use-it-in-typescript/
let anotacionAny = () => {

	//Cambie el tipo del arreglo por any[]
	//Nota: use el tipo any solo cuando NO se conoce el tipo de dato
	
	/* Inicio */
	let New_Array: string[] = [1,"data1"];
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

	//Asigne el valor 'Jayme' a la propiedad name
	//Asigne el valor 30 a la propiedad age
	/* Inicio */
	person = {
	   name: 30,
	   age: 'Jayme'
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