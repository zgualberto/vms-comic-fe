import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    comics: [],
    showOverlay: false,
  },
  mutations: {
    setComics(state, payload) {
      state.comics = payload;
      state.showOverlay = false;
    },
  },
  actions: {
    getComics({ commit, state }, page) {
      setTimeout(async () => {
        state.showOverlay = true;
        const data = await ApiService.getApiComics(page);
        commit("setComics", data);
      }, 200);
    },
  },
  modules: {},
});
