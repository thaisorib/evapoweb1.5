'use strict'

export function durationDay(sunriseAngle) {
  let durationDay

  durationDay = ((24 / Math.PI) * sunriseAngle);

  return durationDay
}