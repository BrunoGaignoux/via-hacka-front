<template>
  <div class="p-col-6">
      <h1>Avaliações</h1>
      <Card class="p-shadow-4 p-my-3" :key="rating.customer" v-for="rating in ratingList">
        <template #content>
          <Rating  :rating="rating" />
        </template>
      </Card>
      <Button label="Contestar avaliação" class="p-button-outlined p-button-help" />
  </div>
</template>

<script>
import Rating from '../molecules/Rating'
import Card from 'primevue/card'
import MockRatingList from '../../mocks/rating/list.json'

export default {
  name: 'RatingList',
  components: {
    Rating,
    Card
  },
  data () {
    return {
      ratingList: MockRatingList
    }
  }
}
</script>

<style lang="scss">
</style>
