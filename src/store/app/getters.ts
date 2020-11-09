import { GetterTree } from "vuex";
import { App } from "./models";
import { RootState } from "../RootState";

/* tslint:disable:no-shadowed-variable */
export const getters: GetterTree<App, RootState> = {
  state(state: App): App {
    return state;
  }
};
