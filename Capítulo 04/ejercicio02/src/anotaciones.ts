
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

//Agregue al parámetro palabras el tipo arreglo de cadena de caracteres y al parámetro indice el tipo número
/* Inicio */
let anotacionFuncion = (palabras, indice) => {
/* Fin */
	return palabras.filter(palabra => palabra.length > 3).at(indice);
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



//Tomado de https://www.typescripttutorial.net/typescript-tutorial/typescript-type-annotations/
let anotacionFuncionR : (texto: string) => string;

//Agregue el parámetro texto de tipo string y el tipo de retorno string a la función anotacionFuncionR
/* Inicio */
anotacionFuncionR = () => {

	//comente esta línea
    console.log('Hello');

    //retorne la cadena texto
    
};
/* Fin */


console.log(anotacionEntero())
console.log(anotacionCadena())
console.log(anotacionFuncion(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], 1))
console.log(anotacionObjeto())
console.log(anotacionFuncionR('Adiós!'))

export {anotacionEntero,anotacionCadena,anotacionFuncion,anotacionObjeto,anotacionFuncionR}