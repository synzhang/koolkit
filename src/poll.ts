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

const poll = (fn, timeout: number = 2000, interval: number = 100) => {
  const endTime = Number(new Date()) + (timeout || 2000)
  const checkCondition = function(resolve, reject) {
    // If the condition is met, we're done!
    var result = fn()
    if (result) {
      resolve(result)
    }
    // If the condition isn't met but the timeout hasn't elapsed, go again
    else if (Number(new Date()) < endTime) {
      setTimeout(checkCondition, interval, resolve, reject)
    }
    // Didn't match and too much time, reject!
    else {
      reject(new Error("timed out for " + fn + ": " + arguments))
    }
  }

  return new Promise(checkCondition)
}

export default poll
