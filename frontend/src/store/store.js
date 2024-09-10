import { createStore } from "vuex";

//crea lo store
const store = createStore({
  state() {
    //instanzia lo stato dello store come un metodo che ritorna l'oggetto State
    return {
      count: 0,
    };
  },
  mutations: {
    //metodi sincroni per modificare lo stato, non chiamarli direttamente
    increment(state) {
      state.count++;
    },
  },
  actions: {
    //metodi asincroni per fare qualsiasi cosa, incluso chiamare le mutazioni
    increment({ commit }) {
      commit("increment");
    },
  },
  getters: {
    //metodi per accedere direttamente allo stato per ottenere dei valori
    count: (state) => state.count,
  },
});

export default store;
