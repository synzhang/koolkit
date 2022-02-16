/**
 * The polling function.
 *
 * @param fn The function to poll.
 * @param timeout The timeout in milliseconds.
 * @param interval The interval in milliseconds.
 * @returns A promise that resolves when the condition is met.
 * @link https://davidwalsh.name/javascript-polling
 * @example
 * ```
 *  poll(function() {
 *    return document.getElementById('lightbox').offsetWidth > 0;
 *  }, 2000, 150).then(function() {
 *      // Polling done, now do something else!
 *  }).catch(function() {
 *      // Polling timed out, handle the error!
 *  });
 * ```
 */
declare const poll: (
  fn: any,
  timeout?: number,
  interval?: number
) => Promise<unknown>
export default poll
