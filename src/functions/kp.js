'use strict'

export function kp(bordadura, umiRelativa, vento) {
  let kp

  kp = (0.108 - (0.0286 * vento) + (0.0422 * Math.log(bordadura) +
    (0.1434 * Math.log(umiRelativa)) - (0.000631 * (Math.pow(Math.log(bordadura)), 2) * Math.log(umiRelativa))))

  return kp
}
