<template>
  <div id="tanque">
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
              <input id="day" type="text" class="validate" v-model.number="day" @input="$v.day.$touch()">
                <label for="day">Dia:</label>
                <i class="mi mi-face"></i>
                <span class="error-message" v-if="!$v.day.required">Entre com o valor dia desejado</span>
                <span class="error-message" v-if="!$v.day.numeric">O valor informado deve ser um número</span>
                <!-- <select v-model.number="day">
                  <option value="" disabled selected>Dia:</option>
                  <option value="1">Option 1</option>
                </select>
                <label>Selecione uma data:</label> -->
              </div>
              <div class="input-field col m4">
                <input id="month" type="text" class="validate" v-model.number="month" @input="$v.month.$touch()">
                <label for="month">Mês:</label>
                <i class="mi mi-face"></i>
                <span class="error-message" v-if="!$v.month.required">Entre com o valor mês desejado</span>
                <span class="error-message" v-if="!$v.day.numeric">O valor informado deve ser um número</span>
              </div>
              <div class="input-field col m4">
                <input id="year" type="text" class="validate" v-model.number="year" @input="$v.year.$touch()">
                <label for="year">Ano:</label>
                <i class="mi mi-face"></i>
                <span class="error-message" v-if="!$v.year.required">Entre com o valor do ano desejado</span>
                <span class="error-message" v-if="!$v.day.numeric">O valor informado deve ser um número</span>
              </div>
            </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="temperature9AM" type="text" class="validate" v-model.number="temp9AM" @input="$v.temp9AM.$touch()">
                <label for="temperature9AM">Temperatura: (9 horas)</label>
                <span class="error-message" v-if="!$v.temp9AM.required">Entre com o valor da temperatura às 9 horas</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="temperature15PM" type="text" class="validate" v-model.number="temp15PM" @input="$v.temp15PM.$touch()">
                <label for="temperature15PM">Temperatura: (15 horas)</label>
                <span class="error-message" v-if="!$v.temp15PM.required">Entre com o valor da temperatura às 15 horas</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="temperature121PM" type="text" class="validate" v-model.number="temp21PM" @input="$v.temp21PM.$touch()">
                <label for="temperature15PM">Temperatura: (21 horas)</label>
                <span class="error-message" v-if="!$v.temp21PM.required">Entre com o valor da temperatura às 21 horas</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="wetBulb9AM" type="text" class="validate" v-model.number="wetBulb9AM" @input="$v.wetBulb9AM.$touch()">
                <label for="wetBulb9AM">Temperatura do bulbo: (9 horas)</label>
                <span class="error-message" v-if="!$v.wetBulb9AM.required">Entre com o valor da temperatura às 9 horas</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="wetBulb15PM" type="text" class="validate" v-model.number="wetBulb15PM" @input="$v.wetBulb15PM.$touch()">
                <label for="wetBulb15PM">Temperatura do bulbo: (15 horas)</label>
                <span class="error-message" v-if="!$v.wetBulb15PM.required">Entre com o valor da temperatura às 15 horas</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="wetBulb21PM" type="text" class="validate" v-model.number="wetBulb21PM" @input="$v.wetBulb15PM.$touch()">
                <label for="wetBulb15PM">Temperatura do bulbo: (21 horas)</label>
                <span class="error-message" v-if="!$v.wetBulb15PM.required">Entre com o valor da temperatura às 21 horas</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="atmosphericPressure" type="text" class="validate" v-model.number="atmosphericPressure" @input="$v.atmosphericPressure.$touch()">
                <label for="atmosphericPressure">Pressão atmosférica: (kPa)</label>
                <p class="error-message" v-if="!$v.atmosphericPressure.required">Este campo é obrigatório</p>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="insolation" type="text" class="validate" v-model.number="insolation" @input="$v.insolation.$touch()">
                <label for="insolation">Insolação: (horas)</label>
                <p class="error-message" v-if="!$v.insolation.required">Este campo é obrigatório</p>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m4 s6">
                <input id="latitude-graus" type="text" class="validate" v-model.number="latitudeGraus" @input="$v.latitudeGraus.$touch()">
                <label for="latitude-graus">Latitude em graus:</label>
                <span class="error-message" v-if="!$v.latitudeGraus.required">Entre com o valor da latitude em graus</span>
              </div>
              <div class="input-field col m4 s6">
                <input id="latitude-minutos" type="text" class="validate" v-model.number="latitudeMinutos" @input="$v.latitudeMinutos.$touch()">
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
            <button class="waves-effect waves-light btn" @click.prevent="calculate">Calcular</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { averageTempMakkink } from '@/functions/averageTempMakkink.js'
