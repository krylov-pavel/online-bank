import {createStore} from 'vuex'
import auth from './modules/auth'
import request from './modules/request.module'

export default createStore({
  state() {
    return {
      message: null,
      sidebar: false
    }
  },
  mutations: {
    setMessage(state, message) {
      state.message = message
    },
    clearMessage(state) {
      console.log('clearMessage')
      state.message = null
    },
    openSidebar(state) {
      state.sidebar = true
    },
    closeSidebar(state) {
      state.sidebar = false
    }
  },
  actions: {
    setMessage ({commit}, message) {
      commit('setMessage', message)
      setTimeout(() => {
        commit('clearMessage')
      }, 5000)
    }
  },
  modules: {
    auth,
    request
  }
})