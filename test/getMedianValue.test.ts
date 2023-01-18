import getMedianValue from "../src/getMedianValue"

test("getMedianValue", () => {
  expect(getMedianValue([1, 2, 3])).toBe(2)
  expect(getMedianValue([3, 1, 2])).toBe(2)
  expect(getMedianValue([3, 1, 2, 4])).toBe(2.5)
})