/**
 * Converts an array of objects to a comma-separated values (CSV) string that contains only the columns specified.
 *
 * @param arr Array of objects to convert.
 * @param columns Columns to include in the CSV string.
 * @param delimiter Delimiter to use in the CSV string.
 * @returns CSV string.
 * @link https://www.30secondsofcode.org/js/s/jso-nto-csv
 */
declare const JSONToCSV: (
  arr: any[],
  columns: string[],
  delimiter?: string
) => string
export default JSONToCSV
