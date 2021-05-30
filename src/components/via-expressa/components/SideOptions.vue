<template>
  <div class="p-grid p-mt-3 p-mr-1">
    <div class="p-col-12 p-mb-3">
      <Button
        label="SKU para campanhas"
        icon="pi pi-ticket"
        iconPos="left"
        class="w-100 p-button-primary p-button-lg"
        @click="openSku = !openSku"
      />
    </div>
    <div class="p-col-12 p-mb-3">
      <Button
        label="Cadastro de metas"
        icon="pi pi-window-maximize"
        iconPos="left"
        class="w-100 p-button-primary p-button-lg"
        @click="openGoal = !openGoal"
      />
    </div>
    <div class="p-col-12 p-mb-3">
      <Button
        label="Comunidade do seller"
        icon="pi pi-inbox"
        iconPos="left"
        class="w-100 p-button-primary p-button-lg"
      />
    </div>
    <div class="p-col-12">
      <Button
        label="Fale conosco"
        icon="pi pi-comment"
        iconPos="left"
        class="w-100 p-button-primary p-button-lg"
        @click="openChat = !openChat"
      />
    </div>

    <!-- modal Chat -->
    <Dialog header="Fale conosco" :visible.sync="openChat" >
      <chat />
    </Dialog>

    <!-- modal Goal Registration -->
    <Dialog header="Cadastro de metas" :visible.sync="openGoal" >
      <goal-registration />
    </Dialog>

    <!-- modal Sku Campain -->
    <Dialog header="SKU para campanhas" :visible.sync="openSku" >
      <sku-campain />
    </Dialog>
  </div>
</template>
<script>
import Dialog from 'primevue/dialog'

export default {
  components: {
    chat: () => import('../modules/Chat'),
    'goal-registration': () => import('../modules/GoalRegistration'),
    'sku-campain': () => import('../modules/SkuCampain'),
    Dialog
  },
  data () {
    return {
      openChat: false,
      openGoal: false,
      openSku: false
    }
  }
}
</script>
