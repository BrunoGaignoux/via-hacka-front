<template>
  <div id="app">
    <Header/>
    <ViaExpressa/>
    <ScrollTop :threshold="10" />
    <div class="p-grid">
      <div class="p-col">
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
    CatalogPower
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
