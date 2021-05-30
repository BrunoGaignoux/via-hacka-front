<template>
  <div class="p-col-12">
    <Card class="rating-list-card p-shadow-4 p-my-3">
      <template #title>
        <div class="p-text-center">
          Avaliação Geral
        </div>
      </template>
      <template #content>
        <div class="rating p-my-4" :key="rating.customer" v-for="rating in ratingList">
          <Rating  :rating="rating" />
        </div>
        <!-- <Card class="rating p-shadow-1 p-my-2" :key="rating.customer" v-for="rating in ratingList">
          <template #content>
            <Rating  :rating="rating" />
          </template>
        </Card> -->
      </template>
      <template #footer>
        <Button label="Contestar avaliação" class="p-button-outlined p-button-help" />
      </template>
    </Card>
  </div>
</template>

<script>
import Rating from '../molecules/Rating'
import Card from 'primevue/card'
import MockRatingList from '../../mocks/rating/list.json'

export default {
  name: 'RatingListCard',
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

<style lang="scss" scopepd>
  #app .p-card.rating {
    .p-card-body {
      padding: 0;

      .p-card-content {
        padding: 0.2rem;
      }
    }
  }
</style>
