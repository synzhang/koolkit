/**
 * Group the elements of an map according to the given key.
 *
 * @param objectArray The map to group.
 * @param key The key to group by.
 * @returns
 */

const groupBy = (
  objectArray: { [key: string]: any },
  key: string
): { [key: string]: any[] } => {
  const values =
    objectArray instanceof Map || objectArray instanceof Set
      ? Array.from(objectArray.values())
      : Object.values(objectArray)

  return values.reduce((keyedObj, value) => {
    const groupKey = value[key]
    if (!Array.isArray(keyedObj[groupKey])) {
      keyedObj[groupKey] = [value]
    } else {
      keyedObj[groupKey].push(value)
    }

    return keyedObj
  }, {})
}

export default groupBy
