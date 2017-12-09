<template>
  <div class="row">
    <div class="col s12 m8 offset-m2">
      <div class="card white darken-1">
        <div class="card-content">
          <span class="card-title">Resultado Final:</span>
          <p>{{ laminaBruta }}</p>
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

