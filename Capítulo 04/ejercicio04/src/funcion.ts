

//Agregue al parámetro palabras el tipo arreglo de cadena de caracteres y al parámetro indice el tipo número
/* Inicio */
let anotacionFuncionParametros = (palabras, indice) => {
/* Fin */
	return palabras.filter(palabra => palabra.length > 3)[indice];
}

//Tomado de https://www.typescripttutorial.net/typescript-tutorial/typescript-type-annotations/
let anotacionFuncionRetorno : (texto: string) => string;

//Siguiendo la definición de la función anotacionFuncionRetorno
//Agregue el parámetro texto de tipo string y el tipo de retorno string 
/* Inicio */
anotacionFuncionRetorno = () => {

	//comente esta línea
    console.log('Hello');

    //retorne la cadena texto
    
};
/* Fin */

console.log(anotacionFuncionParametros(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], 1))
console.log(anotacionFuncionRetorno('Adiós!'))

export {anotacionFuncionParametros,anotacionFuncionRetorno}