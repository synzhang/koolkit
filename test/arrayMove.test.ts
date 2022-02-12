import arrayMove from "../src/arrayMove"

test("arrayMove", () => {
  const array = [1, 2, 3, 4, 5]
  const movedArray = arrayMove(array, 1, 3)

  expect(movedArray).toEqual([1, 3, 4, 2, 5])
})
