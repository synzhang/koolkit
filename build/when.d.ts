/**
 * Returns a function that takes one argument and runs a callback if it's truthy or returns it if falsy.
 * @param pred Predicate function.
 * @param whenTrue A function to run if the predicate is truthy.
 * @returns Return a function expecting a single value, `x`, that returns the appropriate value based on `pred`.
 * @link https://www.30secondsofcode.org/js/s/when
 * @example
 * ```
 * const doubleEvenNumbers = when(x => x % 2 === 0, x => x * 2);
 * doubleEvenNumbers(2); // 4
 * doubleEvenNumbers(1); // 1
 * ```
 */
declare const when: (pred: any, whenTrue: any) => (x: any) => any
export default when
