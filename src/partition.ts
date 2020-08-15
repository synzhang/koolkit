/**
 * Split an array into two based on a function.
 *
 * @returns Array.
 */

const partition = f => array =>
  array.reduce(
    (result, item) => {
      switch (f(array)) {
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

export default partition
