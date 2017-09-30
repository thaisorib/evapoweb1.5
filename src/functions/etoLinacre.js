'use strict'

export function etoLinacre(tempMedia, latitude, altitude, dewPointTemperature) {
  let eto

  eto = ((((500 * (tempMedia + (0.006 * altitude))) / (100 - latitude)) + (15 * (tempMedia - dewPointTemperature))) / (80 - tempMedia))

  return eto
}