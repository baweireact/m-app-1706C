import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [],
    currentId: 0,
    currentList: []
  },
  mutations: {
    setNav(state, payload) {
      state.navList = payload.navList
    },
    setCurrentId(state, payload) {
      state.currentId = payload.currentId
    },
    setCurrentList(state, payload) {
      state.currentList = payload.currentList
    },
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    getNav({ commit }) {
      axios({
        url: '/api/nav'
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'setNav', navList: res.data.data })
        }
      })
    },
    getList({ state, commit }) {
      axios({
        url: `/api/list?id=${state.currentId}`
      }).then(res => {
        if (res.data.code === 200) {
          commit({ type: 'setState', key: 'currentList', value: res.data.data })
        }
      })
    }
  },
  modules: {
  }
})
