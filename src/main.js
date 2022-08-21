import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
import './plugins/vee-validate'
import VueTabulator from 'vue-tabulator';
import firebase from 'firebase/app'
import 'firebase/database'




const firebaseConfig = {
  projectId: 'ez2onarchive-ac049',
  databaseURL: "https://ez2onarchive-ac049-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
firebase.initializeApp(firebaseConfig)

Vue.config.productionTip = false
Vue.use(VueTabulator);
new Vue({
  vuetify,
  store,
  router,
  render: h => h(App),
  
}).$mount('#app')
