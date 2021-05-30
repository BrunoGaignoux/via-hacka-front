<template>
  <div class="p-py-5">
    <h4>{{ progress | situation }}</h4>
    <ProgressBar :value="progress" />
  </div>
</template>

<script>
import ProgressBar from 'primevue/progressbar'

export default {
  name: 'CatalogPower',
  components: {
    ProgressBar
  },
  props: {
    progress: Number
  },
  filters: {
    situation (value) {
      return value >= 50 ? 'Seu catálogo está bom, mas ainda pode melhorar...' : 'A força do seu catálogo está baixa. Atenção!'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
