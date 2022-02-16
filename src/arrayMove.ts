/**
 * Move an item from one position in an array to another.
 *
 * @param array Array to move the item in.
 * @param oldIndex The index of the item to move.
 * @param newIndex The index to move the item to.
 * @returns
 */

const arrayMove = (array: any[], oldIndex: number, newIndex: number): any[] => {
  if (newIndex >= array.length) {
    let k = newIndex - array.length + 1
    while (k--) {
      array.push(undefined)
    }
  }

  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0])

  return array
}

export default arrayMove
