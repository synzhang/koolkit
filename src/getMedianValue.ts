const getMedianValue = (data: number[]): number => {
  const sortedArray = data.sort((a, b) => a - b)
  const middlePosition = Math.floor(data.length / 2)
  const median = data.length % 2 == 0
    ? (sortedArray[middlePosition] + sortedArray[middlePosition - 1]) / 2
    : sortedArray[middlePosition]

  return median
}

export default getMedianValue
