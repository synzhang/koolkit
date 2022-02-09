/**
 * Generate prime numbers. Using the Sieve of Eratosthenes.
 *
 * @returns Prime numbers array.
 *
 * @link https://www.30secondsofcode.org/js/s/primes
 */

const generatePrimeNumbers = (num: number): number[] => {
  let array = Array.from({ length: num - 1 }).map((x, i) => i + 2)
  const sqroot = Math.floor(Math.sqrt(num))
  const numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2)

  numsTillSqroot.forEach(
    x => (array = array.filter(y => y % x !== 0 || y === x))
  )

  return array
}

export default generatePrimeNumbers
