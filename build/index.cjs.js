/**
 * @license
 * author: Syn Zhang<zeyanzhang.china@gmail.com>
 * koolkit.js v0.3.0
 * Released under the MIT license.
 */

"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

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

exports.CSVToJSON = CSVToJSON
exports.JSONToCSV = JSONToCSV
exports.arrayMove = arrayMove
exports.asyncSequentializer = asyncSequentializer
exports.checkElementIsVisibleInViewport = checkElementIsVisibleInViewport
exports.copyToClipboard = copyToClipboard
exports.dataURIToBlob = dataURIToBlob
exports.descartes = descartes
exports.easings = easings
exports.encodeURL = encodeURL
exports.generatePrimeNumbers = generatePrimeNumbers
exports.getIn = getIn
exports.getTypeOf = getTypeOf
exports.getURLParams = getURLParams
exports.groupBy = groupBy
exports.injectCSS = injectCSS
exports.lazyGet = lazyGet
exports.mostPerformant = mostPerformant
exports.once = once
exports.partition = partition
exports.pipe = pipe
exports.pipeAsyncFunctions = pipeAsyncFunctions
exports.poll = poll
exports.rearg = rearg
exports.recordAnimationFrames = recordAnimationFrames
exports.supportWebP = supportsWebP
exports.until = until
exports.waitForTime = waitForTime
exports.waitForever = waitForever
exports.when = when
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2pzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvd2FpdEZvcmV2ZXIudHMiLCIuLi9zcmMvd2FpdEZvclRpbWUudHMiLCIuLi9zcmMvcGFydGl0aW9uLnRzIiwiLi4vc3JjL3BvbGwudHMiLCIuLi9zcmMvcGlwZS50cyIsIi4uL3NyYy9waXBlQXN5bmNGdW5jdGlvbnMudHMiLCIuLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwiLi4vc3JjL2Rlc2NhcnRlcy50cyIsIi4uL3NyYy9nZW5lcmF0ZVByaW1lTnVtYmVycy50cyIsIi4uL3NyYy9lbmNvZGVVUkwudHMiLCIuLi9zcmMvZ2V0VVJMUGFyYW1zLnRzIiwiLi4vc3JjL2FycmF5TW92ZS50cyIsIi4uL3NyYy9kYXRhVVJJVG9CbG9iLnRzIiwiLi4vc3JjL29uY2UudHMiLCIuLi9zcmMvZ3JvdXBCeS50cyIsIi4uL3NyYy9hc3luY1NlcXVlbnRpYWxpemVyLnRzIiwiLi4vc3JjL2dldEluLnRzIiwiLi4vc3JjL3VudGlsLnRzIiwiLi4vc3JjL2dldFR5cGVPZi50cyIsIi4uL3NyYy9sYXp5R2V0LnRzIiwiLi4vc3JjL3N1cHBvcnRXZWJQLnRzIiwiLi4vc3JjL2NvcHlUb0NsaXBib2FyZC50cyIsIi4uL3NyYy9jaGVja0VsZW1lbnRJc1Zpc2libGVJblZpZXdwb3J0LnRzIiwiLi4vc3JjL2luamVjdENTUy50cyIsIi4uL3NyYy9yZWNvcmRBbmltYXRpb25GcmFtZXMudHMiLCIuLi9zcmMvY3N2VG9KU09OLnRzIiwiLi4vc3JjL2pzb25Ub0NTVi50cyIsIi4uL3NyYy9tb3N0UGVyZm9ybWFudC50cyIsIi4uL3NyYy93aGVuLnRzIiwiLi4vc3JjL3JlYXJnLnRzIiwiLi4vc3JjL2Vhc2luZ3MudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGlmICh0eXBlb2YgYiAhPT0gXCJmdW5jdGlvblwiICYmIGIgIT09IG51bGwpXHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNsYXNzIGV4dGVuZHMgdmFsdWUgXCIgKyBTdHJpbmcoYikgKyBcIiBpcyBub3QgYSBjb25zdHJ1Y3RvciBvciBudWxsXCIpO1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFPRztBQUVXLFNBQVUsV0FBVyxHQUFBO0FBQ2pDLElBQUEsT0FBTyxJQUFJLE9BQU8sQ0FBQyxZQUFPLEdBQUMsQ0FBQyxDQUFBO0FBQzlCOztBQ1hBOzs7Ozs7QUFN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QUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtBQUN0RyxRQUFRLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUN0SCxRQUFRLElBQUksQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUM5RSxLQUFLLENBQUMsQ0FBQztBQUNQLENBQUM7QUFDRDtBQUNPLFNBQVMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUU7QUFDM0MsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JILElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sTUFBTSxLQUFLLFVBQVUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0osSUFBSSxTQUFTLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxPQUFPLFVBQVUsQ0FBQyxFQUFFLEVBQUUsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUN0RSxJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUUsRUFBRTtBQUN0QixRQUFRLElBQUksQ0FBQyxFQUFFLE1BQU0sSUFBSSxTQUFTLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN0RSxRQUFRLE9BQU8sQ0FBQyxFQUFFLElBQUk7QUFDdEIsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN6SyxZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDcEQsWUFB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LENBQUEsRUFBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxFQUFLLEVBQUEsT0FBQSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsRUFBQSxDQUFDLENBQUEsQ0FBQTtLQUFDLENBQUE7QUFEcEM7O0FDcEJGOzs7O0FBSUc7QUFFSSxJQUFNLE1BQU0sR0FBRyxVQUFDLENBQVMsRUFBQSxFQUFhLE9BQUEsQ0FBQyxDQUFELEVBQUMsQ0FBQTtBQUV2QyxJQUFNLFVBQVUsR0FBRyxVQUFDLENBQVMsRUFBYSxFQUFBLE9BQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQSxFQUFBLENBQUE7QUFDL0MsSUFBTSxXQUFXLEdBQUcsVUFBQyxDQUFTLEVBQWEsRUFBQSxPQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsRUFBQSxDQUFBO0FBQ3RELElBQU0sYUFBYSxHQUFHLFVBQUMsQ0FBUyxFQUFBO0lBQ3JDLE9BQUEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUExQyxDQUEwQyxDQUFBO0FBRXJDLElBQU0sV0FBVyxHQUFHLFVBQUMsQ0FBUyxFQUFBLEVBQWEsT0FBQSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxFQUFBLENBQUE7QUFDcEQsSUFBTSxZQUFZLEdBQUcsVUFBQyxDQUFTLElBQWEsT0FBQSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQSxFQUFBLENBQUE7QUFDM0QsSUFBTSxjQUFjLEdBQUcsVUFBQyxDQUFTLEVBQUE7QUFDdEMsSUFBQSxPQUFBLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FB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
