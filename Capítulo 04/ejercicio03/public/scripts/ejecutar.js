function ejecutarFunciones() {
    document.getElementsByClassName('respuesta')[0].innerHTML = `<p>`+condicionales()+`</p>`
    document.getElementsByClassName('respuesta')[1].innerHTML = `<p>`+repeticion()+`</p>`
    document.getElementsByClassName('respuesta')[2].innerHTML = `<p>`+funciones()+`</p>`
}

ejecutarFunciones()