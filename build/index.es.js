/**
 * @license
 * author: Syn Zhang<zeyanzhang.china@gmail.com>
 * koolkit.js v0.3.0
 * Released under the MIT license.
 */

/**
 * Halts following actions without locking the browser,
 * so you can interact with the page. Useful in debug and test.
 *
 * @returns A promise which never resolves.
 *
 * @link https://davidwalsh.name/javascript-wait
 */
function waitForever() {
  return new Promise(function () {})
}

/**
 * Wait a given amount of time between tasks.
 *
 * @returns A promise which will resolves in given period.
 *
 * @link https://davidwalsh.name/waitfortime
 */
function waitForTime(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms)
  })
}

/**
 * Split an array into two based on a function.
 *
 * @returns Array.
 */
var partition = function (f) {
  return function (array) {
    return array.reduce(
      function (result, item) {
        switch (f(item)) {
          case false:
            result[0].push(item)
            return result
          default:
            result[1].push(item)
            return result
        }
      },
      [[], []]
    )
  }
}

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
var poll = function (fn, timeout, interval) {
  if (timeout === void 0) {
    timeout = 2000
  }
  if (interval === void 0) {
    interval = 100
  }
  var endTime = Number(new Date()) + (timeout || 2000)
  var checkCondition = function (resolve, reject) {
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

/**
 * Compose functions from left to right.
 *
 * @returns any.
 *
 * @link https://1loc.dev/function/compose-functions-from-left-to-right
 */
var pipe = function () {
  var fns = []
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i]
  }
  return function (x) {
    return fns.reduce(function (y, f) {
      return f(y)
    }, x)
  }
}

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
var pipeAsyncFunctions = function () {
  var fns = []
  for (var _i = 0; _i < arguments.length; _i++) {
    fns[_i] = arguments[_i]
  }
  return function (arg) {
    return fns.reduce(function (p, f) {
      return p.then(f)
    }, Promise.resolve(arg))
  }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value)
        })
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value))
      } catch (e) {
        reject(e)
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value))
      } catch (e) {
        reject(e)
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected)
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next())
  })
}

function __generator(thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1]
        return t[1]
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === "function" &&
      (g[Symbol.iterator] = function () {
        return this
      }),
    g
  )
  function verb(n) {
    return function (v) {
      return step([n, v])
    }
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.")
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y["return"]
                : op[0]
                ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t
        if (((y = 0), t)) op = [op[0] & 2, t.value]
        switch (op[0]) {
          case 0:
          case 1:
            t = op
            break
          case 4:
            _.label++
            return { value: op[1], done: false }
          case 5:
            _.label++
            y = op[1]
            op = [0]
            continue
          case 7:
            op = _.ops.pop()
            _.trys.pop()
            continue
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0
              continue
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1]
              break
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1]
              t = op
              break
            }
            if (t && _.label < t[2]) {
              _.label = t[2]
              _.ops.push(op)
              break
            }
            if (t[2]) _.ops.pop()
            _.trys.pop()
            continue
        }
        op = body.call(thisArg, _)
      } catch (e) {
        op = [6, e]
        y = 0
      } finally {
        f = t = 0
      }
    if (op[0] & 5) throw op[1]
    return { value: op[0] ? op[1] : void 0, done: true }
  }
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i)
        ar[i] = from[i]
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from))
}

/**
 * Cartesian product.
 *
 * @returns Array.
 */
var descartes = function (array) {
  if (array === void 0) {
    array = []
  }
  return array.reduce(
    function (a, b) {
      return a.flatMap(function (x) {
        return b.map(function (y) {
          return __spreadArray(__spreadArray([], x, true), [y], false)
        })
      })
    },
    [[]]
  )
}

/**
 * Generate prime numbers. Using the Sieve of Eratosthenes.
 *
 * @returns Prime numbers array.
 *
 * @link https://www.30secondsofcode.org/js/s/primes
 */
var generatePrimeNumbers = function (num) {
  var array = Array.from({ length: num - 1 }).map(function (x, i) {
    return i + 2
  })
  var sqroot = Math.floor(Math.sqrt(num))
  var numsTillSqroot = Array.from({ length: sqroot - 1 }).map(function (x, i) {
    return i + 2
  })
  numsTillSqroot.forEach(function (x) {
    return (array = array.filter(function (y) {
      return y % x !== 0 || y === x
    }))
  })
  return array
}

