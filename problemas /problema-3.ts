/*
Instrucciones:
- Escribir una función que tome una lista de estudiantes (objetos), cada uno con un nombre y una calificación.
- Devolver el nombre del estudiante con la calificación más alta.

Ejemplo:
Entrada: [{nombre: "Juan", calificacion: 85}, {nombre: "Ana", calificacion: 92}, {nombre: "Luis", calificacion: 78}]
Salida: "Ana"

Tiempo máximo: 45 minutos
*/

interface Estudiante {
    nombre: string;
    calificacion: number;
  }
  
  function estudianteConMejorCalificacion(estudiantes: Estudiante[]): string | null {
    // Tu código aquí
    return null;
  }
  
  // Llamada a la función
  const estudiantes: Estudiante[] = [
    { nombre: "Juan", calificacion: 85 },
    { nombre: "Ana", calificacion: 92 },
    { nombre: "Luis", calificacion: 78 },
  ];
  const mejorEstudiante = estudianteConMejorCalificacion(estudiantes);
  console.log(mejorEstudiante);
  