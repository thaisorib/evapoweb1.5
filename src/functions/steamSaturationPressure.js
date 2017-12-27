'use strict'

export function saturationPressure(tempMedia) {
  let saturationPressure

  saturationPressure = (0.6108 * (Math.pow(((17.27 * tempMedia) / (237.3 + tempMedia)), 10)))

  return saturationPressure
}
