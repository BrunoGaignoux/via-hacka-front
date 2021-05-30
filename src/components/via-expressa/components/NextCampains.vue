<template>
  <div class="p-grid p-p-2 p-mr-1">
    <div class="p-col p-shadow-4 p-mt-2">
      <div class="p-col-12 p-p-2">
        <box-icon name="calendar-alt" color="#6a5aff" size="lg" />
      </div>
      <div class="p-col-12 p-p-2">
        <h3>Próximas campanhas</h3>
      </div>
      <div class="p-col-12 p-p-2 p-my-4">
        <Timeline :value="events1">
          <template #marker="slotProps">
            <box-icon
              name="circle"
              :class="`${slotProps.item.active ? 'campain-active' : ''}`"
              :color="slotProps.item.color"
              :size="`${slotProps.item.active ? 'md' : 'xs'}`"
            />
          </template>
          <template #opposite="slotProps">
            <h3
              class="p-text-primary campain-text-active"
              v-if="slotProps.item.active"
            >
              {{ slotProps.item.date }}
            </h3>
            <small class="p-text-secondary" v-else>{{
              slotProps.item.date
            }}</small>
          </template>
          <template #content="slotProps" class="campain-active">
            <h3
              class="p-text-primary p-text-uppercase campain-text-active"
              v-if="slotProps.item.active"
            >
              {{ slotProps.item.name }}
            </h3>
            <small class="p-text-secondary" v-else>{{
              slotProps.item.name
            }}</small>
          </template>
        </Timeline>
      </div>
    </div>
  </div>
</template>
<script>
import Timeline from 'primevue/timeline'

export default {
  components: {
    Timeline
  },
  data () {
    return {
      events1: [
        {
          active: true,
          name: 'Seller +',
          date: '15/06/2021',
          color: 'rgb(106, 90, 255)'
        },
        {
          active: false,
          name: 'Black das Blacks',
          date: '15/10/2021',
          color: '#6a5aff'
        },
        {
          active: false,
          name: 'Parceiro de copo',
          date: '25/10/2021',
          color: '#833ab4'
        },
        {
          active: false,
          name: 'Vem que tem saúde',
          date: '16/12/2021',
          color: '#3f5efb'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.campain-active {
  position: relative;
  bottom: 15px;
}
.campain-text-active {
  color: rgb(106, 90, 255);
  position: relative;
  bottom: 27px;
}
</style>
