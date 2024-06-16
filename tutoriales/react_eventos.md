---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

React - Eventos, Virtual DOM y Hooks: useState - useRef
===============

![react banner](imagenes/react_native_logo.png)

Al igual que los eventos HTML DOM, React puede realizar acciones basadas en eventos del usuario. React tiene los mismos eventos que HTML: hacer clic, cambiar, pasar el mouse, etc.

<div align="center">
	<img src="imagenes/react_events.png" alt="" width="60%">
	<p>Fuente: <a href="https://medium.com/@vitorbritto/react-an-overview-about-syntheticevent-d3a6d35295f1">React: An Overview about SyntheticEvent</a> </p>
</div>

Virtual DOM
==========

* * *

El Virtual DOM es una representación del DOM guardada en memoria, que actúa de intermediario entre los estados de la aplicación y los estados del DOM (vistos por el usuario). Cuando ocurre un cambio en la aplicación web, el virtual DOM interpreta dichos cambios y calcula la manera más eficiente de actualizar el DOM para que renderice la menor cantidad de cambios posibles.

<div align="center">
	<img src="imagenes/react_virtual_dom.webp" alt="" width="60%">
	<p>Fuente: <a href="https://medium.com/@itsanuragjoshi/mastering-react-understanding-real-dom-vs-virtual-dom-and-the-dom-update-process-78a233454ff8">Mastering React: Understanding Real DOM vs Virtual DOM and the DOM Update Process</a> </p>
</div>


Componente MUI: Select y RadioGroup
==========

* * *

* En el componente `Calculator.tsx`, agregue la referencia a los componentes:

	+ [Card](https://mui.com/material-ui/react-card/) y sus componentes asociados,
	+ [Grid v2](https://mui.com/material-ui/react-grid2/), 
	+ [Radio Group](https://mui.com/material-ui/react-radio-button/) y sus componentes asociados,
	+ [Select](https://mui.com/material-ui/react-select/) y sus componentes asociados.

```tsx
...

//Card
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from '@mui/material';

//Grid v2
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

//Radio Group
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

//Select
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
...
```
 
* En el componente `Calculator.tsx`, agregue las etiquetas para los componentes Card y Grid.

```tsx
...
export default function Calculator() {
	return (
		<Card>
	      <CardContent>        
	        <Typography gutterBottom component="h2" variant="h4" color="primary">
	          Promociones del mes
	        </Typography>

	        <Grid container spacing={5}>

	            <Grid xs={12} xl={6} >
	              <Typography gutterBottom component="h4" color="secondary">
	                Tipos de promociones 
	              </Typography>

	              {/* Select */}

	            </Grid>

	            <Grid xs={12} xl={6}>
	              <Typography gutterBottom component="h4" color="secondary">
	                Tiempo de aplicación 
	              </Typography>

	              {/* Radio Group */}

	            </Grid>

          	</Grid>
	      </CardContent>
    	</Card>
	)
}
```

* En el componente `Calculator.tsx`, agregue las etiquetas para los componentes Select y Radio Group.

```tsx
...
	{/* Select */}
	<Select>
        <MenuItem value="-1">
          <em>Seleccione un tipo de promoción</em>
        </MenuItem>
        <MenuItem value={0}>Plan</MenuItem>
        <MenuItem value={1}>Suscripción</MenuItem>
        <MenuItem value={2}>Ilimitado</MenuItem>
    </Select>
...
```

y 

```tsx
...
	
	{/* Radio Group */}
	<RadioGroup
		name="radio-buttons-group"
		sx={% raw %}{{{% endraw %}
		  marginLeft: '2%'
		{% raw %}}}{% endraw %}
	>
		<FormControlLabel key={0} value={0} control={<Radio />} label="1 mes" />
		<FormControlLabel key={1} value={1} control={<Radio />} label="6 meses" />
		<FormControlLabel key={2} value={2} control={<Radio />} label="12 meses" />
	</RadioGroup>
...
```



Eventos: SelectChangeEvent y ChangeEvent
==========

* * *




* Compruebe el funcionamiento del servidor, con: **npm run dev**
* Acceda al URL [http://localhost:5174/](http://localhost:5174/)

![react_props](imagenes/react_props.png)

Referencias
=======

* Quick Start. (n.d.). Retrieved from https://react.dev/learn
* Vite. (n.d.). Retrieved from https://vitejs.dev/
* Cómo iniciar un proyecto React con Vite. (2022). Retrieved from https://carlosazaustre.es/react-vite
* Mastering React: Understanding Real DOM vs Virtual DOM and the DOM Update Process (2024) Retrieved from https://medium.com/@itsanuragjoshi/mastering-react-understanding-real-dom-vs-virtual-dom-and-the-dom-update-process-78a233454ff8