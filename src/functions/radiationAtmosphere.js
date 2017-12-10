'use strict'

export function radiationAtmosphere(relativeEarthSun, latitude, decSolar, sunriseAngle) {
  let radiationAtmosphere

  radiationAtmosphere = (37.586 * relativeEarthSun * (sunriseAngle * Math.sin(latitude) * Math.sin(decSolar) + Math.cos(latitude) * Math.cos(decSolar) * Math.sin(sunriseAngle)))
  
  return radiationAtmosphere
}
