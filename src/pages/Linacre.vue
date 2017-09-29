<template>
  <div id="linacre">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="card white darken-1">
          <div class="card-content">
            <span class="card-title">Método Linacre</span>
            <p class="method-description">
              Este método considera a temperatura do ar como única variável local para estimar a evapotranspiração média (mm.d-1) de uma área bem suprimida de umidade.
            </p>
            <br>
            <div class="row">
              <div class="input-field col m6 s12">
                <input id="temp-media" type="text" class="validate" v-model="variables.bordadura">
                <label for="temp-media">Temperatura média: (ºC)</label>
                <i class="mi mi-face"></i>
                <p class="input-message" v-if="checkTempMediaValue()">Entre com o valor da temperatura média</p>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="umidade-relativa" type="text" class="validate" v-model="variables.umiRelativa">
                <label for="umidade-relativa">Umidade Relativa média diária: (%)</label>
                <p class="input-message" v-if="checkUmidadeValue()">Entre com o valor da Umidade Relativa</p>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="altitude" type="text" class="validate" v-model="variables.altitude">
                <label for="altitude">Altitude: (metros)</label>
                <p class="input-message" v-if="checkAltitudeValue()">Entre com o valor da altitude em metros</p>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m4 s6">
                <input id="latitude-graus" type="text" class="validate" v-model="variables.latitudeGraus">
                <label for="latitude-graus">Latitude em graus:</label>
              </div>
              <div class="input-field col m4 s6">
                <input id="latitude-minutos" type="text" class="validate" v-model="variables.latitudeMinutos">
                <label for="latitude-minutos">Latitude em minutos:</label>
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
  </div>
</template>

<script>
import { latitude } from '@/functions/latitude.js'

export default {
  name: 'linacre',

  data() {
    return {
      result: 0,
      variables: {
        tempMedia: '',
        umiRelativa: '',
        altitude: '',
        latitudeGraus:'',
        latitudeMinutos: ''
      }
    }
  },

  methods: {
    checkTempMediaValue() {
      if(this.variables.bordadura === '') {
        return true
      }
    },
    checkUmidadeValue() {
      if(this.variables.umiRelativa <= 30 || this.variables.umiRelativa >= 84) {
        return true
      }
    },
    checkAltitudeValue() {
      if(this.variables.altitude === '') {
        return true
      }
    },
    calculate() {
      let latitudeResult = latitude(this.variables.latitudeGraus, this.variables.latitudeMinutos)
      this.result = latitudeResult;
    }
  }
}
</script>

<style lang="scss">
</style>
