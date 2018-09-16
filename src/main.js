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
  uk: require('../i18n/uk.json'),
  en: require('../i18n/en.json'),
  ge: require('../i18n/ge.json')
};

const i18n = new VueI18n({
  locale: 'uk', // set locale
  messages // set locale messages
});
console.log('VueI18n >>>', i18n.locale);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: {
    App
  },
  template: '<App/>'
});
