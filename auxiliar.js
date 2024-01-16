// Funciones auxiliares

function obtenerCoordenadasNodoCircular(cantidad, contador, eje) {
  /**
   * Dividimos la circunferencia unitaria en partes
   * iguales y hallamos la coordenada del punto segun el
   * contador
   */
  const ANGULO = (360 / cantidad) * contador;
  let porcentaje =
    eje === "y"
      ? Math.sin((ANGULO * Math.PI) / 180)
      : Math.cos((ANGULO * Math.PI) / 180);
  let posicion = ((ANCHO_CUADRANTE - DIFERENCIA_ANCHO) / 2) * porcentaje;
  posicion = posicion < 0 ? posicion * -1 : posicion;
  /**
   * Es necesario retornar un valor positivo con respecto al
   * ancho y alto del svg, por lo cual, pasamos la coordenada cartesiana
   * a un valor concreto en cantidad de pixeles.
   */
  let posicionAjustada = 0;
  if (eje === "x") {
    posicionAjustada =
      porcentaje < 0
        ? (ANCHO_CUADRANTE - DIFERENCIA_ANCHO) / 2 - posicion
        : (ANCHO_CUADRANTE - DIFERENCIA_ANCHO) / 2 + posicion;
  } else if (eje === "y") {
    posicionAjustada =
      porcentaje < 0
        ? (ANCHO_CUADRANTE - DIFERENCIA_ANCHO) / 2 + posicion
        : (ANCHO_CUADRANTE - DIFERENCIA_ANCHO) / 2 - posicion;
  }
  return posicionAjustada;
}

function obtenerCoordenadasNodo(valor, eje) {
  /**
   * Es necesario retornar un valor positivo con respecto al
   * ancho y alto del svg, por lo cual, pasamos la coordenada cartesiana
   * a un valor concreto en cantidad de pixeles.
   */
  let posicionAjustada = 0;
  const mitadAncho = (ANCHO_CUADRANTE - (eje === "x" ? 100 : 0)) / 2;
  if (eje === "x" && valor > 0) {
    posicionAjustada = mitadAncho + mitadAncho * valor;
  } else if (eje === "x" && valor < 0) {
    posicionAjustada = mitadAncho - mitadAncho * valor * -1;
  } else if (eje === "x" && valor === 0) {
    posicionAjustada = mitadAncho;
  } else if (eje === "y" && valor > 0) {
    posicionAjustada = mitadAncho - mitadAncho * valor;
  } else if (eje === "y" && valor < 0) {
    posicionAjustada = mitadAncho + mitadAncho * valor * -1;
  } else if (eje === "y" && valor === 0) {
    posicionAjustada = mitadAncho;
  }
  return posicionAjustada;
}
