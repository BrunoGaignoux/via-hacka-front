<template>
  <div class="training p-py-2" @click="toggleTraining()">
     <div class="title p-grid p-ml-2">
        <box-icon name='book-open' color="#6D6E70"></box-icon>
        <h4 class="p-my-0 p-ml-3">
          {{ training.title }}
        </h4>
      </div>
      <div class="description" v-if="!description.collapsed">
        <p>
          {{ training.description }}
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Training',
  props: {
    training: {
      title: String,
      description: String
    }
  },
  data () {
    return {
      description: {
        collapsed: true
      }
    }
  },
  methods: {
    toggleTraining () {
      this.description.collapsed = !this.description.collapsed
    }
  }
}
</script>

<style lang="scss" scoped>
.training {
  &:hover {
    cursor: pointer;
  }

  .title {
    text-align: left;
    color: #6D6E70;
  }

  .description {
    color: #BBBDBF;
  }
}
</style>
