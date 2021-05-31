const mutations = {
  SET_SALES_INFO (state, payload) {
    state.mysales = payload.mysales
    state.marketsales = payload.marketsales
  },

  SET_REVENUES_INFO (state, payload) {
    state.myrevenues = payload.myrevenues
    state.marketrevenues = payload.marketrevenues
  },

  SET_CAMPAINS (state, payload) {
    state.campains = payload
  },

  SET_GOALS (state, payload) {
    state.goals = payload
  }
}

export default mutations
