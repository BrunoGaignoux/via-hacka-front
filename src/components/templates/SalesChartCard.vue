<template>
  <div>
    <Card class="p-shadow-4 p-my-3">
      <template #title>
        <div class="p-grid">
          <div class="p-col-6">
            Vendas e faturamento
          </div>
          <div class="type-chart p-col-6 p-text-right">
            <box-icon name='calendar-x' :color="dailyActive()" @click="toggleChart('daily')" size="md"></box-icon>
            <box-icon name='calendar' :color="monthlyActive()" @click="toggleChart('monthly')" size="md"></box-icon>
          </div>
        </div>
      </template>
      <template #content>
        <Chart type="line" :data="dataChart" height="100" />
      </template>
    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card'
import Chart from 'primevue/chart'
import MockSalesList from '../../mocks/sales/list.json'

export default {
  name: 'SalesChartCard',
  components: {
    Card,
    Chart
  },
  data () {
    return {
      sales: MockSalesList,
      dataChart: {},
      monthly: true,
      daily: false
    }
  },
  mounted () {
    this.dataChart = this.sales.monthly
  },
  methods: {
    toggleChart (type) {
      if (type === 'daily') {
        this.daily = true
        this.monthly = false
      } else {
        this.daily = false
        this.monthly = true
      }
      this.dataChart = this.sales[type]
    },
    monthlyActive () {
      return this.monthly ? '#6a5aff' : '#F3F4F4'
    },
    dailyActive () {
      return this.daily ? '#6a5aff' : '#F3F4F4'
    }
  }
}
</script>

<style lang="scss" scoped>
.type-chart {
  &:hover {
    cursor: pointer;
  }
}
</style>
