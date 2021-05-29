<template>
  <div>
    <div class="default-background-color mb-10 p-grid p-shadow-8">
      <div class="p-col">
        <box-icon name="menu" color="#fff"/>
      </div>
      <div class="p-col">
          Painel do Seller
      </div>
      <div class="p-col">
        <box-icon name="exit" color="#fff"></box-icon>
      </div>
    </div>
    <div class="p-grid">
      <div class="p-mt-2 selector">
        <div class="p-col">
          <Button
            label="Hoje"
            :class="`p-button-rounded p-button-sm text-white ${active == 0 ? 'p-button-primary' : 'p-button-secondary'}`"
            @click="active = 0"
          />
        </div>
        <div class="p-col">
          <Button
            label="Mês"
            :class="`p-button-rounded p-button-sm text-white ${active == 1 ? 'p-button-primary' : 'p-button-secondary'}`"
            @click="active = 1"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      active: 0
    }
  }
}
</script>
<style lang="scss">
.mb-10 {
  margin-bottom: 10px;
  padding: 10px;
  color: #fff;
}
.selector {
  position: relative;
  left: 87%;
  width: 120px;
  display: flex;
}
</style>
