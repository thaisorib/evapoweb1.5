<template>
  <div id="calculate-lamina">
    <PageHeader />
    <template v-for="day in dwi">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="card blue darken-1">
            <div class="card-content">
              <h6 class="card-title">Dados do dia: <strong>{{ day }}</strong></h6>
            </div>
          </div>
        </div>
      </div>
      <component :is="selectedMethod" :key="day"></component>
      <div id="precipitation" class="row">
        <div class="col s12 m8 offset-m2">
          <div class="card white darken-1">
            <div class="card-content precipitation-card">
              <span class="card-title">Dados sobre Precipitação</span>
              <div class="row">
                <div class="col s6">
                  <p>Houve precipitação neste dia?</p>
                  <select class="browser-default" v-model="precipitation">
                    <option disabled selected>Houve precipitação:</option>
                    <option value="yes">Sim</option>
                    <option value="no">Não</option>
                  </select>
                </div>
                <div class="col s6" v-if="precipitation === 'yes'">
                  <div class="input-field">
                    <input id="precipitationDay" type="text" class="validate" v-model="precipitationDay">
                    <label for="precipitationDay">Precipitação: (mm)</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr>
    </template>
    <div class="row">
      Resultados Finais
    </div>
  </div>
</template>

<script>
import PageHeader from '@/share/PageHeader'
import PenMon from '@/components/PenmanMonteith/PenMonForm'
import HarSam from '@/components/HargreavesSamani/HarSamForm'
import JenHai from '@/components/JensenHaise/JenHaiForm'
import Tanque from '@/components/Tanque/TanqueForm'
import Makkink from '@/components/Makkink/MakkinkForm'
import Linacre from '@/components/Linacre/LinacreForm'

export default {
  components: {
    PageHeader,
    'penman-monteith': PenMon,
    'hargreaves-samani': HarSam,
    'jensen-haise': JenHai,
    Tanque,
    Makkink,
    Linacre
  },

  data() {
    return {
      precipitation: '',
      precipitationDay: '',
      selectedMethod: '',
      dwi: '',
      kc: ''
    }
  },

  created() {
    this.selectedMethod = this.$route.params.method
    this.dwi = this.$route.query.dwi
    this.kc = this.$route.query.kc
  }
}
</script>

<style lang="scss" scoped>
.precipitation-card {
  margin-top: -30px;
}
</style>