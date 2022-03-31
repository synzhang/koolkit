/**
 * Performs left-to-right function composition for asynchronous functions.
 * @param fns Functions to compose.
 * @returns A function that composes the functions in `fns`.
 * @link https://www.30secondsofcode.org/js/s/pipe-async-functions
 * @example
 * ```ts
 * const sum = pipeAsyncFunctions(
 *   x => x + 1,
 *   x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
 *   x => x + 3,
 *   async x => (await x) + 4
 * );
 * (async() => {
 *   console.log(await sum(5)); // 15 (after one second)
 * })();
 * ```
 */
declare const pipeAsyncFunctions: (...fns: any[]) => (arg: any) => any
export default pipeAsyncFunctions
