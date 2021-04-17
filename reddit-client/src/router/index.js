import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Subreddits from '../views/Subreddits.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/subreddits',
    name: 'subreddits',
    component: Subreddits,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
