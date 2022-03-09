/**
 * Deep value retriever.
 *
 * @param dict a deeply nested objects, array, or Javascript Map.
 * @param path path to the value to retrieve.
 * @returns
 */
declare const getIn: (dict: any, path: any) => any
export default getIn
