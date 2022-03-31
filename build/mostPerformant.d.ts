/**
 * Returns the index of the function in an array of functions which executed the fastest.
 * @param fns Functions to compare
 * @param iterations Iterations to run each function. The more iterations, the more reliable the result but the longer it will take.
 * @returns Fastest function index
 * @link https://www.30secondsofcode.org/js/s/most-performant
 * @example
 *
 * ```ts
 * mostPerformant([
 *   () => {
 *     // Loops through the entire array before returning `false`
 *     [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'].every(el => typeof el === 'number')
 *   },
 *   () => {
 *     // Only needs to reach index `1` before returning `false`
 *    [1, '2', 3, 4, 5, 6, 7, 8, 9, 10].every(el => typeof el === 'number')
 * . }
 * ]) // 1
 * ```
 */
declare const mostPerformant: (fns: any, iterations?: number) => any
export default mostPerformant
