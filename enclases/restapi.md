---
theme: jekyll-theme-leap-day
---

## Colocación de elementos

[DAWM](/DAWM/)

### Actividades previas

* Reúnanse en grupo de máximo 3 personas.
* Acceda a su cuenta de LLM de su preferencia (ChatGPT o Gemini).

### Actividades en clases

#### Servidor, Controlador y Rutas

* Consulte por la explicación detallada del código que se encuentra en los archivos _./server.js_, _controllers/itemController.js_ y _routes/api.js_.
* Descargue y descomprima la respuesta en formato PDF. Asegúrese de incluir la instrucción para generar la pregunta. 

#### Controlador

* Consulte por el código para completar las funciones **getItem**, **updateItem** y **deleteItem** que se encuentran el archivo _controllers/itemController.js_.

    ```typescript
    ...
    exports.getItem = async (req, res) => { }
    exports.updateItem = async (req, res) => { }
    exports.deleteItem = async (req, res) => { }
    ...
    ```

#### Rutas

* Consulte por el código para completar las relaciones de los métodos HTTP (**get**, **put** y **delete**) con las funciones del controlador (**getItem**, **updateItem** y **deleteItem**) que se encuentran en el archivo _routes/api.js_.

    ```typescript
    ...
    router.get(      ,     );
    router.put(      ,     );
    router.delete(   ,     );
    ...
    ```

* Desde la línea de comandos, inicie el servidor:

    ```command
    npm start
    ```

* Versiona local y remotamente el repositorio **restapi**.

#### Verificación

* Desde una nueva línea de comandos, utilice [cURL](https://curl.se/) para verificar el funcionamiento de los nuevos enpoints.
* Compruebe el funcionamiento correcto y corrija los errores que encuentren. 
* Descargue y descomprima la respuesta en formato PDF. Asegúrese de incluir la instrucción para generar la pregunta.
* Versiona local y remotamente el repositorio **restapi**.

### Entregable

* Responda a la actividad en el aulavirtual con los archivos PDF.

### Referencias

* Wieruch, R. (2020). How to create a REST API with Express.js in Node.js. Retrieved 10 August 2022, from https://www.robinwieruch.de/node-express-server-rest-api/
* Node.js Rest APIs example with Express, Sequelize & MySQL - BezKoder. (2020). Retrieved 14 August 2022, from https://www.bezkoder.com/node-js-express-sequelize-mysql/