/**
 * Encode a URL.
 * `encodeURIComponent` doesn't encode -_.!~*'()
 *
 * @returns An URL.
 *
 * @link https://1loc.dev/misc/encode-a-url/
 */
var encodeURL = function (url) {
  return encodeURIComponent(url)
    .replace(/!/g, "%21")
    .replace(/~/g, "%7E")
    .replace(/\*/g, "%2A")
    .replace(/'/g, "%27")
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/%20/g, "+")
}

/**
 * Convert URL parameters to object.
 *
 * @returns An URL parameters object.
 *
 * @link https://1loc.dev/misc/convert-url-parameters-to-object/
 */
var getURLParams = function (query) {
  return Array.from(new URLSearchParams(query)).reduce(function (p, _a) {
    var _b
    var k = _a[0],
      v = _a[1]
    return Object.assign(
      {},
      p,
      ((_b = {}),
      (_b[k] = p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v),
      _b)
    )
  }, {})
}

/**
 * Move an item from one position in an array to another.
 *
 * @param array Array to move the item in.
 * @param oldIndex The index of the item to move.
 * @param newIndex The index to move the item to.
 * @returns
 */
var arrayMove = function (array, oldIndex, newIndex) {
  if (newIndex >= array.length) {
    var k = newIndex - array.length + 1
    while (k--) {
      array.push(undefined)
    }
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0])
  return array
}

var dataURIToBlob = function (dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString
  if (dataURI.split(",")[0].indexOf("base64") >= 0) {
    byteString = atob(dataURI.split(",")[1])
  } else {
    byteString = unescape(dataURI.split(",")[1])
  }
  // separate out the mime component
  /* eslint-disable-next-line */
  var mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0]
  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length)
  /* eslint-disable-next-line */
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  return new Blob([ia], { type: mimeString })
}

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
var once = function (fn, context) {
  var result
  return function () {
    var args = []
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    if (fn) {
      result = fn.apply(context || this, args)
      fn = null
    }
    return result
  }
}

/**
 * Group the elements of an map according to the given key.
 *
 * @param objectArray The map to group.
 * @param key The key to group by.
 * @returns
 */
var groupBy = function (objectArray, key) {
  var values =
    objectArray instanceof Map || objectArray instanceof Set
      ? Array.from(objectArray.values())
      : Object.values(objectArray)
  return values.reduce(function (keyedObj, value) {
    var groupKey = value[key]
    if (!Array.isArray(keyedObj[groupKey])) {
      keyedObj[groupKey] = [value]
    } else {
      keyedObj[groupKey].push(value)
    }
    return keyedObj
  }, {})
}

/**
 * Execute promise sequentially.
 * It takes a list of functions or promises and sequentially resolves them.
 *
 * @param
 * @returns
 */
var toPromise = function (x) {
  if (x instanceof Promise) {
    // if promise just return it
    return x
  }
  if (typeof x === "function") {
    // if function is not async this will turn its result into a promise
    // if it is async this will await for the result
    return (function () {
      return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
          switch (_a.label) {
            case 0:
              return [4 /*yield*/, x()]
            case 1:
              return [2 /*return*/, _a.sent()]
          }
        })
      })
    })()
  }
  return Promise.resolve(x)
}
var asyncSequentializer = function () {
  return function (list) {
    var results = []
    return (
      list
        .reduce(function (lastPromise, currentPromise) {
          return lastPromise.then(function (res) {
            results.push(res) // collect the results
            return toPromise(currentPromise)
          })
        }, toPromise(list.shift()))
        // collect the final result and return the array of results as resolved promise
        .then(function (res) {
          return __spreadArray(__spreadArray([], results, true), [res], false)
        })
    )
  }
}

/**
 * Deep value retriever.
 *
 * @param dict a deeply nested objects, array, or Javascript Map.
 * @param path path to the value to retrieve.
 * @returns
 */
