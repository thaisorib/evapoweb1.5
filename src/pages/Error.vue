<template>
  <div id="error">
    <h1>404</h1>
    <h3>Página não encontrada!</h3>
    <router-link class="btn waves-effect waves-light" to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'error'
}
</script>

<style lang="scss" scoped>
#error {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vw;

  h1 {
    font-size: 6em;
  }

  a {
    margin-top: 2em;
    background-color: #114E74
  }
}
</style>
