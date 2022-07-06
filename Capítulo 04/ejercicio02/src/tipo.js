"use strict";
exports.__esModule = true;
exports.comparandoEnteros = exports.comparandoCadenas = void 0;
var valorStr = "55";
var valorInt = 55;
function comparandoCadenas() {
    console.log("\nComparación entre cadenas de caracteres");
    //Convierta la variable valorInt a cadena de caracteres con la función toString()
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
    /* Inicio */
    return valorStr == valorInt.toString();
    /* Fin */
}
exports.comparandoCadenas = comparandoCadenas;
function comparandoEnteros() {
    console.log("\nComparación entre enteros");
    //Convierte (parsea) la cadena de texto a entero con la función parseInt
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    /* Inicio */
    return parseInt(valorStr) != valorInt;
    /* Fin */
}
exports.comparandoEnteros = comparandoEnteros;
console.log(comparandoCadenas());
console.log(comparandoEnteros());
