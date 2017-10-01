<template>
  <header class="header">
    <nav>
      <div class="nav-wrapper container">
        <router-link to="/" class="brand-logo hide-on-large-only">EvapoWeb</router-link>
        <router-link to="/" class="brand-logo show-on-large hide-on-med-and-down">EW</router-link>
        <a href="#" data-activates="mobile-demo" ref="buttonCollapse" class="button-collapse">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/penman-monteith">Penman-Monteith(FAO-56)</router-link></li>
          <li><router-link to="/linacre">Linacre</router-link><li>
          <li><router-link to="/hargreaves-samani">Hargreaves-Samani</router-link></li>
          <li><router-link to="/jensen-haise">Jensen-Haise</router-link></li>
          <li><router-link to="/makkink">Makkink</router-link></li>
          <li><router-link to="/tanque">Tanque Classe A</router-link></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/penman-monteith">Penman-Monteith(FAO-56)</router-link></li>
          <li><router-link to="/linacre">Linacre</router-link><li>
          <li><router-link to="/hargreaves-samani">Hargreaves-Samani</router-link></li>
          <li><router-link to="/jensen-haise">Jensen-Haise</router-link></li>
          <li><router-link to="/makkink">Makkink</router-link></li>
          <li><router-link to="/tanque">Tanque Classe A</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  mounted() {
    $(this.$refs.buttonCollapse).sideNav()
  }
}
</script>

<style lang="scss">
</style>