'use strict'

export function incidentSolarRadiationPM(insolation, durationDay, radiationAtmosphere) {

  return ((0.25 + (0.50 * (insolation / durationDay))) * radiationAtmosphere)
}
