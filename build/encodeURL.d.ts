/**
 * Encode a URL.
 * `encodeURIComponent` doesn't encode -_.!~*'()
 *
 * @returns An URL.
 *
 * @link https://1loc.dev/misc/encode-a-url/
 */
declare const encodeURL: (url: string) => string
export default encodeURL
