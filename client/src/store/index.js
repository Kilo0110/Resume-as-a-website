import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    advancedView: true,
  },
  mutations: {
    setView(state, payload) {
      state.advancedView = payload;
      console.log("View state changed:", state.advancedView);
    }
  },
  actions: {
    changeView({commit, state}) {
      console.log("changeView action");
      let newViewChoice = !state.advancedView
      commit("setView", newViewChoice)
    }
  },
  plugins: [createPersistedState()],
});
