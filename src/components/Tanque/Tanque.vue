<template>
  <div id="tanque">
    <PageHeaderEto/>
    <TanqueForm />
  </div>
</template>

<script>
import PageHeaderEto from '@/share/PageHeaderEto'
import TanqueForm from './TanqueForm'

export default {
  name: 'tanque',

  components: {
    PageHeaderEto,
    TanqueForm
  }
}
</script>

<style lang="scss" scoped>
</style>