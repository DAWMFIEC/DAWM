---
theme: jekyll-theme-leap-day
---

## Guía 23

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2024/proyecto04)

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

### Actividades previas

#### Github - RestAPI

1. Clone localmente tu repositorio **restapi**.
2. Cree el archivo _.env_, con las variables:
    
    ```text
    PORT=5500
    FIREBASE_ADMIN_API = ''
    ```

3. Desde la línea de comandos, inicie el servidor:

    ```command
    npm run autostart
    ```

4. Compruebe el funcionamiento del REST API

#### Github - Security

1. Clone localmente tu repositorio **security**.
2. Cree el archivo _.env_, con las variables:
    
    ```text
    SALT='...=='
    TOKEN_SECRET='ly...FNWW/...+yg=='
    ALL_GRANTED="admin"
    ```

3. Desde la línea de comandos, inicie el servidor:

    ```command
    npm run autostart
    ```

4. Compruebe el funcionamiento del REST API

### Actividades en clases

**Contexto:** Has desarrollando una API REST de **datos** y una aplicación de **seguridad**. 

**Objetivo:** Implemente un mecanismo de acceso entre aplicaciones mediante JSON Web Tokens (JWT).

**Requisitos:**

1. En la aplicación **seguridad**: 
    
    + Implemente la ruta `/token` al que solo accedan los usuarios autenticados con el rol **user**. En la página debe mostrar un JWT que sea válido por 1 hora.

2. En la aplicación **datos**:

    + Implemente un middleware que verifique la validez del JWT en cada solicitud a la ruta `/api`. Si el token es válido, permite el acceso; de lo contrario, devuelve un error 401 (No Autorizado). Los usuarios deben enviar el JWT en el encabezado de autorización de sus solicitudes.


[Fuente](https://www.tutorialrepublic.com/snippets/preview.php?topic=bootstrap&file=subscribe-newsletter-form-inside-modal)


### Documentación

* Documentación del estándar [RFC 7519](https://jwt.io/) para JWT.

### Fundamental

* Estructura de JSON Web Tokens (JWT) en [X](https://twitter.com/ProgressiveCod2/status/1734893719290319143)

<blockquote class="twitter-tweet" data-media-max-width="560"><p lang="en" dir="ltr">What&#39;s the most scalable solution to authentication?<br><br>JSON Web Tokens or JWT.<br><br>A single JWT can contain all the required information about an entity, making it an ideal candidate for authentication.<br><br>There are 3 main components of a JWT.<br><br>Here&#39;s the structure of JWT:<br><br>[1] Header… <a href="https://t.co/gwbX8UJU7l">pic.twitter.com/gwbX8UJU7l</a></p>&mdash; Saurabh Dashora (@ProgressiveCod2) <a href="https://twitter.com/ProgressiveCod2/status/1734893719290319143?ref_src=twsrc%5Etfw">December 13, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

### Términos

middleware, JSON Web Tokens

### Referencias

* JWT.IO. (2023). Retrieved 21 August 2023, from https://jwt.io/
* How To Use JSON Web Tokens (JWTs) in Express.js DigitalOcean. (2023). Retrieved 21 August 2023, from https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs
* Concepts, C., & Basics, M. (2023). Model Querying - Basics Sequelize. Retrieved 21 August 2023, from https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#operators
