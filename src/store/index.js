import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebarClose: null,
  },
  getters: {},
  mutations: {
    toggleSidebar(state) {
      state.sidebarClose = !state.sidebarClose;
    },
  },
  actions: {},
  modules: {},
});
