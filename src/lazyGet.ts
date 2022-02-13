/**
 * Lazily initializes an object's property until it's used.
 *
 * @param hostObj
 * @param name
 * @param initializer
 * @link  https://davidwalsh.name/lazy-object-initialization
 * @example
 * ```ts
 * // Don't define window.myProp until someone tries to use it
 * // Thus, if it's never used, it's never initialized
 * lazyGet(window, "myProp", () => {
 *   return { message: "Hello!" };
 * });
 *
 * // window.myProp is now undefined, since it hasn't been requested yet
 *
 * // Use it for something, which triggers initialization and returns its value
 * console.log(window.myProp.message);
 *
 * // Using it again doesn't initialize again, since it was already created
 * console.log(window.myProp.message);
 *
 * // And it can be reassigned later on:
 * window.myProp = null;
 * ```
 */

const lazyGet = (hostObj: any, name: string, initializer: any) => {
  let defined = false
  Object.defineProperty(hostObj, name, {
    get: function() {
      // If not already defined, define it by executing
      // its initializer and setting it as value
      if (!defined) {
        defined = true
        // Overrides the original property definition
        // which is the initializer
        Object.defineProperty(hostObj, name, {
          configurable: true,
          enumerable: true,
          value: initializer.apply(hostObj),
          writable: true
        })
        return hostObj[name]
      }
    },
    configurable: true,
    enumerable: true
  })
}

export default lazyGet
