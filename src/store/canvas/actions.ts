import { ActionTree } from "vuex";
import { IcanvasState } from "./models";
import { RootState } from "../RootState";

import firebase from "firebase";

export const actions: ActionTree<IcanvasState, RootState> = {
  getCanvas() {
    firebase.firestore().collection('canvas').get().then((doc: any) => {
      doc.forEach((element: any) => {
        console.log(element.data());
      });
    }).catch((error: any) => {
      console.log("Error getting document:", error);
    });
  },
  error({ commit }, payload) {
    commit("setErrorMessage", payload);
  }
};
