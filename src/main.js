import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
import './assets/scss/layout.scss'
import 'boxicons'

Vue.config.productionTip = false

Vue.use(Vuesax, {
  // options here
})

new Vue({
  render: h => h(App)
}).$mount('#app')
