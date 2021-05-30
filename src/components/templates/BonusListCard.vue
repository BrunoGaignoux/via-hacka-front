<template>
  <div class="p-col-12">
      <Card class="p-shadow-4 p-my-3">
        <template #title>
          <h4 class="p-mt-1 p-mb-3">
            Via Bônus
          </h4>
        </template>
        <template #content>
          <BonusList :bonusList="bonusList" />
        </template>
      </Card>
  </div>
</template>

<script>
import Card from 'primevue/card'
import MockBonusList from '../../mocks/bonus/list.json'
import BonusList from '../organisms/BonusList'

export default {
  name: 'BonusListCard',
  components: {
    Card,
    BonusList
  },
  data () {
    return {
      bonusList: MockBonusList
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
