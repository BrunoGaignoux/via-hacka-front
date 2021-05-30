<template>
  <div>
    <Bonus :key="bonus.id" v-for="bonus in bonusList" :bonus="bonus" />
  </div>
</template>"

<script>
import Bonus from '../molecules/Bonus'

export default {
  name: 'BonusList',
  props: {
    bonusList: Array
  },
  components: {
    Bonus
  }
}
</script>

<style lang="scss" scoped>

</style>
