import firebase from '@/firebase';
import db from '@/db';

/* eslint-disable */

const state = {
  user: {},
  isLoggedIn: false,
};

const mutations = {
  setUser(state, user) {
    state.user = user;
    state.isLoggedIn = true;
  },
};

const actions = {
  async login({ context, commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await firebase.auth().signInWithPopup(provider);

    const userObject = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp()
    };

    db.collection('users').doc(userObject.id).set(userObject);
    commit('setUser', userObject);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
