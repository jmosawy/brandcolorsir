/* eslint-disable no-unused-vars */
/* eslint-disable no-new */

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import HomePage from './pages/Home.vue';

import Style from './style.scss';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({
  el: '#app',
  render: h => h(App),
  router,
}).$mount('#app');
