/**
 * Converts a comma-separated values (CSV) string to a 2D array of objects.
 * The first row of the string is used as the title row.
 *
 * @param data CSV string to convert.
 * @param delimiter delimiter used in the CSV string.
 * @returns JSON object array.
 * @link https://www.30secondsofcode.org/js/s/csv-to-json
 */

const CSVToJSON = (data: string, delimiter: string = ","): any[] => {
  const titles = data.slice(0, data.indexOf("\n")).split(delimiter)
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\n")
    .map((v) => {
      const values = v.split(delimiter)
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      )
    })
}

export default CSVToJSON
