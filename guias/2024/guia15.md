---
theme: jekyll-theme-leap-day
---

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

1. Complete el tutorial de [Firebase - Firestore](/DAWM/tutoriales/firebase_firestore).
2. Descarge el archivo con la clave acceso y cambie el nombre del archivo por **firebaseConfig.json**.

### Actividades en clases

#### Github

1. Cree un repositorio en GitHub con el nombre **restapi**.
2. Clone y acceda a la carpeta en el directorio local.

#### Express - Estructura base y configuración

1. Inicializa un nuevo proyecto de Node.js, con:

    ```
    npm init -y
    ```

2. Instala las dependencias **Express** (`framework` de `backend`), **nodemon** (para reiniciar el servidor automáticamente durante el desarrollo) y **body-parser** (manejar solicitudes POST).

    ```
    npm install express body-parser
    npm install --save-dev nodemon
    ```

3. Instala el SDK de administración de [Firebase](https://firebase.google.com/docs/admin/setup?hl=es-419).

    ```
    npm install firebase-admin
    ```

4. Cree la carpeta _config_ y mueva el archivo descargado previamente (**firebaseConfig.json**) dentro de la carpeta.
5. (STOP 1) Revise la estructura de archivos.

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

2. Cree el archivo _routes/api.js_ con el código del `enrutador`. 
    + Relacione los `métodos HTTP` con las funciones del `CRUD`.

    ```typescript
    const express = require('express');
    const router = express.Router();
    const itemController = require('../controllers/itemController');

    router.post('/items', itemController.createItem);
    router.get('/items', itemController.getAllItems);

    module.exports = router;
    ```

3. Cree el archivo _controllers/itemController.js_ con el código del `controlador`:
    + Utilice el `SDK` de Firestore para acceder al `CRUD` de la colección de firestore.

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
4. (STOP 2) Revise la estructura de archivos.

#### Ejecución del servidor

1. Agregue el script **start** en _package.json_.

    ```typescript
    ...
      "scripts": {
        "start": "nodemon server.js",
        ...
      }
    ...
    ```

2. (STOP 3) Desde la línea de comandos, inicie el servidor:

    ```command
    npm start
    ```

3. Versiona local y remotamente el repositorio **restapi**.

#### Verificación

Desde una nueva línea de comandos, utilice [cURL](https://curl.se/) para realizar las peticiones al `rest api`:

1. Petición **método HTTP GET**

    ```command
    curl -X GET http://localhost:5000/api/items
    ```

2. Petición **método HTTP POST**

    ```command
    curl -X POST http://localhost:5000/api/items -H "Content-Type: application/json" -d "{\"key1\":\"value1\",\"key2\":\"value2\"}"
    ```

3. (STOP 4) Revise el resultado en la línea de comandos.

#### Actividad grupal

* Realice la actividad [REST API](/DAWM/enclases/restapi) 

### Documentación

* En [ExpressJS](https://expressjs.com/) se encuentra la referencia del API, guías y tutoriales.
* [Firebase Admin Node.js SDK](https://www.npmjs.com/package/firebase-admin) contiene la documentación del SDK de Admin.
* En el [API de Admin Database](https://firebase.google.com/docs/database/admin/start?hl=es-419) se encuentra la documentación para acceder a la base de datos de Firestore.

### Fundamental

* What is REST API? en [X](https://twitter.com/Terrasoft_ltd/status/1732354546528067738)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr"><a href="https://twitter.com/hashtag/REST?src=hash&amp;ref_src=twsrc%5Etfw">#REST</a> <a href="https://twitter.com/hashtag/API?src=hash&amp;ref_src=twsrc%5Etfw">#API</a> what is it?<br>Representational State Transfer<br>This means that when a <a href="https://twitter.com/hashtag/client?src=hash&amp;ref_src=twsrc%5Etfw">#client</a> requests a resource using a REST API, the <a href="https://twitter.com/hashtag/server?src=hash&amp;ref_src=twsrc%5Etfw">#server</a> transfers back the current state of the resource in a standardized representation <a href="https://t.co/xCFXw9cQFZ">pic.twitter.com/xCFXw9cQFZ</a></p>&mdash; Terrasoft Ltd (@Terrasoft_ltd) <a href="https://twitter.com/Terrasoft_ltd/status/1732354546528067738?ref_src=twsrc%5Etfw">December 6, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

framework, backend, servidor, enrutador, controlador, SDK, CRUD, métodos HTTP, estados HTTP

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