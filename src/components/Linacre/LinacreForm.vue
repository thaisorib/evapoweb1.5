<template>
  <div id="linacre-form" class="row">
    <div class="col s12 m8 offset-m2">
      <div class="card white darken-1">
        <div class="card-content">
          <span class="card-title">{{ methodTitle }}</span>
          <p class="method-description">
            {{ methodDescription }}
          </p>
          <br>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="temp-media" type="text" class="validate" v-model="tempMedia" @input="$v.tempMedia.$touch()">
              <label for="temp-media">Temperatura média: (ºC)</label>
              <i class="mi mi-face"></i>
              <span class="error-message" v-if="!$v.tempMedia.required">Entre com o valor da temperatura média</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="umidade-relativa" type="text" class="validate" v-model="umiRelativa" @input="$v.umiRelativa.$touch()">
              <label for="umidade-relativa">Umidade Relativa média diária: (%)</label>
              <span class="error-message" v-if="!$v.umiRelativa.required">Entre com o valor da Umidade Relativa</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m8 s12">
              <input id="altitude" type="text" class="validate" v-model="altitude" @input="$v.altitude.$touch()">
              <label for="altitude">Altitude: (metros)</label>
              <span class="error-message" v-if="!$v.altitude.required">Entre com o valor da altitude em metros</span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col m4 s6">
              <input id="latitude-graus" type="text" class="validate" v-model="latitudeGraus" @input="$v.latitudeGraus.$touch()">
              <label for="latitude-graus">Latitude em graus:</label>
              <span class="error-message" v-if="!$v.latitudeGraus.required">Entre com o valor da latitude em graus</span>
            </div>
            <div class="input-field col m4 s6">
              <input id="latitude-minutos" type="text" class="validate" v-model="latitudeMinutos" @input="$v.latitudeMinutos.$touch()">
              <label for="latitude-minutos">Latitude em minutos:</label>
              <span class="error-message" v-if="!$v.latitudeMinutos.required">Entre com o valor da latitude em minutos</span>
            </div>
          </div>
          <div class="row" v-if="result">
            <div class="col m8 s12 offset-m2">
              <p class="result">{{ result }} mm/dia</p>
            </div>
          </div>
        </div>
        <div class="card-action">
          <button class="waves-effect waves-light btn" @click="calculate()">Calcular</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { latitude } from '@/functions/latitudeLinacre.js'
import { saturationPressure } from '@/functions/steamSaturationPressure.js'
import { currentPressure } from '@/functions/steamCurrentPressure.js'
import { dewPointTemperature } from '@/functions/dewPointTemperature.js'
import { etoLinacre } from '@/functions/etoLinacre.js'
import { required } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      result: 0,
      methodTitle: 'Método Linacre',
      methodDescription: 'Este método considera a temperatura do ar como única variável local para estimar a evapotranspiração média (mm.d-1) de uma área bem suprimida de umidade.',
      tempMedia: '',
      umiRelativa: '',
      altitude: '',
      latitudeGraus: '',
      latitudeMinutos: ''
    }
  },

  validations: {
    tempMedia: {
      required
    },
    umiRelativa: {
      required
    },
    altitude: {
      required
    },
    latitudeGraus: {
      required
    },
    latitudeMinutos: {
      required
    }
  },

  methods: {
    calculate() {
      const latitudeResult = latitude(Number(this.latitudeGraus), Number(this.latitudeMinutos))
      const saturationPressureResult = saturationPressure(Number(this.tempMedia))
      const currentPressureResult = currentPressure(saturationPressureResult, Number(this.umiRelativa))
      const dewPointTemperatureResult = dewPointTemperature(currentPressureResult)
      const etoResult = etoLinacre(Number(this.tempMedia), latitudeResult, Number(this.altitude), dewPointTemperatureResult)

      this.result = etoResult.toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


