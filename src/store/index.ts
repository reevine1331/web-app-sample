import Vuex from "vuex";
import { auth } from "./auth/index";
import { common } from "./common/index";

// store永続化
import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  modules: {
    auth,
    common
  },
  plugins: [
    createPersistedState()
  ]
});
