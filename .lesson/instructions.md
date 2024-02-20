# Instructions  

## Ejercicio: Crear una API REST con Node.js, Express, MongoDB y Mongoose para una app de gestión de tareas

Descripción:
Crear una API REST para una aplicación de gestión de tareas (todo list) utilizando Node.js, Express, MongoDB y Mongoose. La API debe permitir realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) sobre las tareas.

Pasos a seguir:
Configuración del proyecto:

Inicializa un nuevo proyecto Node.js utilizando npm.
Instala Express, Mongoose y otras dependencias necesarias.
Conexión a la base de datos:

Configura la conexión a una base de datos MongoDB local o en la nube.
Definir el modelo de datos:

Crea un modelo de datos utilizando Mongoose para representar las tareas.

El modelo debe tener las propiedades titulo (String) y completado (Boolean).
Crear las rutas de la API:

Define las rutas para listar todas las tareas, obtener una tarea por su identificador, crear una nueva tarea, actualizar una tarea existente y borrar una tarea.

## Implementar las operaciones CRUD:

Implementa las funciones necesarias para manejar cada una de las operaciones CRUD sobre las tareas utilizando Mongoose.
Iniciar el servidor:

Crea un servidor Express que escuche en un puerto específico (por ejemplo, 3000).

## Probar la API:

Utiliza herramientas como Postman o curl para probar cada una de las rutas y operaciones de la API.

Punto extra (opcional):
Implementa validaciones utilizando Mongoose para asegurar que los datos enviados a la API sean válidos.

Recuerda utilizar npm init para inicializar tu proyecto, e instalar las dependencias necesarias como Express, Mongoose y otras que consideres útiles (npm install express mongoose). ¡Diviértete creando tu API REST con Node.js, Express, MongoDB y Mongoose para una app de gestión de tareas!