---
theme: jekyll-theme-leap-day
---

## Guía 12

[DAWM](/DAWM/) / [Proyecto03](/DAWM/proyectos/2024/proyecto03)

### Actividades previas

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
		<Grid xs={6} sm={4} md={3} lg={2}>
			<Indicator />
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

export default function Indicator() {
    return (
        <Paper
            sx={{
              p: 2,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                Precipitation 
            </Typography>
            <Typography component="p" variant="h4">
                0.13
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                probability
            </Typography>
        </Paper> 
    )
}
```

* Compruebe el resultado en el navegador.

#### Componente MUI Card

* Busque y descargue la imagen [sunrise.jpeg](imagenes/sunrise.jpeg). Ubique la imagen dentro de la carpeta `assets`.

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
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={sunrise}
                    alt="sunrise"
                />
                <CardContent>
                    <Typography gutterBottom component="h2" variant="h6" color="primary">
                        Sunrise
                    </Typography>
                    <Typography component="p" variant="h4">
                        05:19:08
                    </Typography>
                    <Typography color="text.secondary" sx={{ flex: 1}}>
                       on {new Date().toLocaleString("en-US", { day : '2-digit'})} {new Date().toLocaleString("en-US", { month: "long" })} ,  {new Date().getFullYear()}
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
		<Grid xs={12} sm={6} md={6} lg={9}>
	       <BasicTable/>
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

### Términos

componentes, jsx

### Referencias

* The React component library you always wanted. (n.d.). Retrieved from https://mui.com/