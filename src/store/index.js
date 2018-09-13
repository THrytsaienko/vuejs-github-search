import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
// "Organization"
// "User"
const typesOfUser = {
  'Organization': 1,
  'User': 2
}

export const store = new Vuex.Store({
  state: {
    user: {
      'avatar_url': '',
      'bio': '',
      'blog': '',
      'company': '',
      'organizations_url': '',
      'created_at': '',
      'email': '',
      'followers': '',
      'following': '',
      'location': '',
      'login': '',
      'name': '',
      'public_gists': '',
      'public_repos': '',
      'repos_url': '',
      'type': '',
      'updated_at': '',
      'url': ''
    }
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
    updateUser(state, application){
      Vue.set(state, 'user', application);
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