var getIn = function (dict, path) {
  path = Array.isArray(path) ? path : path.split(".")
  var value = path.reduce(function (obj, key) {
    var _a
    // prevents error on retrieving key in undefined
    return obj === undefined
      ? null
      : // check if Map otherwise it is object like
      obj instanceof Map
      ? (_a = obj.get(key)) !== null && _a !== void 0
        ? _a
        : obj[key]
      : obj[key]
  }, dict)
  return value === undefined ? null : value
}

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
var until = function (callback, checker) {
  var handler = function (e) {
    if (checker(e)) {
      e.currentTarget.removeEventListener(e.type, handler)
    }
    callback(e)
  }
  return handler
}

/**
 * Get type of a variable in string
 * @param obj any
 * @returns string
 * @link https://1loc.dev/misc/get-type-of-a-variable-in-string/
 */
var getTypeOf = function (obj) {
  return Object.prototype.toString.call(obj).match(/\[object (.*)\]/)[1]
}

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
var lazyGet = function (hostObj, name, initializer) {
  var defined = false
  Object.defineProperty(hostObj, name, {
    get: function () {
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
          writable: true,
        })
        return hostObj[name]
      }
    },
    configurable: true,
    enumerable: true,
  })
}

/**
 * Check if the browser support webp.
 *
 * @returns Promise<boolean>
 */
var supportsWebP = function () {
  return __awaiter(void 0, void 0, void 0, function () {
    var webpData, blob
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          if (
            !(self === null || self === void 0
              ? void 0
              : self.createImageBitmap)
          )
            return [2 /*return*/, false]
          webpData =
            "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
          return [
            4 /*yield*/,
            fetch(webpData).then(function (r) {
              return r.blob()
            }),
          ]
        case 1:
          blob = _a.sent()
          return [
            2 /*return*/,
            createImageBitmap(blob).then(
              function () {
                return true
              },
              function () {
                return false
              }
            ),
          ]
      }
    })
  })
}

/**
 * Copy text to clipboard
 * @param str string to copy to clipboard.
 * @returns void
 * @link https://www.30secondsofcode.org/articles/s/copy-text-to-clipboard-with-javascript
 */
var copyToClipboard = function (str) {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str)
  return Promise.reject("The Clipboard API is not available.")
}

/**
 * Checks if the element specified is visible in the viewport.
 * @param el element to check.
 * @param partiallyVisible Determine if the element is entirely visible, or specify true to determine if it is partially visible.
 * @returns boolean
 * @link https://www.30secondsofcode.org/js/s/element-is-visible-in-viewport
 */
var checkElementIsVisibleInViewport = function (el, partiallyVisible) {
  if (partiallyVisible === void 0) {
    partiallyVisible = false
  }
  var _a = el.getBoundingClientRect(),
    top = _a.top,
    left = _a.left,
    bottom = _a.bottom,
    right = _a.right
  var innerHeight = window.innerHeight,
    innerWidth = window.innerWidth
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}

/**
 * Injects the given CSS code into the current document
 * @param css css code string to inject
 * @returns The newly created style element
 * @link https://www.30secondsofcode.org/js/s/inject-css
 */
var injectCSS = function (css) {
  var el = document.createElement("style")
  el.type = "text/css"
  el.innerText = css
  document.head.appendChild(el)
  return el
}

/**
 * Invokes the provided callback on each animation frame.
 *
 * @param callback Callback to invoke on each animation frame.
 * @param autoStart Whether need to implicitly call start when the function is invoked.
 * @returns
 * @example
 * ```ts
 * const cb = () => console.log('Animation frame fired');
 * const recorder = recordAnimationFrames(cb);
 * // logs 'Animation frame fired' on each animation frame
 * recorder.stop(); // stops logging
 * recorder.start(); // starts again
 * const recorder2 = recordAnimationFrames(cb, false);
 * // `start` needs to be explicitly called to begin recording frames
 * ```
 * @link https://www.30secondsofcode.org/js/s/record-animation-frames
 */
var recordAnimationFrames = function (callback, autoStart) {
  if (autoStart === void 0) {
    autoStart = true
  }
  var running = false,
    raf
  var stop = function () {
    if (!running) return
    running = false
    cancelAnimationFrame(raf)
  }
  var start = function () {
    if (running) return
    running = true
    run()
  }
  var run = function () {
    raf = requestAnimationFrame(function () {
      callback()
      if (running) run()
    })
  }
  if (autoStart) start()
  return { start: start, stop: stop }
}

