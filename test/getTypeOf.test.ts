/**
 * @jest-environment jsdom
 */

import getTypeOf from "../src/getTypeOf"

test("getTypeof", () => {
  expect(getTypeOf("hello world")).toBe("String")
  expect(getTypeOf(1000)).toBe("Number")
  expect(getTypeOf(Infinity)).toBe("Number")
  expect(getTypeOf(true)).toBe("Boolean")
  expect(getTypeOf(Symbol())).toBe("Symbol")
  expect(getTypeOf(null)).toBe("Null")
  expect(getTypeOf(undefined)).toBe("Undefined")
  expect(getTypeOf({})).toBe("Object")
  expect(getTypeOf([])).toBe("Array")
  expect(getTypeOf(/[a-z]/g)).toBe("RegExp")
  expect(getTypeOf(new Date(2021))).toBe("Date")
  expect(getTypeOf(new Error())).toBe("Error")
  expect(getTypeOf(function () {})).toBe("Function")
  expect(getTypeOf((a, b) => a + b)).toBe("Function")
  expect(getTypeOf(async () => {})).toBe("AsyncFunction")
  expect(getTypeOf(document)).toBe("Document")
})
