import firebase from '@/firebase';
import router from '@/router';
import store from '@/store';
import db from '@/db';

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const userObject = {
      id: user.uid,
      name: user.displayName,
      image: user.photoURL,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
    };

    db.collection('users').doc(userObject.id).set(userObject);
    store.commit('auth/setUser', userObject);
    router.push('/subreddits');
  } else {
    store.commit('auth/setUser', null);
  }
});
