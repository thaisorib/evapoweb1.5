<template>
  <div id="harsam">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="card white darken-1">
          <div class="card-content">
            <span class="card-title">{{ methodTitle }}</span>
            <p class="method-description">
              {{ methodDescription }}
            </p>
            <br>
            <div class="row">
              <div class="input-field col m4">
                <input id="day" type="text" class="validate" v-model="day" @input="$v.day.$touch()">
                <label for="day">Dia:</label>
                <i class="mi mi-face"></i>
                <span class="error-message" v-if="!$v.day.required">Entre com o valor dia desejado</span>
                <span class="error-message" v-if="!$v.day.numeric">O valor informado deve ser um número</span>
              </div>
              <div class="input-field col m4">
                <input id="month" type="text" class="validate" v-model="month" @input="$v.month.$touch()">
                <label for="month">Mês:</label>
                <i class="mi mi-face"></i>
                <span class="error-message" v-if="!$v.month.required">Entre com o valor mês desejado</span>
                <span class="error-message" v-if="!$v.day.numeric">O valor informado deve ser um número</span>
              </div>
              <div class="input-field col m4">
                <input id="year" type="text" class="validate" v-model="year" @input="$v.year.$touch()">
                <label for="year">Ano:</label>
                <i class="mi mi-face"></i>
                <span class="error-message" v-if="!$v.year.required">Entre com o valor do ano desejado</span>
                <span class="error-message" v-if="!$v.day.numeric">O valor informado deve ser um número</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="temperatureAM" type="text" class="validate" v-model="temperatureAM" @input="$v.temperatureAM.$touch()">
                <label for="temperatureAM">Temperatura: (9 horas)</label>
                <span class="error-message" v-if="!$v.temperatureAM.required">Entre com o valor da temperatura às 9 horas</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="temperaturePM" type="text" class="validate" v-model="temperaturePM" @input="$v.temperaturePM.$touch()">
                <label for="temperaturePM">Temperatura: (21 horas)</label>
                <span class="error-message" v-if="!$v.temperaturePM.required">Entre com o valor da temperatura às 21 horas</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="tempMax" type="text" class="validate" v-model="tempMax" @input="$v.tempMax.$touch()">
                <label for="tempMax">Temperatura Máxima: (˚C)</label>
                <span class="error-message" v-if="!$v.tempMax.required">Entre com o valor da temperatura máxima</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="tempMin" type="text" class="validate" v-model="tempMin" @input="$v.tempMin.$touch()">
                <label for="tempMin">Temperatura mínima: (˚C)</label>
                <span class="error-message" v-if="!$v.tempMin.required">Entre com o valor da temperatura mínima</span>
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
  </div>
</template>

<script>
import { julianDay } from '@/functions/julianDay.js'
import { latitude } from '@/functions/latitudeHarSam.js'
import { averageTemperature } from '@/functions/averageTemperature.js'
import { solarDeclination } from '@/functions/solarDeclination.js'
import { sunriseAngle } from '@/functions/sunriseAngle.js'
import { relativeEarthSun } from '@/functions/relativeEarthSun.js'
import { radiationAtmosphere } from '@/functions/radiationAtmosphere.js'
import { etoHarSam } from '@/functions/etoHarSam.js'
import { required, numeric } from 'vuelidate/lib/validators'

export default {
  name: 'harsam',

  data() {
    return {
      result: 0,
      methodTitle: 'Metodo Hargreaves-Samani',
      methodDescription: 'O modelo de Hargreaves e Samani é utilizado na estimativa da evapotranspiração de referência, sendo muito útil para o manejo da irrigação, sendo o mesmo considerado de uso prático, pois utiliza elementos meteorológicos de fácil obtenção como a temperatura.',
      day: '',
      month: '',
      year: '',
      temperatureAM: '',
      temperaturePM: '',
      tempMax: '',
      tempMin: '',
      latitudeGraus: '',
      latitudeMinutos: ''
    }
  },

  validations: {
    day: {
      numeric,
      required
    },
    month: {
      numeric,
      required
    },
    year: {
      numeric,
      required
    },
    temperatureAM: {
      required
    },
    temperaturePM: {
      required
    },
    tempMax: {
      required
    },
    tempMin: {
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
      let julianDayResult = julianDay(Number(this.day), Number(this.month), Number(this.year))
      let averageTemperatureResult = averageTemperature(Number(this.temperatureAM), Number(this.temperaturePM), Number(this.tempMax), Number(this.tempMin))
      let latitudeResult = latitude(Number(this.latitudeGraus), Number(this.latitudeMinutos))
      let solarDeclinationResult = solarDeclination(julianDayResult)
      let sunriseAngleResult = sunriseAngle(latitudeResult, solarDeclinationResult)
      let relativeEarthSunResult = relativeEarthSun(julianDayResult)
      let radiationAtmosphereResult = radiationAtmosphere(relativeEarthSunResult, latitudeResult, solarDeclinationResult, sunriseAngleResult)
      let etoResult = etoHarSam(Number(this.tempMax), Number(this.tempMin), averageTemperatureResult, radiationAtmosphereResult)

      this.result = etoResult.toFixed(2)
    }
  }
}
</script>

<style lang="scss">
</style>
