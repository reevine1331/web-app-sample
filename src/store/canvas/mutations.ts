import { MutationTree } from "vuex";
import { CanvasState, IcanvasState } from "./models";

export const mutations: MutationTree<IcanvasState> = {
  // 初期化
  init(state: IcanvasState) {
    Object.assign(state, new CanvasState());
  },
  changeCanvasValue(state, payload: { key: number, value: any }) {
    state.canvas[payload.key - 1].value = payload.value;
  },
  initCanvas(state) {
    state.canvas = new CanvasState().canvas;
  },
  setCanvasList(state, payload) {
    state.canvasList = payload;
  }
};
