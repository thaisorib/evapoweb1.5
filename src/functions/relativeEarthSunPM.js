'use strict'

export function relativeEarthSunPM(julianDay, year) {
  if (((((year % 4) == 0) && (year % 100) != 0) || (year % 400) == 0)) {
    return (1 + (0.033 * (Math.cos(((2 * Math.PI) / 366) * julianDay))))
  }
  return (1 + (0.033 * (Math.cos(((2 * Math.PI) / 365) * julianDay))))
}