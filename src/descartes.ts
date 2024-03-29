/**
 * Cartesian product.
 *
 * @returns Array.
 */

const descartes = (array = []): number[] =>
  array.reduce((a, b) => a.flatMap(x => b.map(y => [...x, y])), [[]])

export default descartes
