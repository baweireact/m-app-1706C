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
    //key是数据名字，value是值
    setState(state, payload) {
      state[payload.key] = payload.value
    }
  },
  actions: {
    //导航
    getNav({ commit }) {
      axios({
        url: '/api/nav'
      }).then(res => {
        if (res.data.code === 200) {
          //提交mutations，更改store里的数据
          commit({ type: 'setState', key: 'navList',  value: res.data.data })
        }
      })
    },
    //列表接口
    getList({ state, commit }) {
      axios({
        url: `/api/list?id=${state.currentId}`
      }).then(res => {
        if (res.data.code === 200) {
          //提交mutations，更改store里的数据
          commit({ type: 'setState', key: 'currentList', value: res.data.data })
        }
      })
    }
  },
  modules: {
  }
})
