'use strict'

export function dewPointTemperature(currentPressure) {
  let dewPointTemperature

  dewPointTemperature = (((237.3 * Math.log10(currentPressure)) - 156.8) / (8.16 - (Math.log10(currentPressure))));

  return dewPointTemperature
}