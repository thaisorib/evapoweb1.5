'use strict'

export function saturationPressureCurve(saturationPressure, averageTemp) {
  let saturationPressureCurve

  saturationPressureCurve = ((4098 * saturationPressure) / (Math.pow((averageTemp + 237.3), 2)));

  return saturationPressureCurve
}