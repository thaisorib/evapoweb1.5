<template>
  <header class="header">
    <nav>
      <div class="nav-wrapper container">
        <router-link to="/" class="brand-logo">EvapoWeb</router-link>
        <a href="#" data-activates="mobile-demo" id="button-collapse" class="button-collapse" @click.prevent="activeSideNav"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/penman-monteith">Penman-Monteith(FAO-56)</router-link></li>
          <li><router-link to="/linacre">Linacre</router-link><li>
          <li><router-link to="/hargraves-samani">Hargreaves-Samani</router-link></li>
          <li><router-link to="/jensen-haise">Jensen-Haise</router-link></li>
          <li><router-link to="/makkink">Makkink</router-link></li>
          <li><router-link to="/tanque">Tanque Classe A</router-link></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    activeSideNav() {
      let sideNav = document.getElementById('button-collapse').sideNav()
      return false
    }
  }
}
</script>

<style lang="scss">

</style>