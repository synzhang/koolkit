/**
 * Copy text to clipboard
 * @param str string to copy to clipboard.
 * @returns void
 * @link https://www.30secondsofcode.org/articles/s/copy-text-to-clipboard-with-javascript
 */

const copyToClipboard = (str) => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str)
  return Promise.reject("The Clipboard API is not available.")
}

export default copyToClipboard
