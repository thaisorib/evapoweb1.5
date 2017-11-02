'use strict'

export function incidentSolarRadiation(radiano, insolation, durationDay, radiationAtmosphere) {

  return ((radiano + 0.52 * (insolation / durationDay)) * radiationAtmosphere)
}