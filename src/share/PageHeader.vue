<template>
  <header class="header">
    <nav>
      <div class="nav-wrapper container">
        <router-link to="/" class="brand-logo">EvapoWeb</router-link>
        <a href="#" data-activates="mobile-demo" ref="buttonCollapse" class="button-collapse">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a class="dropdown-button" data-activates="dropdown" ref="dropdownButton">Métodos ETo<i class="material-icons right">arrow_drop_down</i></a></li>
          <ul id="dropdown" class="dropdown-content">
            <li v-for="link in etoLinks" :key="link.name">
              <router-link :to="link.route">{{link.name}}</router-link>
            </li>
          </ul>
          <li><router-link to="/lamina">Calculo Lâmina</router-link></li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li><router-link to="/">Home</router-link></li>
          <li class="divider"></li>
          <li><router-link to="/lamina">Calculo Lâmina</router-link></li>
          <li class="divider"></li>
          <li v-for="link in etoLinks" :key="link.name">
            <router-link :to="link.route">{{link.name}}</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      etoLinks: [
        {
          route: '/eto/penman-monteith',
          name: 'Penman-Monteith(FAO-56)'
        },
        {
          route: '/eto/linacre',
          name: 'Linacre'
        },
        {
          route: '/eto/hargreaves-samani',
          name: 'Hargreaves-Samani'
        },
        {
          route: '/eto/jensen-haise',
          name: 'Jensen-Haise'
        },
        {
          route: '/eto/makkink',
          name: 'Makkink'
        },
        {
          route: '/eto/tanque',
          name: 'Tanque Classe A'
        }
      ]
    }
  },

  mounted() {
    $(this.$refs.buttonCollapse).sideNav()
    $(this.$refs.dropdownButton).dropdown()
    $(this.$refs.dropdownButtonLamina).dropdown()
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