<template>
  <div class="p-col p-shadow-4">
    <div class="p-col-12 p-p-2">
      <box-icon :name="iconName" :color="iconColor" :size="iconSize" />
    </div>
    <div class="p-col-12 p-p-2">
      <span class="p-text-primary">{{ title }}</span>
    </div>
    <div class="p-col-12 p-p-2">
      <h2 v-if="description">{{ description }}</h2>
      <h2 v-if="money">{{ money | currency }}</h2>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    iconName: String,
    iconColor: {
      type: String,
      default: '#6a5aff',
      required: false
    },
    iconSize: {
      type: String,
      default: 'sm',
      required: false
    },
    title: String,
    description: [String, Number],
    money: [String, Number]
  }
}
</script>
