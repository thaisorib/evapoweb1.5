<template>
  <div id="linacre">
    <PageHeaderEto />
    <LinacreForm />
  </div>
</template>

<script>
import PageHeaderEto from '@/share/PageHeaderEto'
import LinacreForm from '@/share/LinacreForm'

export default {
  name: 'linacre',

  components: {
    PageHeaderEto,
    LinacreForm
  }
}
</script>

<style lang="scss" scoped>
</style>
