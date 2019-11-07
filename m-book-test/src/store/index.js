import Vue from 'vue'
import Vuex from 'vuex'
import Api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList: [],
    currentId: 0,
    currentList: [],
    myBook: []
  },
  mutations: {
    //key是数据名字，value是值
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    //导航
    getNav({ commit }) {
      Api.getNav().then(res => {
        if (res.code === 200) {
          //提交mutations，更改store里的数据
          commit({ type: 'setState', key: 'navList',  value: res.data })
        }
      })
    },
    //列表接口
    getList({ state, commit }) {
      Api.getList(`?id=${state.currentId}`).then(res => {
        if (res.code === 200) {
          //提交mutations，更改store里的数据
          commit({ type: 'setState', key: 'currentList', value: res.data })
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
