'use strict'

export function saturationPressureCurve(saturationPressure, averageTemp) {

  return ((4098 * saturationPressure) / (Math.pow((averageTemp + 237.3), 2)));

}