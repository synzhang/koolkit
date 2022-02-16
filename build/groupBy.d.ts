/**
 * Group the elements of an map according to the given key.
 *
 * @param objectArray The map to group.
 * @param key The key to group by.
 * @returns
 */
declare const groupBy: (
  objectArray: {
    [key: string]: any
  },
  key: string
) => {
  [key: string]: any[]
}
export default groupBy
