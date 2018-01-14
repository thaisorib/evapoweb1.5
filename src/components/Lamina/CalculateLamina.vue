<template>
  <div id="calculate-lamina">
    <PageHeader />
    <template v-for="day in dwi">
      <div class="row">
        <div class="col s12 m8 offset-m2">
          <div class="card grey lighten-4">
            <div class="card-content precipitation-heder">
              <h6 class="card-title">Dados do dia: <strong>{{ day }}</strong></h6>
            </div>
          </div>
        </div>
      </div>
      <component :is="selectedMethod" :key="day"></component>
      <Precipitation />
    </template>
    <div class="row">
      <div class="col s12 m8 offset-m2">
        <button class="waves-effect waves-light btn" @click="calculate()">Resultado</button>
      </div>
    </div>
    <Results :laminaBruta="lbisResultNumber" v-if="lbisResultNumber"/>
  </div>
</template>

<script>
import PageHeader from '@/share/PageHeader'
import Precipitation from '@/components/Lamina/Precipitation'
import Results from '@/components/Lamina/Results'
import PenMon from '@/components/PenmanMonteith/PenMonForm'
import HarSam from '@/components/HargreavesSamani/HarSamForm'
import JenHai from '@/components/JensenHaise/JenHaiForm'
import Tanque from '@/components/Tanque/TanqueForm'
import Makkink from '@/components/Makkink/MakkinkForm'
import Linacre from '@/components/Linacre/LinacreForm'

export default {
  components: {
    PageHeader,
    Precipitation,
    Results,
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
      kc: '',
      etcResult: [],
      lbisResult: '',
      llisResult: '',
      lbisResultNumber: '',
      effectivePrecipitationResult: []
    }
  },

  methods: {
    calculate() {
      this.effectivePrecipitation()
      this.etc()
      this.llis()
    },

    effectivePrecipitation() {
      let eto = this.$store.state.eto
      let dailyPrecipitation = this.$store.state.dailyPrecipitation

      this.effectivePrecipitationResult = eto.map((elem, index) => {
        if(dailyPrecipitation[index] < (0.2 * eto[index]) || dailyPrecipitation[index] === 0) {
          return 0
        }
        return (dailyPrecipitation[index] - (0.2) * elem)
      })
    },

    etc() {
      const eto = this.$store.state.eto
      const kc = this.$store.state.kc

      this.etcResult = eto.map((elem, index) => {
        return (eto[index] * kc)
      })
    },

    llis() {
      let systemEfficiency = this.$store.state.systemIrrigationEfficiency

      let llis = this.etcResult.reduce((laminaBruta, val, index) => {
        return laminaBruta + (val - this.effectivePrecipitationResult[index])
      }, 0)

      this.llisResult = Number(llis.toFixed(2))
      this.lbisResultNumber = this.llisResult / (systemEfficiency / 100)
      this.lbisResultNumber.toFixed(2)
    }
  },

  created() {
    this.selectedMethod = this.$route.params.method
    this.dwi = this.$store.state.dwi
    this.kc = this.$store.state.kc
  }
}
</script>

<style lang="scss" scoped>
  .precipitation-heder {
    margin-bottom: -40px;
  }
</style>