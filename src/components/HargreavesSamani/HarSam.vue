<template>
  <div id="harsam">
    <PageHeaderEto/>
    <HarSamForm />
  </div>
</template>

<script>
import PageHeaderEto from '@/share/PageHeaderEto'
import HarSamForm from './HarSamForm'

export default {
  name: 'harsam',

  components: {
    PageHeaderEto,
    HarSamForm
  },
}
</script>

<style lang="scss" scoped>
</style>
