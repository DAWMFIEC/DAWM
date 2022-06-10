/*
    Revisar https://www.javascripttutorial.net/javascript-variables/
*/

function definicionVariablesConstantes() {

    /*
        Utilice let para definir la variable mensaje
        Asigne la variable mensaje con el texto "Este es un mensaje desde "
    */

    /* Inicio */
    
    /* Fin */

    /*
        Utilice const para definir la constante LENGUAJE
        Asigne la constante LENGUAJE con el texto "Javascript"
    */

    /* Inicio */
    
    /* Fin */

    return mensaje + LENGUAJE;
}

/*
    Revisar https://www.javascripttutorial.net/javascript-data-types/
*/

function definicionObjeto() {

    /*
        Utilice let para definir la variable contacto
        Asigne la variable contacto con las propiedades y valores:
            - nombre con valor 'Juana'
            - apellido con valor 'Perez'
            - edad con valor 46
            - casado con valor false
            - sueldo con valor 1289.36
            - direccion con valor el objeto con propiedades y valores
                + pais con valor 'Ecuador'
                + provincia con valor 'Guayas'
                + ciudad con valor 'Guayaquil'

    */

    /*Inicio*/
    
    /*Fin*/

    return contacto.nombre + ' ' + contacto.apellido + ' de ' + contacto.direccion.pais + ', con ' + contacto.edad + ' años.'
}

/*
    Revisar https://www.javascripttutorial.net/javascript-array/
    y https://www.w3schools.com/jsref/jsref_tostring_array.asp
*/

function definicionArreglos() {

    /*
        Utilice let para definir el arreglo colores con los valores ['rojo', 'verde', 'azul']
    */

    /*Inicio*/
    
    /*Fin*/

    /*
        Cambie el elemento en el índice 1 por el valor 'amarillo'
    */
    /*Inicio*/
    
    /*Fin*/

    /*
        Agregue el color 'rosado' al final de la lista con método push
    */
    /*Inicio*/
    
    /*Fin*/

    /*
        Utilice let para definir la variable resultado
        Asigne a resultado la conversión del arreglo colores a cadena de caracteres usando el método toString()
    */
    /*Inicio*/
    
    /*Fin*/

    return resultado
}

module.exports = {
    definicionVariablesConstantes: definicionVariablesConstantes,
    definicionObjeto: definicionObjeto,
    definicionArreglos: definicionArreglos
};