---
theme: jekyll-theme-leap-day
---

## Guía 19

[DAWM](/DAWM/) / [Proyecto04](/DAWM/proyectos/2024/proyecto04)

<link href="styles/mystyle.css" rel="stylesheet" />

### Objetivo general

<pre class="purpose">Desarrollar una aplicación híbrida utilizando tecnologías que integren modelos de aprendizaje automático previamente entrenados en un entorno funcional y accesible para resolver problemas específicos mediante el reconocimiento de patrones, objetos o sonidos fomentando habilidades prácticas en el desarrollo de aplicaciones móviles con tecnologías modernas y la implementación de inteligencia artificial.</pre>

### Actividades previas

#### Hibrida

1. Clona localmente tu repositorio **hibrida**.
2. Instale los paquetes de su proyecto.
3. Levante los servicios

### Actividades en clases

#### TensorFlow.js y TeachableMachine.js

1. Descargue las librerías JS [@tensorflow/tfjs - tf.min.js](https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js) y [@teachablemachine/image - teachablemachine-image.min.js](https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8.3/dist/teachablemachine-image.min.js)
2. En su proyecto: 
	- Cree la estructura _src/assets/javascript_ y copie los archivos **tf.min.js** y **teachablemachine-image.min.js** dentro de la carpeta. 
	- Edite el archivo _angular.json_, con la ruta a las librerías JS.

	```json
	"projects": { ...
		"app": { ...
			"architect":{ ...
				"build": { ...
					"options" : { ...
						"scripts": [
				        	"src/assets/javascript/tf.min.js",
				        	"src/assets/javascript/teachablemachine-image.min.js",
						]
					}
				}
			}
		}
	}
	```

4. Reinicie el servidor.
5. (STOP 1) Inspeccione en el navegador y compruebe la carga de los archivos en la opción **Network**, en el archivo **scripts.js**.

#### Servicio de Teacheable Machine

1. Desde la línea de comandos, cree el servicio proveedor de datos, con:

	```command
	ionic g s services/teachablemachine
	```

2. Edite el servicio _src/app/services/teachablemachine.service.ts_, con:

	- Agregue los atributos _URL_, _classLabels_ y _model_.
	- Agregue el método _loadModel_.

	```typescript
	...
	export class TeachablemachineService {

		private URL = "https://teachablemachine.withgoogle.com/models/<ID-MODELO>/"
		private model: any;
		private classLabels: string[] = [];


		constructor() { }

		async loadModel() {
			try {
				const modelURL = this.URL + 'model.json';
				const metadataURL = this.URL + 'metadata.json';

				const tmImage = (window as any).tmImage;
				this.model = await tmImage.load(modelURL, metadataURL);
				this.classLabels = this.model.getClassLabels();

			} catch (error) {
				console.error('Error al cargar el modelo:', error);
				throw new Error('No se pudo cargar el modelo.');
			}
		}

		getClassLabels(): string[] {
			return this.classLabels;
		}

	}
	```

3. Edite _src/app/tab1/tab1.page.ts_, con:

	```typescript
	
	```

### Documentación

### Fundamental



### Términos

tensorflow

### Referencias

* @teachablemachine/image. (n.d.). Retrieved from https://www.npmjs.com/package/@teachablemachine/image
