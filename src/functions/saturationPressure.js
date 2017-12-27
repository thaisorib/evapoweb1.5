'use strict'

export function saturationPressure(averageTemp) {
  return (0.6108 * (Math.pow(((17.27 * averageTemp) / (237.3 + averageTemp)), 10)));
}
