// Lógica de negocio

let RED = {};

/**
 * El try es para los casos en los que la variable
 * SIGLAS_GRUPO.network sea nula (ya sea porque no se ha creado
 * el archivo .json o porque no se ha actualizado en la página),
 * en tal caso cierra dicha pestaña del navegador.
 * O en caso de que se agregue otro grupo de investigación
 * a la lógica de negocio, hasta que no se cree su variable
 * SIGLAS_GRUPO dentro de un script en wordpress cerrará
 * la pestaña.
 */
try {
  switch (grupo.toString()) {
    case "NIDE - Núcleo de Investigación en Datos Espaciales":
      RED = NIDE.network;
      break;
    case "GEFEM - Grupo de Estudio en Temas de la Física, de la Estadística y de la Matemática":
      RED = GEFEM.network;
      break;
    case "GIGA - Gestión Pública, Avalúos y Urbanismo":
      RED = GIGA.network;
      break;
    case "GCEM - Grupo de Compatibilidad e Interferencia Electromagnética":
      RED = GCEM.network;
      break;
    case "LIFAE - Laboratorio de Investigación de Fuentes Alternativas de Energía":
      RED = LIFAE.network;
      break;
    case "GESETIC - Gestión de Sistemas Energéticos con Base en Tecnologías de Información y Comunicación":
      RED = GESETIC.network;
      break;
    case "GISE3 - Sistemas Eléctricos y Eficiencia Energética":
      RED = GISE3.network;
      break;
    case "LAMIC - Laboratorio de Automática e Inteligencia Computacional":
      RED = LAMIC.network;
      break;
    case "Bionanotecnología":
      RED = BIONANOTECNOLOGIA.network;
      break;
    case "GITUD - Grupo de Investigación de Telecomunicaciones de la Universidad Distrital":
      RED = GITUD.network;
      break;
    case "GRECO - Grupo de Radiación Electromagnética y Comunicaciones Ópticas":
      RED = GRECO.network;
      break;
    case "IDEAS - Investigación, Desarrollo y Aplicaciones en Señales":
      RED = IDEAS.network;
      break;
    case "LASER - Automatización, Sistemas Embebidos, Robótica y Sistemas Inteligentes":
      RED = LASER.network;
      break;
    case "GITEM++ - Grupo de Investigación en Telemedicina":
      RED = GITEM.network;
      break;
    case "INVID - Ingeniería y Nanotecnología para la Vida":
      RED = INVID.network;
      break;
    case "GICOECOL - Grupo de Investigación de Comercio Electrónico Colombiano":
      RED = GICOECOL.network;
      break;
    case "ARCO—SES - Adquisición y  Representación del Conocimiento, Sistemas Expertos y  Simulación":
      RED = ARCOSES.network;
      break;
    case "DIMSI - Diseño, Modelamiento y Simulación":
      RED = DIMSI.network;
      break;
    case "GEIT - Gestión, Emprendimiento, Innovación y Tecnológica":
      RED = GEIT.network;
      break;
    case "GICALYT - Grupo de Investigación en Cadenas de Abastecimiento, Logística y Trazabilidad":
      RED = GICALYT.network;
      break;
    case "GIIRA - Gestión e Investigación en Informática, Redes y Afines":
      RED = GIIRA.network;
      break;
    case "GICOGE - Informática y Comunicaciones para la Gestión del Conocimiento":
      RED = GICOGE.network;
      break;
    case "INTECSE - Interoperabilidad Tecnológica y Semántica":
      RED = INTECSE.network;
      break;
    case "INTERNET INTELIGENTE":
      RED = INTERNET_INTELIGENTE.network;
      break;
    case "ARQUISOFT - Arquitecturas de Software":
      RED = ARQUISOFT.network;
      break;
    case "GESDATOS - Gestión de Datos en Memoria Principal y Secundaria":
      RED = GESDATOS.network;
      break;
    case "VIRTUS - Ambientes Virtuales de Aprendizaje":
      RED = VIRTUS.network;
      break;
    case "TRHISCUD - Tratamiento de Historias Clinicas Universidad Distrital":
      RED = TRHISCUD.network;
      break;
    case "COMPLEXUD - Ciencias de la Complejidad":
      RED = COMPLEXUD.network;
      break;
    case "MULTI - Multimedia Interactiva y Animación Digital":
      RED = MULTI.network;
      break;
    default:
      window.close();
      break;
  }
} catch {
  window.close();
}

const MENU_LATERAL = document.querySelector("#menu-lateral");
const CONTENEDOR = document.querySelector("#canvas");
const CONTENEDOR_CANVAS = document.querySelector("#contenedor-canvas");
const CANTIDAD_ITEMS = RED.items.length;
let contador = 1;

CONTENEDOR_CANVAS.setAttribute(
  "style",
  `border: solid 2px black; overflow: hidden; width: ${(
    ANCHO_CUADRANTE + AJUSTE_PANTALLA_ANCHO
  ).toString()}px; height: ${(
    ANCHO_CUADRANTE - AJUSTE_PANTALLA_ALTO
  ).toString()}px;`
);
CONTENEDOR.setAttribute("width", ANCHO_CUADRANTE + AJUSTE_PANTALLA_ANCHO);
CONTENEDOR.setAttribute("height", ANCHO_CUADRANTE - AJUSTE_PANTALLA_ALTO);
CONTENEDOR.setAttribute(
  "viewBox",
  "-" +
    (DIFERENCIA_ANCHO / 2).toString() +
    " -" +
    (DIFERENCIA_ANCHO / 2).toString() +
    " " +
    ANCHO_CUADRANTE.toString() +
    " " +
    ANCHO_CUADRANTE.toString()
);

