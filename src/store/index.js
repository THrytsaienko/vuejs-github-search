import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
Vue.use(Vuex);
// "Organization"
// "User"
const typesOfUser = {
  'Organization': 1,
  'User': 2
}

export const store = new Vuex.Store({
  state: {
    user: {},
    repos: []
  },
  getters: {
    getTypeOfUser(state){
      return typesOfUser[state.user.type];
    }
    // firstLoan(state){
    //   return state.app['app_status_id'] == state.appStatuses.CREATED && state.app['last_step'] == 5;
    //   // return true;
    // }
  },
  mutations: {
    updateUser(state, userData){
      Vue.set(state, 'user', userData);
    },
    updateRepos(state, reposData){
      Vue.set(state, 'repos', reposData);
    }
    // updateApp(state, application){
    //   Vue.set(state, 'app', application);
    // },
    // updateUser(state, user){
    //   state.user = user;
    // }
  },
  actions: {
    // updateApp({commit}, force){
    //   return Vue.http.get(`${CABINET_URL}/app_info`, {
    //     params: {
    //       force
    //     }
    //   }).then((resp) => {
    //     commit('updateApp', resp.body);
    //     commit('setAppLoaded');
    //   });
    // }
    // updateUser({commit}){
    //   return Vue.http.get(`${CABINET_URL}/user_info`).then((resp) => {
    //     commit('updateUser', resp.body);
    //     commit('setUserLoaded');
    //   });
    // }
  }
});

// module.exports = store;
