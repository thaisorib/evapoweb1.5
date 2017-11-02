<template>
  <div id="app">
    <main>
      <router-view></router-view>
    </main>
    <PageFooter/>
  </div>
</template>

<script>
import Home from './pages/Home'
import PageFooter from '@/share/PageFooter'

export default {
  name: 'app',
  components: {
    PageFooter
  }
}
</script>

<style lang="scss">
html {
  height: 100%;
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
    color: #ef5350;
    font-size: .8em;
  }

  .result {
    padding: 10px 0 0 0;
    text-align: center;
    font-size: 3em;
  }
}
</style>
