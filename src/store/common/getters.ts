import { GetterTree } from "vuex";
import { IcommonState } from "./models";
import { RootState } from "../RootState";

export const getters: GetterTree<IcommonState, RootState> = {
  lightMode: state => {
    return state.lightMode;
  },
  fullScreen: state => {
    return state.fullScreen;
  }
};
