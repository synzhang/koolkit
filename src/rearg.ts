/**
 * Creates a function that invokes the provided function with its arguments arranged according to the specified indexes.
 * @param fn Function to rearrange arguments for.
 * @param indexes Indexes to rearrange arguments.
 * @returns Function with rearranged arguments.
 * @link https://www.30secondsofcode.org/js/s/rearg
 * @example
 * ```
 * const rearged = rearg(
 *   function(a, b, c) {
 *     return [a, b, c]
 *   },
 *   [2, 0, 1]
 * )
 * rearged('b', 'c', 'a') // ['a', 'b', 'c']
 * ```
 */

const rearg =
  (fn, indexes) =>
  (...args) =>
    fn(...indexes.map((i) => args[i]))

export default rearg
