'use strict'

export function sunriseAngle(latitude, decSolar) {
  let sunriseAngle

  sunriseAngle = Math.acos((-Math.tan(latitude)) * (Math.tan(decSolar)))

  return sunriseAngle
}