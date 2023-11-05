---
theme: jekyll-theme-leap-day
---

## Guía 10

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2023/proyecto04)

### Actividades previas

#### OpenWeatherMap

1. Obtenga una cuenta en [OpenWeatherMap](https://openweathermap.org/). 
2. Copie el **API key** de su correo o desde su [perfil](https://home.openweathermap.org/api_keys).
3. Acceda a la documentación de [Call 5 day / 3 hour forecast data](https://openweathermap.org/forecast5).
4. Compruebe la respuesta en su navegador del siguiente endpoint.

```
https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=<API KEY>
```

**NOTA:** Para mejorar la visualización del XML utilice el [XMLviewer](https://codebeautify.org/xmlviewer).

### Actividades

* Clona localmente tu repositorio **dashboard**.
* Abra el proyecto en VSCode y levante el live server.


#### HTML

Edite el archivo `index.html`

* Agregue las etiquetas contenedoras de los datos tabulados.

```html
...

  <!-- Datos -->
  <section class="p-4 text-right bg-light">
      <h4 id="datos" class="mb-3">
          Datos
      </h4>
      <div class="container">

          <div
              class="row justify-content-end row-cols-6 row-cols-md-6 g-3 mt-2">

              <div class="col">
                  <select class="form-select form-select-lg mb-3"
                      aria-label="Default select example">
                      <option selected>Ciudades</option>
                      <option value="Machala">Machala</option>
                      <option value="Guayaquil">Guayaquil</option>
                      <option value="Quito">Quito</option>
                  </select>
              </div>

          </div>
          <div class="row row-cols-1 row-cols-md-1 g-3 mt-2">
              <div class="col">

                  <div class="card">
                      <div class="card-body">
                          <h5 class="card-title">Pronóstico del tiempo
                              para 5 días con datos cada 3 horas por
                              ciudad</h5>
                          <table id="forecast"
                              class="table align-middle mb-0 bg-white">
                              <thead class="bg-light">
                                  <tr>
                                      <th>Hora</th>
                                      <th>Humedad [%]</th>
                                      <th>Velocidad del viento [m/s]</th>
                                      <th>Precipitación [--]</th>
                                      <th>Presión [hPa]</th>
                                      <th>Nubosidad [%]</th>
                                  </tr>
                              </thead>
                              <tbody id="forecastbody">

                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  <!-- Datos -->
...
```

#### Javascript

Edite el archivo `public/javascript/load_data.js`

* Agregue las funciones flecha _loadForecastByCity_, _selectListener_ y _parseXML_. E invoque la función _loadForecastByCity_.

```typescript
... 
let parseXML = (responseText) => {
  
  // Parsing XML
  const parser = new DOMParser();
  const xml = parser.parseFromString(responseText, "application/xml");

  console.log(xml)

}

//Callback
let selectListener = (event) => {

  let selectedCity = event.target.value
  console.log(selectedCity);

}

let loadForecastByCity = () => {

  //Handling event

}

loadForecastByCity()
```

#### Event Listener

* Dentro de loadForecastByCity, obtenga la referencia al elemento select y agregue el callback al **evento** change. Revise los cambios por la consola.

```typescript
let loadForecastByCity = () => {

  //Handling event
  let selectElement = document.querySelector("select")
  selectElement.addEventListener("change", selectListener)

}
```

#### Async/await

* Dentro de selectListener, convierta el callback como async, agregue su API key, arme el URL del requerimiento y procese la respuesta en la función parseXML. Revise los cambios por la consola.

```typescript
// Callback async
let selectListener = async (event) => {

    let selectedCity = event.target.value

    try {

        //API key
        let APIkey = ''
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${selectedCity}&mode=xml&appid=${APIkey}`

        let response = await fetch(url)
        let responseText = await response.text()
        
        await parseXML(responseText)

    } catch (error) {
        console.log(error)
    }

}
```

#### Procesamiento del XML

* Dentro de parseXML, obtenga la referencia al elemento `#forecastbody` del documento HTML, y procese los elementos con etiqueta `<time>` del objeto xml. Revise los cambios en el navegador.

```typescript
let parseXML = (responseText) => {

    const parser = new DOMParser();
    const xml = parser.parseFromString(responseText, "application/xml");


    // Referencia al elemento `#forecastbody` del documento HTML

    let forecastElement = document.querySelector("#forecastbody")
    forecastElement.innerHTML = ''

    // Procesamiento de los elementos con etiqueta `<time>` del objeto xml
    let timeArr = xml.querySelectorAll("time")

    timeArr.forEach(time => {
        
        let from = time.getAttribute("from").replace("T", " ")

        let humidity = time.querySelector("humidity").getAttribute("value")
        let windSpeed = ''
        let precipitation = ''
        let pressure = ''
        let cloud = ''

        let template = `
            <tr>
                <td>${from}</td>
                <td>${humidity}</td>
                <td>${windSpeed}</td>
                <td>${precipitation}</td>
                <td>${pressure}</td>
                <td>${cloud}</td>
            </tr>
        `

        //Renderizando la plantilla en el elemento HTML
        forecastElement.innerHTML += template;
    })

}
```

**NOTA:** Extraiga el resto de los valores del XML para las variables _windSpeed_, _precipitation_, _pressure_ y _cloud_.

#### Local Storage

* Dentro de selectListener, lea la entrada de almacenamiento local, guarde la entrada de almacenamiento local y procese un valor previo.


```typescript
let selectListener = async (event) => {

    let selectedCity = event.target.value

    // Lea la entrada de almacenamiento local
    let cityStorage = localStorage.getItem(selectedCity);

    if (cityStorage == null) {
    
        try {
          ...
          // Guarde la entrada de almacenamiento local
          await localStorage.setItem(selectedCity, responseText)

        } catch (error) {
           ...
        }

    } else {
        // Procese un valor previo
        parseXML(cityStorage)
    }

}
```

* Versiona local y remotamente el repositorio **dashboard**.


### Fundamental

* Async/Await

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Day 20 of JS30Xplore:<br><br>Async/await is a powerful feature in JavaScript that allows you to write asynchronous code in a more synchronous and readable manner. <br>It&#39;s particularly useful for handling asynchronous operations like network requests, file I/O, and more.<br><br>To learn… <a href="https://t.co/QwEfBLW2Om">pic.twitter.com/QwEfBLW2Om</a></p>&mdash; Sanjana Sanghi (@ainasanghi) <a href="https://twitter.com/ainasanghi/status/1720392932266807598?ref_src=twsrc%5Etfw">November 3, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


### Documentación

* Documentación del [LocalStorage](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage) en MDN.

### Términos

API key, async/await, evento

### Referencias


* (N.d.). Retrieved from https://openweathermap.org/forecast5
* Window.localStorage - Referencia de la API Web MDN. (2023). Retrieved 14 June 2023, from https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
