<template>
  <div>
    <div class="p-col">
      <div class="p-col p-shadow-1">
        <div class="p-col-12 p-d-flex p-jc-start">Período</div>
        <div class="p-grid p-p-2 p-mt-2">
          <div class="p-col p-p-2">
              <RadioButton inputId="day" name="day" value="day" v-model="period" />
              <label for="day"> Dia</label>
          </div>
          <div class="p-col p-p-2">
              <RadioButton inputId="week" name="week" value="week" v-model="period" />
              <label for="week"> Semana</label>
          </div>
          <div class="p-col p-p-2">
              <RadioButton inputId="month" name="month" value="month" v-model="period" />
              <label for="month"> Mês</label>
          </div>
        </div>
      </div>
    </div>
    <div class="p-grid p-px-2">
      <div class="p-col-7">
        <InputText
          type="number"
          class="w-100 p-inputtext-lg"
          v-model="value"
          placeholder="Quantidade de vendas esperada"
        />
      </div>
      <div class="p-col-5">
        <Button
          label="Cadastrar meta"
          icon="pi pi-save"
          class="w-100 h-45 p-button-md p-button-outlined"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
      period: 'day'
    }
  }
}
</script>
<style lang="scss" scoped>
.h-45 {
  height: 44px;
}
</style>
