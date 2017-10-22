'use strict'

export function incidentSolarRadiation(radiano, insolation, durationDay, radiationAtmosphere) {
  let incidentSolarRadiation

  incidentSolarRadiation = ((radiano + 0.52 * (insolation / durationDay)) * radiationAtmosphere)

  return incidentSolarRadiation
}