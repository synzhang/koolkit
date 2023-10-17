/**
 * Processes the array of tasks in chunks, with a maximum of threads tasks running concurrently.
 * 
 * @param array The array of values that you want to process concurrently.
 * @param fn A function that performs a task asynchronously and returns a promise.
 * @param threads The maximum number of concurrent threads to use.
 * @returns A Promise containing the result of the processing.
 * @link https://dev.to/shnoman97/parallel-processing-in-javascript-with-concurrency-4gml
 * @example
 * ```ts
 * const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
 * const apiLikeFunction = v =>
 *   new Promise((resolve, rej) =>
 *     setTimeout(() => {
 *       console.log('executing : ', v);
 *       resolve(v * v);
 *     }, 3000),
 *   )
 * const threads = 5
 * const res = await parallel(arr,apiLikeFunction, 5);
 * ```
 */

const parallel = async <T, R>(
  array: T[],
  fn: (item: T) => Promise<R>,
  threads: number = 2
): Promise<R[]> => {
  const result: R[] = []

  while (array.length) {
    const chunk = array.slice(0, threads)
    const response = await Promise.all(chunk.map(x => fn(x)))
    result.push(...response)
    array.splice(0, threads)
  }

  return result
}

export default parallel