/**
 * Asignación del título
 * es decir, una palabra clave enviada desde otra página
 * o sección del código.
 */
const grupo = localStorage.getItem("PALABRA-CLAVE");
if (!grupo) window.location.href = "https://www.google.com/";

const titulo = document.querySelector("#grupo");
if (!titulo) window.location.reload();

titulo.textContent = grupo.toString();
