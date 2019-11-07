import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    messageList: []
  },
  mutations: {
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    getMessageList({ commit }) {
      Api.getMessageList().then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'messageList', value: res.data })
        }
      })
    }
  },
  modules: {
  }
})
