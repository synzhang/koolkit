/**
 * Deep value retriever.
 *
 * @param dict a deeply nested objects, array, or Javascript Map.
 * @param path path to the value to retrieve.
 * @returns
 */

const getIn = (dict, path) => {
  path = Array.isArray(path) ? path : path.split(".")

  const value = path.reduce(
    (obj, key) =>
      // prevents error on retrieving key in undefined
      obj === undefined
        ? null
        : // check if Map otherwise it is object like
        obj instanceof Map
        ? obj.get(key) ?? obj[key]
        : obj[key],
    dict
  )

  return value === undefined ? null : value
}

export default getIn
