<template>
  <div id="penmon">
    <PageHeaderEto/>
    <PenMonForm />
  </div>
</template>

<script>
import PageHeaderEto from '@/share/PageHeaderEto'
import PenMonForm from './PenMonForm'


export default {
  name: "penmon",

  components: {
    PageHeaderEto,
    PenMonForm
  }
}
</script>

<style lang="scss" scoped>
</style>
