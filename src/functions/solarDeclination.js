'use strict'

export function solarDeclination(julianDay) {
  let solarDeclination

  solarDeclination = (0.4093 * (Math.sin((((2 * Math.PI) / 365) * julianDay) - 1.405)))

  return solarDeclination
}