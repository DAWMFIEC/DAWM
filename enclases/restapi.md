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
</style>


## REST API

[DAWM](/DAWM/)

### Actividades previas

1. Reúnanse en grupo de 3 (máximo) personas.
2. Acceda a su cuenta de LLM de su preferencia (ChatGPT, Gemini, etc).

### Actividades en clases

#### Explicación de código

1. Pregunte por la explicación detallada del código que se encuentra en los archivos _./server.js_, _controllers/itemController.js_ y _routes/api.js_.
2. Descargue y descomprima la respuesta en formato PDF. Asegúrese de incluir la instrucción para generar la pregunta. 

#### Generación de código

1. Pregunte por la explicación detallada del código para completar las funciones **getItem**, **updateItem** y **deleteItem** que se encuentran el archivo _controllers/itemController.js_.

    ```typescript
    ...
    exports.getItem = async (req, res) => { }
    exports.updateItem = async (req, res) => { }
    exports.deleteItem = async (req, res) => { }
    ...
    ```

2. Pregunte por la explicación detallada del código para completar las relaciones de los métodos HTTP (**get**, **put** y **delete**) con las funciones del controlador (**getItem**, **updateItem** y **deleteItem**) que se encuentran en el archivo _routes/api.js_.

    ```typescript
    ...
    router.get(      ,     );
    router.put(      ,     );
    router.delete(   ,     );
    ...
    ```

3. Desde la línea de comandos, inicie el servidor:

    ```command
    npm start
    ```

4. Desde una nueva línea de comandos, utilice [cURL](https://curl.se/) para verificar el funcionamiento de los nuevos enpoints.
5. Compruebe el funcionamiento correcto y corrija los errores que se presenten.
6. Versiona local y remotamente el repositorio **restapi**.
7. Descargue y descomprima la respuesta en formato PDF. Asegúrese de incluir la instrucción para generar la pregunta. 

### Solución

<details>
  <summary><div>Haga click aquí para ver la solución del Enrutador <i>routes/api.js<i></div></summary>
  <pre lang="typescript"><code>
    ...
    router.get('/items/:id', itemController.getItem);
    router.put('/items/:id', itemController.updateItem);
    router.delete('/items/:id', itemController.deleteItem);
    ...
  </code></pre>
</details>

<details>
  <summary><div>Haga click aquí para ver la solución del Controlador <i>controllers/itemController.js<i></div></summary>
  <pre lang="typescript"><code>
    exports.getItem = async (req, res) => {

        try {
            const itemId = req.params.id;
            const itemDoc = await db.collection('items').doc(itemId).get();
            if (!itemDoc.exists) {
                res.status(404).send('Item not found');
            } else {
                res.status(200).json({ id: itemDoc.id, ...itemDoc.data() });
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
        
    };

    exports.updateItem = async (req, res) => {

        try {
            const itemId = req.params.id;
            const data = req.body;
            const itemRef = db.collection('items').doc(itemId);
            await itemRef.update(data);
            res.status(200).send('Item updated');
        } catch (error) {
            res.status(400).send(error.message);
        }

    };

    exports.deleteItem = async (req, res) => {

        try {
            const itemId = req.params.id;
            await db.collection('items').doc(itemId).delete();
            res.status(200).send('Item deleted');
        } catch (error) {
            res.status(400).send(error.message);
        }

    };
  </code></pre>
</details>



### Entregable

* Responda a la actividad en el aulavirtual con los archivos PDF.

### Referencias

* Wieruch, R. (2020). How to create a REST API with Express.js in Node.js. Retrieved 10 August 2022, from https://www.robinwieruch.de/node-express-server-rest-api/
* Node.js Rest APIs example with Express, Sequelize & MySQL - BezKoder. (2020). Retrieved 14 August 2022, from https://www.bezkoder.com/node-js-express-sequelize-mysql/