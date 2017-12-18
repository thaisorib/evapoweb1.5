'use strict'

export function currentPressure(saturationPressure, umiRelativa) {
  let currentPressure

  currentPressure = ((saturationPressure * umiRelativa) * 0.01)

  return currentPressure
}
