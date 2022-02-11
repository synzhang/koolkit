/**
 * Convert URL parameters to object.
 *
 * @returns An URL parameters object.
 *
 * @link https://1loc.dev/misc/convert-url-parameters-to-object/
 */
declare const getURLParams: (query: string) => Record<string, string>
export default getURLParams
