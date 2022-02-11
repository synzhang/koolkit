/**
 * Convert URL parameters to object.
 *
 * @returns An URL parameters object.
 *
 * @link https://1loc.dev/misc/convert-url-parameters-to-object/
 */

const getURLParams = (query: string): Record<string, string> =>
  Array.from(new URLSearchParams(query)).reduce(
    (p, [k, v]) =>
      Object.assign({}, p, {
        [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v
      }),
    {} as Record<string, string>
  )

export default getURLParams
