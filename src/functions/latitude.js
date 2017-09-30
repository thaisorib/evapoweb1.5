'use strict'

export function latitude(latGraus, latMin) {
  let latitude

  latitude = ((latGraus + ((latMin) / 60)))

  return latitude
}