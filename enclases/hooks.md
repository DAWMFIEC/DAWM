---
theme: jekyll-theme-leap-day
---

## Hooks

[DAWM](/DAWM/)

### Actividades previas

* Complete el uso de hooks (useState, useRef y useEfffect) en el dashboard.

### Actividades en clases

### Interfaz _Item_

#### _App.tsx_

1. En el callback del hook _useEffect_:

	- Analice y extraiga los datos de las etiquetas `<time>`.

	<div align="center">
	    <img src="imagenes/time.png">
	</div>

	- Almacenane del contenido del XML en los arreglos correspondientes.

	```typescript
	let dataToItems: Item[] = new Array<Item>();
	```

#### _TableWeather.tsx_

1. Cree una interfaz, con: 
	
	- Claves sean los identificadores de los _props_
	- Valores sean arreglos de valores

	```typescript
	interface MyProp {
	  itemsIn: Item[];
	}
	```

2. Utilice un prop del tipo de la interfaz

	```typescript
	export default function BasicTable(arrayIn: MyProp) { ... }
	```




### Entregable

* Comprima todos los archivos **TableWeather.tsx**  en formato .zip, o .rar, y responda a la actividad en el aulavirtual.

### Referencias

* Renard, G. (2023). Under the Hood of React useEffect Dependencies. Retrieved from https://blog.bitsrc.io/understanding-dependencies-in-useeffect-7afd4df37c96
