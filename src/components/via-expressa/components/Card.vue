<template>
  <div class="p-col p-shadow-8">
    <div class="p-col-12 p-p-2">
      <box-icon :name="iconName" :color="iconColor" :size="iconSize" />
    </div>
    <div class="p-col-12 p-p-2">
      <span class="p-text-primary">{{ title }}</span>
    </div>
    <div class="p-col-12 p-p-2">
      <h2>{{ description }}</h2>
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
    description: String
  }
}
</script>
