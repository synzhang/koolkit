/**
 * Pluck Property from Array of Objects
 * @param objs array of Objects
 * @param key property to extract
 * @returns properties array
 */

const pluck = <T>(objs: T[], key: string): any[] => objs.map((obj) => obj[key])

export default pluck
