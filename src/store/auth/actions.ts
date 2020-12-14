import { ActionTree } from "vuex";
import { IauthState } from "./models";
import { RootState } from "../RootState";

import firebase from "firebase/app";
import "firebase/auth";

export const actions: ActionTree<IauthState, RootState> = {
  onAuthChanged({ commit }) {
    firebase.auth().onAuthStateChanged(user => {
      const userData: any = user ? user : {};
      commit('setUserData', userData);
      commit('setSigInState', userData.uid ? true : false);
    });
  },
  signUp({ }, payload) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(
        payload.id,
        payload.password
      )
      .catch(error => {
        alert(error.message);
      });
  },
  signIn({ }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        payload.id,
        payload.password
      )
      .catch((error) => {
        alert(error.message);
      });
  },
  signOut() {
    firebase.auth().signOut().catch(error => {
      alert(error.message);
    })
  },
  error({ commit }, payload) {
    commit("setErrorMessage", payload);
  }
};
