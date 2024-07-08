---
theme: jekyll-theme-leap-day
---

<style type="text/css" media="screen">
  details {
    margin: 5% 0%;
    padding: 2%;
    border: dashed 2px black;
    border-radius: 11px;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  }

  details div {
    color: lightseagreen;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
  }

  img.description {
    width: 50%;
    text-align: center;
    margin: 0 25%;
  }
</style>

## Guía 17

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2024/proyecto04)

### Actividades previas

1. Obtenga una cuenta en [Render](https://render.com/) con su cuentan en GitHub.
2. Active su cuenta desde el enlace en el correo electrónico.
3. Complete la información básica.

### Actividades en clases

1. Clone localmente tu repositorio **restapi**.

#### Render

1. En el [Dashboard Render](https://dashboard.render.com/), seleccione la opción **Web Services**.
2. Conecte el repositorio remoto **restapi** de GitHub.
3. En la configuración:
    + Cambie el valor de _Start Command_ por **node server.js**
    + En _Instance Type_ seleccione la opción gratuita **Free**
    + En _Environment Variables_, haga clic en **Add from .env** y pegue todo el contenido el archivo `.env` del proyecto _restapi_ 
4. 

#### REST API - CORS

1. Desde la línea de comandos, dentro del proyecto instale el módulo **CORS** (permite que se puedan solicitar recursos desde un dominio diferente del dominio del solicitado).

    ```command
    npm install cors
    ```

3. Edite el archivo _./server.js_ con el requerimiento del módulo y el uso del `middleware`.

    ```typescript
    require('dotenv').config()

    /* Requerimiento del módulo CORS */

    var cors = require('cors')
    ...

    const app = express();

    /* Uso del middleware CORS */

    app.use(cors())
    ...
    ```` 


#### REST API - Swagger

1. Modifique el valor **host** en el archivo de configuración de `./swagger.js`

    ```typescript
    ...

    const doc = {
      ...
      "host": 'localhost:5500',
      ...
    };

    const outputFile = './swagger_output.json'
    const endpointsFiles = ['./routes/*.js']

    swaggerAutogen(outputFile, endpointsFiles, doc)
    ```

4. (STOP 2) Compruebe los `endpoints` de la documentación en Render.


### Actividades en grupo

### Documentación

### Fundamental

### Términos

CORS, despliegue, middleware

### Referencias

* Cors (no date) Express cors middleware. Available at: https://expressjs.com/en/resources/middleware/cors.html (Accessed: 07 July 2024). 
* Deploy a Node Express App on Render. (n.d.). Retrieved from https://docs.render.com/deploy-node-express-app
* Clinton, E. O. (2023). How to deploy a Node.js and PostgreSQL App on Render. Retrieved from https://mattermost.com/blog/deploy-nodejs-app-on-render/