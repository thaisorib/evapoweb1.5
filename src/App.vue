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

html {
  height: 100%
}

body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

#app {
  background-color: #fafafa;
  flex: 1;

  nav {
    background-color: #114E74;
  }

  .method-description {
    color: #727273;
  }

  .card {
    color: #333;

    .card-content {
      margin-top: 30px;
    }
  }

  .error-message {
    color: #ff0000e6;
    font-size: .8em;
  }

  .result {
    padding: 10px 0 0 0;
    text-align: center;
    font-size: 2em;
  }
}
</style>
