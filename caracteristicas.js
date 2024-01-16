const botonAnimacion = document.querySelector("#animacion");
const botonVisualizacion = document.querySelector("#visualizacion");
let posicionActualAnimacion = "derecha";
let posicionActualVisualizacion = "derecha";

function establecerActividad(span, posicionActual) {
  const circulo = Array.from(span.getElementsByTagName("span"))[0];
  if (posicionActual === "derecha") {
    span.style.backgroundColor = "#4054B2";
    circulo.style.transform = "translateX(-22px)";
    return false;
  }
  span.style.backgroundColor = "#26336a";
  circulo.style.transform = "translateX(0)";
  return true;
}

botonAnimacion.addEventListener("click", () => {
  if (establecerActividad(botonAnimacion, posicionActualAnimacion)) {
    // ACTIVO (DERECHA)
    // Se asignan las animaciones. Se asignan eventos a cada enlace
    while (ANIMACIONES[0]) ANIMACIONES.pop();
    enlaces.forEach((enlace) => {
      const handler = ratonEncimaDeEnlace(enlace);
      ANIMACIONES.push({
        enlace: enlace.id,
        handler: handler,
      });
      enlace.addEventListener("mousemove", handler);
      enlace.addEventListener("mouseleave", reiniciarColores);
    });
    posicionActualAnimacion = "derecha";
  } else {
    // INACTIVO (IZQUIERDA)
    // Se quitan los eventos (se utiliza el handler creado en enlaces.js)
    enlaces.forEach((enlace) => {
      const handler = ANIMACIONES.find(
        (nodo) => nodo.enlace === enlace.id
      )?.handler;
      enlace.removeEventListener("mousemove", handler);
      enlace.removeEventListener("mouseleave", reiniciarColores);
    });
    posicionActualAnimacion = "izquierda";
  }
});

botonVisualizacion.addEventListener("click", () => {
  let top, left;
  /**
   * Si se cambia el modo de visualizar se reasignan los
   * valores de posición dentro del svg de nodos, nombres
   * y enlaces.
   * Esto utilizando las funciones de auxiliar.js
   * Dentro del if-else se asignan las nuevas posiciones de nodos
   * y nombres. Fuera del if-else se asignan las nuevas
   * posiciones de los enlaces.
   */
  if (establecerActividad(botonVisualizacion, posicionActualVisualizacion)) {
    // ACTIVO (DERECHA)
    // Se asignan posiciones de visualización circular.
    contador = 1;
    nodos.forEach((nodo) => {
      left = obtenerCoordenadasNodoCircular(
        CANTIDAD_ITEMS,
        contador,
        "x"
      ).toString();
      top = obtenerCoordenadasNodoCircular(
        CANTIDAD_ITEMS,
        contador,
        "y"
      ).toString();
      contador++;
      nodo.setAttribute("cx", left);
      nodo.setAttribute("cy", top);
      const texto = document.getElementById(
        "linea-" + nodo.id.split("-").slice(1)[0].toString()
      );
      texto.setAttribute("x", left);
      texto.setAttribute("y", top);
      if (left <= ANCHO_CUADRANTE / 2 - 100) texto.setAttribute("dx", "-50");
    });
    posicionActualVisualizacion = "derecha";
  } else {
    // INACTIVO (IZQUIERDA)
    // Se asignan posiciones de visualización en red.
    RED.items.forEach((nodoActual) => {
      const nodo = document.getElementById("nodo-" + nodoActual.id);
      left = obtenerCoordenadasNodo(nodoActual.x, "x").toString();
      top = obtenerCoordenadasNodo(nodoActual.y, "y").toString();
      nodo.setAttribute("cx", left);
      nodo.setAttribute("cy", top);
      const texto = document.getElementById(
        "linea-" + nodo.id.split("-").slice(1)[0].toString()
      );
      texto.setAttribute("x", left);
      texto.setAttribute("y", top);
      texto.setAttribute("dx", "0");
    });
    posicionActualVisualizacion = "izquierda";
  }
  enlaces.forEach((enlace) => {
    const nodosActuales = enlace.id.split("-").slice(1);
    const primeraLinea = document.querySelector(
      "#nodo-" + nodosActuales[0].toString()
    );
    const segundaLinea = document.querySelector(
      "#nodo-" + nodosActuales[1].toString()
    );
    const x1 = parseFloat(primeraLinea.getAttribute("cx"));
    const y1 = parseFloat(primeraLinea.getAttribute("cy"));
    const x2 = parseFloat(segundaLinea.getAttribute("cx"));
    const y2 = parseFloat(segundaLinea.getAttribute("cy"));
    enlace.setAttribute(
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
  });
});
