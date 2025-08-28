// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1PU6eo6H9_Yr0Qezw6fx5EnOrsPDcBcA",
  authDomain: "skill-master-b53da.firebaseapp.com",
  projectId: "skill-master-b53da",
  storageBucket: "skill-master-b53da.firebasestorage.app",
  messagingSenderId: "742372452788",
  appId: "1:742372452788:web:f2ecd063a7c4522d61aae1",
  measurementId: "G-9Z4LWKCN9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);