/**
 * Converts a comma-separated values (CSV) string to a 2D array of objects.
 * The first row of the string is used as the title row.
 *
 * @param data CSV string to convert.
 * @param delimiter delimiter used in the CSV string.
 * @returns JSON object array.
 * @link https://www.30secondsofcode.org/js/s/csv-to-json
 */
var CSVToJSON = function (data, delimiter) {
  if (delimiter === void 0) {
    delimiter = ","
  }
  var titles = data.slice(0, data.indexOf("\n")).split(delimiter)
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map(function (v) {
      var values = v.split(delimiter)
      return titles.reduce(function (obj, title, index) {
        return (obj[title] = values[index]), obj
      }, {})
    })
}

/**
 * Converts an array of objects to a comma-separated values (CSV) string that contains only the columns specified.
 *
 * @param arr Array of objects to convert.
 * @param columns Columns to include in the CSV string.
 * @param delimiter Delimiter to use in the CSV string.
 * @returns CSV string.
 * @link https://www.30secondsofcode.org/js/s/jso-nto-csv
 */
var JSONToCSV = function (arr, columns, delimiter) {
  if (delimiter === void 0) {
    delimiter = ","
  }
  return __spreadArray(
    [columns.join(delimiter)],
    arr.map(function (obj) {
      return columns.reduce(function (acc, key) {
        return ""
          .concat(acc)
          .concat(!acc.length ? "" : delimiter, '"')
          .concat(!obj[key] ? "" : obj[key], '"')
      }, "")
    }),
    true
  ).join("\n")
}

/**
 * Returns the index of the function in an array of functions which executed the fastest.
 * @param fns Functions to compare
 * @param iterations Iterations to run each function. The more iterations, the more reliable the result but the longer it will take.
 * @returns Fastest function index
 * @link https://www.30secondsofcode.org/js/s/most-performant
 * @example
 *
 * ```ts
 * mostPerformant([
 *   () => {
 *     // Loops through the entire array before returning `false`
 *     [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'].every(el => typeof el === 'number')
 *   },
 *   () => {
 *     // Only needs to reach index `1` before returning `false`
 *    [1, '2', 3, 4, 5, 6, 7, 8, 9, 10].every(el => typeof el === 'number')
 * . }
 * ]) // 1
 * ```
 */
var mostPerformant = function (fns, iterations) {
  if (iterations === void 0) {
    iterations = 10000
  }
  var times = fns.map(function (fn) {
    var before = performance.now()
    for (var i = 0; i < iterations; i++) fn()
    return performance.now() - before
  })
  return times.indexOf(Math.min.apply(Math, times))
}

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
var when = function (pred, whenTrue) {
  return function (x) {
    return pred(x) ? whenTrue(x) : x
  }
}

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
var rearg = function (fn, indexes) {
  return function () {
    var args = []
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i]
    }
    return fn.apply(
      void 0,
      indexes.map(function (i) {
        return args[i]
      })
    )
  }
}

/**
 * Easing functions.
 *
 * @link https://1loc.dev/misc/easing-functions/
 */
