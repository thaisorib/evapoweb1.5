<template>
  <header class="header-eto">
    <nav>
      <div class="nav-wrapper container">
        <router-link to="/" class="brand-logo hide-on-large-only">EvapoWeb</router-link>
        <router-link to="/" class="brand-logo show-on-large hide-on-med-and-down">EW</router-link>
        <a href="#" data-activates="mobile-demo" ref="buttonCollapse" class="button-collapse">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/eto/penman-monteith">Penman-Monteith(FAO-56)</router-link></li>
          <li><router-link to="/eto/linacre">Linacre</router-link><li>
          <li><router-link to="/eto/hargreaves-samani">Hargreaves-Samani</router-link></li>
          <li><router-link to="/eto/jensen-haise">Jensen-Haise</router-link></li>
          <li><router-link to="/eto/makkink">Makkink</router-link></li>
          <li><router-link to="/eto/tanque">Tanque Classe A</router-link></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li><router-link to="/eto/">Home</router-link></li>
          <li><router-link to="/eto/penman-monteith">Penman-Monteith(FAO-56)</router-link></li>
          <li><router-link to="/eto/linacre">Linacre</router-link><li>
          <li><router-link to="/eto/hargreaves-samani">Hargreaves-Samani</router-link></li>
          <li><router-link to="/eto/jensen-haise">Jensen-Haise</router-link></li>
          <li><router-link to="/eto/makkink">Makkink</router-link></li>
          <li><router-link to="/eto/tanque">Tanque Classe A</router-link></li>
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

<style lang="scss" scoped>
.header {
  background-color: #114E74;
}

.dropdown-content {
  min-width: 170px;
}
</style>