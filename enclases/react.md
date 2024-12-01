---
theme: jekyll-theme-leap-day
---

## React

[DAWM](/DAWM/)

### Actividades previas

* Complete las guías con el uso de hooks (useState, useRef y useEfffect) en el proyecto.

### Actividades en clases

#### Interfaz de datos

1. Cree la interfaz _src/interface/Item.tsx_ con:

	- Las claves **dateStart**, **dateEnd**, **precipitation**, **humidity** y **clouds**. 
	- Todas las claves son de tipo _String_.

	```jsx
	export default interface Item {
		dateStart: String;
		...
	}
	```

#### _App.tsx_

1. Importe la interfaz **Item**
2. Cree una variable de estado y función de actualización para un arreglo del tipo **Item**.
3. En el callback del hook _useEffect_:

	+ Cree un arreglo temporalmente del tipo **Item** para almacenar los valores del XML.
	
	```typescript
	let dataToItems: Item[] = new Array<Item>();
	```
	
	+ Obtenga la referencia a los primeros 6 elementos `<time>`:
		- De la etiqueta `<time>`, extraiga los atributos **@from**, **@to**
		- De la etiqueta `<time> > <precipitacion>`, extraiga el atributo **probability**
		- De la etiqueta `<time> > <humidity>`, extraiga el atributo **value**
		- De la etiqueta `<time> > <clouds>`, extraiga el atributo **all** 

	<div align="center">
	    <img src="imagenes/time.png">
	</div>

	+ Modifique de la variable de estado mediante la función de actualización para el arreglo del tipo **Item**.

4. En el _JSX_:

	- Pase la variable de estado (el arreglo del tipo **Item**) como prop del componente _TableWeather_. 

	```jsx
	<TableWeather itemsIn={% raw %}{{{% endraw %} items {% raw %}}}{% endraw %} />
	```

#### _TableWeather.tsx_

1. Importe la interfaz **Item**
2. Cree una interfaz, con: 
	
	- Clave(s) con los mismos identificadores del _prop_
	- Valores como arreglos de valores del tipo **Item**

	```typescript
	interface MyProp {
	  itemsIn: Item[];
	}
	```

2. Defina un prop del tipo de la interfaz 

	```typescript
	export default function BasicTable(arrayIn: MyProp) { ... }
	```

3. Cree una variable de estado y función de actualización para un arreglo del tipo **Item**.
4. Use un useEffect, que: 
	
	- El callback llame la función de actualización con la clave **itemsIn** del prop **arrayIn**.
	- Dependiente del prop **arrayIn**.

5. En el _JSX_:

	- Dentro de la etiqueta `<TableBody>`, itere en la variable de estado (arreglo del tipo **Item**)

	```jsx
	<TableBody>
      {rows.map((row, idx) => (
        <TableRow
          key={idx}
          sx={% raw %}{{{% endraw %} '&:last-child td, &:last-child th': { border: 0 } {% raw %}}}{% endraw %}
        >
          <TableCell component="th" scope="row">
            {row.dateStart}
          </TableCell>
          ...
        </TableRow>
      ))}
    </TableBody>
	```

	- Muestre las otras claves de los elementos

6. Cambie los nombres de las cabeceras de la tabla

	```jsx
	<TableRow>
		<TableCell>Hora de inicio</TableCell>
		<TableCell align="right">Hora de fin</TableCell>
		<TableCell align="right">Precipitación</TableCell>
		<TableCell align="right">Humedad</TableCell>
		<TableCell align="right">Nubosidad</TableCell>
	</TableRow>
	```

7. Verifique la salida en el navegador


	<div align="center">
	    <img src="imagenes/table.png">
	</div>


#### _LineChartWeather.tsx_

Ajuste y repita el proceso para el componente LineChartWeather.

### Entregable

* Comprima todos los archivos **TableWeather.tsx** y **LineChartWeather.tsx**  en formato .zip, o .rar, y responda a la actividad en el aulavirtual.

### Referencias

* Renard, G. (2023). Under the Hood of React useEffect Dependencies. Retrieved from https://blog.bitsrc.io/understanding-dependencies-in-useeffect-7afd4df37c96
