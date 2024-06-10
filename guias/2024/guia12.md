---
theme: jekyll-theme-leap-day
---

## Guía 12

[DAWM](/DAWM/) / [Proyecto03](/DAWM/proyectos/2024/proyecto03)

### Actividades en clases

#### Componente Indicador

* Cree el archivo `components/Indicator.tsx` con el componente [Fragment](https://es.react.dev/reference/react/Fragment#fragment):

```jsx
export default function Indicator() {
    return (
       	<>
            Indicator
        </> 
    )
}
```
* En `App.tsx` importe el componente **Indicator** y use en el contenido a renderizar:

```jsx
import Indicator from './components/Indicator';

function App() {
	return (
		...
		<Grid xs={6} md={4} lg={2}>
	        <Indicator />
	    </Grid>       
		...
	)
}

export default App
```

* Compruebe el resultado en el navegador.

#### Props

* Agregue la interfaz `Config` al componente **Indicator**

```jsx
...
interface Config {
    title?: String;
    subtitle?: String;
    value: Number;
}

export default function Indicator(config: Config) {
	return (
        <>
            {config.title}<br/>
            {config.value.toString()}<br/>
            {config.subtitle}
            
        </>
    )
}
```

* En `App.tsx` agregue las propiedades y los valores del componente **Indicator**

```jsx
import Indicator from './components/Indicator';

function App() {
	return (
		...
		<Grid xs={6} md={4} lg={2}>
	        <Indicator title='Precipitación' subtitle='Probabilidad' value={0.13} />
	    </Grid>       
		...
	)
}

export default App
```

* Compruebe el resultado en el navegador.

#### Componente MUI Paper y Typography

* Agregue la referencia a los componentes [Typography](https://mui.com/material-ui/react-typography/) y [Paper](https://mui.com/material-ui/react-paper/)

```jsx
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
```

* Use los componentes **Typography** y **Paper**

```jsx
...

export default function Indicator(config: Config) {
    return (
        <Paper
            sx={% raw %}{{{% endraw %}
              p: 2,
              display: 'flex',
              flexDirection: 'column'
            {% raw %}}}{% endraw %}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                {config.title} 
            </Typography>
            <Typography component="p" variant="h4">
                {config.value.toString()}
            </Typography>
            <Typography color="text.secondary" sx={% raw %}{{{% endraw %} flex: 1 {% raw %}}}{% endraw %}>
                {config.subtitle}
            </Typography>
        </Paper> 
    )
}
```

* Compruebe el resultado en el navegador.

#### Componente MUI Card

* Descargue la imagen [sunrise.jpeg](imagenes/sunrise.jpeg) dentro de la carpeta `assets` dentro del proyecto.

* Cree el componente `components/Summary.tsx`, importe y use los componentes [Card](https://mui.com/material-ui/react-card/) y los componentes relacionados:


```jsx
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import sunrise from '../assets/sunrise.jpeg'

export default function Summary() {
    return (
        <Card sx={% raw %}{{{% endraw %} maxWidth: 345 {% raw %}}}{% endraw %}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={sunrise}
                    alt="Amanecer"
                />
                <CardContent>
                    <Typography gutterBottom component="h2" variant="h6" color="primary">
                        Amanecer
                    </Typography>
                    <Typography component="p" variant="h4">
                        05:19:08
                    </Typography>
                    <Typography color="text.secondary" sx={% raw %}{{{% endraw %} flex: 1 {% raw %}}}{% endraw %}>
                    	en 17 Junio, 2024
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
```

* En `App.tsx` importe el componente **Summary** y use en el contenido a renderizar:

```jsx
import Summary from './components/Summary';

function App() {
	return (
		...
		<Grid xs={6} sm={4} md={3} lg={2}>
	        <Summary></Summary>
	    </Grid>        
		...
	)
}

export default App
```

* Compruebe el resultado en el navegador.

#### Componente MUI Table

* Cree el componente `components/BasicTable.tsx`
* Del ejemplo [Basic Table](https://mui.com/material-ui/react-table/#basic-table) muestre y copie el código en el componente recién creado.
* En `App.tsx` importe el componente **BasicTable** y use en el contenido a renderizar:

```jsx
import BasicTable from './components/BasicTable';

function App() {
	return (
		...
		<Grid xs={12} md={6} lg={9} >
	       <BasicTable />
	    </Grid>        
		...
	)
}

export default App
```

* Compruebe el resultado en el navegador.

### Documentación

* En [mui.com](https://mui.com/) se encuentra la documentación de la librería de componentes visuales para React.

### Fundamental

* Nombres de componentes en React

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">⚛️ Do you know how to name React components with the Base + Composite + Suffix Pattern?<br><br>You can use this pattern to create clear and consistent component names in your projects. <a href="https://t.co/xxopzpmvwJ">pic.twitter.com/xxopzpmvwJ</a></p>&mdash; George Moller (@_georgemoller) <a href="https://twitter.com/_georgemoller/status/1721326634001715433?ref_src=twsrc%5Etfw">November 6, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

componentes, jsx

### Referencias

* The React component library you always wanted. (n.d.). Retrieved from https://mui.com/
* Your First Component. (n.d.). Retrieved from https://react.dev/learn/your-first-component
* Rwparrish. (2020). React Basics. Retrieved from https://dev.to/rwparrish/react-basics-2je1
* Built-in React Components. (n.d.). Retrieved from https://react.dev/reference/react/components
* Codemarch. (2024). Build a Card Component: pic.twitter.com/AQ6VwHhl20. Retrieved from https://twitter.com/codemarch/status/1745649409436660118?t=kTuhWffwFZ2UJ0oW4V_SEw&s=08