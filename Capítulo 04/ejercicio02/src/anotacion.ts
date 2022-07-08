
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
	
	//Cambie el tipo de dato de la variable mensaje a string
	/* Inicio */
	let mensaje: number;
	/* Fin */

	mensaje = 'Mensaje de texto';
	return mensaje  
}


//Tomado de https://www.typescripttutorial.net/typescript-tutorial/typescript-type-annotations/
let anotacionObjeto = () => {

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
console.log(anotacionObjeto())

export {anotacionEntero,anotacionCadena,anotacionObjeto}