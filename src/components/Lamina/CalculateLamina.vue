<template>
  <div id="calculate-lamina">
    <PageHeader />
    <component :is="selectedMethod" v-for="n in 3" :key="n"></component>
  </div>
</template>

<script>
import PenMon from '@/components/PenmanMonteith/PenMonForm'
import HarSam from '@/components/HargreavesSamani/HarSamForm'
import JenHai from '@/components/JensenHaise/JenHaiForm'
import Tanque from '@/components/Tanque/TanqueForm'
import Makkink from '@/components/Makkink/MakkinkForm'
import Linacre from '@/components/Linacre/LinacreForm'

export default {
  components: {
    'penman-monteith': PenMon,
    'hargreves-samani': HarSam,
    'jensen-haise': JenHai,
    Tanque,
    Makkink,
    Linacre
  },

  data() {
    return {
      selectedMethod: this.$route.params.method
    }
  },

  created() {
    this.selectedMethod = this.$route.params.method
  }
}
</script>

<style lang="scss" scoped>
</style>