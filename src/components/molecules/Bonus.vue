<template>
  <div class="bonus p-py-2">
     <div class="title p-grid p-ml-2">
        <box-icon name='money' color="#6D6E70"></box-icon>
        <h4 class="p-my-0 p-ml-3">
          {{ bonus.description }}
        </h4>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Bonus',
  props: {
    bonus: {
      description: String
    }
  }
}
</script>

<style lang="scss" scoped>
.bonus {
  .title {
    color: #6D6E70;
  }
}
</style>
