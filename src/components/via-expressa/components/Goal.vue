<template>
    <div class="p-col p-my-3">
        <div class="p-col-12 p-p-2">
            <h3>{{ title }}</h3>
        </div>
        <div class="p-col-12 p-p-2">
            <Knob
              v-model="value"
              valueTemplate="{value}%"
              disabled
              :size="300"
              valueColor="#6a5aff"
              rangeColor="#cccccc"
            />
        </div>
    </div>
</template>
<script>
export default {
  props: {
    title: String,
    value: Number
  }
}
</script>