import { saturationPressure } from '@/functions/saturationPressure.js'
import { julianDay } from '@/functions/julianDay.js'
import { solarDeclination } from '@/functions/solarDeclination.js'
import { wetBulbTemp } from '@/functions/wetBulbTemp.js'
import { latitude } from '@/functions/latitudeHarSam.js'
import { weightingFactor } from '@/functions/weightingFactor.js'
import { saturationPressureCurve } from '@/functions/saturationPressureCurve.js'
import { psychrometricCoefficient } from '@/functions/psychrometricCoefficient.js'
import { radiationAtmosphere } from '@/functions/radiationAtmosphere.js'
import { durationDay } from '@/functions/durationDay.js'
import { radiano } from '@/functions/radiano.js'
import { required, between } from 'vuelidate/lib/validators'

export default {
  name: 'makkink',

  data() {
    return {
      result: 0,
      methodTitle: 'Método Makkink',
      methodDescription: 'Este método baseia-se na correlação entre evapotranspiração potencial diária e radiação solar.',
      day: '',
      month: '',
      year: '',
      temp9AM: '',
      temp15PM: '',
      temp21PM: '',
      wetBulb9AM: '',
      wetBulb15PM: '',
      wetBulb21PM: '',
      insolation: '',
      latitudeGraus: '',
      latitudeMinutos: '',
      atmosphericPressure: '',
    }
  },

  validations: {
    day: {
      required,
      between: between(1, 31)
    },
    month: {
      required,
      between: between(1, 12)
    },
    year: {
      required
    },
    temp9AM: {
      required
    },
    temp15PM: {
      required
    },
    temp21PM: {
      required
    },
    wetBulb9AM: {
      required
    },
    wetBulb15PM: {
      required
    },
    wetBulb21PM: {
      required
    },
    insolation: {
      required
    },
    latitudeGraus: {
      required
    },
    latitudeMinutos: {
      required
    },
    insolation: {
      required
    },
    atmosphericPressure: {
      required
    }
  },

  methods: {
    calculate() {
      let julianDayResult = julianDay(this.day, this.month, this.year)
      let averageTempMakkinkResult = averageTempMakkink(this.temp9AM, this.temp15PM, this.temp21PM)
      let wetBulbTempResult = wetBulbTemp(this.wetBulb9AM, this.wetBulb15PM, this.wetBulb21PM)
      let weightingFactorResult = weightingFactor(wetBulbTempResult)
      let saturationPressureResult = saturationPressure(averageTempMakkinkResult)
      let saturationPressureCurveResult = saturationPressureCurve(steamSaturationPressureMakkinkResult, averageTempMakkinkResult)
      let psychrometricCoefficientResult = psychrometricCoefficient(this.atmosphericPressure)
      let solarDeclinationResult = solarDeclination(julianDayResult)
      let relativeEarthSunResult = relativeEarthSun(julianDayResult)
      let latitudeResult = latitude(this.latitudeGraus, this.latitudeMinutos)
      let sunriseAngleResult = sunriseAngle(latitudeResult, solarDeclinationResult)
      let radiationAtmosphereResult = radiationAtmosphere(relativeEarthSunResult, latitudeResult, solarDeclinationResult, sunriseAngleResult)
      let durationDayResult = durationDay(sunriseAngleResult)
      let radianoResult = radiano(latitudeResult)
      let incidentSolarRadiationResult = incidentSolarRadiation(radiano, this.insolation, durationDayResult)

      let etoResult = etoMakkink(weightingFactorResult, incidentSolarRadiationResult)
      this.result = etoResult
    }
  },

  mounted() {
    $('select').material_select()
  }
}
</script>

<style lang="scss">
</style>
