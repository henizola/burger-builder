import firebase from  'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const config={
  apiKey: "AIzaSyAzyleJDLVYHi8wpX_iebsYibJqW4NgMIA",
  authDomain: "build-burger-60085.firebaseapp.com",
  databaseURL: "https://build-burger-60085.firebaseio.com",
  projectId: "build-burger-60085",
  storageBucket: "build-burger-60085.appspot.com",
  messagingSenderId: "794361113018",
  appId: "1:794361113018:web:a1f13d729385e293399583",
  measurementId: "G-ZMQ9HPQ73F"
  };

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if (!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    const snap= await userRef.get();
    console.log(snap)

    if(!snap.exists){
      const {displayName,email}=userAuth;
      const createDate=new Date();

      try{
          await userRef.set({
            displayName,
            email,
            createDate,
            ...additionalData

          })
      }catch(error)
      {
          console.log(error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  
  export default firebase;