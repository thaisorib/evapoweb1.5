'use strict'

export function relativeEarthSun(julianDay) {
  return (1 + 0.033 * (Math.cos(((2 * Math.PI) / 365) * julianDay)))
}