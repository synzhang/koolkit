/**
 * Ensure a given function can only be called once.
 *
 * @param fn The function to call only once.
 * @param context The context to call the function in.
 * @link https://davidwalsh.name/javascript-once
 * @example
 * ```ts
 * const canOnlyFireOnce = once(() => {
 *   console.log('Fired!')
 * })
 *
 * canOnlyFireOnce() // "Fired!"
 * canOnlyFireOnce() // undefined
 */

const once = (fn, context?) => {
  let result

  return (...args) => {
    if (fn) {
      result = fn.apply(context || this, args)
      fn = null
    }

    return result
  }
}

export default once
