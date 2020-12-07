import { MutationTree } from "vuex";
import { ModalState, ImodalState } from "./models";

export const mutations: MutationTree<ImodalState> = {
  // 初期化
  init(state: ImodalState) {
    Object.assign(state, new ModalState());
  },
  setState(state, payload) {
    state.state = payload;
  },
  setPath(state, payload) {
    state.path = payload;
  }
};
