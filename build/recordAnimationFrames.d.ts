/**
 * Invokes the provided callback on each animation frame.
 *
 * @param callback Callback to invoke on each animation frame.
 * @param autoStart Whether need to implicitly call start when the function is invoked.
 * @returns
 * @example
 * ```ts
 * const cb = () => console.log('Animation frame fired');
 * const recorder = recordAnimationFrames(cb);
 * // logs 'Animation frame fired' on each animation frame
 * recorder.stop(); // stops logging
 * recorder.start(); // starts again
 * const recorder2 = recordAnimationFrames(cb, false);
 * // `start` needs to be explicitly called to begin recording frames
 * ```
 * @link https://www.30secondsofcode.org/js/s/record-animation-frames
 */
declare const recordAnimationFrames: (
  callback: any,
  autoStart?: boolean
) => {
  start: () => void
  stop: () => void
}
export default recordAnimationFrames
