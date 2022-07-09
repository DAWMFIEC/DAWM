//Agregue el tipo a las propiedades, parámetros y métodos
// ssn: number
// firstName y lastName: string

/* Inicio */
class Person {
    ssn;
    firstName;
    lastName;

    constructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
/* Fin */

let claseInstanciacion = () => {

	//Instancie la clase persona en la variable person 

	/* Inicio */
	
	/* Fin */

	return person
}

console.log(claseInstanciacion())

export {claseInstanciacion}