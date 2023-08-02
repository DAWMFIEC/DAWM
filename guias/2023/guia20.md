---
theme: jekyll-theme-leap-day
---

## Guía 20

[DAWM](/DAWM/) / [Proyecto07](/DAWM/proyectos/2023/proyecto07)

### Actividades previas

* Del modelo de su base de datos, considere al menos dos entidades y su relación entre sí. 

### Actividades

#### Base de datos: Schema

1. Establezca una conexión local en MySQL Workbench, con el usuario y contraseña **root**
2. Cree un nuevo _schema_ con el nombre de su base de datos, p.e. `libreria`. 
3. Aplique los cambios.

#### Base de datos: Modelo EER

1. Seleccione el _schema_ de su base de datos.
2. Escoja la opción `Database` > `Reverse Engineer`
3. Incluya solo el _schema_ de su base de datos.
4. Utilice la interfaz gráfica para: 
	+ Crear las entidades (tablas), con sus atributos (columnas) y tipos de datos.
	+ Establecer las relaciones entre las tablas y tablas intermedias (para las relaciones 1:N y N:M).
5. Escoja la opción `Database` > `Forward Engineer`.
	+ En el paso **Set Options for Database to be Created**, marque las opciones: `DROP objects before each CREATE object`, y `GENERATE DROP SCHEMA`
6. Actualice el _schema_ de su base de datos.


#### NodeJS: Express - REST API

### Términos



### Referencias

