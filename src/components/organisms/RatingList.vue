<template>
  <div>
      <h1>Avaliações</h1>
      <!-- <Rating :v-for="rating in ratingList" :rating="rating" /> -->
  </div>
</template>

<script>
// import Rating from '../molecules/Rating'

export default {
  name: 'RatingList',
  props: {
    ratingList: Array
  },
  mounted: () => {
    console.log(this.ratingList)
  },
  components: {
    // Rating
  }
}
</script>

<style lang="scss" scoped>

</style>
