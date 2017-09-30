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
              <div class="input-field col m6 s12">
                <input id="bordadura" type="text" class="validate" v-model="bordadura" @input="$v.bordadura.$touch()">
                <label for="bordadura">Bordadura: (metros)</label>
                <i class="mi mi-face"></i>
                <span class="error-message" v-if="!$v.bordadura.between">O valor de bordadura deve ser entre 1m até 1000m</span>
                <span class="error-message" v-if="!$v.bordadura.required">Este campo é obrigatório</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m6 s12">
                <input id="umidade-relativa" type="text" class="validate" v-model="umiRelativa" @input="$v.umiRelativa.$touch()">
                <label for="umidade-relativa">Umidade Relativa média diária: (%)</label>
                <span class="error-message" v-if="!$v.umiRelativa.between">Valor da umidade relativa deve ser entre 30% e 84%</span>
                <span class="error-message" v-if="!$v.umiRelativa.required">Este campo é obrigatório</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m6 s12">
                <input id="velocidade-vento" type="text" class="validate" v-model="velocidadeVento" @input="$v.velocidadeVento.$touch()">
                <label for="velocidade-vento">Velocidade do vento a 2 metros: (m/2)</label>
                <span class="error-message" v-if="!$v.velocidadeVento.between">Valor da velocidade do vento deve ser entre 1m/s e 8m/s</span>
                <span class="error-message" v-if="!$v.velocidadeVento.required">Este campo é obrigatório</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m6 s12">
                <input id="eca" type="text" class="validate" v-model="eca" @input="$v.eca.$touch()">
                <label for="eca">ECA: (mm/dia)</label>
                <p class="error-message" v-if="!$v.eca.required">Este campo é obrigatório</p>
              </div>
            </div>
            <div class="row" v-if="result">
              <div class="col m8 s12 offset-m2">
                <p class="result">{{ result }} mm/dia</p>
              </div>
            </div>
          </div>
          <div class="card-action">
            <button class="waves-effect waves-light btn" @click="calculate">Calcular</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { kp } from '@/functions/kp.js'
import { eto } from '@/functions/eto.js'
import { required, between } from 'vuelidate/lib/validators'

export default {
  name: 'tanque',

  data() {
    return {
      result: 0,
      methodDescription: 'Esse método consiste em medir diariamente a evapotranspiração de um tanque metálico para estimar a ETo.',
      methodTitle: 'Método Tanque Classe A',
      bordadura: '',
      umiRelativa: '',
      velocidadeVento: '',
      eca: ''
    }
  },

  validations: {
    bordadura: {
      required,
      between: between(1, 1000)
    },
    umiRelativa: {
      required,
      between: between(30, 84)
    },
    velocidadeVento: {
      required,
      between: between(1, 8)
    },
    eca: {
      required
    }
  },

  methods: {
    calculate() {
      let kpResult = kp(this.bordadura, this.umiRelativa, this.velocidadeVento)
      let etoResult = eto(kpResult, this.eca)
      this.result = etoResult.toFixed(2)
    }
  }
}
</script>

<style lang="scss">
</style>