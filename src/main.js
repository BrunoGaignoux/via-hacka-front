import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import store from './services/store'
import axios from './services/axios'
import VueCurrencyFilter from 'vue-currency-filter'

import './assets/scss/layout.scss'
import 'primeicons/primeicons.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeflex/primeflex.css'

import 'boxicons'

import Button from 'primevue/button'
import Chart from 'primevue/chart'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Dropdown from 'primevue/dropdown'
import ProgressSpinner from 'primevue/progressspinner'
import FileUpload from 'primevue/fileupload'
import ProgressBar from 'primevue/progressbar'
import Knob from 'primevue/knob'
import Divider from 'primevue/divider'
// import Ripple from 'primevue/ripple';

// Vue.directive('ripple', Ripple);

Vue.component('Button', Button)
Vue.component('InputText', InputText)
Vue.component('RadioButton', RadioButton)
Vue.component('Dropdown', Dropdown)
Vue.component('FileUpload', FileUpload)
Vue.component('ProgressBar', ProgressBar)
Vue.component('ProgressSpinner', ProgressSpinner)
Vue.component('Knob', Knob)
Vue.component('Divider', Divider)
Vue.component('Chart', Chart)

Vue.prototype.$http = axios
Vue.config.productionTip = false

Vue.use(PrimeVue, { ripple: true })
Vue.use(VueCurrencyFilter,
  {
    symbol: 'R$',
    thousandsSeparator: '.',
    fractionCount: 2,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true,
    avoidEmptyDecimals: undefined
  })

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
