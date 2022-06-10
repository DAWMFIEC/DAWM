function ejecutarFunciones() {
    document.getElementsByClassName('respuesta')[0].innerHTML = `<p>`+definicionVariablesConstantes()+`</p>`
    document.getElementsByClassName('respuesta')[1].innerHTML = `<p>`+definicionObjeto()+`</p>`
    document.getElementsByClassName('respuesta')[2].innerHTML = `<p>`+definicionArreglos()+`</p>`
}

ejecutarFunciones()