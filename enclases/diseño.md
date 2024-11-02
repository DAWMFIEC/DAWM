---
theme: jekyll-theme-leap-day
---

## Diseño

[DAWM](/DAWM/)

### Actividades previas

#### OpenWeatherMap (OBLIGATORIO)

1. Obtenga una cuenta en [OpenWeatherMap](https://openweathermap.org/). 
2. Copie el **API key** de su correo o desde su [perfil](https://home.openweathermap.org/api_keys).
3. Acceda a la documentación de [Call 5 day / 3 hour forecast data](https://openweathermap.org/forecast5).
4. Compruebe la respuesta en su navegador del siguiente endpoint.

<pre class="url">
https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil&mode=xml&appid=&lt;AQUI-SU-API-KEY&gt;
</pre>

**NOTA:** Para mejorar la visualización del XML utilice el [XMLviewer](https://codebeautify.org/xmlviewer).

#### Open-Meteo (OPCIONAL)

1. En la [documentación del API de Open-Meteo](https://open-meteo.com/en/docs):
  - En _Search_ elija `Detect Location via GPS`,
  - En _Hourly Weather Variables_ marque las opciones **Temperature (2m)**, **Rain**, **Cloud cover Total** y **Precipitation Probability**.
2. En la sección _API Response_, recargue el gráfico.
3. En _API URL_, copie la URL en una pestaña nueva, p.e.:

<pre class="url">
https://api.open-meteo.com/v1/forecast?latitude=-2.1454&longitude=-79.9671&hourly=temperature_2m,precipitation_probability,rain,cloud_cover
</pre>

### Actividades en clases

#### Diseño del Dashboard

1. Utilice papel y lápiz para el diseño del dashboard.
2. Analice la fuente de datos para identificar los nombres, las unidades y operaciones de los elementos del dashboard (**indicadores**, **gráficos**, **tablas** y **operaciones con los datos de las tablas**).

	**Contenido Mínimo:** <br>
  	- 5 indicadores de la fuente de datos (p.e. nombre de ciudad, país, zona horaria, etc), <br>
  	- 1 gráfico (línea, barra, pastel, etc), <br>
  	- 1 tabla (filas, columnas y datos a su elección) <br>
  	- 1 indicador resultante de las operaciones con los datos en la tabla (total, mayor, etc).

3. Agrupe, ordene y coloque un título a las secciones (grupo de elementos relacionados entre sí) del dashboard. 
4. Modele el dashboard responsivo. Considere los siguientes ejemplos ([1](https://dribbble.com/shots/20316787-Dashboard-Responsive), [2](https://dribbble.com/shots/22541272-Spectra-CRM-dashboard), [3](https://dribbble.com/shots/23711917-Sales-Dashboard-Responsive), [4](https://dribbble.com/shots/23711917-Sales-Dashboard-Responsive) y [5](https://dribbble.com/shots/22895176-Dashboard-responsive-Mobile-Desktop)) de Dribbble como referencias para ambas vistas:
	+ Vista para dispositivos móviles: Un sección debajo de otra. Máximo dos elementos en una fila. Considere ocultar secciones o elementos.
	+ Vista pantallas grandes: Máximo secciones en una fila. Varios elementos en una fila. Muestre todas las secciones o elementos.  

### Entregable

* Captura de pantalla con el diseño

### Referencias

* (2023). Retrieved 21 June 2023, from https://thenewstack.io/what-is-typescript/
* (2022). Retrieved 27 November 2022, from https://www.typescriptlang.org/
* StackBlitz Instant Dev Environments Click. Code. Done. - StackBlitz. (2023). Retrieved 21 June 2023, from https://stackblitz.com/
* TypeScript Tutorial. (2023). Retrieved 21 June 2023, from https://www.typescripttutorial.net/
* Explore Challenges. (n.d.). Retrieved from https://typehero.dev/explore/beginner