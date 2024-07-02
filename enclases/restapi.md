---
theme: jekyll-theme-leap-day
---

## Colocación de elementos

[DAWM](/DAWM/)

### Actividades previas

* Acceda a su cuenta de ChatGPT.

### Actividades en clases

#### Controlador

* En el archivo _controllers/itemController.js_, agregue el código para las funciones **getItem**, **updateItem** y **deleteItem**.

    ```typescript
    ...
    exports.getItem = async (req, res) => { }
    exports.updateItem = async (req, res) => { }
    exports.deleteItem = async (req, res) => { }
    ...
    ```

#### Rutas

* En el archivo _routes/api.js_, agregue el código para relacionar los métodos HTTP (**get**, **put** y **delete**) con las funciones del controlador (**getItem**, **updateItem** y **deleteItem**).

    ```typescript
    ...
    router.get(      ,     );
    router.put(      ,     );
    router.delete(   ,     );
    ...
    ```

* Levante el servidor.

#### Verificación

* Desde una nueva línea de comandos, utilice [cURL](https://curl.se/) para verificar el funcionamiento de los enpoints para los métodos GET, PUT y DELETE.
* Corrija los errores necesarios 
* Versiona local y remotamente el repositorio **restapi**.

### Entregable

* Comprima todos los archivos en formato .zip, o .rar, y responda a la actividad en el aulavirtual.

### Referencias

* Wieruch, R. (2020). How to create a REST API with Express.js in Node.js. Retrieved 10 August 2022, from https://www.robinwieruch.de/node-express-server-rest-api/
* Node.js Rest APIs example with Express, Sequelize & MySQL - BezKoder. (2020). Retrieved 14 August 2022, from https://www.bezkoder.com/node-js-express-sequelize-mysql/