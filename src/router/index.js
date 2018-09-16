import Vue from 'vue';
import Router from 'vue-router';
const store = require('../store');

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'main',
        component: require('../components/search.vue').default
      },
      {
        path: '/:username',
        name: 'username',
        component: require('../components/user.vue').default,
        beforeEnter: (to, from, next) => {
          console.log('store >>>', store);
          if(store.store.state.username == ''){
            return next('/');
          }
          next();
        },
        props: true
      },
      {
        path: '/:username/repos',
        name: 'repos',
        component: require('../components/repos.vue').default,
        beforeEnter: (to, from, next) => {
          console.log('store >>>', store);
          if(store.store.state.username == ''){
            return next('/');
          }
          next();
        },
        props: true
      }
    ]
});
