'use strict'

export function latitude(latGraus, latMin) {
  let latitude

  if (latGraus > 0) {
    latitude = ((latGraus + (latMin) / 60) * (Math.PI / 180));
  }
  else {
    latitude = ((latGraus + (-latMin) / 60) * (Math.PI / 180));
  }

  return latitude
}