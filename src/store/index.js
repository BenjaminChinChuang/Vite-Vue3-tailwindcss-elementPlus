import { createStore } from 'vuex';

const store = createStore({
  state: {
    isLoading: false,
  },
  mutations: {
    SET_ISLOADING: ({ state }, payload) => (state.isLoading = payload),
  },
  actions: {
    changeIsLoading: ({ commit }, payload) => commit('SET_ISLOADING', payload),
  },
});

export default store;
