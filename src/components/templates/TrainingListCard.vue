<template>
  <div class="p-col-12">
      <Card class="p-shadow-4 p-my-3">
        <template #title>
          Via treinamentos
        </template>
        <template #content>
          <TrainingList :trainingList="trainingList" />
        </template>
        <template #footer>
          <div class="p-text-right">
            <Button label="Ir para treinamentos" class="p-button-outlined p-button-help" />
          </div>
        </template>
      </Card>
  </div>
</template>

<script>
import Card from 'primevue/card'
import MockTrainingList from '../../mocks/training/list.json'
import TrainingList from '../organisms/TrainingList'

export default {
  name: 'TrainingListCard',
  props: {
    traininList: Array
  },
  components: {
    Card,
    TrainingList
  },
  data () {
    return {
      trainingList: MockTrainingList
    }
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
