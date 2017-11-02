'use strict'

export function shortwaveRadiation(incidentSolarRadiation) {
  return ((1 - 0.23) * incidentSolarRadiation)
}