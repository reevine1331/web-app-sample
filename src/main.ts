import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app';
import "firebase/auth";


const firebaseConfig = {
 apiKey: "AIzaSyC-iTqHIyGAKr8zZP7m7_hFxffoKdYtxZU",
 authDomain: "web-app-sample-5ce95.firebaseapp.com",
 databaseURL: "https://web-app-sample-5ce95.firebaseio.com",
 projectId: "web-app-sample-5ce95",
 storageBucket: "web-app-sample-5ce95.appspot.com",
 messagingSenderId: "547271604400",
 appId: "1:547271604400:web:16e1398c3ed4d187b76375",
 measurementId: "G-F9YRJJ8M1X"
};
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

createApp(App).use(store).use(router).mount('#app')
