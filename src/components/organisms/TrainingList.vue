<template>
  <div>
    <Training :key="training.id" v-for="training in trainingList" :training="training"/>
  </div>
</template>

<script>
import Training from '../molecules/Training'

export default {
  name: 'TrainingList',
  components: {
    Training
  },
  props: {
    trainingList: Array
  }
}
</script>

<style lang="scss" scoped>
</style>
