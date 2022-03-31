/**
 * Converts a comma-separated values (CSV) string to a 2D array of objects.
 * The first row of the string is used as the title row.
 *
 * @param data CSV string to convert.
 * @param delimiter delimiter used in the CSV string.
 * @returns JSON object array.
 * @link https://www.30secondsofcode.org/js/s/csv-to-json
 */
declare const CSVToJSON: (data: string, delimiter?: string) => any[]
export default CSVToJSON
