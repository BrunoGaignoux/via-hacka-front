import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  mutations,
  state,
  actions,
  getters,
  plugins: [createPersistedState()],
  strict: process.env.NODE_ENV !== 'production'
})
