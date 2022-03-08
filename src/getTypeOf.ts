/**
 * Get type of a variable in string
 * @param obj any
 * @returns string
 * @link https://1loc.dev/misc/get-type-of-a-variable-in-string/
 */

const getTypeOf = (obj: any): string =>
  (Object.prototype.toString.call(obj).match(/\[object (.*)\]/) as string[])[1]

export default getTypeOf
