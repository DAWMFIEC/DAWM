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
import * as React from 'react';

export default function Indicator() {
    return (
       	<>
            Indicador
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
                Title
            </Typography>
            <Typography component="p" variant="h4">
                Subtitle
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                Text
            </Typography>
        </Paper> 
    )
}
```

#### Componente MUI Card

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

* En `components/Summary.tsx`, importe y use los componentes [Card](https://mui.com/material-ui/react-card/) y los componentes relacionados:

```jsx
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import amanecer from '../assets/amanecer.jpeg'

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
                        Amanecer
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

### Documentación

### Fundamental

### Términos

### Referencias