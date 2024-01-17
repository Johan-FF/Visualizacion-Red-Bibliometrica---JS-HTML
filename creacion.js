// Lógica de negocio

let RED = {};

/**
 * El try es para los casos en los que la variable
 * SIGLAS_GRUPO.network sea nula.
 * El switch usa la variable "grupo" proveniente del archivo inicio.js
 * allí accede a una variable del localstorage. Personaliza allí, el nombre
 * al que quieres acceder.
 */
try {
  switch (grupo.toString()) {
    case "Nombre clave para red del contenido 1":
      RED = RED_CONTENIDO_1.network;
      break;
    case "Nombre clave para red del contenido 2":
      RED = RED_CONTENIDO_2.network;
      break;
    case "Nombre clave para red del contenido 3":
      RED = RED_CONTENIDO_3.network;
      break;
    case "Nombre clave para red del contenido 4":
      RED = RED_CONTENIDO_4.network;
      break;
    case "Nombre clave para red del contenido 5":
      RED = RED_CONTENIDO_4.network;
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
