import { firebase, googleAuthProvider } from '../firebase/firebase';

export const startLogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider();
  return () => {
    return firebase.auth().signInWithPopup(provider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
