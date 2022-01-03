import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    increment(state) {
      state.counter += 1
    },
    decrement(state) {
      state.counter -= 1
    }
  },
  actions: {
    asyncIncrement({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 2000);
    },
    asyncDecrement({ commit }) {
      setTimeout(() => {
        commit('decrement')
      }, 2000);
    }
  },
  modules: {
  }
})
