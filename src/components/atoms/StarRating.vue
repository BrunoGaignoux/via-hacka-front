<template>
  <div>
    <box-icon :key="star" v-for="star in stars.amount" :color="getStarColor(star)" :name="getStarName(star)" type="solid" :size="size" />
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    rating: String,
    size: String
  },
  data: () => {
    return {
      stars: {
        colors: {
          yellow: '#FDCC0D',
          gray: '#f5f6fa'
        },
        names: {
          filled: 'star',
          halfFilled: 'star-half'
        },
        amount: 5
      }
    }
  },
  methods: {
    isItColored (star) {
      const previousStar = star - 1

      return previousStar < this.rating
    },
    getStarColor (star) {
      const typeColors = {
        empty: this.stars.colors.gray,
        filled: this.stars.colors.yellow
      }

      return this.isItColored(star) ? typeColors.filled : typeColors.empty
    },
    getStarName (star) {
      const typeFilled = {
        full: this.stars.names.filled,
        half: this.stars.names.halfFilled
      }
      const previousStar = star - 1

      return this.rating > previousStar && this.rating < star ? typeFilled.half : typeFilled.full
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
