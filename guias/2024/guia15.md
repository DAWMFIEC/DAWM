---
theme: jekyll-theme-leap-day
---

<style type="text/css" media="screen">
  details {
    border: double 1px black;
    margin: 5% 0%;
    padding: 2%;
    background-color: #0bcc7b;
  }
</style>

## Guía 15

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2024/proyecto04)

### Actividades previas

#### Entorno de desarrollo

1. En el terminal, verifica que tengas instalado Node.js y npm, con:        

    ```command
    node -v
    npm -v
    ```

#### Firebase - Firestore

1. Ve a [Firebase Console](https://firebase.google.com/) y crea un nuevo proyecto.
2. En **Categorías de producto** > **Compilación**, seleccione _Firestore Database_.
3. De click **Crear base de datos** y seleccione las opciones predeterminadas. 

#### Firebase - Servicio de Cuenta (Service Account)

1. En la Descripción general, selecciona **Configuración del proyecto**, 
2. Selecciona **Cuentas de servicio**,
3. Da clic en **Nueva clave privada**, y 
4. De clic en **Generar clave** para descargar el archivo JSON. 
5. Cambie el nombre al archivo por **firebaseConfig.json**.

### Actividades en clases

#### Github

1. Crea un repositorio en GitHub con el nombre **restapi**.
2. Clona y accede a la carpeta en el directorio local.

#### Express - Estructura base y configuración

1. Inicializa un nuevo proyecto de Node.js, con:

    ```
    npm init -y
    ```

2. Instala las dependencias **Express**, **nodemon** (para reiniciar el servidor automáticamente durante el desarrollo) y **body-parser** (manejar solicitudes POST).

    ```
    npm install express
    npm install --save-dev nodemon
    npm install body-parser
    ```

3. Instala el SDK de administración de Firebase.

    ```
    npm install firebase-admin
    ```

4. Cree la carpeta _config_ y mueva el archivo descargado previamente (**firebaseConfig.json**) dentro de la carpeta.

#### Express - Servidor, enrutador y controlador

1. Cree el archivo _./server.js_ con el código del `servidor`:

    ```typescript
    const express = require('express');
    const bodyParser = require('body-parser');
    const admin = require('firebase-admin');
    const serviceAccount = require('./config/firebaseConfig.json');

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });

    const app = express();
    app.use(bodyParser.json());

    const PORT = process.env.PORT || 5000;

    app.use('/api', require('./routes/api'));

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
    ```

2. Cree el archivo _routes/api.js_ con el código del `enrutador`:

    ```typescript
    const express = require('express');
    const router = express.Router();
    const itemController = require('../controllers/itemController');

    router.post('/items', itemController.createItem);
    router.get('/items', itemController.getAllItems);
    router.get('/items/:id', itemController.getItem);
    router.put('/items/:id', itemController.updateItem);
    router.delete('/items/:id', itemController.deleteItem);

    module.exports = router;
    ```

3. Cree el archivo _controllers/itemController.js_ con el código del `controlador`:

    ```typescript
    const admin = require('firebase-admin');
    const db = admin.firestore();

    exports.createItem = async (req, res) => {
      try {
        const data = req.body;
        const itemRef = await db.collection('items').add(data);
        res.status(201).send(`Created a new item: ${itemRef.id}`);
      } catch (error) {
        res.status(400).send(error.message);
      }
    };

    exports.getAllItems = async (req, res) => {
      try {
        const itemsSnapshot = await db.collection('items').get();
        const items = [];
        itemsSnapshot.forEach((doc) => items.push({ id: doc.id, ...doc.data() }));
        res.status(200).json(items);
      } catch (error) {
        res.status(400).send(error.message);
      }
    };
    ```

4. En el archivo _controllers/itemController.js_, agregue el código para las funciones **getItem**, **updateItem** y **deleteItem**.

    ```typescript
    exports.getItem = async (req, res) => { }

    exports.updateItem = async (req, res) => { }

    exports.deleteItem = async (req, res) => { }
    ```

<details>
  <summary><b> Ver la Solución</b></summary>
  <p>
  <pre><code>
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
  </p>
</details>


#### Script de ejecución y Ejecución del código

1. Agregue el script **start** en `package.json`.

    ```typescript
    ...
      "scripts": {
        "start": "nodemon server.js",
        ...
      }
    ...
    ```

2. Desde la línea de comandos, inicie el servidor:

    ```command
    npm start
    ```

* Versiona local y remotamente el repositorio **restapi**.

### Documentación

En [ExpressJS](https://expressjs.com/) se encuentra la referencia del API, guías y tutoriales.

### Fundamental

* What is REST API? en [X](https://twitter.com/Terrasoft_ltd/status/1732354546528067738)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/REST?src=hash&amp;ref_src=twsrc%5Etfw">#REST</a> <a href="https://twitter.com/hashtag/API?src=hash&amp;ref_src=twsrc%5Etfw">#API</a> what is it?<br>Representational State Transfer<br>This means that when a <a href="https://twitter.com/hashtag/client?src=hash&amp;ref_src=twsrc%5Etfw">#client</a> requests a resource using a REST API, the <a href="https://twitter.com/hashtag/server?src=hash&amp;ref_src=twsrc%5Etfw">#server</a> transfers back the current state of the resource in a standardized representation <a href="https://t.co/xCFXw9cQFZ">pic.twitter.com/xCFXw9cQFZ</a></p>&mdash; Terrasoft Ltd (@Terrasoft_ltd) <a href="https://twitter.com/Terrasoft_ltd/status/1732354546528067738?ref_src=twsrc%5Etfw">December 6, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

rest api, servidor, enrutador, controlador, orm, crud, verbos HTTP, estados HTTP

### Referencias

* Terminal, F. (2011). Formatting cURL Output in the Windows Terminal. Retrieved 11 August 2022, from https://superuser.com/questions/275229/formatting-curl-output-in-the-windows-terminal
* Wieruch, R. (2020). How to create a REST API with Express.js in Node.js. Retrieved 10 August 2022, from https://www.robinwieruch.de/node-express-server-rest-api/
* Node.js Rest APIs example with Express, Sequelize & MySQL - BezKoder. (2020). Retrieved 14 August 2022, from https://www.bezkoder.com/node-js-express-sequelize-mysql/
* -->QueryInterface, H. (2022). sequelize.QueryInterface.removeColumn JavaScript and Node.js code examples Tabnine. Retrieved 24 December 2022, from https://www.tabnine.com/code/javascript/functions/sequelize/QueryInterface/removeColumn
* -->QueryInterface, H. (2022). sequelize.QueryInterface.addColumn JavaScript and Node.js code examples Tabnine. Retrieved 24 December 2022, from https://www.tabnine.com/code/javascript/functions/sequelize/QueryInterface/addColumn
* orm, b., bagade, a., Panneerselvam, S., Grin, O., & OurBigBook.com, C. (2019). bulkUpdate in sequelize orm. Retrieved 24 December 2022, from https://stackoverflow.com/questions/54898994/bulkupdate-in-sequelize-orm
* S., McConnell, H., & McConnell, H. (2020). Sequelize many-to-many M:N relationship not functioning. Error: 'SequelizeEagerLoadingError:${model1} is not associated to ${model2}'. Retrieved 24 December 2022, from https://stackoverflow.com/questions/64790882/sequelize-many-to-many-mn-relationship-not-functioning-error-sequelizeeagerl
* expected, O., & Vidal, L. (2021). One To Many relationship using Sequelize creates more foreign keys than expected. Retrieved 24 December 2022, from https://stackoverflow.com/questions/66696143/one-to-many-relationship-using-sequelize-creates-more-foreign-keys-than-expected
* Chatgpt (no date) ChatGPT. Available at: https://chatgpt.com/share/95b84ae7-7efb-4aa7-9a10-9d85a81a9fdb (Accessed: 25 June 2024). 