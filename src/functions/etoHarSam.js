'use strict'

export function etoHarSam(tempMax, tempMin, tempMedia, radiationAtmosphere) {
  let etoHarSam

  etoHarSam = (0.0023 * (Math.pow((tempMax - tempMin), 0.5)) * (tempMedia + 17.8) * radiationAtmosphere)

  return etoHarSam
}