import { ActionTree } from "vuex";
import { ImodalState } from "./models";
import { RootState } from "../RootState";

export const actions: ActionTree<ImodalState, RootState> = {
  setModal({ commit }, payload) {
    commit("setState", true);
    commit("setPath", payload);
  },
  closeModal({ commit }) {
    commit("setState", false);
    commit("setPath", "");
  },
  error({ commit }, payload) {
    commit("setErrorMessage", payload);
  }
};
