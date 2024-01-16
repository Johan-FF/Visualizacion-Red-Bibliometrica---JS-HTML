/**
 * Asignación del título
 * es decir, el grupo de investigación seleccionado.
 */

const grupo = localStorage.getItem("GRUPO-SELECCIONADO");
if (!grupo)
  /**
   * Si ingresa al link https://uifi.udistrital.edu.co/lineas/
   * y no ha seleccionado un grupo de investigación previamente
   * se redirecciona a la url de grupos de investigación.
   */
  window.location.href =
    "https://uifi.udistrital.edu.co/grupos-de-investigacion/";

const titulo = document.querySelector("#grupo");
if (!titulo) window.location.reload();

titulo.textContent = grupo.toString();