var linear = function (t) {
  return t
}
var easeInQuad = function (t) {
  return t * t
}
var easeOutQuad = function (t) {
  return t * (2 - t)
}
var easeInOutQuad = function (t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}
var easeInCubic = function (t) {
  return t * t * t
}
var easeOutCubic = function (t) {
  return --t * t * t + 1
}
var easeInOutCubic = function (t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
}
var easeInQuart = function (t) {
  return t * t * t * t
}
var easeOutQuart = function (t) {
  return 1 - --t * t * t * t
}
var easeInOutQuart = function (t) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t
}
var easeInQuint = function (t) {
  return t * t * t * t * t
}
var easeOutQuint = function (t) {
  return 1 + --t * t * t * t * t
}
var easeInOutQuint = function (t) {
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
}
var easeInSine = function (t) {
  return 1 + Math.sin((Math.PI / 2) * t - Math.PI / 2)
}
var easeOutSine = function (t) {
  return Math.sin((Math.PI / 2) * t)
}
var easeInOutSine = function (t) {
  return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2
}
var easeInElastic = function (t) {
  return (0.04 - 0.04 / t) * Math.sin(25 * t) + 1
}
var easeOutElastic = function (t) {
  return ((0.04 * t) / --t) * Math.sin(25 * t)
}
var easeInOutElastic = function (t) {
  return (t -= 0.5) < 0
    ? (0.02 + 0.01 / t) * Math.sin(50 * t)
    : (0.02 - 0.01 / t) * Math.sin(50 * t) + 1
}
var easings = {
  linear: linear,
  easeInQuad: easeInQuad,
  easeOutQuad: easeOutQuad,
  easeInOutQuad: easeInOutQuad,
  easeInCubic: easeInCubic,
  easeOutCubic: easeOutCubic,
  easeInOutCubic: easeInOutCubic,
  easeInQuart: easeInQuart,
  easeOutQuart: easeOutQuart,
  easeInOutQuart: easeInOutQuart,
  easeInQuint: easeInQuint,
  easeOutQuint: easeOutQuint,
  easeInOutQuint: easeInOutQuint,
  easeInSine: easeInSine,
  easeOutSine: easeOutSine,
  easeInOutSine: easeInOutSine,
  easeInElastic: easeInElastic,
  easeOutElastic: easeOutElastic,
  easeInOutElastic: easeInOutElastic,
}

