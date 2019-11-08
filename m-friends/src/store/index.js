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
    },
    deleteMessage({ commit }, payload) {
      let { id } = payload
      Api.deleteMessage({ id }).then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'messageList', value: res.data })
        }
      })
    },
    like({ commit }, payload) {
      let { id, username } = payload
      Api.like({ id, username }).then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'messageList', value: res.data })
        }
      })
    },
    cancelLike({ commit }, payload) {
      let { id, username } = payload
      Api.cancelLike({ id, username }).then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'messageList', value: res.data })
        }
      })
    },
    comment({ commit }, payload) {
      let { id, comment } = payload
      Api.comment({ id, comment }).then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'messageList', value: res.data })
        }
      })
    }
  },
  modules: {
  }
})
