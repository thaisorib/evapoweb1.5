'use strict'

export function longwaveRadiation(insolation, steamPressure, tempMax, tempMin) {
  const tempMaxK = (tempMax + 273);
  const tempMinK = (tempMin + 273);

  return -(((0.9 * insolation / N) + 0.1) * (0.34 - (0.14 * Math.sqrt(ea))) * (0.000000004903 * ((Math.pow(tempMaxK, 4)) + (Math.pow(tempMinK, 4))) * 0.5));
}