export {
  CSVToJSON,
  JSONToCSV,
  arrayMove,
  asyncSequentializer,
  checkElementIsVisibleInViewport,
  copyToClipboard,
  dataURIToBlob,
  descartes,
  easings,
  encodeURL,
  generatePrimeNumbers,
  getIn,
  getTypeOf,
  getURLParams,
  groupBy,
  injectCSS,
  lazyGet,
  mostPerformant,
  once,
  partition,
  pipe,
  pipeAsyncFunctions,
  poll,
  rearg,
  recordAnimationFrames,
  supportsWebP as supportWebP,
  until,
  waitForTime,
  waitForever,
  when,
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZXMuanMiLCJzb3VyY2VzIjpbIi4uL3NyYy93YWl0Rm9yZXZlci50cyIsIi4uL3NyYy93YWl0Rm9yVGltZS50cyIsIi4uL3NyYy9wYXJ0aXRpb24udHMiLCIuLi9zcmMvcG9sbC50cyIsIi4uL3NyYy9waXBlLnRzIiwiLi4vc3JjL3BpcGVBc3luY0Z1bmN0aW9ucy50cyIsIi4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9zcmMvZGVzY2FydGVzLnRzIiwiLi4vc3JjL2dlbmVyYXRlUHJpbWVOdW1iZXJzLnRzIiwiLi4vc3JjL2VuY29kZVVSTC50cyIsIi4uL3NyYy9nZXRVUkxQYXJhbXMudHMiLCIuLi9zcmMvYXJyYXlNb3ZlLnRzIiwiLi4vc3JjL2RhdGFVUklUb0Jsb2IudHMiLCIuLi9zcmMvb25jZS50cyIsIi4uL3NyYy9ncm91cEJ5LnRzIiwiLi4vc3JjL2FzeW5jU2VxdWVudGlhbGl6ZXIudHMiLCIuLi9zcmMvZ2V0SW4udHMiLCIuLi9zcmMvdW50aWwudHMiLCIuLi9zcmMvZ2V0VHlwZU9mLnRzIiwiLi4vc3JjL2xhenlHZXQudHMiLCIuLi9zcmMvc3VwcG9ydFdlYlAudHMiLCIuLi9zcmMvY29weVRvQ2xpcGJvYXJkLnRzIiwiLi4vc3JjL2NoZWNrRWxlbWVudElzVmlzaWJsZUluVmlld3BvcnQudHMiLCIuLi9zcmMvaW5qZWN0Q1NTLnRzIiwiLi4vc3JjL3JlY29yZEFuaW1hdGlvbkZyYW1lcy50cyIsIi4uL3NyYy9jc3ZUb0pTT04udHMiLCIuLi9zcmMvanNvblRvQ1NWLnRzIiwiLi4vc3JjL21vc3RQZXJmb3JtYW50LnRzIiwiLi4vc3JjL3doZW4udHMiLCIuLi9zcmMvcmVhcmcudHMiLCIuLi9zcmMvZWFzaW5ncy50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSwgcGFjaykge1xyXG4gICAgaWYgKHBhY2sgfHwgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikgZm9yICh2YXIgaSA9IDAsIGwgPSBmcm9tLmxlbmd0aCwgYXI7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICBpZiAoYXIgfHwgIShpIGluIGZyb20pKSB7XHJcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XHJcbiAgICAgICAgICAgIGFyW2ldID0gZnJvbVtpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdG8uY29uY2F0KGFyIHx8IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxudmFyIF9fc2V0TW9kdWxlRGVmYXVsdCA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgdikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIFwiZGVmYXVsdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2IH0pO1xyXG59KSA6IGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIG9bXCJkZWZhdWx0XCJdID0gdjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKGsgIT09IFwiZGVmYXVsdFwiICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGspO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcbiIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7O0FBT0c7QUFFVyxTQUFVLFdBQVcsR0FBQTtBQUNqQyxJQUFBLE9BQU8sSUFBSSxPQUFPLENBQUMsWUFBTyxHQUFDLENBQUMsQ0FBQTtBQUM5Qjs7QUNYQTs7Ozs7O0FBTUc7QUFD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QUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDdEcsUUFBUSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7QUFDdEgsUUFBUSxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDOUUsS0FBSyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQ0Q7QUFDTyxTQUFTLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQzNDLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNySCxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVB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LEVBQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsRUFBSyxFQUFBLE9BQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLEVBQUEsQ0FBQyxDQUFBLENBQUE7S0FBQyxDQUFBO0FBRHBDOztBQ3BCRjs7OztBQUlHO0FBRUksSUFBTSxNQUFNLEdBQUcsVUFBQyxDQUFTLEVBQUEsRUFBYSxPQUFBLENBQUMsQ0FBRCxFQUFDLENBQUE7QUFFdkMsSUFBTSxVQUFVLEdBQUcsVUFBQyxDQUFTLEVBQWEsRUFBQSxPQUFBLENBQUMsR0FBRyxDQUFDLENBQUEsRUFBQSxDQUFBO0FBQy9DLElBQU0sV0FBVyxHQUFHLFVBQUMsQ0FBUyxFQUFhLEVBQUEsT0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLEVBQUEsQ0FBQTtBQUN0RCxJQUFNLGFBQWEsR0FBRyxVQUFDLENBQVMsRUFBQTtJQUNyQyxPQUFBLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7QUFBMUMsQ0FBMEMsQ0FBQTtBQUVyQyxJQUFNLFdBQVcsR0FBRyxVQUFDLENBQVMsRUFBQSxFQUFhLE9BQUEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUEsRUFBQSxDQUFBO0FBQ3BELElBQU0sWUFBWSxHQUFHLFVBQUMsQ0FBUyxJQUFhLE9BQUEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUEsRUFBQSxDQUFBO0FBQzNELElBQU0sY0FBYyxHQUFHLFVBQUMsQ0FBUyxFQUFBO0FBQ3RDLElBQUEsT0FBQSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUFqRSxDQUFpRSxDQUFBO0FBRTVELElBQU0sV0FBVyxHQUFHLFVBQUMsQ0FBUyxFQUFhLEVBQUEsT0FBQSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUEsRUFBQSxDQUFBO0FBQ3hELElBQU0sWUFBWSxHQUFHLFVBQUMsQ0FBUyxFQUFBLEVBQWEsT0FBQSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUEsRUFBQSxDQUFBO0FBQy9ELElBQU0sY0FBYyxHQUFHLFVBQUMsQ0FBUyxFQUFBO0FBQ3RDLElBQUEsT0FBQSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUFyRCxDQUFxRCxDQUFBO0FBRWhELElBQU0sV0FBVyxHQUFHLFVBQUMsQ0FBUyxJQUFhLE9BQUEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxFQUFBLENBQUE7QUFDNUQsSUFBTSxZQUFZLEdBQUcsVUFBQyxDQUFTLEVBQUEsRUFBYSxPQUFBLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQXZCLEVBQXVCLENBQUE7QUFDbkUsSUFBTSxjQUFjLEdBQUcsVUFBQyxDQUFTLEVBQUE7QUFDdEMsSUFBQSxPQUFBLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7QUFBL0QsQ0FB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
