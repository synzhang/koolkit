/**
 * Compose functions from left to right.
 *
 * @returns any.
 *
 * @link https://1loc.dev/function/compose-functions-from-left-to-right
 */
declare const pipe: (...fns: any[]) => (x: any) => any;
export default pipe;
