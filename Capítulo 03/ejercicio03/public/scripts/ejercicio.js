/*
    Revisar 
        https://www.javascripttutorial.net/javascript-if/
*/

function condicionales() {

    let edad = 16;
    let estado = 'CA';
    let mensaje1;

    /*
        Utiliza if para validar el valor de la variable edad y estado. 
        En caso que edad sea mayor o igual que 18 y estado igual a 'CA', asigne a mensaje el valor 'Puede manejar'
        Caso contrario, asigne a mensaje el valor de 'No puede manejar'
    */

    /* Inicio */
    
    /* Fin */

    let velocidad = 90;
    let mensaje2;

    /*
        Utilice el operador ternario para evaluar si la velocidad es mayor o igual que 120.
        En caso de ser correcto, asigne el valor 'Muy rápido' a mensaje2
        Caso contrario, asigne el valor 'OK' a mensaje2      
    */

    /* Inicio */
    
    /* Fin */

    return mensaje1 + ' '+ mensaje2;
}

/*
    Revisar 
        https://www.javascripttutorial.net/javascript-for-loop/
        https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in
*/

function repeticion() {
    
    let elementos1 = [];
    let i;

    /*
        Utilice la estructura de repetición for. 
        Use la variable i que vaya desde 1 hasta 5 (sin incluir) en incremento de 1
        Agregue cada uno de los valores de i al final del arreglo elementos1 con el método push
    */
    
    /*Inicio*/
    
    /*Fin*/

    let elementos2 = [];
    let objeto = {a: 1, b: 2, c: 3};
    let clave;

    /*
        Utilice la estructura de repetición for...in
        Para recorrer las claves del objeto. Utilice al variable clave.
        Agregue cada uno de los valores del objeto a partir de la clave en el arreglo elementos2 con el método push
    */

    /*Inicio*/
    
    /*Fin*/


    return ''+elementos1[2] + elementos1[3] + ' '+elementos2[0]+elementos2[2]
}   


/*
    Revisar
        https://www.javascripttutorial.net/javascript-anonymous-functions/
*/

function funciones() {


    let resultado1;
    let funcionAnonima;

    /* 
        Asigne a la variable funcionAnonima una función anónima
        Dentro de la función asigne el valor 'Función anónima' a la variable resultado1

        Llame a la función funcionAnonima
    */

    /*Inicio*/
    
    /*Fin*/

    let resultado2;
    let funcionFlecha;

    /* 
        Asigne a la variable funcionFlecha una función flecha
        Dentro de la función asigne el valor 'Función flecha' a la variable resultado2

        Llame a la función funcionFlecha
    */

    /*Inicio*/
    
    /*Fin*/


    return resultado1 + ' - ' + resultado2
}

module.exports = {
    condicionales: condicionales,
    repeticion: repeticion,
    funciones: funciones
};