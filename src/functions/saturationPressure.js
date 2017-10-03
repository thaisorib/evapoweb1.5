'use strict'

export function saturationPressure(averageTemp) {
  let saturationPressure

  saturationPressure = (0.6108 * (Math.pow(10, ((7.5 * averageTemp) / (237.3 + averageTemp)))));

  return saturationPressure
}