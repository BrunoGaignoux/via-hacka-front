<template>
  <div>
    <div class="p-grid">
      <div class="p-col-6">
        <div class="p-col-12">
          <Dropdown
            class="w-100"
            v-model="campain"
            :options="campains"
            optionLabel="name"
            placeholder="Selecione uma campanha"
            @change="onSelectCampain"
          />
        </div>
        <div class="p-col-12">
          <div
            class="p-col-fixed"
            style="width: 250px; height: 207px"
          >
            <div class="p-grid p-d-flex p-jc-center p-my-6" v-if="load">
                <div class="p-col-12">
                    <ProgressSpinner />
                </div>
                <div class="p-col-12 p-text-capitalize">
                    <span class="p-text-secondary">
                        {{ msg }}
                    </span>
                </div>
            </div>
          </div>
        </div>
        <div class="p-col-12">
            <Button
                label="Enviar csv ou xlsx"
                icon="pi pi-upload"
                iconPos="left"
                class="w-100 p-button-outlined p-mt-5"
                @click="loadFile"
            />
        </div>
      </div>
      <div class="p-col-6">
        <div
          class="p-col-fixed p-shadow-1"
          style="width: 250px; height: 350px; overflow: hidden"
        >
            <div class="p-col-12 p-d-flex p-jc-center">Sugestão de SKU</div>
            <div class="p-col-12" v-if="progress">
                <ProgressBar mode="indeterminate" style="height: .5em" />
            </div>
            <div class="p-col-12">
                <div class="p-col-12" v-for="(item, index) in skus" :key="index">
                    <span class="p-text-secondary">{{ item }}</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import skuList from '../../../services/skuList'

export default {
  data () {
    return {
      load: false,
      progress: false,
      msg: '',
      campain: null,
      campains: [
        {
          name: 'Campanha de New York',
          code: 'NY'
        },
        {
          name: 'Campanha de Rome',
          code: 'RM'
        },
        {
          name: 'Campanha de London',
          code: 'LDN'
        },
        {
          name: 'Campanha de Istanbul',
          code: 'IST'
        },
        {
          name: 'Campanha de Paris',
          code: 'PRS'
        }
      ],
      skus: []
    }
  },
  methods: {
    onSelectCampain () {
      this.progress = !this.progress
      this.skus = []

      setTimeout(() => {
        this.skus = skuList[this.campain.code]
        this.progress = !this.progress
      }, 3000)
    },
    loadFile () {
      this.load = !this.load
      this.msg = 'Enviando seus dados...'

      setTimeout(() => {
        this.msg = 'Enviado com sucesso!'
      }, 1000)

      setTimeout(() => {
        this.load = !this.load
      }, 3000)
    }
  }
}
</script>
