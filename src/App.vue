<template>
  <div id="app">
    <Header/>
    <div class="p-grid">
      <div class="p-col-8 p-mt-3 p-p-2">
        <div class="p-grid p-p-2">
          <div class="p-col-6 p-shadow-8">
            6
          </div>
          <div class="p-col-6 p-shadow-8">
            6
          </div>
          <div class="p-col-6 p-shadow-8">
            6
          </div>
          <div class="p-col-6 p-shadow-8">
            6
          </div>
        </div>
      </div>
      <div class="p-col-4 p-mt-3 p-p-2">
        <div class="p-grid p-p-2">
          <div class="p-col-12 p-shadow-8">
            6
          </div>
        </div>
      </div>
    </div>
    <div class="p-grid p-mt-3">
      <div class="p-col p-shadow-8 p-m-2">1</div>
      <div class="p-col p-shadow-8 p-m-2">2</div>
      <div class="p-col p-shadow-8 p-m-2">3</div>
    </div>
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
  }
}
</script>
<style lang="scss" scoped>
.selector {
  position: relative;
  left: 47%;
  width: 120px;
  display: flex;
}
.mt-10 {
  margin-top: 10px;
}
.p-50 {
  padding: 10%;
}
</style>
