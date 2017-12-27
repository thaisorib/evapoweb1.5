'use strict'

export function longwaveRadiation(insolation, durationDay, steamPressure, averageTemperature, maxTemp, minTemp) {

  let maxTempKelvin = maxTemp + 273
  let minTempKelvin = minTemp + 273

  return -(((0.9 * (insolation / durationDay)) + 0.1) * (0.34 - (0.14 * Math.sqrt(steamPressure))) * (0.000000004903 * ((Math.pow(maxTempKelvin, 4)) + (Math.pow(minTempKelvin, 4))) * 0.5));
}