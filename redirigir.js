/**
 * Al oprimir la el div de vosviewer en la
 * visualización de cada grupo de investigación
 * se identifica con el id "redirect-SIGLAS_GRUPO"
 * para de esta forma guardar el nombre del grupo
 * seleccionado en localstorage y que en la
 * página de /lineas/ se pueda acceder al nombre de este,
 * luego se abre una pestaña y se redireciona a dicha
 * página.
 */

const URL = "https://uifi.udistrital.edu.co/lineas/";
const GRUPO_SELECCIONADO = "GRUPO-SELECCIONADO";

document.getElementById("redirect-nide").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "NIDE - Núcleo de Investigación en Datos Espaciales"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-gefem").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GEFEM - Grupo de Estudio en Temas de la Física, de la Estadística y de la Matemática"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-giga").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GIGA - Gestión Pública, Avalúos y Urbanismo"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-gcem").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GCEM - Grupo de Compatibilidad e Interferencia Electromagnética"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-lifae").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "LIFAE - Laboratorio de Investigación de Fuentes Alternativas de Energía"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-gesetic").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GESETIC - Gestión de Sistemas Energéticos con Base en Tecnologías de Información y Comunicación"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-gise3").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GISE3 - Sistemas Eléctricos y Eficiencia Energética"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-lamic").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "LAMIC - Laboratorio de Automática e Inteligencia Computacional"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-bionanotecnologia").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(GRUPO_SELECCIONADO, "Bionanotecnología");
  window.open(URL, "_blank");
};

document.getElementById("redirect-lider").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "LIDER - Laboratorio de Investigación y Desarrollo en Electrónica y Redes"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-gitud").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GITUD - Grupo de Investigación de Telecomunicaciones de la Universidad Distrital"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-greco").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GRECO - Grupo de Radiación Electromagnética y Comunicaciones Ópticas"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-ideas").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "IDEAS - Investigación, Desarrollo y Aplicaciones en Señales"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-laser").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "LASER - Automatización, Sistemas Embebidos, Robótica y Sistemas Inteligentes"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-gitem").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GITEM++ - Grupo de Investigación en Telemedicina"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-invid").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "INVID - Ingeniería y Nanotecnología para la Vida"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-gicoecol").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GICOECOL - Grupo de Investigación de Comercio Electrónico Colombiano"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-arcoses").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "ARCO—SES - Adquisición y  Representación del Conocimiento, Sistemas Expertos y  Simulación"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-dimsi").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "DIMSI - Diseño, Modelamiento y Simulación"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-geit").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GEIT - Gestión, Emprendimiento, Innovación y Tecnológica"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-gicalyt").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GICALYT - Grupo de Investigación en Cadenas de Abastecimiento, Logística y Trazabilidad"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-giira").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GIIRA - Gestión e Investigación en Informática, Redes y Afines"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-gicoge").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GICOGE - Informática y Comunicaciones para la Gestión del Conocimiento"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-intecse").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "INTECSE - Interoperabilidad Tecnológica y Semántica"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-internet-inteligente").onclick = function (
  e
) {
  e.preventDefault();
  localStorage.setItem(GRUPO_SELECCIONADO, "INTERNET INTELIGENTE");
  window.open(URL, "_blank");
};

document.getElementById("redirect-arquisoft").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "ARQUISOFT - Arquitecturas de Software"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-gesdatos").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "GESDATOS - Gestión de Datos en Memoria Principal y Secundaria"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-virtus").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "VIRTUS - Ambientes Virtuales de Aprendizaje"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-trhiscud").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "TRHISCUD - Tratamiento de Historias Clinicas Universidad Distrital"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-complexud").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "COMPLEXUD - Ciencias de la Complejidad"
  );
  window.open(URL, "_blank");
};

document.getElementById("redirect-multi").onclick = function (e) {
  e.preventDefault();
  localStorage.setItem(
    GRUPO_SELECCIONADO,
    "MULTI - Multimedia Interactiva y Animación Digital"
  );
  window.open(URL, "_blank");
};
