import axios from '../axios'

const actions = {
  getSales ({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/vendas')
        .then(response => {
          commit('SET_SALES_INFO', response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getRevenues ({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/faturamento')
        .then(response => {
          commit('SET_REVENUES_INFO', response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getCampains ({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/campanhas')
        .then(response => {
          commit('SET_CAMPAINS', response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getGoals ({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/metas')
        .then(response => {
          commit('SET_GOALS', response.data.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default actions
