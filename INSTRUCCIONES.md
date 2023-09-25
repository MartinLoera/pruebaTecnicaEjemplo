Instrucciones para la Prueba Técnica
Bienvenido a la prueba técnica para el puesto de Desarrollador Junior Full Stack. A continuación, encontrarás las instrucciones para completar y ejecutar los ejercicios de programación.

Ejercicios
FizzBuzz

Archivo: fizzBuzz.ts
Instrucciones: Escribir un programa que imprima los números del 1 al 100, pero para múltiplos de tres imprima "Fizz" en lugar del número, y para los múltiplos de cinco imprima "Buzz". Para números que son múltiplos de ambos, tres y cinco, imprima "FizzBuzz".
Tiempo máximo: 30 minutos
Palabra Más Larga

Archivo: palabraMasLarga.ts
Instrucciones: Escribir una función que tome una cadena de palabras y devuelva la palabra más larga junto con su longitud. Si hay más de una palabra con la longitud máxima, devolver todas ellas.
Tiempo máximo: 45 minutos
Estudiante con Mejor Calificación

Archivo: estudianteConMejorCalificacion.ts
Instrucciones: Escribir una función que tome una lista de estudiantes (objetos), cada uno con un nombre y una calificación, y devuelva el nombre del estudiante con la calificación más alta.
Tiempo máximo: 45 minutos
Compilación y Ejecución
Pre-requisitos
Asegúrate de tener instalado Node.js y TypeScript en tu máquina. Si no los tienes, puedes instalar TypeScript como una dependencia de desarrollo con el siguiente comando:

bash
npm install typescript --save-dev
Pasos para Compilar y Ejecutar
Compilar los Archivos TypeScript:

Ejecuta el siguiente comando para compilar los archivos TypeScript a JavaScript:
bash
npx tsc
Esto generará archivos .js correspondientes en el directorio problemas.

Ejecutar los Archivos JavaScript:

Ejecuta el archivo JavaScript compilado con el siguiente comando:
bash
node problemas/nombreDelArchivo.js
Reemplaza nombreDelArchivo.js con el nombre real del archivo compilado que deseas ejecutar.
Ejemplo:
Para compilar y ejecutar el archivo fizzBuzz.ts, sigue estos pasos:

bash
npx tsc
node problemas/fizzBuzz.js