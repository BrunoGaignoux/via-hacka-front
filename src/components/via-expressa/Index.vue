<template>
    <div class="p-grid">
      <div class="p-col-8 p-mt-3 p-p-2">
        <div class="p-grid p-p-2">
          <div class="p-col-6">
            <card-dash iconName="line-chart" iconSize="lg" title="Minhas Vendas" description="8.563" />
          </div>
          <div class="p-col-6">
            <card-dash iconName="dollar" iconSize="lg" title="Meu Faturamento" description="R$ 15.256.520,53" />
          </div>
          <div class="p-col-6">
            <card-dash iconName="line-chart-down" iconSize="lg" title="Média de Vendas do Mercado" description="5.682" />
          </div>
          <div class="p-col-6">
            <card-dash iconName="dollar-circle" iconSize="lg" title="Média de Faturamento do Mercado" description="R$ 1.256.520,53" />
          </div>
        </div>
        <div class="p-grid">
          <div class="p-col-6">
            <goal-dash title="Meta recomendada" :value="95"/>
          </div>
          <div class="p-col-6">
            <goal-dash title="Meta personalizada" :value="34"/>
          </div>
        </div>
      </div>
      <div class="p-col-4 p-mt-3 p-p-2">
        <next-campains />
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
  }
}
</script>
