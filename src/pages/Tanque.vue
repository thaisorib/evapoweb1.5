<template>
  <div id="tanque">
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <div class="card white darken-1">
          <div class="card-content">
            <span class="card-title">Método Tanque Classe A</span>
            <p class="method-description">
              Esse método consiste em medir diariamente a evapotranspiração de um tanque metálico para estimar a ETo.
            </p>
            <br>
            <div class="row">
              <div class="input-field col m6 s12">
                <input id="bordadura" type="text" class="validate" v-model="variables.bordadura">
                <label for="bordadura">Bordadura: (metros)</label>
                <i class="mi mi-face"></i>
                <p class="input-message" v-if="checkBordaduraValue()">O valor de bordadura deve ser entre 1m até 1000m</p>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="umidade-relativa" type="text" class="validate" v-model="variables.umiRelativa">
                <label for="umidade-relativa">Umidade Relativa média diária: (%)</label>
                <p class="input-message" v-if="checkUmidadeValue()">Valor da umidade relativa deve ser entre 30% e 84%</p>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="velocidade-vento" type="text" class="validate" v-model="variables.velocidadeVento">
                <label for="velocidade-vento">Velocidade do vento a 2 metros: (m/2)</label>
                <p class="input-message" v-if="checkVelocidadeVentoValue()">Valor da velocidade do vento deve ser entre 1m/s e 8m/s</p>
              </div>
            </div>
            <div class="row">
              <div class="input-field col m8 s12">
                <input id="eca" type="text" class="validate" v-model="variables.eca">
                <label for="eca">ECA: (mm/dia)</label>
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
import { kp } from '@/functions/kpFunction.js'
import { eto } from '@/functions/etoFunction.js'

export default {
  name: 'tanque',

  data() {
    return {
      result: 0,
      variables: {
        bordadura: '',
        umiRelativa: '',
        velocidadeVento: '',
        eca: ''
      }
    }
  },

  methods: {
    checkBordaduraValue() {
      if(this.variables.bordadura <= 1 || this.variables.bordadura >= 1000) {
        return true
      }
    },
    checkUmidadeValue() {
      if(this.variables.umiRelativa <= 30 || this.variables.umiRelativa >= 84) {
        return true
      }
    },
    checkVelocidadeVentoValue() {
      if(this.variables.umiRelativa <= 1 || this.variables.umiRelativa >= 8) {
        return true
      }
    },
    calculate() {
      let kpResult = kp(this.variables.bordadura, this.variables.umiRelativa, this.variables.velocidadeVento)
      let etoResult = eto(kpResult, this.variables.eca)
      this.result = etoResult.toFixed(2)
    }
  }
}
</script>

<style lang="scss">
  .card {
    color: #333;

    .card-content {
      margin-top: 30px;
    }
  }

  .result {
    padding: 10px 0 0 0;
    text-align: center;
    font-size: 2em;
  }
</style>