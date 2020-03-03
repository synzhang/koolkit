/**
 * Halts following actions without locking the browser,
 * so you can interact with the page. Useful in debug and test.
 *
 * @returns A promise which never resolves.
 *
 * @link https://davidwalsh.name/javascript-wait
 */

export default function waitForever(): Promise<void> {
  return new Promise(() => {})
}
