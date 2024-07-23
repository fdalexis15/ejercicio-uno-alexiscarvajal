Proyecto de Automatización de Pruebas Descripción del Proyecto: 
Flujo de compras, este proyecto consiste en desarrollar pruebas automatizadas para asegurar la calidad del software de la tienda Online saucedemo.

Objetivo: Automatizar pruebas funcionales y de regresión para garantizar la estabilidad y correcto funcionamiento del software.

Tecnologías Utilizadas: Nodejs, Visual Studio Code y Git.
Lenguaje de programación: JavaScript
Herramientas de automatización: playwright 
Gestor de dependencias: Node Pakage Manager NPM

Estructura del Proyecto: 
	../pom: Directorio principal del código fuente 
	../pom/tests/tests/login.spec.js: Contiene el/los script de pruebas. 
	../: Archivos de configuración playwright.

Prerrequisitos:
	Tener instalado en tu maquina.
		-	Nodejs
		-	Visual studio code
		-	Git
		-	Browser con lo que se va a probar para este caso google Chrome
		
Ejecución del proyecto:
	1.- Clonar repositorio: URL https://github.com/fdalexis15/ejercicio-uno-alexiscarvajal.git
	2.- Instalar dependencias: 
		-	npm init playwright@latest
		-	seleccionar JavaScript
		-	dar siguiente a todos los pasos(esto puede tomar un tiempo por favor esperar)
	3.- Ejecutar el proyecto:
		- Abrir una terminal 
		- Ejecutar: npm run test
		- Va mostrar el mensaje "Running 3 tests using 3 workers" 
			3 passed (22.0s) "Indica que la prueba en los 3 browser fueron exitosos"
	4.- Validación de reportes
		- En la carpeta /playwright-report se encuentra el archivo index.html que tiene el detalle de la ejecución
		- Click derecho/Reveal in file explorer 
		- Se va abrir la carpeta que contiene nuestro archivo lo abrimos y ahi tenemos el detalle de la ejcución por browser

Contribución: Si deseas contribuir al proyecto, sigue estos pasos:
