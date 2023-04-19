/**
 * Sort Elements By Certain Property
 * @param array array
 * @param key property key
 * @returns array
 */

const sortBy = <T>(array: T[], key: string): T[] => (
  array.sort((a, b) => a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0)
)

export default sortBy
