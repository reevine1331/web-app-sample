import { Module } from "vuex";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";
import { App } from "./models/App";
import { RootState } from "../RootState";

const namespaced = true;

export const state: App = new App();

export const app: Module<App, RootState> = {
  namespaced,
  state,
  mutations,
  actions,
  getters
};
