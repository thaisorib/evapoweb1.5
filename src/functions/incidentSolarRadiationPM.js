'use strict'

export function incidentSolarRadiationPM(insolation, durationDay, radiationAtmosphere) {

  return ((0.27 + (0.52 * (insolation / durationDay))) * radiationAtmosphere)
}