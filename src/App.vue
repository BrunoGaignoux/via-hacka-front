<template>
  <div id="app">
    <Header/>
    <vs-row vs-align="center" vs-type="flex" vs-justify="space-around" vs-w="12">
      <div class="selector">
        <div class="col-6">
          <vs-button
            flat
            :active="active == 0"
            @click="active = 0"
          >
            Hoje
          </vs-button>
        </div>
        <div class="col-6">
          <vs-button
            flat
            :active="active == 1"
            @click="active = 1"
          >
            Mês
          </vs-button>
        </div>
      </div>
    </vs-row>
  </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  components: { Header },
  name: 'App',
  data () {
    return {
      active: 1
    }
  },
  created () {
    const loading = this.$vs.loading({
      type: 'circles'
    })

    setTimeout(() => {
      loading.close()
    }, 2000)
  }
}
</script>
<style lang="scss" scoped>
.selector {
  position: relative;
  left: 93%;
  width: 120px;
  display: flex;
}
</style>
