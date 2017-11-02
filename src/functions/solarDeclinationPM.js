'use strict'

export function solarDeclinationPM(julianDay, year) {

  if (((((year % 4) == 0) && (year % 100) != 0) || (year % 400) == 0)) {
    return (0.4093 * (Math.sin((((2 * Math.PI) / 366) * julianDay) - 1.405)));
  }
  return (0.4093 * (Math.sin((((2 * Math.PI) / 365) * julianDay) - 1.405)));
}