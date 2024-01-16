// Constantes de lógica de negocio

/**
 * Para asiganr posición a los nodos en la visualización de círculo
 * se necesita dividir el svg en cuadrantes, como si fuera
 * un plano cartesiano.
 */
const ANCHO_CUADRANTE =
  window.innerWidth <= 425 ? 300 : window.innerWidth <= 768 ? 400 : 650;

/**
 * Estas variables ajustan el ancho de visualización,
 * sirve para las redes que vienen predeterminadamente con
 * valores pequeños en el peso.
 */
const ANCHO_NODO = 1;
const ANCHO_ENLACE = 1;

/**
 * Al momento de establecer los valores de posición y viewBox
 * del svg y del contenedor se utilizan estas variables para que
 * el marco sea rectangular y el contenido también (svg).
 */
const DESVIACION =
  window.innerWidth <= 425 ? 150 : window.innerWidth <= 768 ? 200 : 325;
const AJUSTE_PANTALLA_ALTO =
  window.innerWidth <= 425 ? 55 : window.innerWidth <= 768 ? 25 : 100;
const AJUSTE_PANTALLA_ANCHO =
  window.innerWidth <= 425 ? 55 : window.innerWidth <= 768 ? 100 : 200;
const DIFERENCIA_ANCHO = 50;

/**
 * Variables de control necesarias en algunos procedimientos.
 * La lista de colores establece un color predeterminado para cada
 * cluster en la red.
 */
const ENLACES = [];
const NODOS = [];
const ANIMACIONES = [];
const COLORES = {
  1: "#FA8072",
  2: "#A52A2A",
  3: "#20B2AA",
  4: "#FF8C00",
  5: "#FFFF00",
  6: "#8A2BE2",
  7: "#7CFC00",
  8: "#00FF7F",
  9: "#FF6347",
  10: "#778899",
  11: "#FF69B4",
  12: "#1E90FF",
};
