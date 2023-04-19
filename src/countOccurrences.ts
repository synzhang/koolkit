/**
 * Count Number of Occurrences
 * @param array array
 * @param value element to count
 * @returns number of occurrences
 * 
 * @example
 * 
 * ```ts
 * const pollResponses = ["Yes", "Yes", "No"];
 * const response = "Yes";
 *
 * countOccurrences(pollResponses, response); // 2
 * ```
 */

type Item = string | number

const countOccurrences = (array: Item[], value: Item): number => (
  array.reduce((a, v) => (v === value ? a + 1 : a), 0)
)

export default countOccurrences
