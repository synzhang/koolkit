import getURLParams from "../src/getURLParams"

test("getURLParams", () => {
  const url = "?p=bar&q=hello&q=world&q=foo"
  const params = getURLParams(url)

  expect(params).toEqual({
    p: "bar",
    q: ["hello", "world", "foo"]
  })
})
