let socket = io("ws://localhost:3000");
 
//Arreglo vacío
/* Inicio */

/* Fin */


//Al ocurrir un mensaje nuevo. (Revise el evento 'new' emitido por el servidor en servidor/index.js)
socket.on('new', (data) => {


    //Agregue data al final del arreglo registros, con push 
    /* Inicio */

    /* Fin */


    let plantillaRow = ``


    for (var i = 0; i < registros.length - 1; i++) {

        //Guarde el i-ésimo elemento en la variable inicio 
        /* Inicio */

        /* Fin */


        //Guarde el i+1-ésimo elemento en la variable fin 
        /* Inicio */

        /* Fin */



        //Complete la plantilla con las variables inicio.value, fin.value y fin.value
        /* Inicio */
        plantillaRow += `
            <tr>
                <td style="--start: ${ }; --size: ${ }"> <span class="data"> ${ } </span> </td>
            </tr>
        `
        /* Fin */

    }


   
    document.getElementsByTagName('tbody')[0].innerHTML = `<tbody>`+plantillaRow+`</tbody>` 
   
   
    //Cuando la longitud del arreglo sea mayor que 20, entonces
    //Elimine el valor del frente del arreglo registros, con shift
    /* Inicio */ 
    

    /* Fin */


})
