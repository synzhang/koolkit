/**
 * Wait a given amount of time between tasks.
 *
 * @returns A promise which will resolves in given period.
 *
 * @link https://davidwalsh.name/waitfortime
 */
export default function waitForTime(ms: number): Promise<{}> {
  return new Promise(resolve => setTimeout(resolve, ms))
}
