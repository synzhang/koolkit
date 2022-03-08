/**
 * Easing functions.
 *
 * @link https://1loc.dev/misc/easing-functions/
 */

export const linear = (t: number): number => t

export const easeInQuad = (t: number): number => t * t
export const easeOutQuad = (t: number): number => t * (2 - t)
export const easeInOutQuad = (t: number): number =>
  t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

export const easeInCubic = (t: number): number => t * t * t
export const easeOutCubic = (t: number): number => --t * t * t + 1
export const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

export const easeInQuart = (t: number): number => t * t * t * t
export const easeOutQuart = (t: number): number => 1 - --t * t * t * t
export const easeInOutQuart = (t: number): number =>
  t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t

export const easeInQuint = (t: number): number => t * t * t * t * t
export const easeOutQuint = (t: number): number => 1 + --t * t * t * t * t
export const easeInOutQuint = (t: number): number =>
  t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t

export const easeInSine = (t: number): number =>
  1 + Math.sin((Math.PI / 2) * t - Math.PI / 2)
export const easeOutSine = (t: number): number => Math.sin((Math.PI / 2) * t)
export const easeInOutSine = (t: number): number =>
  (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2

export const easeInElastic = (t: number): number =>
  (0.04 - 0.04 / t) * Math.sin(25 * t) + 1
export const easeOutElastic = (t: number): number =>
  ((0.04 * t) / --t) * Math.sin(25 * t)
export const easeInOutElastic = (t: number): number =>
  (t -= 0.5) < 0
    ? (0.02 + 0.01 / t) * Math.sin(50 * t)
    : (0.02 - 0.01 / t) * Math.sin(50 * t) + 1
