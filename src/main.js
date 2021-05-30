import Vue from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

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
Vue.component('Chart', Chart)

Vue.config.productionTip = false

Vue.use(PrimeVue, { ripple: true })

new Vue({
  render: h => h(App)
}).$mount('#app')
