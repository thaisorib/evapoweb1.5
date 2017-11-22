<template>
  <div id="error">
    <PageHeader />
    <div class="error-message">
      <h1>Erro 404</h1>
      <h3>Página não encontrada!</h3>
      <router-link class="btn waves-effect waves-light" to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
import PageHeader from "../share/PageHeader";

export default {
  name: "error",
  components: {
    PageHeader
  }
};
</script>

<style lang="scss" scoped>
#error {
  height: 40vw;
}

.error-message {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 6em;
    color: #114e74;
  }

  h3 {
    color: #114e74;
  }

  a {
    margin-top: 2em;
    background-color: #114e74;
  }
}
</style>
