<template>
  <div class="rating p-grid p-ai-center vertical-container">
    <div class="p-col">
      <h5>{{ rating.customer }}</h5>
    </div>
    <div class="p-col">
      <StarRating :rating="rating.value" />
    </div>
    <div class="p-col">
      <box-icon name='message-detail' :type='getDetailsType()' @click="toggleDetails()"></box-icon>
    </div>
    <div class="details p-col-12 p-p-0">
      <p class="p-my-3" v-if="!details.collapsed">
        {{ rating.comment }}
      </p>
    </div>
  </div>
</template>

<script>
import StarRating from '../atoms/StarRating'

export default {
  name: 'Rating',
  props: {
    rating: {
      customer: String,
      value: String,
      comment: String
    }
  },
  data () {
    return {
      details: {
        collapsed: true
      }
    }
  },
  components: {
    StarRating
  },
  methods: {
    getDetailsType () {
      return this.details.collapsed ? 'regular' : 'solid'
    },
    toggleDetails () {
      this.details.collapsed = !this.details.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
.rating {
  background: #F3F4F4;
}
</style>
