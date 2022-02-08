/**
 * The polling function.
 *
 * @returns A Promise.
 *
 * @link https://1loc.dev/function/compose-functions-from-left-to-right
 *
 * @usage
 *  poll(function() {
 *    return document.getElementById('lightbox').offsetWidth > 0;
 *  }, 2000, 150).then(function() {
 *      // Polling done, now do something else!
 *  }).catch(function() {
 *      // Polling timed out, handle the error!
 *  });
 */
declare const poll: (fn: any, timeout: number, interval: number) => Promise<unknown>;
export default poll;
