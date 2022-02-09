import partition from "../src/partition"

test("partition", () => {
  const fn = partition(num => num % 2 === 0)
  const result = fn([1, 2, 3, 4, 5, 6])

  expect(result).toEqual([
    [1, 3, 5],
    [2, 4, 6]
  ])
})
