// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, updateProfile} from 'firebase/auth';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADb09S82dtOSzNoBxTlZsFkhnJeIHymM0",
  authDomain: "hack4good-14631.firebaseapp.com",
  databaseURL: "https://hack4good-14631-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hack4good-14631",
  storageBucket: "hack4good-14631.appspot.com",
  messagingSenderId: "141641939989",
  appId: "1:141641939989:web:f4d8d6510c363fc09a221c",
  measurementId: "G-SPQLY65J2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();

//Firestore
export const database = getFirestore(app);

// Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, {photoURL});
  
  setLoading(false);
  alert("Uploaded file!");
  return photoURL;
}