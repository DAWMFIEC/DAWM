

function agregarPorClase(idx, texto) {
    document.getElementsByClassName('respuesta')[idx].innerHTML = texto
}

module.exports = {
    agregarPorClase: agregarPorClase
};