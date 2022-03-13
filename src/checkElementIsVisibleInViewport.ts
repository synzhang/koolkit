/**
 * Checks if the element specified is visible in the viewport.
 * @param el element to check.
 * @param partiallyVisible Determine if the element is entirely visible, or specify true to determine if it is partially visible.
 * @returns boolean
 * @link https://www.30secondsofcode.org/js/s/element-is-visible-in-viewport
 */

const checkElementIsVisibleInViewport = (
  el: Element,
  partiallyVisible: boolean = false
): boolean => {
  const { top, left, bottom, right } = el.getBoundingClientRect()
  const { innerHeight, innerWidth } = window
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
}

export default checkElementIsVisibleInViewport
