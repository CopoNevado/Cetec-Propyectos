/*texto = string
numeros = num / number
verdadero o falso = boolean / bool
valor sin asignar = undefined
ausencia de valor o sin valor = null
*/

let alumno = "Maria";
let calificacion = 10;
let aprobado = true;
let telefono;
let segundonombre = null;

console.log(typeof alumno);
console.log(typeof calificacion);
console.log(typeof aprobado);
console.log(typeof telefono);
console.log(typeof segundonombre);

let numero1 = 20;
let numero2 = 4;
let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("Multiplicacion:", multiplicacion);
console.log("Division:", division);

//Operadores de comparacion
let edad = 20;

console.log(edad > 15);
console.log(
    edad < 15
);
console.log(
    edad >=25
);
console.log(
    edad === 20
);
console.log(
    edad <=25
);
console.log(
    edad ==20
);
console.log(
    edad != 25
);
console.log(
    edad !==20
);

//condicionales (if, ifelse, else)

 calificacion = 5;

 if (calificacion >= 6) {
    console.log("Haz aprobado");
 } else {
    console.log("Reprobaste papito");
 }
 