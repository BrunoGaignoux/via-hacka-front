<template>
  <div>
    <div class="p-col">
      <div
        class="p-col-fixed p-shadow-1"
        style="width: 550px; height: 350px; overflow: hidden"
      >
        <div class="p-col-12 p-p-2"></div>
      </div>
    </div>
    <div class="p-col-12 p-px-2">
      <div class="p-inputgroup">
          <InputText class="p-inputtext-md" placeholder="Digite sua mensagem"/>
          <Button icon="pi pi-send" class="p-button-primary"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  }
}
</script>
