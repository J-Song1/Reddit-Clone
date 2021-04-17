import Vue from 'vue';
import Vuex from 'vuex';
import { firebaseMutations } from 'vuexfire';
import auth from './auth';
import subreddits from './subreddits';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    auth,
    subreddits,
    mutations: firebaseMutations,
  },
});
