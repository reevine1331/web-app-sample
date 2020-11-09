import Vuex from "vuex";
import { common } from "./common/index";

// store永続化
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  modules: {
    common,
  },
  plugins: [
    createPersistedState()
  ]
});
