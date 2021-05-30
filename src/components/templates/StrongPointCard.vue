<template>
  <div class="p-col-6">
      <Card class="p-shadow-4 p-my-3">
        <template #title>
          <h4 class="p-mt-1 p-mb-3 p-text-center">
            <box-icon :name='icon' type='solid' size="lg" color="#6a5aff"></box-icon>
            <p class="p-m-auto p-p-0">{{ title }}</p>
          </h4>
        </template>
        <template #content>
          {{ message }}
        </template>
      </Card>
  </div>
</template>

<script>
import Card from 'primevue/card'

export default {
  name: 'StrongPointCard',
  components: {
    Card
  },
  props: {
    title: String,
    message: String,
    icon: String
  }
}
</script>

<style lang="scss">
.p-card {
  .p-card-title {
    color: #6a5aff;
    text-align: left;
  }
}
</style>
