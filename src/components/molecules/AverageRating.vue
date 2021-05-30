<template>
  <div>
    <h1 class="p-mb-0">{{ rating }}</h1>
    <StarRating :rating=rating />
  </div>
</template>

<script>
import StarRating from '../atoms/StarRating'

export default {
  name: 'AverageRating',
  props: {
    rating: String
  },
  components: {
    StarRating
  }
}
</script>

<style lang="scss" scoped>

</style>
