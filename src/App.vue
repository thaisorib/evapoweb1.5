<template>
  <div id="app">
    <page-header/>
    <main>
      <router-view></router-view>
    </main>
    <page-footer/>
  </div>
</template>

<script>
import Home from './pages/Home'
import PageHeader from '@/share/PageHeader'
import PageFooter from '@/share/PageFooter'

export default {
  name: 'app',
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style lang="scss">
#app {
  background-color: #fafafa;
}
</style>
