'use strict'

export function saturationPressure(averageTemp) {
  return (0.6108 * (Math.pow(10, ((17.27 * averageTemp) / (237.3 + averageTemp)))));
}