/**
 * Se ordenan los nodos por el cluster.
 */
RED.items.sort(function (a, b) {
  return a.cluster - b.cluster;
});

/**
 * Creación de nodos, de forma predeterminada en la
 * visualización de círculo.
 */
RED.items.forEach((nodo) => {
  const left = obtenerCoordenadasNodoCircular(
    CANTIDAD_ITEMS,
    contador,
    "x"
  ).toString();
  const top = obtenerCoordenadasNodoCircular(
    CANTIDAD_ITEMS,
    contador,
    "y"
  ).toString();

  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.id = "nodo-" + nodo.id.toString();
  circle.className = "nodo";
  circle.setAttribute("cx", left);
  circle.setAttribute("cy", top);
  /**
   * Se establece un ancho límite del nodo con el valor de 80
   * porque de lo contrario los nodos se tapan entre sí.
   */
  const anchoMenor = Math.min(nodo.weights.Occurrences, 80);
  circle.setAttribute("r", (anchoMenor * ANCHO_NODO).toString());
  circle.setAttribute("fill", COLORES[nodo.cluster]);

  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.id = "linea-" + nodo.id.toString();
  text.style.cursor = "default";
  text.setAttribute("x", left);
  text.setAttribute("y", top);
  text.setAttribute("font-size", 16);
  if (left < ANCHO_CUADRANTE / 2 - 100)
    /**
     * A los textos a la izquierda del círculo
     * se les hace una desviación pequeña (-50).
     */
    text.setAttribute("dx", "-50");
  text.innerHTML = nodo.label;

  // Variable del archivo constantes.js
  NODOS.push({
    nombre: nodo.label,
    id: nodo.id.toString(),
    r: anchoMenor * ANCHO_NODO,
  });

  CONTENEDOR.appendChild(circle);
  CONTENEDOR.appendChild(text);
  contador++;

  const button = document.createElement("button");
  button.className = "linea-seleccionada";
  button.id = "linea-seleccionada-" + nodo.label;
  button.textContent = nodo.label;
  MENU_LATERAL.append(button);
});

/**
 * Creación de enlaces con base en los nodos previamente
 * creados.
 */
RED.links.forEach((enlace) => {
  const primeraLinea = document.querySelector(
    "#nodo-" + enlace.source_id.toString()
  );
  const segundaLinea = document.querySelector(
    "#nodo-" + enlace.target_id.toString()
  );
  if (!primeraLinea || !segundaLinea) window.location.reload();

  const x1 = parseFloat(primeraLinea.getAttribute("cx"));
  const y1 = parseFloat(primeraLinea.getAttribute("cy"));
  const x2 = parseFloat(segundaLinea.getAttribute("cx"));
  const y2 = parseFloat(segundaLinea.getAttribute("cy"));

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const id =
    "enlace-" + enlace.source_id.toString() + "-" + enlace.target_id.toString();
  const backgroundColor = primeraLinea.getAttribute("fill");
  /**
   * Se establece un ancho límite del enlace con el valor de 40
   * porque de lo contrario los enlaces se ven exagerados con el
   * valor límite del ancho de nodos.
   */
  const anchoMenor = Math.min(enlace.strength, 40);
  const anchoBorde = anchoMenor * ANCHO_ENLACE;

  path.id = id;
  path.className = "enlace";
  /**
   * Curva hacia el centro del círculo.
   */
  path.setAttribute(
    "d",
    "M " +
      x1.toString() +
      " " +
      y1.toString() +
      " Q " +
      DESVIACION.toString() +
      " " +
      DESVIACION.toString() +
      " " +
      x2.toString() +
      " " +
      y2.toString()
  );
  path.setAttribute("stroke", backgroundColor);
  path.setAttribute("stroke-width", anchoBorde);
  path.setAttribute("fill", "none");
  path.classList.add("enlace");

  // Variable del archivo constantes.js
  ENLACES.push({
    id: id,
    ancho: anchoBorde,
  });
  CONTENEDOR.appendChild(path);
});

/**
 * Se vuelven a crear los nodos y nombres de cada nodo
 * (palabras clave) para que el enlace se vea
 * por debajo del nodo y el nombre por encima del
 * nodo.
 */
let nodos = document.getElementsByTagName("circle");
nodos = Array.from(nodos);
nodos.forEach((nodo) => {
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  circle.id = nodo.id;
  circle.className = "nodo";
  circle.setAttribute("cx", nodo.getAttribute("cx"));
  circle.setAttribute("cy", nodo.getAttribute("cy"));
  circle.setAttribute("r", nodo.getAttribute("r"));
  circle.setAttribute("fill", nodo.getAttribute("fill"));
  CONTENEDOR.removeChild(nodo);
  CONTENEDOR.appendChild(circle);
});

let lineas = document.getElementsByTagName("text");
lineas = Array.from(lineas);
lineas.forEach((linea) => {
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  const left = linea.getAttribute("x");
  text.id = linea.id;
  text.style.cursor = "default";
  text.setAttribute("x", left);
  text.setAttribute("y", linea.getAttribute("y"));
  text.setAttribute("font-size", 16);
  if (left < ANCHO_CUADRANTE / 2 - 100) text.setAttribute("dx", "-50");
  text.innerHTML = linea.innerHTML;
  CONTENEDOR.removeChild(linea);
  CONTENEDOR.appendChild(text);
});
