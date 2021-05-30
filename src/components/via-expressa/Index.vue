<template>
    <div class="p-grid">
      <div class="p-col-8 p-mt-3 p-p-2">
        <div class="p-grid p-p-2">
          <div class="p-col-6">
            <card-dash iconName="line-chart" iconSize="lg" title="Minhas Vendas" :description="$store.getters.mysales" />
          </div>
          <div class="p-col-6">
            <card-dash iconName="dollar" iconSize="lg" title="Meu Faturamento" :money="$store.getters.myrevenues" />
          </div>
          <div class="p-col-6">
            <card-dash iconName="line-chart-down" iconSize="lg" title="Média de Vendas do Mercado" :description="$store.getters.marketsales" />
          </div>
          <div class="p-col-6">
            <card-dash iconName="dollar-circle" iconSize="lg" title="Média de Faturamento do Mercado" :money="$store.getters.marketrevenues" />
          </div>
        </div>
        <div class="p-grid">
          <div class="p-col-6">
            <goal-dash title="Meta recomendada" :value="$store.getters.goals.recommended.difference"/>
          </div>
          <div class="p-col-6">
            <goal-dash title="Meta personalizada" :value="$store.getters.goals.custom.difference"/>
          </div>
        </div>
      </div>
      <div class="p-col-4 p-mt-3 p-p-2">
        <next-campains :data="$store.getters.campains" />
        <side-options />
      </div>
    </div>
</template>
<script>
export default {
  name: 'via-expressa',
  components: {
    'card-dash': () => import('./components/Card'),
    'goal-dash': () => import('./components/Goal'),
    'next-campains': () => import('./components/NextCampains'),
    'side-options': () => import('./components/SideOptions')
  },
  methods: {
    getSales () {
      this.$store
        .dispatch('getSales')
        .catch(e => {
          console.log(e)
        })
    },
    getRevenues () {
      this.$store
        .dispatch('getRevenues')
        .catch(e => {
          console.log(e)
        })
    },
    getCampains () {
      this.$store
        .dispatch('getCampains')
        .catch(e => {
          console.log(e)
        })
    },
    getGoals () {
      this.$store
        .dispatch('getGoals')
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.getSales()
    this.getRevenues()
    this.getCampains()
    this.getGoals()

    setInterval(() => {
      this.getSales()
      this.getRevenues()
      this.getCampains()
      this.getGoals()
    }, 120000)
  }
}
</script>
