/**
 * Respond to an event only until a condition is met.
 *
 * @param callback
 * @param checker
 * @returns
 * @example
 * ```ts
 * const btn = document.querySelector("button");
 * const handler = e => {
 *   const n = Number(e.currentTarget.textContent);
 *   e.currentTarget.textContent = n + 1;
 * }
 * const checker = e => Number(e.currentTarget.textContent) >= 5;
 * btn.addEventListener("click", until(handler, checker));
 * ```
 */
declare const until: (callback: any, checker: any) => (e: any) => void
export default until
