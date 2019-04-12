import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyD_CuPg8WF-MwXXXMVx20jz5TV10B-DPRU",
  authDomain: "cis371movieproject.firebaseapp.com",
  databaseURL: "https://cis371movieproject.firebaseio.com",
  projectId: "cis371movieproject",
  storageBucket: "cis371movieproject.appspot.com",
  messagingSenderId: "657681348776"
};

firebase.initializeApp(config);
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
