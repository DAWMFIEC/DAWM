---
theme: jekyll-theme-leap-day
---

[Regresar](/DAWM/)

Mock Data
=========

* * *

Al construir soluciones de software a veces es necesario generar cierta cantidad de datos falso para probar las características de la aplicación. 

[Fake Data Generator](https://github.com/Cambalab/fake-data-generator) permite crear un conjunto de datos falso mediante un módulo de javascript con los siguientes pasos:

1. Instale **fake-data-generator** con npm

```
npm install -g fake-data-generator
```

2. Cree un archivo con el modelo (**`modelo.json`**) de acuerdo con las características de la [documentación](https://github.com/Cambalab/fake-data-generator). 

Un ejemplo del modelo es:

```
{
	"model": {
		"type": "Object",
		"value": {
			"id": {
				"type": "incrementNumber",
				"options": {
					"from": 50
				}
			},
			"fechaNacimiento": {
				"type": "faker",
				"value": "date.between",
				"options": ["1986-01-02", "2000-12-29"]
			},

			"author": {
				"type": "Object",
				"value": {
					"firstName": {
						"type": "faker",
						"value": "name.firstName"
					},
					"lastName": {
						"type": "faker",
						"value": "name.lastName"
					}
				}
			}
		}
	}
}
```

El modelo de [article](https://github.com/Cambalab/fake-data-generator/blob/master/models/example.json) ofrece más ejemplos del formato para generar los datos. 

3. Desde la línea de comandos:

```
fake-data-generator modelo.json 100 datos.json
```

Un ejemplo del archivo resultante **datos.json** es:
```
[
	{
		"id": 50,
		"fechaNacimiento": "1994-01-28T03:10:05.904Z",
		"author": {
			"firstName": "Annamae",
			"lastName": "Cassin"
		}
	},
	{
		"id": 51,
		"fechaNacimiento": "1988-03-24T19:33:12.306Z",
		"author": {
			"firstName": "Sallie",
			"lastName": "Nicolas"
		}
	},
	...
]
```


Referencias 
===========

* * *

* GitHub - Cambalab/fake-data-generator: Just a small open-source script to create fake data given a simple JSON model. (2022). Retrieved 9 August 2022, from https://github.com/Cambalab/fake-data-generator

* fake-data-generator/example.json at master · Cambalab/fake-data-generator. (2022). Retrieved 9 August 2022, from https://github.com/Cambalab/fake-data-generator/blob/master/models/example.json