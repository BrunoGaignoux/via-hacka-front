<template>
  <div class="price-suggestion-card p-col-12">
    <div class="p-grid">
      <h1 class="title p-col-5 p-text-left p-pl-4 p-my-0">Sugestão de preços</h1>
      <div class="filters p-col-7 p-text-right p-my-auto">
        <InputText type="text" v-model="filters['sku']" class="p-column-filter" placeholder="Filtrar por SKU"/>
      </div>
    </div>
    <Card class="p-shadow-4 p-my-3">
      <template #content>
        <DataTable :value="skusList" :paginator="true" class="p-datatable-customers" :rows="10"
          dataKey="id" :filters="filters" :loading="loading">
          <template #empty>
              Nenhuma sugestão encontrada.
          </template>
          <template #loading>
              Carregando sugestões. Aguarde.
          </template>
          <Column field="sku" header="SKU">
              <template #body="slotProps">
                  {{ slotProps.data.sku }}
              </template>
          </Column>
          <Column field="attributes" header="Atributos">
              <template #body="slotProps">
                  {{ slotProps.data.attributes.join(',\r') }}
              </template>
          </Column>
          <Column field="price" header="Valor">
              <template #body="slotProps">
                  {{ slotProps.data.price }}
              </template>
          </Column>
          <Column field="expectedPrice" header="Preço Sugerido">
              <template #body="slotProps">
                  {{ slotProps.data.expectedPrice }}
              </template>
          </Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from 'primevue/card'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import MockProductSkuList from '../../mocks/products/skuList.json'

export default {
  name: 'PriceSuggestionCard',
  components: {
    Card,
    Column,
    DataTable
  },
  data () {
    return {
      skusList: MockProductSkuList,
      filters: {},
      loading: true
    }
  },
  mounted () {
    this.loading = false
    console.log(this.skusList)
  }
}
</script>

<style lang="scss" scoped>
.price-suggestion-card {
  color: #6a5aff;
}
</style>

<style lang="scss">
.p-column-title {
  color: #6a5aff;
}

.p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
  background: #6a5aff !important;
  border-color: #6a5aff !important;
}

.p-paginator .p-paginator-first, .p-paginator .p-paginator-prev, .p-paginator .p-paginator-next, .p-paginator .p-paginator-last {
  color: #6a5aff !important;
}
</style>
