let cargarDatos = () => {
    fetch("https://dataserverdaw.herokuapp.com/escritores/xml")
      .then(response => response.text())
      .then(data => {
        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "application/xml");
        
        let escritores = xml.getElementsByTagName('escritor')

        for(let escritor of escritores) {
            let id = escritor.getElementsByTagName('id')[0].textContent
            let nombre = escritor.getElementsByTagName('nombre')[0].textContent

            let plantilla = `<option value="${id}">${nombre}</option>`

            document.querySelector('div.input-group > select').innerHTML += plantilla
        }

         

      })
      .catch(console.error);
}

window.addEventListener('DOMContentLoaded', (event) => {
   cargarDatos()
});