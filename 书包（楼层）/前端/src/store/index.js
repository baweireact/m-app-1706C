import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentId: 0,
    list: [],
    myBook: []
  },
  mutations: {
    //key是数据名字，value是值
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    getList({ commit }) {
      Api.getList().then(res => {
        if (res.code ===  200) {
          commit({ type: 'setState', key: 'list', value: res.data })
        }
      })
    },
    //获取书包
    getMyBook({ commit }) {
      Api.getMyBook().then(res => {
        if (res.code === 200) {
          commit({ type: 'setState', key: 'myBook', value: res.data })
        }
      })
    }
  },
  modules: {
  }
})
