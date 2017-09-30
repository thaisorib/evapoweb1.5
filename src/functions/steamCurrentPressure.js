'use strict'

export function currentPressure(saturationPressure, umiRelativa) {
  let currentPressure

  currentPressure = (saturationPressure * 0.01 * umiRelativa)

  return currentPressure
}