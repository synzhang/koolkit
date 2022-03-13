/**
 * Injects the given CSS code into the current document
 * @param css css code string to inject
 * @returns The newly created style element
 * @link https://www.30secondsofcode.org/js/s/inject-css
 */

const injectCSS = (css: string): HTMLStyleElement => {
  const el = document.createElement("style")
  el.type = "text/css"
  el.innerText = css
  document.head.appendChild(el)
  return el
}

export default injectCSS
