
/* Función: insertarTexto */

function insertarTexto() {
    document.getElementsByClassName('respuesta')[0].innerHTML = `<h2>Etiqueta script agregada y ejecutando</h2>`
}

insertarTexto()

module.exports = {
    insertarTexto: insertarTexto
};