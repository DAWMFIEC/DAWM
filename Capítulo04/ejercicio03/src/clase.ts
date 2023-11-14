
class Person {
    //Agregue el tipo a las propiedades
    // ssn: number
    // firstName y lastName: string

    /* Inicio */
    ssn;
    firstName;
    lastName;
    /* Fin */

     //Agregue el tipo a los parámetros 
    // ssn: number
    // firstName y lastName: string
    /* Inicio */
    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    /* Fin */

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


let claseInstanciacion = () => {

	
	/* Inicio */
    //Instancie el objeto person de la clase Person
	
    /* Fin */

	return person
}

console.log(claseInstanciacion())

export {claseInstanciacion}