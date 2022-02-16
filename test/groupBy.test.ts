import groupBy from "../src/groupBy"

test("groupBy", () => {
  const array = [
    { name: "Syn", age: 20 },
    { name: "Jack", age: 22 },
    { name: "Jane", age: 21 },
    { name: "John", age: 22 },
    { name: "Min", age: 21 }
  ]
  const groupByObj = groupBy(array, "age")

  expect(groupByObj).toEqual({
    20: [{ name: "Syn", age: 20 }],
    21: [
      { name: "Jane", age: 21 },
      { name: "Min", age: 21 }
    ],
    22: [
      { name: "Jack", age: 22 },
      { name: "John", age: 22 }
    ]
  })
})
