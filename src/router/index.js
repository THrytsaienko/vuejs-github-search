import Vue from 'vue';
import Router from 'vue-router';
// import mainPage from '@/components/mainPage';

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
        beforeRouteEnter: (to, from, next) => {
          if(!to.params.username){
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
        props: true
      }
    ]
});

// export default new Router({
//   mode: 'history',
//   routes: [{
//     path: '/',
//     name: 'mainPage',
//     component: mainPage
//   }]
// });
