import once from "../src/once"

const mockFn = jest.fn()

test("once", () => {
  const canOnlyFireOnce = once(() => {
    mockFn()
  })
  canOnlyFireOnce()
  expect(mockFn.mock.calls.length).toBe(1)
  canOnlyFireOnce()
  expect(mockFn.mock.calls.length).toBe(1)
})
