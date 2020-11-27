import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDJGFzLeGPfYxP4NvOZGJTmb-gQrTEy_Ko",
  authDomain: "clubapp-3d8fb.firebaseapp.com",
  databaseURL: "https://clubapp-3d8fb.firebaseio.com",
  projectId: "clubapp-3d8fb",
  storageBucket: "clubapp-3d8fb.appspot.com",
  messagingSenderId: "694422913685",
  appId: "1:694422913685:web:a09bee1fbc96fd780f119c"
};

firebase.initializeApp(config);

export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      if(user) {
        resolve(user);
        
      } else {
        resolve(null);
      }
      unsubscribe();
    })
  })
}

export async function loginUser(email: string, password: string) {

  try {
    const res= await firebase.auth().signInWithEmailAndPassword(email, password)
    return res
  } catch(error) {

    //TODO proper error handling
    alert(error);
    return false
  }  
}
export async function registerUser(email: string, password: string) {

  try {
    const res= await firebase.auth().createUserWithEmailAndPassword(email, password);

    return true
  } catch(error) {

    //TODO proper error handling
    alert(error);
    return false
  }  
} 

export function logoutUser() { 
    return firebase.auth().signOut();
}

