<template>
  <div id="app">
    <Header/>
    <ViaExpressa/>
    <ScrollTop :threshold="10" />
  </div>
</template>

<script>
import Header from './components/Header'
import ViaExpressa from './components/via-expressa/Index'
import ScrollTop from 'primevue/scrolltop'

export default {
  components: {
    Header,
    ViaExpressa,
    ScrollTop
  },
  name: 'App'
}
</script>
<style lang="scss" scoped>
.mt-10 {
  margin-top: 10px;
}
.p-50 {
  padding: 10%;
}
</style>
