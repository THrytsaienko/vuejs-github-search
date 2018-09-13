// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import { router } from './router';
import VueI18n from 'vue-i18n';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import { store } from './store';

Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(VueI18n);

const messages = {
  uk: {
    message: {
      placeholderInput: 'Введіть ім\'я користувача або організації'
    }
  },
  en: {
    message: {
      placeholderInput: 'Enter Username or Organization'
    }
  },
  ge: {
    message: {
      placeholderInput: 'Geben Sie einen Benutzernamen oder eine Organisation'
    }
  }
};

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'ja', // set locale
  messages // set locale messages
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: {
    App
  },
  template: '<App/>'
// eslint-disable-next-line semi
});

// Vue.axios.get(api).then((response) => {
// 	console.log(response.data)
// })

// this.axios.get(api).then((response) => {
// 	console.log(response.data)
// })

// this.$http.get(api).then((response) => {
// 	console.log(response.data)
// })
