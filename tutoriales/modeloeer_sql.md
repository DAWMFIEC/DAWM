---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)


Modelo EER a SQL.
============================================

* * *

En este tutorial pasaremos de un Modelo Entidad Relación a SQL con MySQL Workbench.


Instrucciones
===============

* Utilice el MySQL Workbench

#### 1. Establezca una conexión local en MySQL Workbench

* Cree una conexión local.

![local](imagenes/meq_local.png)

* Coloque los datos de conexión. Guarde el usuario y contraseña en la configuración. 

![verifique](imagenes/meq_verificacion.png)

* Verifique la conexión.

![verifique](imagenes/meq_ok.png)

* Acceda con conexión local.


#### 2. Schema

* Cree un nuevo _schema_ con el nombre de su base de datos, p.e. `mydb`.

![meq_newschema](imagenes/meq_newschema.png)

* Aplique los cambios.

![apply](imagenes/meq_schema.png)

#### 3. Modelo EER

* Seleccione el _schema_ de su base de datos.

![apply](imagenes/meq_select.png)

* Escoja la opción `Database` > `Reverse Engineer`

![reverse](imagenes/meq_re.png)

* Establezca los parámetros de conexión. Seleccione el _schema_ recientemente creado. Al inicio, el `EER Diagram` debe aparecer vacío.

![vacio](imagenes/meq_empty.png)


#### 4. Diseño de entidades y relaciones

Utilice la interfaz gráfica crear las entidades, agregar atritutos y las relaciones entre tablas.

* Crear las entidades (tablas)

![meq_newentity](imagenes/meq_newentity.png)

* Seleccione tabla para agregar los atributos (columnas) con su tipo de datos.

![meq_setting](imagenes/meq_setting.png)

* Utilice el selector adecuado para establecer la relación entre las entidades.

![meq_relations](imagenes/meq_relations.png)

* Seleccione la entidad **destino** de las claves.

![meq_origin](imagenes/meq_origin.png)

* Hasta la entidad **origen** de las clave.

![meq_origin](imagenes/meq_destiny.png)

* El resultado de la relación crea las claves foráneas en entidades intermedias.

![meq_result](imagenes/meq_result.png)

* Modifique el nombre de las entidades intermedias.

![meq_final](imagenes/meq_final.png)


#### 5. Forward Engineer

* Escoja la opción `Database` > `Forward Engineer`.

![meq_forward](imagenes/meq_forward.png)

* En el paso **Set Options for Database to be Created**, marque las opciones: `DROP objects before each CREATE object`, y `GENERATE DROP SCHEMA`

![meq_cg](imagenes/meq_cg.png)

* Revise el SQL generado y ejecute el script.

![meq_sql](imagenes/meq_sql.png)


* Actualice el _schema_ de su base de datos.

![meq_update](imagenes/meq_update.png)

Referencias 
===========

* * *

* Create ER Diagram of a Database in MySQL Workbench. (2018). Retrieved 2 August 2023, from https://medium.com/@tushar0618/how-to-create-er-diagram-of-a-database-in-mysql-workbench-209fbf63fd03