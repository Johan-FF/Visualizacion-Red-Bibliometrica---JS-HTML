nodos = document.getElementsByTagName("circle");
nodos = Array.from(nodos);

let enlaces = document.getElementsByClassName("enlace");
enlaces = Array.from(enlaces);

lineas = document.getElementsByTagName("text");
lineas = Array.from(lineas);

let lineasSeleccionadas = document.getElementsByClassName("linea-seleccionada");
lineasSeleccionadas = Array.from(lineasSeleccionadas);

function reiniciarColores() {
  ENLACES.forEach((enlaceLista) => {
    document.getElementById(enlaceLista.id).style.opacity = "100%";
  });
  lineas.forEach((linea) => {
    linea.style.display = "block";
    linea.setAttribute("text-decoration", "none");
  });
  nodos.forEach((nodo) => {
    nodo.style.opacity = "100%";
  });
  lineasSeleccionadas.forEach((linea) => {
    linea.style.backgroundColor = "#26336a";
  });
}

const ratonEncimaDeEnlace = (enlace) => (event) => {
  // Opacar los demás enlaces (excepto uno)
  ENLACES.forEach((enlaceLista) => {
    if (enlaceLista.id !== enlace.id) {
      document.getElementById(enlaceLista.id).style.opacity = "2%";
    }
  });
  // Desaparecen todos los nombres
  lineas.forEach((linea) => {
    linea.style.display = "none";
  });
  // Aparecen sólo dos nombres
  const lineasSeleccionadas = enlace.id.split("-").slice(1);
  document.getElementById("linea-" + lineasSeleccionadas[0]).style.display =
    "block";
  document.getElementById("linea-" + lineasSeleccionadas[1]).style.display =
    "block";
  // Opacar todos los nodos
  nodos.forEach((nodo) => {
    nodo.style.opacity = "20%";
  });
  // Aparecen dos nodos
  document.getElementById("nodo-" + lineasSeleccionadas[0]).style.opacity =
    "100%";
  document.getElementById("nodo-" + lineasSeleccionadas[1]).style.opacity =
    "100%";
};

enlaces.forEach((enlace) => {
  enlace.addEventListener("mouseleave", reiniciarColores);

  /**
   * Se crea un handler para poder hacer referencia a un
   * administrador de eventos por cada enlace y así
   * poder asignarlo o quitarlo de los eventos del enlace.
   */
  const handler = ratonEncimaDeEnlace(enlace);
  ANIMACIONES.push({
    enlace: enlace.id,
    handler: handler,
  });
  enlace.addEventListener("mousemove", handler);
});

// Botones del menu lateral
lineasSeleccionadas.forEach((linea) => {
  linea.addEventListener("click", (e) => {
    reiniciarColores();
    linea.style.backgroundColor = "#9098bd";

    const nodo = NODOS.find(function (nodo) {
      return nodo.nombre === linea.textContent.toString();
    });
    const numNodo = parseInt(nodo.id);

    let numLinea = 0;
    /**
     * El nombre del botón se subraya dentro del svg
     * los demás desaparecen.
     */
    lineas.forEach((linea) => {
      numLinea = parseInt(linea.id.split("-")[1]);
      if (numLinea === numNodo) {
        linea.style.display = "block";
        linea.setAttribute("text-decoration", "underline");
      } else {
        linea.style.display = "none";
      }
    });

    const lineasConRelacion = [];
    let lineaActual = [];
    let id = "";
    /**
     * Aparecen los nombres que tienen relación con el
     * seleccionado.
     */
    enlaces.forEach((enlace) => {
      lineaActual = enlace.id.split("-").slice(1);
      if (
        parseInt(lineaActual[0]) === numNodo ||
        parseInt(lineaActual[1]) === numNodo
      ) {
        const lineaRelacionada =
          parseInt(lineaActual[0]) === numNodo
            ? lineaActual[1]
            : lineaActual[0];
        lineasConRelacion.push(lineaRelacionada);
        id = "linea-" + lineaRelacionada.toString();
        document.getElementById(id).style.display = "block";
      }
    });

    /**
     * Opacar enlaces que no tienen relación con el
     * seleccionado.
     */
    enlaces.forEach((enlace) => {
      lineaActual = enlace.id.split("-").slice(1);
      if (
        parseInt(lineaActual[0]) !== numNodo &&
        parseInt(lineaActual[1]) !== numNodo
      )
        enlace.style.opacity = "2%";
    });

    // Los nodos sin relación desaparecen
    nodos.forEach((nodo) => {
      numLinea = nodo.id.split("-")[1];
      if (!lineasConRelacion.includes(numLinea)) nodo.style.opacity = "20%";
    });
    // El nodo seleccionado aparece
    document.getElementById("nodo-" + numNodo.toString()).style.opacity =
      "100%";
  });
});
