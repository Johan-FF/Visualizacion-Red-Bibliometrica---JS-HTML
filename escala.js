let escala = 1,
  panoramica = false,
  coordenadaX = 0,
  coordenadaY = 0,
  inicio = { x: 0, y: 0 };
const svg = document.getElementById("canvas"),
  tamLetra = 16,
  desviacionNombres = -50;

function establecerTransform() {
  svg.style.transform =
    "translate(" +
    coordenadaX +
    "px, " +
    coordenadaY +
    "px) scale(" +
    escala +
    ")";
}

svg.addEventListener("mousedown", (e) => {
  e.preventDefault();
  inicio = { x: e.clientX - coordenadaX, y: e.clientY - coordenadaY };
  panoramica = true;
});

svg.addEventListener("mouseup", () => {
  panoramica = false;
});

svg.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (!panoramica) return;
  coordenadaX = e.clientX - inicio.x;
  coordenadaY = e.clientY - inicio.y;
  establecerTransform();
});

svg.addEventListener("wheel", (e) => {
  e.preventDefault();
  const xs = (e.clientX - coordenadaX) / escala,
    ys = (e.clientY - coordenadaY) / escala,
    delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;

  delta > 0 ? (escala *= 1.2) : (escala /= 1.2);
  escala = Math.max(1, escala);
  coordenadaX = e.clientX - xs * escala;
  coordenadaY = e.clientY - ys * escala;
  /**
   * Al hacer zoom se reasignan valores de ancho y
   * tamaño de letra, para poder visualizar mejor los
   * elementos.
   */
  lineas.forEach((linea) => {
    linea.setAttribute("font-size", tamLetra / escala);
    if (linea.getAttribute("x") < ANCHO_CUADRANTE / 2 - 100)
      linea.setAttribute("dx", desviacionNombres / escala);
  });
  NODOS.forEach((nodo) => {
    const circulo = document.getElementById("nodo-" + nodo.id);
    circulo.setAttribute("r", nodo.r / escala);
  });
  ENLACES.forEach((enlace) => {
    const path = document.getElementById(enlace.id);
    path.setAttribute("stroke-width", enlace.ancho / escala);
  });
  establecerTransform();
});

// Eventos táctiles
let touchStartX, touchStartY, initialPinchDistance, initialScale;

svg.addEventListener("touchstart", (e) => {
  if (e.touches.length === 1) {
    touchStartX = e.touches[0].clientX - coordenadaX;
    touchStartY = e.touches[0].clientY - coordenadaY;
  } else if (e.touches.length === 2) {
    initialPinchDistance = Math.hypot(
      e.touches[1].clientX - e.touches[0].clientX,
      e.touches[1].clientY - e.touches[0].clientY
    );
    initialScale = escala;
  }
});

svg.addEventListener("touchmove", (e) => {
  e.preventDefault();
  if (e.touches.length === 1) {
    coordenadaX = e.touches[0].clientX - touchStartX;
    coordenadaY = e.touches[0].clientY - touchStartY;
    establecerTransform();
  } else if (e.touches.length === 2) {
    const currentPinchDistance = Math.hypot(
      e.touches[1].clientX - e.touches[0].clientX,
      e.touches[1].clientY - e.touches[0].clientY
    );
    escala = (currentPinchDistance / initialPinchDistance) * initialScale;
    escala = Math.max(1, escala);
    /**
     * Al hacer zoom se reasignan valores de ancho y
     * tamaño de letra, para poder visualizar mejor los
     * elementos.
     */
    lineas.forEach((linea) => {
      linea.setAttribute("font-size", tamLetra / escala);
      if (linea.getAttribute("x") < ANCHO_CUADRANTE / 2 - 100)
        linea.setAttribute("dx", desviacionNombres / escala);
    });
    NODOS.forEach((nodo) => {
      const circulo = document.getElementById("nodo-" + nodo.id);
      circulo.setAttribute("r", nodo.r / escala);
    });
    ENLACES.forEach((enlace) => {
      const path = document.getElementById(enlace.id);
      path.setAttribute("stroke-width", enlace.ancho / escala);
    });
    establecerTransform();
  }
});
