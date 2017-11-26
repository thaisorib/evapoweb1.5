<template>
  <div id="tanque">
    <PageHeaderEto />
    <MakkinkForm />
  </div>
</template>

<script>
import PageHeaderEto from '@/share/PageHeaderEto'
import MakkinkForm from './MakkinkForm'

export default {
  name: 'makkink',

  components: {
    PageHeaderEto,
    MakkinkForm
  }
}
</script>

<style lang="scss" scoped>
</style>
