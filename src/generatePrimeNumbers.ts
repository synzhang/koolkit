/**
 * Generate prime numbers. Using the Sieve of Eratosthenes.
 *
 * @see https://www.30secondsofcode.org/js/s/primes
 * @returns Prime numbers array.
 */

const generatePrimeNumbers = num => {
  let array = Array.from({ length: num - 1 }).map((x, i) => i + 2)
  const sqroot = Math.floor(Math.sqrt(num))
  const numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2)

  numsTillSqroot.forEach(x => (array = array.filter(y => y % x !== 0 || y === x)))

  return array
}

export default generatePrimeNumbers
