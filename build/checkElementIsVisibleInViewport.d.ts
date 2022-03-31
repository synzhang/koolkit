/**
 * Checks if the element specified is visible in the viewport.
 * @param el element to check.
 * @param partiallyVisible Determine if the element is entirely visible, or specify true to determine if it is partially visible.
 * @returns boolean
 * @link https://www.30secondsofcode.org/js/s/element-is-visible-in-viewport
 */
declare const checkElementIsVisibleInViewport: (
  el: Element,
  partiallyVisible?: boolean
) => boolean
export default checkElementIsVisibleInViewport
