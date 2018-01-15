<template>
  <div class="row">
    <div class="col s12 m8 offset-m2">
      <div class="card white darken-1">
        <div class="card-content">
          <span class="card-title">Resultado Final:</span>
            <h5 v-if="laminaBruta > 0">Olá! Você precisa irrigar {{ laminaBruta.toFixed(2) }} milímetros hoje!</h5>
            <h5 v-else>Olá! Você não necessita irrigar, pois durante esses dias a chuva foi suficiente para atender a necessidade hídrica da sua cultura!</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Results',
  props: ['laminaBruta']
}
</script>

