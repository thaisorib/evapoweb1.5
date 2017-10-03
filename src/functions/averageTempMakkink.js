'use strict'

export function averageTempMakkink(temp9AM, temp15PM, temp21PM) {
  let averageTempMakkink

  averageTempMakkink = ((temp9AM + temp15PM + (2 * temp21PM)) / 4);

  return averageTempMakkink
}