# Ejercicio 04

![ejercicio04](imagenes/ejercicio04.png)


## Instrucciones

* Tome como referencia las instrucciones de:

  + [Firebase - Realtime database](https://dawfiec.github.io/DAWM-2022/tutoriales/firebase_realtime_database.html)

* Descargue el _dataset_ de [Kaggle - Disney Movies](https://www.kaggle.com/datasets/prateekmaj21/disney-movies).
* Instale globalmente el módulo [csv2json](https://www.npmjs.com/package/csv2json).
  + Convierta el dataset de **.csv** a **.json**, con: `csv2json disney_movies.csv disney_movies.json`
* Cree un proyecto en **Firebase** de acuerdo con el tutorial [Firebase - Realtime database](https://dawfiec.github.io/DAWM-2022/tutoriales/firebase_realtime_database.html).
  + Cree la colección: `movies`
  + Cargue el archivo **disney_movies.json** dentro de la colección **movies**
  + Edite las reglas de acceso a los datos para permitir acceso completo.
* Instale [Postman](https://learning.postman.com/docs/getting-started/installation-and-updates/) en su máquina.
  + Obtenga una cuenta
  + Cree una nueva colección, por ejemplo **Movies**,
    <p align="center">  
      <img src="imagenes/collection.png">
    </p>


  + Y agregue los requerimientos:
    <p align="center"> 
      <img src="imagenes/request.png">
    </p>

    - _**GET-all**_: De tipo **GET** para obtener todos la colección. Haga clic en el botón **Send** para enviar el requerimiento.
      <p align="center">  
        <img src="imagenes/GET-all.png">
      </p>

    - _**GET-one**_: De tipo **GET** para obtener el elemento **150** de la colección. Haga clic en el botón **Send** para enviar el requerimiento.
      <p align="center">  
        <img src="imagenes/GET-one.png">
      </p>

    - _**POST**_: De tipo **POST** para enviar datos a la colección. Haga clic en el botón **Send** para enviar el requerimiento.
      ```
      {
          "genre": "Adventure",
          "inflation_adjusted_gross": "",
          "movie_title": "Red",
          "mpaa_rating": "PG-13",
          "release_date": "2022-03-11",
          "total_gross": "19501533"
      }
      ```
      <p align="center">  
        <img src="imagenes/POST.png">
      </p>


## Pruebas unitarias

* En cada requerimiento, en la sección **Tests**
  + Para _**GET-all**_ 
```
pm.test("Response is ok", ()=>{
    pm.response.to.have.status(200)
})

var data = pm.response.json();

pm.test('Number of mvoies returned = ' + data.length, ()=>{
    pm.expect(data.length).to.equal(579);
})
```

  + Para _**GET-one**_ 
```
pm.test("Response is ok", ()=>{
    pm.response.to.have.status(200)
})

const jsonData = pm.response.json();

pm.test('Has data: mpaa_rating', function() {
  pm.expect(jsonData).to.have.property('mpaa_rating');
});

pm.test('Has total_gross value: "12349549"', function() {
  pm.expect(jsonData["total_gross"]).to.equal("12349549");
});
```


* Los resultados posibles a las pruebas unitarias pueden ser:
  <p align="center">  
    <img src="imagenes/GET-all-TEST.png">
  </p>





## Referencias 

* Building requests Postman Learning Center. (2022). Retrieved 16 August 2022, from https://learning.postman.com/docs/sending-requests/requests/
* Receiving responses Postman Learning Center. (2022). Retrieved 16 August 2022, from https://learning.postman.com/docs/sending-requests/responses/
* Grouping requests in collections Postman Learning Center. (2022). Retrieved 16 August 2022, from https://learning.postman.com/docs/sending-requests/intro-to-collections/
* Using variables Postman Learning Center. (2022). Retrieved 16 August 2022, from https://learning.postman.com/docs/sending-requests/variables/