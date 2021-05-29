import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

import './assets/scss/layout.scss'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/bootstrap4-dark-blue/theme.css'
import 'primeflex/primeflex.css'

import 'boxicons'

Vue.config.productionTip = false

Vue.use(PrimeVue, { ripple: true })

new Vue({
  render: h => h(App)
}).$mount('#app')
