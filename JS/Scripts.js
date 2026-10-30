/*let titulo = document.getElementById("titulo");

console.log (titulo);
*/
let mensaje = document.getElementById("mensaje");

mensaje.textContent = "Haz sido modificado";

let subtitulo = document.querySelector("#subtitulo");

let descripcion = document.querySelector(".descripcion")

subtitulo.textContent = "Nuevo subtitulo";
descripcion.textContent = "Nueva descripcion";

let campoNombre = document.getElementById("nombre");

console.log(campoNombre.value);

let boton1 = document.getElementById("boton1");
let textoR = document.getElementById("TextoR");
function cambiartexti() {
    textoR.textContent = "Mira, haz cambiado esto con un click";
}
boton1.addEventListener("click", cambiartexti);
let nombre = document.getElementById("nombre");
let resultado = document.getElementById("resultao");

function mostrarNombre() {
    resultado.textContent = ("Hola") + nombre.value;
}
nombre.addEventListener("input", mostrarNombre);