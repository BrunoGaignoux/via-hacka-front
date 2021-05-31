<template>
  <div id="app">
    <Header/>
    <ViaExpressa/>
    <ScrollTop :threshold="10" />
    <Divider align="center" type="dashed" class="p-mt-6">
        <b>Via Local</b>
    </Divider>
    <div class="p-grid p-mt-6">
      <div class="p-col">
        <div class="p-grid">
          <StrongPointCard title="Ponto Forte" icon="user-plus" message="Qualidade no atendimento" />
          <StrongPointCard title="Ponto a fortalecer" icon="user-minus" message="Valor do frete" />
        </div>
        <TrainingListCard />
        <BonusListCard />
      </div>
      <div class="p-col">
        <AverageRating :rating="4.5" />
        <RatingListCard />
      </div>
    </div>
    <CatalogPower :progress=65 />
    <PriceSuggestionCard />
    <SalesChartCard />
  </div>
</template>

<script>
import Header from './components/Header'
import ViaExpressa from './components/via-expressa/Index'
import PriceSuggestionCard from './components/templates/PriceSuggestionCard'
import ScrollTop from 'primevue/scrolltop'
import TrainingListCard from './components/templates/TrainingListCard'
import BonusListCard from './components/templates/BonusListCard'
import RatingListCard from './components/templates/RatingListCard'
import AverageRating from './components/molecules/AverageRating'
import SalesChartCard from './components/templates/SalesChartCard'
import CatalogPower from './components/molecules/CatalogPower'
import StrongPointCard from './components/templates/StrongPointCard'

export default {
  name: 'App',
  components: {
    AverageRating,
    Header,
    ViaExpressa,
    ScrollTop,
    TrainingListCard,
    BonusListCard,
    RatingListCard,
    PriceSuggestionCard,
    SalesChartCard,
    CatalogPower,
    StrongPointCard
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
</style>
