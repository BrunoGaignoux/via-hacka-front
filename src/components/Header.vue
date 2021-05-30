<template>
  <div>
    <div class="default-background-color mb-10 p-grid p-shadow-4">
      <div class="p-col-12 p-d-flex p-jc-between p-ai-center">
        <div class="p-d-flex p-ai-center">
          <box-icon
            :name="`${change ? 'x' : 'menu'}`"
            color="#fff"
            @click="change = !change"
            class="bx-tada-hover"
          />
        </div>
        <div class="p-d-flex p-ai-center p-text-bold">
            Painel do Seller
        </div>
        <div class="p-d-flex p-ai-center">
          <Avatar
            image="https://www.primefaces.org/primevue/showcase-v2/demo/images/avatar/amyelsner.png"
            class="p-mr-2"
            shape="circle"
          />
          <span class="p-text-bold">
            Olá, Fernanda
          </span>
        </div>
      </div>
    </div>
    <div class="p-grid">
      <div class="p-col-12 p-d-flex p-ai-center selector p-jc-end">
        <div class="p-d-flex p-ai-center p-mr-3">
          <Button
            label="Hoje"
            :class="`p-button-rounded p-button-sm text-white ${active == 0 ? 'p-button-primary' : 'p-button-secondary'}`"
            @click="active = 0"
          />
        </div>
        <div class="p-d-flex p-ai-center p-mr-3">
          <Button
            label="Semana"
            :class="`p-button-rounded p-button-sm text-white ${active == 1 ? 'p-button-primary' : 'p-button-secondary'}`"
            @click="active = 1"
          />
        </div>
        <div class="p-d-flex p-ai-center p-mr-3">
          <Button
            label="Mês"
            :class="`p-button-rounded p-button-sm text-white ${active == 2 ? 'p-button-primary' : 'p-button-secondary'}`"
            @click="active = 2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from 'primevue/avatar'

export default {
  name: 'Header',
  components: {
    Avatar
  },
  data () {
    return {
      active: 0,
      change: false
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
  margin-top: 15px;
}
.fixed {
  position: fixed;
  width: 100%;
  z-index: 1;
}
</style>
