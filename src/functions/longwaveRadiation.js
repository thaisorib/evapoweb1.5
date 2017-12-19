'use strict'

export function longwaveRadiation(insolation, durationDay, steamPressure, averageTemperature) {

  return -(((0.9 * (insolation / durationDay)) + 0.1) * (0.34 - (0.14 * Math.sqrt(steamPressure))) * (0.000000004903 * ((Math.pow(averageTemperature, 4)) + (Math.pow(averageTemperature, 4))) * 0.5));
}