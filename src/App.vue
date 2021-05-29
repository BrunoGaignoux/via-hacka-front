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
      <div class="p-col p-shadow-8 p-m-2">
        <Chart type="doughnut" :data="chartDonutData" />
      </div>
      <div class="p-col p-shadow-8 p-m-2">

      </div>
      <div class="p-col p-m-2">
        <div class="p-col p-mb-2">
          <Button label="SKU para campanhas" class="w-100 p-button-primary"/>
        </div>
        <div class="p-col p-mb-2">
          <Button label="Cadastro de metas" class="w-100 p-button-primary"/>
        </div>
        <div class="p-col p-mb-2">
          <Button label="Comunidade do seller" class="w-100 p-button-primary"/>
        </div>
        <div class="p-col">
          <Button label="Fale conosco" class="w-100 p-button-primary"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    Header
  },
  name: 'App',
  data () {
    return {
      chartDonutData: {
        labels: ['A', 'B'],
        datasets: [
          {
            data: [300, 50],
            backgroundColor: [
              '#42A5F5',
              '#FFA726'
            ],
            hoverBackgroundColor: [
              '#64B5F6',
              '#FFB74D'
            ]
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.mt-10 {
  margin-top: 10px;
}
.p-50 {
  padding: 10%;
}
.w-100 {
  width: 100%;
}
</style>
